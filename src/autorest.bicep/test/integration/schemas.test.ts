// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import os from 'os';
import path from 'path';
import { rm, mkdir, writeFile } from 'fs/promises';
import { defaultLogger, extensionDir, generateSchema, isBaselineRecordEnabled } from './utils';
import { describe, it, expect, jest } from '@jest/globals';
import { readFile } from 'fs/promises';
import { diffString } from 'json-diff';

describe('schema comparisons', () => {
  // bump timeout - autorest can take a while to run
  jest.setTimeout(60000);

  const specsBasePath = path.resolve(extensionDir, `../../azure-rest-api-specs/specification`);
  const schemasBasePath = path.resolve(extensionDir, `../../azure-resource-manager-schemas/schemas`);

  const tests = [
    { readme: 'keyvault/resource-manager/README.md', schema: '2023-02-01/Microsoft.KeyVault.json' },
    { readme: 'compute/resource-manager/README.md', schema: '2022-11-01/Microsoft.Compute.json' },
    { readme: 'storage/resource-manager/README.md', schema: '2022-09-01/Microsoft.Storage.json' },
  ];

  const diffDir = `${__dirname}/diffs`;
  for (const { readme, schema } of tests) {
    it(readme, async () => {
      const outputDir = `${os.tmpdir()}/_bcp_${new Date().getTime()}`;
      await rm(outputDir, { recursive: true, force: true, });
      await mkdir(outputDir, { recursive: true });

      const readmePath = path.join(specsBasePath, readme);
      const schemaPath = path.join(schemasBasePath, schema);
      await generateSchema(defaultLogger, readmePath, outputDir, true, false, false);

      const apiVersion = schema.split('/')[0].toLowerCase();
      const namespace = schema.split('/')[1].toLowerCase().replace(/\.json$/, '');
  
      const generated = await readFile(`${outputDir}/${namespace}/${apiVersion}/schema.json`, { encoding: 'utf-8' });
      const reference = await readFile(schemaPath, { encoding: 'utf-8' });

      const diff = diffString(JSON.parse(generated), JSON.parse(reference), { sort: true, color: false });
      const diffFile = `${diffDir}/${namespace}_${apiVersion}_diff.txt`;

      const savedValue = await readFile(diffFile, { encoding: 'utf-8' });
      if (isBaselineRecordEnabled()) {
        await mkdir(diffDir, { recursive: true });
        await writeFile(`${diffDir}/${namespace}_${apiVersion}_diff.txt`, diff);
      }

      expect(diff).toBe(savedValue);
    });
  }
});