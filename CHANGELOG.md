# Changelog

All notable changes to the roadmap are documented here.
Format: `v{major}.{minor}.{patch} — YYYY-MM-DD`

---

## v0.10.1 — 2026-04-24

### Changed
- **DS-001 AI Styling Guide card** updated to v0.2.0 — reflects the new **Workflow Example** page on `fi-ai-styling-guide`. Added a direct `Workflow` link to both the roadmap card (index.html) and the `apps.html` tile. The workflow page walks through a full Bill ↔ PO restyle with drop-parse flow and three AI decision modals (clean bill / bill has items / PO has items), plus a blended-styling design-notes panel.

---

## v0.10.0 — 2026-04-24

### Added
- **DS-001 — AI Styling Guide** card on the FieldInsight roadmap. The canonical visual pattern for every AI feature across FieldInsight &amp; Open Claw — one sparkle icon, one brand purple (`#39006B`), three placements (inline / circular badge / CTA pill), approved CTA labels (Ask AI, Re-read, Re-generate, Scan bill, Post to Xero →), and the "AI parsed…" provenance rule.
- **fi-ai-styling-guide** — new Heroku app deployed at `https://fi-ai-styling-guide-3413f27b698e.herokuapp.com`. Hosts the rendered mockup, the pattern doc (markdown rendered via marked.js), and the raw `pattern.md` source-of-truth. Referenced from the always-applied Cursor rule so every agent is auto-pointed at the pattern when building AI UI.
- **"✨ AI Styling" nav link** added to the roadmap top-bar, opens the guide in a new tab alongside "🚀 All Apps".
- **AI Styling Guide card** added to `apps.html` under Dashboards &amp; Ops with Mockup / Pattern / GitHub quick-links.

---

## v0.9.8 — 2026-04-22

### Added
- **FI-023 — FieldInsight AI Agent Stack** card added to the FieldInsight roadmap Next column. Documents the full 25-agent "Holy Hierarchy" org chart, tech stack decisions (Claude / Grok / Gemma 4 / Neo4j / LangGraph), and links to live prototypes.
- **fi-agent-stack** — new Heroku app deployed at `https://fi-agent-stack-2f03aca0bbc3.herokuapp.com/`. A beautiful standalone reference page for the entire AI agent layer: hierarchy diagram, 25 agent cards grouped by department, tech stack breakdown, architecture overview, and live prototype links.

---

## v0.9.7 — 2026-04-20

### Added
- **FI-022 spec — Table of Contents** at the top of `fi-22-fieldinsight-api-mcp-spec.html`. Each Area of Work now gets a sub-ticket number (FI-022.1 … FI-022.8) with a one-line description and phase tag, so the spec doubles as a work-breakdown structure:
  - `FI-022.1` OAuth Foundation — P1 CORE
  - `FI-022.2` Typed API Client — P2 CORE
  - `FI-022.3` MCP Read Surface (14 tools) — P3 CORE
  - `FI-022.4` MCP Write Tools — P4
  - `FI-022.5` Alfred WhatsApp Integration — P4
  - `FI-022.6` Hardening & Observability — P4
  - `FI-022.7` OpenAPI Spec Reverse-Engineer — P4 · OPTIONAL
  - `FI-022.8` Webhook Ingestion — P4 · OPTIONAL
- **MCP Phase 3 read surface expanded from 6 → 14 tools** covering the full FieldInsight operational surface, grouped into four categories:
  - **Jobs & Customers:** `list_jobs`, `get_job`, `list_customers`, `get_customer`
  - **Operations:** `list_technicians`, `list_timesheets`, `list_assets`, `list_defects`
  - **Financial:** `list_quotes`, `list_invoices`, `list_supplier_invoices`, `list_purchase_orders`
  - **Catalogue:** `list_products`, `list_service_items`

### Changed
- Spec effort estimate: Phase 3 bumped from ~1–1.5 days (6 tools) to ~2–3 days (14 tools); total CORE MVP now ~3.5–5 days (was ~2.5–3 days).
- Spec version bumped v0.1 → v0.2; roadmap site bumped v0.9.6 → v0.9.7 (nav + footer).
- FI-022 card on index.html: Phase 3 bullet now lists the full 14-tool surface; Definition-of-Done examples widened to quotes/invoices/defects/POs to reflect the broader coverage.

---

## v0.9.6 — 2026-04-20

