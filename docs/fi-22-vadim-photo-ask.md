# Ask Vadim — Files / Photos / Defects on Public API + MCP

**From:** Paul (via Open Claw / FI-022 probes)  
**Context:** Live Personal API Key against `https://app.fieldinsight.com/public-api/` and MCP at `https://app.fieldinsight.com/mcp/` (Jul 2026). Apidog at https://rezzxstrv0.apidog.io/ does not document these paths.

## What we already proved

Job photo upload works end-to-end:

1. `POST /public-api/files/` (form: `name`, `size`) → `{ file_id, upload_url }`
2. `PUT` bytes to `upload_url` (S3)
3. `POST /public-api/jobs/{id}/attachments/` (form: `file={file_id}`) → 200

We have a local helper (`lib/fi-files.js`) so Cursor/agents can do this via REST today. Prefer MCP tools for the same flow.

## Please add / document

1. **MCP tools** for the job photo flow  
   - e.g. `upload_file` + `attach_file_to_job` (or one `upload_job_photo`)  
   - Document on Apidog as well

2. **Asset photos**  
   - Assets expose `Custom Photo` (`image_list`).  
   - `PATCH /assets/{id}/` with file IDs returns 200 but `value` stays `null`.  
   - What is the supported attach recipe after `/files/`?

3. **Defects**  
   - `GET/POST /defects/` → 404. No MCP tools.  
   - Need create / list / attach photo for demo seeding and ops agents.

4. **Apidog sync**  
   - Live API already supports more than the published TOC (job create, assets list/create, files, timesheets, quotes, POs…). Please publish the real surface.

## Why it matters

Demo account seeding and an ops/agent loop need **job + asset + defect photos**. Jobs are unblocked; assets and defects are the gap.

Full write-up: https://ptyrrell.github.io/product-roadmap/fi-22-photo-upload-capability.html  
Obsidian: `02 Projects/Open Claw/Specs/fieldinsight-api-photo-upload.md`
