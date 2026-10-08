# PayFast terms review: whclips.co.za online store

- **Date:** 8 October 2026
- **Scope:** the customer-facing store at whclips.co.za, checked against PayFast's merchant terms
- **Site revision reviewed:** `main` at `13edf11`
- **Status:** findings only. No site file was changed.

## Read this first: the PayFast terms could not be read

This review was run from a cloud environment whose network policy blocks `payfast.io`. Every attempt failed before any content came back:

| URL | Method | Result |
|---|---|---|
| https://payfast.io/legal/general-terms-conditions/ | curl | `CONNECT tunnel failed, response 403` (egress proxy denied the host) |
| https://payfast.io/legal/general-terms-conditions/ | web fetch | `EGRESS_BLOCKED: Access to payfast.io is blocked by the network egress proxy` |
| https://www.payfast.co.za/legal, https://payfast.co.za/ | curl | no connection (HTTP 000) |
| https://web.archive.org/… (archived copy) | curl | no connection (HTTP 000) |
| https://developers.payfast.co.za/ | curl | no connection (HTTP 000) |

That means:

1. **No clause numbers or wording from PayFast are quoted below.** Nothing was read, so nothing is quoted. Clause references are left blank instead of guessed.
2. **Pages the General Terms make binding are unknown.** These would be things like a prohibited-goods list, merchant website requirements or refund rules. Their URLs and content could not be found.
3. **Every row's PayFast status is UNCLEAR.** A MEETS or GAP verdict needs the clause text, and we don't have it.

What *was* done fully is the site side. Each row records what a customer sees on our site, with file and line, and gives a **provisional site verdict**: *Present*, *Partial* or *Missing*. That verdict is measured against the check list in the review brief, not against PayFast's wording. Once the PayFast pages can be read, each row only needs its clause filled in and its status set to MEETS or GAP.

### How to finish this review

1. Allow `payfast.io` in the cloud environment's network settings, or read the pages in your own browser and save them as PDF.
2. Read the General Terms in full. List every document it pulls in ("incorporated by reference", "forms part of", "as amended from time to time" plus a URL). Typical candidates are prohibited/restricted goods, acceptable use, website requirements, refunds/chargebacks and brand guidelines. Read each of those too.
3. For each row below, find the matching clause. Copy its number and a quote of 15 words or fewer into the "PayFast clause" column, then set the status. Where the evidence is *Present* and the clause asks for no more, the status is MEETS. *Missing* means GAP. For *Partial*, compare the clause wording word by word with the site text. Errors usually hide in qualifiers ("telephone number", "prominently", "on the checkout page", "before payment"), not in the headline requirement.
4. Look for PayFast requirements this table doesn't cover yet, such as chargeback handling, reserve or rolling holds, record retention, notice periods and ITN/IPN handling. Add a row for each.

## Findings table

Legend: **PayFast status** is MEETS, GAP or UNCLEAR, against the PayFast clause. **Site evidence** is the provisional site verdict (*Present / Partial / Missing*), measured against the review brief only.

