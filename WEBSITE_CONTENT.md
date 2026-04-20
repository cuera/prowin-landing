# Delve — Website Content Plan

> **Source of truth for page structure and copy before scaffolding.**
> Grounded in NotebookLM research notebook `bfb720f7-1707-4842-a9b1-64c526a7bfb9`
> ("Sustainable Recycling and E-Waste Management in India") — competitors analyzed:
> Ecoreco, Recyclekaro, Attero, Saahas Zero Waste, Recykal, ReSustainability,
> Virogreen, Spas Recycling.
>
> **Status:** Draft content for review. No routes scaffolded yet.
> **Decisions pending:** flat vs nested services, include `/products`, final page list.

---

## Content strategy — what the research tells us

Every competitor leads with the same three hooks on their home page:

1. **Big impact numbers** — tonnes processed, recovery %, clients served
2. **Credibility anchors** — CPCB/SPCB/R2v3/ISO certifications, enterprise logos
3. **Fast action CTAs** — "Schedule a Pickup" / "Book a Demo" / "Get a Quote"

Positioning splits into two camps:

- **Operators** (Ecoreco, Attero, ReSustainability, Virogreen, Saahas) — "we physically handle waste, here's our plant capacity"
- **Platforms** (Recykal) — "we're the software layer connecting producers, aggregators, recyclers"

**Delve's angle should be decided before copy is finalized.** The existing `/ewaste` and `/waste` routes suggest Delve is product/platform-oriented, but this should be confirmed. Content below is drafted assuming a **platform + EPR compliance SaaS** positioning (closer to Recykal than Ecoreco). Swap easily if the positioning is operator-first.

---

# ROUTE: `/` — Home

## Hero

