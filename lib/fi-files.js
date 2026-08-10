/**
 * FieldInsight Public API — file upload + job attachment helpers.
 *
 * Proven live (Jul 2026). Undocumented on Apidog.
 * Flow: POST /files/ → PUT S3 upload_url → POST /jobs/{id}/attachments/ (form: file=file_id)
 *
 * Auth: Personal API Key as Bearer token.
 * Env: FIELDINSIGHT_API_KEY or FI_API_KEY
 */

const BASE = 'https://app.fieldinsight.com/public-api';

function apiKey() {
  const key = process.env.FIELDINSIGHT_API_KEY || process.env.FI_API_KEY;
  if (!key) throw new Error('Set FIELDINSIGHT_API_KEY (or FI_API_KEY) to a Personal API Key');
  return key;
}

async function fiFetch(path, { method = 'GET', headers = {}, body } = {}) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey()}`,
      Accept: 'application/json',
      ...headers,
    },
    body,
  });
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!res.ok) {
    const err = new Error(`FI ${method} ${path} → ${res.status}: ${typeof data === 'string' ? data.slice(0, 300) : JSON.stringify(data)}`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

/**
 * Step 1 — register a file. Returns { file_id, upload_url }.
 * Must use form-urlencoded (JSON body is rejected with 422).
 */
export async function createFileUpload({ name, size }) {
  if (!name) throw new Error('name is required');
  if (size == null || Number(size) < 0) throw new Error('size is required');
  const body = new URLSearchParams({ name: String(name), size: String(size) });
  return fiFetch('/files/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
}

/**
 * Step 2 — PUT raw bytes to the presigned S3 URL.
 */
export async function putFileBytes(uploadUrl, bytes, contentType = 'application/octet-stream') {
  const res = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': contentType },
    body: bytes,
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`S3 PUT → ${res.status}: ${t.slice(0, 300)}`);
  }
  return true;
}

/**
 * Step 3 — attach an uploaded file_id to a job.
 * Must use form-urlencoded field name `file` (JSON body → "File not found").
 */
export async function attachFileToJob(jobId, fileId) {
  if (!jobId) throw new Error('jobId is required');
  if (!fileId) throw new Error('fileId is required');
  const body = new URLSearchParams({ file: String(fileId) });
  return fiFetch(`/jobs/${jobId}/attachments/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
}

/**
 * End-to-end: upload bytes and attach to a job.
 * @returns {{ file_id: number|string, jobId: string|number }}
 */
export async function uploadJobPhoto(jobId, { name, bytes, contentType }) {
  const buf = Buffer.isBuffer(bytes) ? bytes : Buffer.from(bytes);
  const { file_id, upload_url } = await createFileUpload({ name, size: buf.length });
  await putFileBytes(upload_url, buf, contentType || 'application/octet-stream');
  await attachFileToJob(jobId, file_id);
  return { file_id, jobId };
}

/**
 * Create a job (minimal). Site + start/end required.
 */
export async function createJob(payload) {
  return fiFetch('/jobs/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

/**
 * Create an asset. `site` required. Photos not supported yet via API.
 */
export async function createAsset(payload) {
  return fiFetch('/assets/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export const CAPABILITY = {
  jobCreate: true,
  jobPhoto: true,
  assetCreate: true,
  assetPhoto: false,
  defectCreate: false,
  defectPhoto: false,
  notes: {
    assetPhoto: 'Custom Photo image_list (field 332148) accepts PATCH but value stays null — need Vadim.',
    defect: 'No /defects/ endpoint on Public API or MCP.',
  },
};
