# AGENTS — product-roadmap

> Cursor agents: read this before editing.

## What this is

Public-facing roadmap + Alfred Monitor pages, hosted on GitHub Pages at https://ptyrrell.github.io/product-roadmap/.

Static only — no server.

## Build standard

This repo follows the **fieldinsight-build-standard** skill. Adapted for static-site:

1. Bump `<meta name="version">` AND visible badge in `docs/index.html` (or `docs/alfred-monitor.html`).
2. HEREDOC commit message.
3. `git push origin main` — GitHub Pages picks it up in ~30–60s.
4. Verify by opening the URL in incognito (favicons + meta tags cache aggressively).

Use the **deploy-fieldinsight-app** skill for the runbook (skip Heroku steps).

## Files

- `docs/index.html` — main roadmap
- `docs/alfred-monitor.html` — Alfred status page
- `docs/favicon.svg` — roadmap favicon (blue road + gold star)
- `docs/alfred-favicon.svg` — Alfred Monitor favicon (indigo bowtie + heartbeat)
- `docs/alfred-status.json` — Alfred's heartbeat data (Alfred writes to this)
- `content/` — markdown sources for roadmap cards

## Spec

`Paul's Brain/02 Projects/Open Claw/Specs/apps/product-roadmap.md`