**Headline (pick one direction):**
- Platform angle: *"Hit your EPR targets. On time. Every time."* (borrowed structure from Recykal — works because it's concrete)
- Impact angle: *"India's circular economy runs on Delve."*
- Outcome angle: *"Turn waste compliance from a cost center into a credit line."*

**Sub-headline:** One sentence naming the buyer (producers, brand owners, bulk generators) and the three jobs Delve does for them — e.g., *"The compliance platform producers use to track EPR credits, automate CPCB filings, and close the loop on e-waste and packaging waste."*

**Primary CTA:** `Book a demo`
**Secondary CTA:** `See the platform` → scroll or link to `/services`

## Impact strip (social proof via numbers)

Horizontal row of 4 stats. Placeholder targets to match — or beat — competitor baselines:

| Metric | Placeholder | Competitor benchmark |
|---|---|---|
| Waste channelized | `XX,XXX MT` | Recykal: 30,00,000+ MT |
| Producers on platform | `XXX brands` | Recykal: 650+ brands |
| EPR targets fulfilled | `XX%` on-time | Attero: 2/3 of client targets |
| States covered | `XX` | Recykal: 27 states/UTs |

**Content note:** never ship placeholder numbers. Either source real metrics from the Delve team or remove the strip until real ones exist — fake stats destroy credibility faster than no stats.

## Who we serve

Three-column card row:

1. **Producers & Brand Owners** — "Meet your EPR e-waste and plastic waste targets without drowning in CPCB paperwork." → `/epr`
2. **Bulk Waste Generators** — "Enterprise-grade collection, secure data destruction, and audit-ready reporting." → `/services`
3. **Recyclers & Aggregators** — "Get matched with verified demand. Get paid on delivery." → `/services`

## Services preview

Two cards mirroring the existing routes:

- **E-Waste Management** — "From doorstep collection to CPCB-certified recovery of gold, copper, lithium, and cobalt." → `/ewaste`
- **Waste Management** — "Municipal, plastic, biomedical, and industrial waste streams under one platform." → `/waste`

## How it works

Four-step horizontal diagram:

1. **Onboard** — connect your SKUs, volumes, and targets
2. **Collect** — pan-India reverse logistics with IoT-tracked pickups
3. **Process** — certified recyclers deliver Form 10 / Form 6 documentation
4. **Report** — one dashboard for CPCB filings, EPR credits, ESG disclosures

## Trusted by

Logo wall. 8–12 enterprise client logos. Pull real logos; do not use stock or placeholder.

## Certifications row

CPCB · SPCB · R2v3 · ISO 14001 · ISO 27001 · ISO 45001
(Match whichever Delve actually holds — lying about certifications is a legal problem, not a copy problem.)

## Latest insights

3-card grid pulling from `/resources`. Title · 1-line excerpt · read-time.

## Final CTA band

Headline: *"Ready to close the loop?"*
Sub: *"Book a 20-minute demo. We'll show you your EPR position in under 5 minutes."*
Button: `Book demo` → `/contact`

---

# ROUTE: `/about` — About Us

## Hero

**Headline:** *"We're building the infrastructure for India's circular economy."*
**Sub-headline:** One sentence on origin + mission.

## Our story

2–3 short paragraphs. Answer three questions:

1. **Why this exists** — what was broken about waste management + compliance in India when Delve started?
2. **Who we are** — founders' background, what they saw that others didn't
3. **Where we're going** — the 5-year picture (e.g., "channelize 1M MT annually by 2030")

Keep it concrete. Avoid phrases like "passionate team" and "leveraging technology" — every competitor uses them and they mean nothing.

## Mission, vision, values

Three-column block:

- **Mission** — one sentence, active voice
- **Vision** — one sentence, measurable
- **Values** — 3–4 principles (e.g., *Traceability over trust · Formalize the informal · Close every loop · Report what we measure*)

## Leadership

Grid of founder/exec profiles. Name · Role · 1-sentence bio · LinkedIn link · Photo.
Start with 3–5 people max. Don't pad with junior hires to look bigger.

## Social inclusion / informal-sector integration

This is a differentiator nearly every serious competitor (Saahas, ReSustainability, Recykal) talks about — and it matters to enterprise ESG buyers.

**Section headline:** *"The people who've always done this work — now with training, PPE, and a paycheck."*

One paragraph + one stat (kabadiwalas onboarded, livelihoods supported, training hours delivered).

## By the numbers

Expanded version of home page strip — 6–8 metrics. Years in operation, states, partners, certifications, total MT, etc.

## Press & recognition

Horizontal logo row of media outlets that have covered Delve. If none yet, skip the section — don't fabricate.

---

# ROUTE: `/services` — Services Hub

> **Decision pending:** flat (this page is a hub linking to `/ewaste` and `/waste`) or nested (move existing routes under `/services/*`). This draft assumes **flat**.

## Hero

**Headline:** *"One platform. Every waste stream that matters to your compliance."*
**Sub-headline:** *"From e-waste to plastic packaging, biomedical to batteries — Delve handles collection, processing, and paperwork end-to-end."*

## Service grid

Six cards. Each card → either an existing route, a future dedicated page, or an anchor section here.

1. **E-Waste & WEEE Recycling** → `/ewaste`
   - Mechanical + hydrometallurgical recovery of gold, silver, copper, palladium, lithium, cobalt
   - CPCB-authorized facilities · Form 2 / Form 6 documentation

2. **Waste Management (MSW, Industrial, Biomedical)** → `/waste`
   - Municipal solid waste, biomedical waste, industrial hazardous waste, plastics, C&D waste

3. **Secure Data Destruction**
   - On-site mobile shredding · DoD-standard wiping · degaussing
   - Certificates of destruction issued per device

4. **IT Asset Disposition (ITAD)**
   - Audit, wipe, refurbish, resell, or recycle — with full chain-of-custody logs

5. **Reverse Logistics & Collection**
   - Pan-India fleet · IoT/GPS tracked pickups · doorstep and bulk collection

6. **Battery Recycling (Li-ion, Lead-acid, EV)**
   - Closed-loop recovery of lithium, cobalt, nickel · EV battery specialization

## Who uses this

Same three-segment block as home — producers / bulk generators / recyclers — but with deeper feature bullets per segment.

## FAQ

6–8 questions. Sample:
- *How fast can Delve schedule a bulk pickup?*
- *Which CPCB authorizations does Delve hold?*
- *Do you handle hazardous waste manifests?*
- *What documentation do I get after processing?*
- *How does Delve price — per MT, per pickup, or subscription?*
- *Do you serve tier-2 and tier-3 cities?*

## CTA band

`Book a demo` · `Download capability deck`

---

# ROUTE: `/ewaste` — E-Waste (existing page, content proposal)

> Existing route. Content below is a proposed rewrite, not a scaffold instruction.

## Hero

**Headline:** *"Turn e-waste into compliance credits and recovered metals."*
**Sub-headline:** *"CPCB-authorized collection, dismantling, and recovery — with Form 6 documentation delivered to your dashboard."*
**CTAs:** `Schedule a pickup` · `Get EPR quote`

## What we handle

Icon grid of e-waste categories (map to E-Waste Rules 2022 schedule):

- IT & telecom equipment (laptops, desktops, servers, phones, routers)
- Consumer electronics (TVs, audio, cameras)
- Large & small appliances
- Lighting equipment (including CFLs, LEDs — important, most competitors mention lamp recycling)
- Toys, leisure & sports equipment
- Medical devices
- Monitoring & control instruments
- Automatic dispensers

## Process

5-step visual:

1. **Audit** — we inventory what you have
2. **Secure collection** — tracked pickup, chain-of-custody from your site
3. **Data destruction** — on-site if required (shredding/wiping/degaussing)
4. **Dismantle & recover** — CPCB-authorized facility
5. **Document** — Form 6, certificate of recycling, EPR credits allocated

## Recovered materials

Grid showing what Delve recovers, benchmarked against competitors:

- **Gold, silver, palladium, platinum** — up to 98%+ recovery (Attero benchmark)
- **Copper, aluminum, iron** — from PCBs, wiring, chassis
- **Lithium, cobalt, nickel** — from batteries
- **Rare earth elements** — from magnets and displays

## Compliance coverage

- E-Waste Management Rules 2022 (amended)
- CPCB EPR portal integration
- Form 2 (producer registration), Form 6 (recycler)
- SPCB state-level authorizations

## Case study block

One featured case study. Client type · challenge · outcome (MT handled, % recovery, compliance achieved).

## CTA band

`Schedule a pickup` · `Talk to EPR expert`

---

# ROUTE: `/waste` — Waste Management (existing page, content proposal)

> Existing route. Content below is a proposed rewrite.

## Hero

**Headline:** *"Every waste stream. One compliance partner."*
**Sub-headline:** *"Municipal, biomedical, industrial, plastic, and construction waste — handled under one contract, one dashboard, one set of reports."*
**CTAs:** `Get a quote` · `Book a site audit`

## Streams we manage

Six-card grid:

1. **Municipal Solid Waste (MSW)** — collection, segregation, composting, RDF
2. **Biomedical Waste** — CBWTF-certified treatment, manifest tracking (per BMW Rules 2016)
3. **Industrial Hazardous Waste** — Hazardous Waste Rules 2016 compliance, manifest system
4. **Plastic Waste** — EPR fulfilment under Plastic Waste Management Rules 2022
5. **Construction & Demolition (C&D)** — source segregation, recycled aggregate recovery
6. **Textile & Organic Waste** — where applicable

## Why bulk generators pick Delve

Four benefit cards:

- **Single contract** — replace 6 vendors with 1
- **Audit-ready reporting** — every manifest, every pickup, every certificate in one export
- **ESG-grade data** — plug into your sustainability report without reconciliation
- **Landfill diversion targets** — we report on diversion %, not just tonnage

## Sector solutions

Short strips for:
- Hospitals & healthcare
- Manufacturing & industrial parks
- IT parks & office campuses
- Retail chains
- Hospitality

## Compliance coverage

MSW Rules 2016 · BMW Rules 2016 · Plastic Waste Rules 2022 · Hazardous Waste Rules 2016 · C&D Waste Rules 2016

## CTA band

`Book site audit` · `Download sector brief`

---

# ROUTE: `/epr` — Extended Producer Responsibility

## Hero

**Headline:** *"EPR compliance, automated."*
**Sub-headline:** *"Track targets, buy certified credits, file Form 10 — all from one dashboard. No more spreadsheets. No more missed deadlines."*
**CTAs:** `Get EPR assessment` · `See the dashboard`

## The problem (one paragraph)

Producers spend weeks reconciling SKU-level sales data against recycling targets, hunting for credits, and filing on CPCB portals that weren't designed for their workflow. Miss a target and you face show-cause notices, environmental compensation, and public non-compliance listings.

## What Delve does

Four feature cards:

1. **Target calculation** — upload SKUs, we compute your obligations under E-Waste, Plastic, Battery, and Tyre EPR rules
2. **Credit marketplace** — buy verified EPR credits from our recycler network with traceable Form 10
3. **Filing automation** — pre-populate CPCB portal submissions directly from the dashboard
4. **Audit defense** — every credit backed by chain-of-custody records, ready for inspection

## Rules we cover

- E-Waste Management Rules 2022
- Plastic Waste Management Rules 2022
- Battery Waste Management Rules 2022
- Tyre Waste Management Rules 2022 (if applicable)

## Dashboard preview

Full-bleed product screenshot. Annotate:
- Target vs achieved (live gauge)
- Credits purchased this FY
- Upcoming filing deadlines
- CPCB portal sync status

## Pricing model

One paragraph — per-SKU, per-MT, or annual subscription. Even vague pricing builds trust vs "contact sales for everything."

## Who it's for

Callouts for:
- Electronics & appliance brands (EEE producers)
- FMCG & packaged goods (plastic waste)
- EV & battery makers
- Automotive (tyres, batteries)
- Importers & e-commerce marketplaces

## FAQ

- *What's the difference between an EPR target and an EPR credit?*
- *What happens if I miss my target?*
- *Can Delve handle legacy targets (back-year catchup)?*
- *How are credits priced?*
- *Is this compliant with the latest CPCB amendments?*

## CTA band

`Free EPR assessment` · `Talk to compliance team`

---

# ROUTE: `/sustainability` — Sustainability & ESG

## Hero

**Headline:** *"Your ESG report shouldn't be a guessing game."*
**Sub-headline:** *"Delve gives you auditable, source-level data on every kg of waste diverted, every tonne of CO₂e avoided, and every certificate earned."*

## Our impact

Large stat grid — this is where Delve's cumulative impact numbers live. Mirror the competitor benchmark table from Home but with more detail: MT by stream, CO₂e avoided, landfill diversion %, virgin material saved, jobs supported.

**Content note:** when real numbers exist, pick the ones that are both impressive AND verifiable. Don't over-reach.

## How we report

Three-column block:

1. **Source-level traceability** — every kg tracked from generation to final processing, with timestamps
2. **Third-party verified** — audit trails designed for Big-4 ESG auditors
3. **Framework-ready** — outputs formatted for GRI, BRSR, TCFD, and CDP submissions

## Circular economy principles

Short diagram. Linear vs circular. One paragraph on how Delve closes loops for specific materials (PCBs → gold, EV batteries → cobalt, PET → food-grade rPET).

## Our own footprint

Transparency section — Delve's own operations: fleet (EVs where possible), facilities (zero liquid discharge, solar), workforce. Mirrors what ReSustainability and Saahas do.

## Partnerships & memberships

Logo row of industry bodies, research partners, NGO collaborators.

## CTA band

`Download sustainability report` · `Request ESG data extract`

---

# ROUTE: `/resources` — Resources Hub

## Hero

**Headline:** *"Everything you need to understand EPR, compliance, and the circular economy in India."*
**Sub-headline:** Short — this page is a library, not a pitch.

## Content types (tab nav)

1. **Blog** — short-form insights, 600–1200 words
2. **Guides** — long-form pillar content (e.g., "The complete guide to E-Waste EPR in India 2026")
3. **Case studies** — client outcomes, 1-page PDFs
4. **Whitepapers & reports** — gated downloads
5. **Webinars** — upcoming + recorded
6. **Compliance downloads** — templates, checklists, CPCB forms reference

## Featured content

3-card grid. Pin high-intent SEO pieces (e.g., "EPR target calculator," "Form 10 filing walkthrough").

## All articles

Filterable list. Filter by: content type, topic (E-Waste / Plastic / Battery / MSW / EPR / ESG), reading time.

## Newsletter signup

Inline form. "The EPR brief — 1 email a month. What changed in Indian waste compliance, and what to do about it."

## Compliance documents (subsection — replaces need for separate `/downloads`)

Direct downloads:
- Delve's CPCB authorization
- ISO certifications
- R2v3 certification (if held)
- Sample Form 6, Form 10
- EPR target calculator template (lead magnet)

---

# ROUTE: `/contact` — Contact

## Hero

**Headline:** *"Let's talk about your waste."*
**Sub-headline:** *"Whether you need a pickup next week or an EPR strategy for 2027, we'll route you to the right person in under 24 hours."*

## Contact paths (three-column block)

1. **I need a pickup** → form: location, waste type, volume, timeline
2. **I need EPR help** → form: company, sector, SKU count, current compliance status
3. **I'm a recycler / vendor** → form: capacity, materials, certifications

Each path points to a different internal queue. Don't use one generic form.

## Offices

Map + address list. HQ first, then regional offices. Include phone + email for each.

## Enterprise support

Callout for existing clients: `Client portal login` + dedicated support email/phone.

## Careers link

Small link: *"Looking to join the team? See open roles →"* (links to careers page or a Lever/Greenhouse board — no need to build a full careers section yet)

## Press inquiries

Small block with press contact email.

---

# Sections deliberately NOT included (and why)

- **`/investors`** — Delve is not publicly listed. Include only when a funding round or IPO is announced.
- **`/products`** — only build if Delve has a discrete product catalog (refurbished devices, recovered metals, SaaS tiers). If positioning is pure services + platform, this is noise.
- **`/locations`** — only build if Delve operates physical recycling hubs customers would visit. Map can live inline on `/contact` until then.
- **`/downloads`** — folded into `/resources` as a subsection. Separate route is over-indexing.
- **`/careers`** — link out to an ATS (Lever, Greenhouse) from `/contact` and footer until hiring volume justifies a dedicated page.

---

# Global — shared across all routes

## Header

Logo · Primary nav: `Services` · `EPR` · `Sustainability` · `Resources` · `About` · `Contact` · CTA button (`Book demo`)

## Footer

4-column layout:

1. **Product** — Services · EPR · Sustainability · Pricing (if applicable)
2. **Company** — About · Careers · Press · Contact
3. **Resources** — Blog · Guides · Case studies · Compliance downloads
4. **Legal** — Privacy · Terms · CPCB authorizations · Certifications

Bottom bar: copyright · social links · language switcher (if needed)

## Global CTAs

Consistent across all routes:
- **Primary:** `Book a demo`
- **Secondary:** `Schedule a pickup` (for operational/bottom-funnel pages) or `Get EPR assessment` (for compliance pages)

---

# Open decisions (must resolve before scaffolding)

1. **Positioning** — platform-first (Recykal model) or operator-first (Ecoreco/Attero model)? This changes hero copy and half the page structure.
2. **Services URL structure** — flat (`/ewaste`, `/waste`, `/services` as hub) or nested (`/services/ewaste`, `/services/waste`)?
3. **Include `/products`?** — only if there's a real catalog
4. **Real impact numbers** — who owns sourcing these before launch?
5. **Case studies** — do we have client permission to name names, or is everything anonymized?
6. **Pricing transparency** — show pricing ranges on `/epr` and `/services`, or gate everything behind demo?
