#!/usr/bin/env node
/**
 * Upload a photo (or any file) to a FieldInsight job.
 *
 * Usage:
 *   FIELDINSIGHT_API_KEY=fi_sk_… node scripts/fi-upload-job-photo.mjs <jobId> <path-to-file>
 *
 * Example:
 *   FIELDINSIGHT_API_KEY=… node scripts/fi-upload-job-photo.mjs 21547753 ./site-leak.png
 *
 * Requires Node 18+ (native fetch).
 */

import { readFile } from 'node:fs/promises';
import { basename } from 'node:path';
import { uploadJobPhoto, CAPABILITY } from '../lib/fi-files.js';

async function main() {
  const [jobId, filePath] = process.argv.slice(2);
  if (!jobId || !filePath) {
    console.error('Usage: FIELDINSIGHT_API_KEY=… node scripts/fi-upload-job-photo.mjs <jobId> <filePath>');
    console.error('Capability:', JSON.stringify(CAPABILITY, null, 2));
    process.exit(1);
  }

  const bytes = await readFile(filePath);
  const name = basename(filePath);
  const lower = name.toLowerCase();
  const contentType =
    lower.endsWith('.png') ? 'image/png' :
    lower.endsWith('.jpg') || lower.endsWith('.jpeg') ? 'image/jpeg' :
    lower.endsWith('.webp') ? 'image/webp' :
    lower.endsWith('.gif') ? 'image/gif' :
    'application/octet-stream';

  console.log(`Uploading ${name} (${bytes.length} bytes) → job ${jobId}…`);
  const result = await uploadJobPhoto(jobId, { name, bytes, contentType });
  console.log('OK', result);
  console.log(`Open: https://app.fieldinsight.com/scheduler/job/${jobId}/`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
