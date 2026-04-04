# Paul Tyrrell — Personal Roadmap

Version: 0.2.0  
Last Updated: 2026-04-03

---

## Now — Active Focus

### Cursor Tasks — Researcher & Invoice Audit

**1. Audit Researcher Lead Flow**
Track where leads go after researchers create them.
- [ ] Map flow: Researcher → Lead Created → SDR Assigned → Dialed → Outcome
- [ ] Add audit trail columns to Google Sheet
- [ ] Find where leads are lost or stalled

**2. Investigate Token Usage for Bill/Supplier Invoice Importing**
Find actual token metrics for the AI invoice import feature.
- [ ] Check codebase or OpenAI dashboard for token logs
- [ ] Document cost per invoice import
- [ ] Add to feature specs

---

### Alfred (Personal AI Assistant)
Build and deploy Alfred to Mac Studio. Connect to WhatsApp via Twilio. 
Give Alfred access to Apple Notes, NocoDB Fountain of Truth, and the ability to brief me daily.
- [x] Alfred codebase built
- [x] Mac Studio online + SSH enabled
- [x] Twilio WhatsApp sandbox configured
- [x] Anthropic API key added
- [x] Deployed + live
- [x] Daily Sales Briefing SMS (SDR, Sales Pipeline, Onboarding, Researchers)

### Product Roadmap (this)
A living, versioned, served roadmap for personal and FieldInsight planning.
- [x] Repo created
- [x] Initial content written
- [x] GitHub Pages live
- [ ] Custom domain

### Apple Notes → NocoDB Sync
Daily sync of all Apple Notes into Fountain of Truth for searchability and AI access.
- [x] Script built and tested
- [x] 1,144 notes synced
- [ ] Running automatically on Mac Studio

---

## Next — Planned

### Fountain of Truth — Data Completeness
Enrich NocoDB with more sources:
- HubSpot contacts + deals
- Intercom conversations
- Email threads (Gmail)
- Zoom/Grain meeting transcripts

### Jeeves → Alfred Migration
Rename and consolidate the Jeeves transcript processing into Alfred.
Alfred becomes the single intelligent agent for all personal + business tasks.

### Mac Studio Always-On Setup
- Remote login enabled
- Tailscale always running
- Alfred serving on port 8080
- Cloudflare tunnel for public HTTPS

### Marketing Automation
Build on the existing Marketing Automation pipeline:
- Weekly standup → blog post (FieldInsight)
- Transcript → feature summary
- WordPress auto-publish

---

## Future

- Video meeting summaries (Grain/Zoom integration)
- Personalised daily email brief (Alfred → Gmail)
- Business metrics dashboard
- Investment / personal finance tracking
- Health + energy tracking

---

## Principles

1. Everything stored in GitHub — versioned, never lost
2. Every tool built should work while I sleep (Mac Studio always on)
3. AI assists, Paul decides
4. Simple over complex — if it needs maintaining, it's too complicated
5. Named after family — Alfred, not Jeeves

---