### Added
- **`docs/fi-22-fieldinsight-api-mcp-spec.html`** — full staged spec page for FI-022 (FieldInsight Public API + OAuth + MCP Server). The FI-022 ticket card in `index.html` already linked here — this commit creates the target page so the link resolves.
  - Four-phase delivery plan: Phases 1–3 are **CORE** (OAuth foundation, typed API client, MCP read-only tools), Phase 4 is **Nice to Have** (write tools, Alfred integration, hardening)
  - Individual items tagged **OPTIONAL** where appropriate
  - Based on FieldInsight's public OAuth 2.0 Authorization Code Grant flow (apidog docs) — 10-hour access tokens, refresh tokens supported, base URL `https://app.fieldinsight.com/public-api/`
  - ~2.5-day MVP estimate (Phases 1–3 CORE) to first live agent query from Cursor / Claude Desktop / Alfred
  - Risk register covers missing OpenAPI spec, no sandbox, undocumented rate limits, API app approval gating

### Changed
- Nav version v0.9.5 → v0.9.6 · footer aligned to v0.9.6

---

## v0.9.7 — 2026-04-20

### Changed
- **All site versions synced to v0.9.7** — nav badge, footer, and every "Last updated" hero stamp across `index.html` and `apps.html` now display the same version string. Previous inconsistencies: footer drifted to v0.9.9 at one point, Personal hero was stuck at v0.9.4, FieldInsight/Strategic/Inspiration heroes stamped v1.0.4. All aligned so any visible version number confirms you're looking at the latest deploy.

---

## v0.9.5 — 2026-04-20

### Added
- **All Apps page** (`apps.html`) — single landing page linking every live FieldInsight prototype, dashboard, and personal tool. Grouped: FieldInsight (Two-Way Comms, Supplier PO, Gmail Inbox, AI Job Prompter, Smart Scheduler, Voice Logger, Financial Forecast), Dashboards (Meridian Ops, SDR+AE Scorecard, Business Metrics, Cashflow Growth, Alfred Monitor, Customer Ideas), Personal (Budget, Meridian sign-in, Alfred). Filter chips: All / FieldInsight / Dashboards / Personal / Live Only.
- **🚀 All Apps** tab in the main nav, linking to `apps.html`
- **Favicon** — redesigned `favicon.svg`: dashed roadmap path with three milestone dots (green start, orange waypoint, red destination) and a flag marker. Linked in `<head>` on both `index.html` and `apps.html`.
- `Cache-Control: no-cache` meta tag so users always see the latest version without hard refresh

### Changed
- Nav version badge bumped to v0.9.5 (from v0.9.4)
- Footer version aligned to v0.9.5 (from v0.9.9 — footer was out of sync with nav; now aligned downwards for a single truth)

---

## v0.8.9 — 2026-04-20

### Added
- **FI-033: FieldInsight Public API + OAuth + MCP Server** — new ticket in the Next column plus a full staged spec page at `fi-33-fieldinsight-api-mcp-spec.html`
  - Four-phase delivery plan: Phases 1–3 are **CORE** (OAuth foundation, typed API client, MCP read-only tools), Phase 4 is **Nice to Have** (write tools, Alfred integration, hardening)
  - Individual items tagged **OPTIONAL** where appropriate
  - Based on FieldInsight's public OAuth 2.0 Authorization Code Grant flow (apidog docs) — 10-hour access tokens, refresh tokens supported, base URL `https://app.fieldinsight.com/public-api/`
  - ~2.5-day MVP estimate to first live agent query from Cursor / Claude Desktop / Alfred
  - Risk register covers missing OpenAPI spec, no sandbox, undocumented rate limits

---

## v0.8.8 — 2026-04-12

### Added
- Hero market stats bar: $6.21B FSM market · 93% AI adoption · 34% productivity gain · TTAN -57.9%
- FI-032: AI Labour Replacement Index — per-agent headcount replacement table, 20-tech TCO comparison, ROI Guarantee pilot framework, SDR calculator concept
- FI-023: Major pricing rewrite — full 2026 market pricing comparison (TTAN / Fieldproxy / Jobber / FieldCommerce / Service Fusion / FieldInsight), FI-Token cost-per-action breakdown, TCO head-to-head, 2026 hybrid pricing research citations

### Changed
- FI-013: Expanded from stub to full AI Dispatch spec — 20+ dispatch variables, route optimisation, ANZ-specific routing, FI-Token cost, headcount replacement case
- FI-023: Title updated to reflect pricing innovation leadership; expanded with competitor data, token economics, TCO numbers

---

## v0.8.7 — 2026-04-12

