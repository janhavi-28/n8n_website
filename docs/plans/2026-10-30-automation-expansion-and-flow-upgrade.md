# Automation Catalog Expansion & Smooth Flow Upgrade Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade 6 existing automation simulations with smooth Bézier/particle motion and verified enterprise workflow logic (strictly preserving Daily Dashboard, Tender Hunter, and Email Automator untouched), and expand the AIVATIKA catalog with top-trending, high-converting B2B automations.

**Architecture:** Pure SVG + vanilla JS `requestAnimationFrame` physics engine (`getPointAtLength`, cubic Bézier connector paths, dashed marching-ants stroke animations, linear interpolated numerical counters). Modular HTML simulations in `automations/` mirrored in root, seamlessly linked into `index.html` modal viewer, table, search filters, and `contact.html` forms.

**Tech Stack:** HTML5, CSS3 Variables, SVG Bézier Curves & Filters, vanilla JavaScript (`requestAnimationFrame`, `Promise`, `DOM`).

---

## 1. Safety Boundary & Non-Negotiable Constraints
- **DO NOT TOUCH** under any circumstances:
  1. `Live Workflow_ Daily Business Dashboard (4).html` & `automations/dashboard_workflow_live.html`
  2. `Live Workflow_ Tender _ Opportunity Hunter.html` & `automations/tender_workflow_live.html`
  3. `Live Workflow_ Email Campaign Automator.html` & `automations/email_workflow_live.html`
- **Contact Experience Integrity**:
  - Keep forms strictly to 4 fields (Name, Company Name, Automation Type, Phone Number).
  - Keep right-side contact panel strictly to Phone, Location/Address, and Email.
  - Center nav remains `Automations`, right button remains `Contact`.

---

## 2. Phase 1: Workflow Cross-Check & Smooth Engine Upgrade (6 Existing Automations)

### Standard Animation Specification (Mirroring Daily Dashboard Standard):
1. **SVG Connectors**: Dynamic cubic Bézier paths: `d="M ${x1} ${y1} C ${x1+dx} ${y1} ${x2-dx} ${y2} ${x2} ${y2}"` with `marker-end="url(#ar)"`.
2. **Particle Physics Engine (`fly`)**:
   - `requestAnimationFrame` loop sampling `p.getPointAtLength(L * k)`.
   - Glowing particle elements (`.pk`) with `drop-shadow(0 0 7px var(--accent-glow))`.
3. **Active Node State ("Marching Ants")**:
   - `stroke-dasharray: 6 4; animation: d .6s linear infinite; filter: drop-shadow(0 0 6px var(--accent))`.
4. **Rolling KPI Interpolation (`setK`)**:
   - Counter values animate over 700ms via `requestAnimationFrame` linear interpolation instead of jumping abruptly.
5. **Interactive Node Inspector Modal (`ndv`)**:
   - Displays real parameters, line-by-line runtime execution logs, and output JSON payloads.

---

### Task 1: Upgrade WhatsApp Automation Simulation
**Files:**
- Modify: `automations/whatsapp_workflow_live.html`
- Mirror: `Live Workflow_ WhatsApp Automation.html`

**Workflow Logic Verification:**
- *Trigger:* Inbound Meta WhatsApp Cloud API Webhook (phone, message ID, payload).
- *Classification:* AI Intent & Sentiment Analyzer (LangChain / Claude 3.5).
- *Routing:* Router Node (Booking Inquiry vs Product Catalog FAQ vs Human Escalation).
- *Actions:*
  - Branch A (Booking): Google Calendar Slot Reservation + CRM Lead Update.
  - Branch B (Product FAQ): Qdrant/Pinecone Vector Search against product catalog.
- *Dispatch:* Outbound WhatsApp Cloud API with interactive reply buttons.

**Steps:**
1. Replace straight line SVG paths with dynamic cubic Bézier connector paths.
2. Implement `fly(i, cls, ms)` particle physics engine with WhatsApp green particle glow (`#25d366`).
3. Add rolling KPI interpolation for `Messages Handled`, `Avg Response Time`, and `Bookings Closed`.
4. Add the interactive slide-in Node Inspector modal (`ndv`) showing incoming WhatsApp JSON payloads and vector catalog match scores.
5. Test manually in browser, mirror to root file, and verify responsiveness.

