# FieldInsight Product Roadmap

Version: 0.3.0  
Last Updated: 2026-04-03  
Status: Active

---

## Now — In Progress

### PO Multi-Supplier Price Books
**Priority:** High  
**Status:** Planned  
Ability to manage purchase orders with multiple supplier price books. Technicians and office staff can select the right supplier pricing at job creation or during the job, with automatic cost calculations and margin visibility.

Key outcomes:
- Support multiple supplier relationships per trade
- Price book switching at PO level
- Margin reporting per supplier

---

### Two-Way Chat via Email Threads (Gmail + Outlook)
**Priority:** High  
**Status:** Planned  
Enable FieldInsight to send and receive emails as threaded conversations, integrated directly into the job or customer record. Works with Google Gmail and Microsoft Outlook via OAuth.

Key outcomes:
- Reply to customer emails from within FieldInsight
- Email threads attached to job/customer record
- No CC-copying required — all context in one place

---

### Onboarding Support Workflows — AI Supported
**Priority:** High  
**Status:** Planned  
Guided onboarding flows for new customers, supported by AI to reduce support load and increase activation speed. Triggered based on account age, usage signals, and support ticket history.

Key outcomes:
- Step-by-step onboarding checklists in-app
- AI suggests next setup actions based on usage gap
- Reduce time-to-first-job milestone
- Reduce onboarding support tickets by 40%

---

### Business Insight via Customer Data Ontologies
**Priority:** High  
**Status:** Planned  
Surface actionable business intelligence to FieldInsight customers using structured ontologies built from their own operational data — jobs, technicians, customers, invoices, assets.

Key outcomes:
- Business health score per account
- Industry benchmarks (HVAC, electrical, plumbing, etc.)
- Actionable insights: "Your average job completion time is 23% slower on Fridays"
- Exportable reports for business owners

---

### AI Researcher — Lead Gen Automation
**Priority:** High  
**Status:** Planned  
AI agent that automates lead research and qualification, replacing or augmenting manual researchers. Finds trade businesses matching ICP, enriches data, and feeds qualified leads to SDRs.

**Lead Sources to Scrape:**
- [ ] Apollo.io — contact data, company signals
- [ ] LinkedIn Sales Navigator — company profiles, employee count
- [ ] Google Maps — local trade businesses, reviews, phone numbers
- [ ] Seek.com.au — job ads (hiring = growth signal)
- [ ] Indeed / Jora — job ads for field service roles
- [ ] Hipages — active tradies listing
- [ ] ServiceSeeking — trade business profiles
- [ ] Yellow Pages / True Local — business directories
- [ ] ABN Lookup — verify Australian businesses
- [ ] Facebook Business Pages — local trade presence
- [ ] Google Ads transparency — who's spending on "field service software"
- [ ] Industry associations (Master Electricians, MPAQ, etc.)

**Left of Field Ideas:**
- [ ] Monitor council permits/tenders — who's winning work?
- [ ] Track fleet registrations — growing truck count = growing business
- [ ] Scrape trade show exhibitor lists
- [ ] Monitor Gumtree "services offered" section
- [ ] Watch Airtasker for high-volume tradies

**Key Outcomes:**
- Score and filter leads by ICP fit (company size, location, tech signals)
- Enrich with contact info, tech stack, revenue estimates
- Auto-assign qualified leads to SDRs in Google Sheet
- Target: 60 leads/day/researcher equivalent
- Track lead source → SDR dial → outcome for audit trail
- A/B test lead sources — which convert best?

---

### Upgrade Link — Sales Team Tool
**Priority:** High  
**Status:** In Development  
A dedicated upgrade/upsell page for the sales team to send to customers at the right moment in their lifecycle. Smart URL that pre-fills customer context.

Key outcomes:
- One-click upgrade flow for customers
- Personalised with customer name, current plan, recommended next tier
- Tracks click and conversion for sales rep attribution
- Links: github.com/ptyrrell/upgrade-link

---

### Sales Metrics — SDR + AE Daily Tracker
**Priority:** Medium  
**Status:** Planned  
See: `content/sales-metrics.md` for full framework.

---

## Next — Backlog

- Asset management improvements
- Recurring job templates
- Customer portal (self-service)
- Advanced scheduling — AI optimised routes
- Quote approval workflows
- Stripe payment links on invoices

---

## Done

*(Features will move here on completion with version number)*

---

## Notes

All features subject to prioritisation review.  
Contact: Paul Tyrrell, FieldInsight  