### Added
- `meridian-auth.js`: Shared authentication guard for all pages — session check, redirect to login, Meridian nav bar injection
- `meridian-login.html`: The Meridian branded login page — dark theme, Google OAuth, animated grid background, platform chip list
- All 10 pages now protected: index, ai-conquest, sdr-dashboard, business-dashboard, cashflow-growth, fi-advantage, voice-spec, fi-02-pdf-parsing-spec, fi-03-multi-bill-import-spec, customer-ideas
- Sign-in once → access all pages; session shared via `localStorage`; auto-redirect back after login
- Meridian nav bar injected into every page (Roadmap · AI Conquest · SDR Board · Business · Cashflow)

### Changed
- `ai-conquest.html`: Removed per-page Google GSI login gate; now uses shared Meridian session; topbar sign-out wired to `meridianSignOut()`; topbar and sidebar offsets updated for Meridian nav bar

---

## v0.8.6 — 2026-04-12

### Added
- `ai-conquest.html`: Internal AI Conquest strategy hub — Google OAuth gate (@fieldinsight.com only)
  - 7-priority migration conquest table with effort/impact ratings
  - Platform extraction matrix: simPRO (API), ServiceM8 (API), Tradify (CSV), AroFlo, Fergus, Generic
  - AI Expansion vs Fieldproxy 10-row comparison table with FI-Token pricing
  - Auto Job Request Processing: Email / SMS / Web Form / VOIP flows
  - Gemini Local: offline AI client — online + offline mode comparison
  - CRM Phone Reception + NEC PBX SIP integration
  - PPM Scheduling: visual monthly calendar mock with 4 techs
  - Allocation Engine: Auto Allocate AI + visual drag-and-drop PPM planner
  - Sidebar navigation + sticky topbar + scrollspy active states
  - Session persistence via localStorage with JWT expiry check
- FI-026: AI Conquest Hub card (live, auth-gated)
- FI-027: Gemini Local offline AI client for field techs
- FI-028: CRM Phone Reception + NEC PBX integration
- FI-029: PPM Scheduling + visual monthly calendar
- FI-030: Allocation Engine (Auto Allocate + Visual PPM Planner)
- FI-031: Migration Conquest (simPRO/ServiceM8/Tradify/AroFlo/Fergus)
- Nav: "⚔️ AI Conquest" button added to roadmap header

---

## v0.8.5 — 2026-04-12

### Added
- `fi-advantage.html` — FieldInsight "Why FieldInsight" competitive marketing page (live at /fi-advantage.html)
  - Hero with AU $500 flat pricing headline, proof stats, CTAs
  - Pain points: Per-User Fees, Six-Month Onboarding, Rigid Workflows, Growth Penalties
  - 8 AI Agents with status badges (Scheduler, Booking, Voice, Dispatch, Document, Inbox, Knowledge, Insights)
  - 16-item solutions grid covering full FSM lifecycle
  - ANZ competitive advantage section: data moat, stitched intelligence, compounding accuracy
  - Head-to-head comparison table: FieldInsight vs TTAN vs simPRO vs Fieldproxy
  - 14 industries inc. Electrical (primary)
  - Pricing: AU $299 Starter / AU $500 Growth (unlimited users) / Enterprise custom
  - FI-Tokens model explained with per-action token costs
- `fieldinsight_thesis.pdf` + `fieldinsight_thesis.md` added to docs (links from FI-020)
- FI-025: FieldInsight AI Positioning Page card
- FI-023: Updated with full FI-Tokens pricing model (AU $500 flat + consumption-based AI tokens)
- FI-020: Fieldproxy confirmed full profile (solutions, AI agents, industries, "Ditch the Dinosaurs" tagline)
- Nav: "Why FieldInsight" button added to roadmap nav

---

## v0.8.4 — 2026-04-12

### Added
- FI-020: Replaced with full 10-page Competitive Threat & Opportunity Thesis (Perplexity Computer, April 2026)
  - TTAN deep dive: financial metrics, Atlas AI moat, structural vulnerabilities, stock analysis (-57.9% from ATH)
  - simPRO deep dive: ANZ incumbent, commercial-project bias, reactive maintenance weakness, AI gap
  - Fieldproxy deep dive: YC W2022, $649/mo flat, $1M USD funded, ANZ compliance gaps, threat level assessment
  - AI disruption wave: organises labour vs replaces labour, per-tech pricing liability, implementation tax
  - Capital markets signal: HUBS -64%, CRM -33%, PLTR +36% — workflow SaaS vs data+AI re-rating
  - Palantir analogy: system of record + proprietary data = compounding AI moat
  - Full threat matrix (7 threats with probability/impact/timeframe)
  - Full opportunity matrix (8 opportunities with urgency/potential)