---

### Task 2: Upgrade AI Voice Receptionist Simulation
**Files:**
- Modify: `automations/voice_workflow_live.html`
- Mirror: `Live Workflow_ AI Voice Receptionist.html`

**Workflow Logic Verification:**
- *Trigger:* Telephony Webhook (Twilio / Vapi SIP trunk).
- *Speech Processing:* Real-time streaming Speech-to-Text (Whisper / Deepgram).
- *Reasoning & Tool Calling:* LLM Orchestrator with Function Calling (Cal.com / Google Calendar + Company Knowledge Base).
- *Speech Synthesis:* Low-latency Text-to-Speech (ElevenLabs Turbo / Cartesia).
- *Post-Call Dispatch:* Summary generator -> CRM sync -> WhatsApp/SMS confirmation to caller.

**Steps:**
1. Replace straight line paths with cubic Bézier connectors.
2. Implement `fly()` particle physics engine with indigo/purple voice wave glow (`#6366f1`).
3. Add animated audio latency indicator and rolling KPI interpolation for `Calls Handled`, `Latency (ms)`, and `Transfers`.
4. Add interactive node inspector displaying real caller transcript strings and function call parameters.
5. Mirror to root file and test.

---

### Task 3: Upgrade AI Sales Agent Simulation
**Files:**
- Modify: `automations/sales_workflow_live.html`
- Mirror: `Live Workflow_ AI Sales Agent.html`

**Workflow Logic Verification:**
- *Trigger:* Inbound Demo Request / Web Lead Form Webhook.
- *Research & Enrichment:* LinkedIn & Apollo.io scraper (technographics, company headcount, funding).
- *Buyer Persona Scoring:* ICP qualification rule engine (Tier 1 vs Disqualified).
- *AI Pitch Generation:* Claude 3.5 generating tailored value proposition referencing prospect's exact tech stack.
- *Multi-Channel Sequence:* Automated personalized cold email + LinkedIn connection request + CRM deal stage update.

**Steps:**
1. Convert straight paths to cubic Bézier curves.
2. Implement `fly()` particle traversal with amber/coral sales glow (`#ff6d5a`).
3. Add rolling KPI counters for `Pipeline Value`, `Meetings Booked`, and `Response Rate`.
4. Add node inspection modal showing synthesized email copy and prospect enrichment data.
5. Mirror to root file and test.

---

### Task 4: Polish Invoice Processing Bot Simulation
**Files:**
- Modify: `automations/invoice_bot_live.html`
- Mirror: `Live Workflow_ Invoice Processing Bot.html`

**Workflow Logic Verification:**
- *Trigger:* Inbound Gmail/IMAP billing attachment listener.
- *OCR Engine:* AWS Textract / Azure Form Recognizer extracting line items and GSTIN.
- *LLM Normalizer:* Normalizes messy vendor tables to standardized ERP schema.
- *3-Way PO Reconciliation:* SQL Database query checking PO #, quantities, unit prices.
- *Routing:* If 100% match -> Auto-sync to Zoho Books / Tally; If >5% variance -> Alert CFO Slack channel.

**Steps:**
1. Upgrade KPI counters from static DOM replacement to smooth rolling `requestAnimationFrame` interpolation.
2. Add staggered particle pulse when splitting extracted line items into reconciliation.
3. Enhance the inspector modal with realistic invoice line item preview.
4. Mirror to root file and test.

---

### Task 5: Polish Lead Enrichment Pipeline Simulation
**Files:**
- Modify: `automations/lead_enrichment_live.html`
- Mirror: `Live Workflow_ Lead Enrichment Pipeline.html`

**Workflow Logic Verification:**
- *Trigger:* Inbound lead webhook from website form.
- *Validation:* Email format check + DNS MX record ping.
- *Data Enrichment:* Parallel query to Apollo.io (demographics) + Clearbit (technographics).
- *AI Scoring:* Claude 3.5 evaluating buy-intent score (0-100).
- *Routing & CRM Sync:* If score >80 -> Create Deal in HubSpot CRM + Ping #sales-vip on Slack.