| # | Requirement (from review brief) | PayFast clause | Where our site stands (file:line) | Site evidence | Suggested fix | PayFast status |
|---|---|---|---|---|---|---|
| 1 | Business legal name shown | Could not read: not quoted | `terms.html:118` "White Horse Clips (Pty) Ltd, a private company". Footer copyright on every store page, e.g. `checkout.html:158`, `store.html:711` | Present | None expected. Confirm the clause doesn't also want a trading name that differs from the legal name | UNCLEAR |
| 2 | Company registration number shown | Could not read: not quoted | `terms.html:119` "2026/545579/07". Footer `checkout.html:158`, `store.html:711`. `store.html:437` "CIPC-registered private company" | Present | None expected | UNCLEAR |
| 3 | Physical address shown | Could not read: not quoted | `terms.html:120` (physical address), `terms.html:193` (domicilium). Footer `checkout.html:162`, `store.html:715`, `contact.html:739` | Present | None expected | UNCLEAR |
| 4 | Contact details: email and telephone | Could not read: not quoted | Email: `terms.html:121-122`, footer `checkout.html:163-164`. **No public telephone number anywhere on the site.** A search of all `*.html` for `tel:`, `+27` and "phone" found only input fields (`contact.html:276`, `careers-apply.html:72`) | Partial | Add a customer-service phone number to `terms.html` section 01 and the footer. ECTA s43(1) also asks for a telephone number (see section below), so this is worth doing whatever PayFast says | UNCLEAR |
| 5 | Customer-service hours and complaints route | Could not read: not quoted | `terms.html:124` hours Mon–Fri 08:00–17:00 SAST. `terms.html:181` complaints to enquiries@, then CGSO/NCC. Repeated in `delivery.html:154`, `cancellation.html:151`, `returns.html:168` | Present | None expected | UNCLEAR |
| 6 | Full description of goods | Could not read: not quoted | Product detail panel `store.html:371-391`. Description falls back to "Full specification available on request" when empty (`store.html:601`). Catalogue check: all 14 SKUs have a description. 2 SKUs have no spec rows (520-BBLV headset, 450-BFFM adapter). 2 SKUs have no warranty value (same two), so `store.html:595` shows "period is confirmed on request" | Partial | Fill spec rows and warranty period for 520-BBLV and 450-BFFM in the catalogue feed. Consider hiding any SKU whose detail falls back to "on request", just as unpriced items are already hidden (`store.html:476`) | UNCLEAR |
| 7 | Price of goods in ZAR | Could not read: not quoted | `store.html:339` "Prices are in South African Rand". Prices rendered as `R` + amount (`store.html:543`, `585`). `checkout.html:110`. `terms.html:146` "All transactions are in South African Rand (ZAR)" | Present | None expected | UNCLEAR |
| 8 | Total including delivery shown before payment | Could not read: not quoted | Delivery line and total on checkout (`checkout.html:105-109`). Quote fetched per province (`checkout.html:230-259`). Pay button blocked until the quote matches the cart (`checkout.html:232`, `282`). Worker refuses if the total moved (`checkout.html:322`). `terms.html:134` never charged more than shown | Present | None expected | UNCLEAR |
| 9 | VAT / tax status stated | Could not read: not quoted | `store.html:339`, `checkout.html:110`, `terms.html:131`: not registered for VAT, no VAT charged | Present | None expected. Revisit when turnover nears the R1m compulsory VAT registration threshold | UNCLEAR |
| 10 | Delivery policy: method, area, times | Could not read: not quoted | `delivery.html:119` courier, SA only. `delivery.html:125-127` handling 1–2 days, delivery 2–3 (Gauteng) / 2–10 (other), 15:00 cut-off. `delivery.html:129` 30-day long-stop. `delivery.html:134` tracking. Checkout shows the estimated days (`checkout.html:238`) | Present | None expected | UNCLEAR |
| 11 | Restriction on where we sell / ship | Could not read: not quoted | `terms.html:186` "available to South African customers only". `delivery.html:119`. Checkout only accepts an SA province and a 4-digit postal code (`checkout.html:133-135`) | Present | None expected | UNCLEAR |
| 12 | Cancellation policy | Could not read: not quoted | `cancellation.html:111-151`. Before dispatch: full refund (`:112`). After dispatch: ECTA s44, "ideally within 5 days" (`:118`), **10% handling fee** and non-refundable delivery (`:124`), refund within 30 days (`:125`) | Partial | The policy exists, but parts of it may conflict with ECTA s44. See finding L1 below. If PayFast requires a policy that complies with the law (unknown until read), this row becomes a GAP | UNCLEAR |
| 13 | Returns and refund policy | Could not read: not quoted | `returns.html:112-168`. CPA s56 six-month right (`:116`). Return process (`:124-129`). Who pays (`:135-136`). Refund within 30 days, to the original method only (`:143-147`) | Present | Same handling-fee point as row 12 (`returns.html:144`) | UNCLEAR |
| 14 | Refunds go back through PayFast to the original method | Could not read: not quoted | `cancellation.html:141`, `returns.html:145`, `returns.html:147` | Present | None expected. Confirm the clause doesn't forbid refunds outside PayFast (we already say we don't) | UNCLEAR |
| 15 | Unavailable goods after payment | Could not read: not quoted | `terms.html:152`: account is **credited**, with a refund only if there's no new purchase within 21 working days, then within 30 days | Partial | Refund in full within 30 days of telling the customer, and offer store credit only as the customer's choice. See finding L2 | UNCLEAR |
| 16 | Customer accepts terms before paying | Could not read: not quoted | Required checkboxes for T&Cs (`checkout.html:138`) and privacy (`:139`), both links. Enforced in script (`:335-336`). Policy version is sent and stored (`checkout.html:209-211`) | Present | None expected | UNCLEAR |
| 17 | Delivery, cancellation and returns policies reachable from checkout before paying | Could not read: not quoted | Footer links on checkout (`checkout.html:180-184`). The terms page links all four policies (`terms.html:83`, `158-160`). **The pay area only links T&Cs and Privacy** (`checkout.html:138-139`) | Partial | Add one line by the pay button: "Read our Delivery, Cancellation and Returns policies" with links. Many gateways expect these policies to be visible at the point of sale, not only in the footer | UNCLEAR |
| 18 | Privacy policy (POPIA) | Could not read: not quoted | `privacy.html:83-175`: responsible party, purposes, sharing (PayFast, couriers, Cloudflare, GitHub), retention, security, rights, Information Officer (`:170`), Regulator contact. Marketing is opt-in and unticked (`checkout.html:140`) | Partial | `privacy.html:141` lists Cloudflare and GitHub, but the pages also load Google Fonts (`store.html` and `checkout.html` link `fonts.googleapis.com`, e.g. `checkout.html:12`). That sends each visitor's IP to Google. Either self-host the font or add Google to the list of service providers | UNCLEAR |
| 19 | Security / PCI statement: card data not held by merchant | Could not read: not quoted | `terms.html:144-145` (cards entered on PayFast's pages, encrypted, never stored by us). `privacy.html:116`, `:153`. `checkout.html:144`. Footer on every store page (`checkout.html:190`) | Present | None expected. Confirm whether PayFast wants a specific wording or a PCI DSS reference (redirect integrations usually fall under SAQ A) | UNCLEAR |
| 20 | Merchant takes responsibility for fulfilment, support and disputes | Could not read: not quoted | `terms.html:186` "takes responsibility for all aspects of your order…" | Present | None expected | UNCLEAR |
| 21 | Merchant outlet country stated | Could not read: not quoted | `terms.html:146` "Our merchant outlet country is the Republic of South Africa." | Present | None expected | UNCLEAR |
| 22 | Order confirmation and transaction record | Could not read: not quoted | `terms.html:147` accepted when PayFast confirms, confirmed by email, record kept. Return message `store.html:684-687` | Present | None expected | UNCLEAR |
| 23 | No prohibited / restricted goods | Could not read: prohibited-goods list not found | Catalogue: 14 SKUs, all Dell/Targus IT peripherals (monitors, keyboards, mouse, headset, earbuds, backpacks, USB-C adapter, HDMI cable). `store.html:428-437` official SA channel, NRCS/ICASA approvals held by importer | Present (provisional) | Nothing on the list looks like a typical high-risk category. Still check the actual PayFast list, especially any rule on **reselling** or **drop-shipping** (supplier-fulfilled stock, `delivery.html:125`) and on **radio devices** (earbuds = Bluetooth, ICASA) | UNCLEAR |
| 24 | PayFast name and logo used as permitted | Could not read: brand guidelines not found | `assets/payfast/payfast-white.svg` in the footer of 8 pages (e.g. `checkout.html:189`). Alt text "Payfast by Network", but body text says "PayFast" (`checkout.html:142`, `144`, `190`; `terms.html:144`) | Partial | Confirm where the logo SVG came from (it should be PayFast's official asset pack) and that a white-on-dark version is allowed. Use one spelling of the name. PayFast's current branding appears to use "Payfast"; that is unverified here | UNCLEAR |
| 25 | Card scheme and payment-method logos | Could not read: not quoted | Visa, Mastercard, Instant EFT, Apple Pay, Google Pay, Samsung Pay chips (`checkout.html:145`, `191`). Same methods listed in `terms.html:144` | Partial | Show only the methods actually switched on for our PayFast account; Apple/Google/Samsung Pay usually need separate activation. Confirm the scheme logos meet Visa/Mastercard artwork rules | UNCLEAR |
| 26 | Site complete and live, with no test paths | Could not read: not quoted | `checkout.html:143` shows "Checkout opens once payments go live". **`checkout.html:206-208` sandbox switch** (`?checkout=sandbox-test`) marked "REMOVE THIS LINE before the live PayFast switch" | Partial | Remove the sandbox line in the same change that moves the Worker to live PayFast credentials. Add it to the go-live checklist | UNCLEAR |

### Counts

| MEETS | GAP | UNCLEAR |
|---|---|---|
| 0 | 0 | 26 |

All 26 rows are UNCLEAR only because the PayFast clauses couldn't be read. Provisional site evidence: **17 Present, 9 Partial, 0 Missing.**

## Findings outside the PayFast terms (South African law)

These came up while reading our own policies. They are not PayFast clauses, so they are kept out of the counts. They are my reading of the statutes from memory, **not legal advice**. Have an attorney confirm them before relying on them. They matter for PayFast too: gateway terms commonly require merchants to comply with consumer law, which would turn rows 12 and 15 into GAPs.

| # | Issue | Where | Why it may be a problem | Suggested fix |
|---|---|---|---|---|
| L1 | 10% handling fee and non-refundable delivery charge on an ECTA cooling-off cancellation. No 7-day window stated | `cancellation.html:118`, `:122-125`; `returns.html:115`, `:136`, `:144` | ECTA s44 lets a consumer cancel within **7 days of receiving the goods**, and (as I recall s44(2)) the **only** charge allowed is the direct cost of returning the goods. A percentage handling fee is a different charge. "Ideally within 5 days" doesn't tell the customer their legal window | State the 7-day window plainly. Drop the 10% fee for s44 cancellations, and get legal advice on whether the outward delivery charge must be refunded |
| L2 | Store credit instead of a refund when goods are unavailable | `terms.html:152` | ECTA s46 (as I recall) requires the supplier to tell the consumer straight away and refund within 30 days when goods are unavailable. Holding the money as credit for 21 working days first can push the refund past 30 days | Refund within 30 days by default. Offer credit only if the customer asks |
| L3 | No telephone number, and no names of directors | site-wide (row 4) | ECTA s43(1) lists a telephone number and the names of office bearers among the information an online supplier must show | Add a phone number and director name(s) to `terms.html` section 01 |
| L4 | Damage report window may read as a time limit on CPA rights | `delivery.html:139` "within 5 working days" | Fine as a request, but it shouldn't read as cutting off the CPA s56 six-month right. The sentence that follows ("standard returns & refunds policy will apply") helps | Reword as "please tell us as soon as possible, ideally within 5 working days. This does not affect your six-month right" |

## Recommendations

1. **Unblock and finish this first.** Every MEETS/GAP call depends on clause text we don't have. It takes about 30 minutes once the pages are readable.
2. **Fix L1 and L2 before going live,** whatever PayFast says. These are consumer-law risks of their own, and an attorney review of the cancellation policy costs less than a chargeback dispute you can't win.
3. **Add the go-live checklist items** from rows 25 and 26: show only the payment methods actually enabled, and remove the sandbox switch.
4. **Turn this review into a reusable skill.** Steps: fetch the PSP terms, list the incorporated documents, grep the site for each requirement, and fill a table with file:line evidence. That's a repeatable procedure, and it could be re-run whenever PayFast updates its terms or the store adds a policy.