- FI-021: simPRO Refugee Campaign — reactive/maintenance operator beachhead, migration tooling, comparison SEO
- FI-022: ANZ Compliance Layer — AS/NZS 3000, CCEW, WHS, licensing verification — no competitor owns this
- FI-023: Pricing Innovation — flat-fee tiers ($499/20 techs, $899/40 techs), outcome-linked pilots
- FI-024: Data Moat Infrastructure — ANZ electrical benchmarking, anonymised industry reports, AI training data

---

## v0.8.3 — 2026-04-12

### Updated
- FI-020: Expanded with full competitive analysis
  - Added "complexity liability" problem — TTAN depth becoming a liability, 30% feature usage, 1–2 week vs 2–3 month onboarding
  - Added SMB budget squeeze — same segment as HubSpot, ROI case for $250–350k/year weakens with AI tools
  - Added TTAN counter-moat section — Atlas AI, Pro Products (Contact Center Pro, Dispatch Pro, Field Pro), industry data argument
  - Added verdict: structural and accelerating threat, 58% TTAN drawdown, execution speed is the question

---

## v0.8.2 — 2026-04-12

### Added
- FI-020: The AI Threat — Greenfield Disruption (competitive intel card)
  - Documents AI-native competitor model (Fieldproxy) and threat to traditional FSM software
  - Fieldproxy claims: 34% more jobs/tech, 60% fewer missed calls, 40–60% lower operational cost vs TTAN
  - Maps FieldInsight's current in-flight work (FI-001, FI-009, FI-016, FI-017, FI-018) against the threat
  - Identifies gaps: AI dispatching/auto-assign engine, zero-touch invoicing, AI pricing suggestions
  - Strategic read: speed is the risk — greenfield SMB customers may default to AI-native tools
- Added Meridian Dashboard nav button + FI-007 Meridian link (from v1.0.4 merge)

---

## v1.0.4 — 2026-04-09

### Changed
- FI-019: Renamed to "Email Threaded Conversations — Job Management" — reflects the true scope of this feature (not just a Gmail inbox, but full job-linked thread management)
- FI-019: Updated description to reflect Gmail OAuth live, RFC 2822 invisible threading approach, and next build steps
- FI-019: Outcomes updated with ✅ completed, 🔨 in-progress, and ⏳ upcoming milestones
- FieldInsight roadmap date updated to 9 April 2026, v1.0.4

---

## v0.8.1 — 2026-03-27

### Updated
- FI-002 + FI-003 merged into single card — prototype now covers full supplier invoice workflow
- FI-002 spec updated to reflect prototype v0.7.7: Claude Vision parser, split-pane Bill Detail, PO line items table, code matching, per-supplier markup, sync to PO/Job, Bill Markup card
- Added ⚡ AI Powered badge to FI-002/003 card
- Added link to full spec + AI prompts in PROTOTYPES.md
- Last updated date corrected to 27 March 2026

---

## v0.3.0 — 2026-03-16

### Added
- Category filter system: 🎨 Design, 🏗 Product, 🎩 Alfred, 📊 Sales Ops, 👔 CEO, ⚙️ Infra
- Every card tagged with one or more categories — filter shows only relevant items
- Colour-coded left border stripe per category on each card
- Personal roadmap: Alfred Morning CEO Briefing
- Personal roadmap: Cloudflare Tunnel permanent URL
- Personal roadmap: Alfred → HubSpot Deal Intelligence
- Personal roadmap: SDR + AE Dashboard HTML
- Done column: Mac Studio Deployment

### Changed
- Version bump to v0.3.0

---

## v0.2.0 — 2026-03-16

### Added
- Personal roadmap: Alfred — Google Sheets integration (SDR + Sales stats)
- Personal roadmap: Alfred — Fathom / Zoom recording access + summarisation
- Personal roadmap: Alfred WhatsApp marked as Live ✓ (deployed to Mac Studio)
- Personal roadmap: Apple Notes sync marked as live with Alfred WhatsApp confirmed

### Changed
- Version bump to v0.2.0

---

## v0.1.0 — 2026-03-16

### Added
- Initial FieldInsight product roadmap
  - PO Multi-Supplier Price Books
  - Two-Way Chat via Email Threads (Gmail + Outlook)
  - Onboarding Support Workflows — AI Supported
  - Business Insights via Customer Data Ontologies
  - Upgrade Link for Sales Team
  - Sales Metrics — SDR + AE Daily Tracker
- Initial Personal roadmap (Paul Tyrrell)
  - Alfred AI assistant
  - Apple Notes → NocoDB sync
  - Fountain of Truth data strategy
- Sales metrics framework (content/sales-metrics.md)
- Static HTML roadmap site (docs/index.html)
- GitHub Pages deployment

---

<!-- New entries go at the top -->