**Steps:**
1. Add rolling `setK` numerical interpolation for all KPI cards.
2. Ensure smooth staggered particle flows on parallel Apollo + Clearbit extraction branches.
3. Polish node inspection modal details.
4. Mirror to root file and test.

---

### Task 6: Polish Customer Support AI / Triage Simulation
**Files:**
- Modify: `automations/support_triage_live.html`
- Mirror: `Live Workflow_ Customer Support Triage.html`

**Workflow Logic Verification:**
- *Trigger:* Zendesk / Freshdesk ticket created webhook.
- *Sentiment & Urgency:* LLM classifier (P1 Production Outage vs Billing Question vs Feature Request).
- *Vector Search:* Pinecone semantic match against internal Help Center documentation.
- *Draft Generator:* AI synthesizes personalized solution with direct deep-links.
- *Action Router:* High confidence (>90%) -> Auto-reply; Low confidence (<90%) -> Route to Tier 2 support agent with pre-drafted context.

**Steps:**
1. Implement smooth `requestAnimationFrame` counter interpolation for resolution rate and avg response time.
2. Ensure clean Bézier path transitions and glow effects.
3. Mirror to root file and test.

---

## 3. Phase 2: High-Converting Trending Automations to Add

### Market Analysis (Why businesses buy these now):
Indian and global businesses in 2025/2026 are willing to pay significant setup fees (₹49k - ₹89k) when an automation delivers **immediate, measurable cash flow or headcount savings**:

| # | Trending Automation | Target Customer | Real Problem Solved | Pricing (Setup + Addl) |
|---|---|---|---|---|
| **10** | **Overdue Payment Recovery & Accounts Receivable Chaser** | B2B SMEs, Agencies, Manufacturers, Wholesalers | Late payments (30-90 days) kill cash flow. Accounts staff hate calling clients repeatedly. | **₹69,000**<br>+Additional charges apply* |
| **11** | **E-Commerce NDR & RTO Reduction Bot** | D2C Brands, Shopify / WooCommerce Sellers | 25-30% of COD orders return undelivered (RTO), burning ₹80-₹150 in shipping fees per return. | **₹79,000**<br>+Additional charges apply* |
| **12** | **Google Reviews & Brand Reputation Booster** | Clinics, Dentists, Salons, Real Estate, Restaurants | Local businesses live or die by Google Maps stars, but fear getting 1-star public reviews. | **₹49,000**<br>+Additional charges apply* |
| **13** | **HR Onboarding & Document KYC Bot** | Growing IT companies, Retail chains, Staffing firms | HR spends 15+ manual hours verifying Aadhaar/PAN, drafting offer letters, and creating IT accounts. | **₹69,000**<br>+Additional charges apply* |
| **14** | **Social Media AI Content Repurposer & Scheduler** | Founders, Marketing Leaders, B2B Creators | Converting long-form videos/podcasts into daily LinkedIn posts and threads takes 20+ hours/week. | **₹59,000**<br>+Additional charges apply* |

---

## 4. Phase 3: Integration into the Platform
1. **`index.html` updates:**
   - Update automation counter ("Search 14 automations").
   - Add new cards with premium badges, exact deliverables, and tags.
   - Add new rows to the Comparison & Pricing table.
   - Update `PREVIEW_URLS` map to link to the new live workflow HTML files.
   - Update the contact modal dropdown with all automations.
2. **`contact.html` updates:**
   - Update the `<select name="automation_type">` dropdown to include all new automations.
3. **Git & Deployment:**
   - Commit changes and push cleanly to `main` for automatic Vercel deployment.

---

## 5. Decision Points for User Approval
1. **Scope of New Automations**: Do you want to add all 5 suggested trending automations (bringing total from 9 to 14), or start with the top 3 (Payment Recovery, E-Commerce RTO, and Google Reviews)?
2. **Order of Execution**:
   - Option A (Recommended): Upgrade the 6 existing workflow simulations with smooth Bézier/particle physics first, then build and integrate the new automations.
   - Option B: Finalize and add the new automations to the website catalog first, then build all simulations in one batch.

