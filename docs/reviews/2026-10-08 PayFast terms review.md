# PayFast terms review: whclips.co.za online store

- **Date:** 8 October 2026. Re-run 8 October 2026 at 23:30 UTC (against `c010e63`), and again at 23:55 UTC (against `fd29b37`).
- **Scope:** the customer-facing store at whclips.co.za, checked against PayFast's merchant terms
- **Site revision reviewed:** `main` at `fd29b37`. Earlier passes: `13edf11`, then `c010e63`.
- **Status:** findings only. No site file was changed.

## Source of the PayFast terms

- **Read:** *Payfast General Terms and Conditions*, effective April 2024, updated November 2025. This review used the copy saved in the company vault at `whclips/brain` → `Attachments/Payfast/general-terms-conditions.md` (vault commit `7d0a53e`), which was clipped from https://payfast.io/legal/general-terms-conditions/. That URL itself was blocked by this environment's network policy, so the vault copy hasn't been compared with the live page. It covers clauses 1–28 plus Schedules 1–4, all read in full. Clause 17 is missing from the copy; the numbering jumps from 16 to 18.
- **The website requirements sit in Schedule 1, clause 1.4** ("You shall include in your website the following"), together with **clause 11.5** (return policy at checkout) and **clause 15** (use of marks).
- **No separate prohibited/restricted-goods list exists in the General Terms.** The only goods rule is the definition of "Undesirable Products" (clause 28), used in clause 21.2(ii)(c). PayFast decides that at its own discretion.
- **Documents the General Terms make binding but that weren't available to read.** These are marked UNCLEAR where they matter:
  - the **Application** (our signed application: card types, acquiring mode, declared goods)
  - the **Card Scheme Rules** (Visa/Mastercard)
  - PayFast's **Privacy Notice**
  - the **Gateway Documentation** at payfast.io
  - "our policies … communicated by us from time to time" (clause 15.1), which would include any logo guidelines
- **Also in the vault folder:** `Knowledge Base.md`, `Widgets.md`, `Split Payment calculation.md` and `Updates to our end-user agreement.md`. These are integration and entity notes with no merchant-website rules.
- **Not verified from here:** the Cloudflare Worker source. The repo only contains `checkout.html`; the Worker's `POLICY_VERSION` check is taken from the Director's note of 9 October. The Worker file on the Director's PC (hash `1916649d…`) isn't the version IT approved (`6e72feb7…`), and IT has been asked which version is live.

## Summary

| MEETS | GAP | UNCLEAR | Total |
|---|---|---|---|
| 21 | 5 (2 open, 3 accepted by the Director) | 15 | 41 |

| Pass | Commit | MEETS | GAP | UNCLEAR | Rows |
|---|---|---|---|---|---|
| 1 | `13edf11` | 18 | 7 | 15 | 40 |
| 2 | `c010e63` | 21 | 4 (2 accepted) | 15 | 40 |
| 3 | `fd29b37` | 21 | 5 (3 accepted) | 15 | 41 (row 41 added) |

### What changed between `c010e63` and `fd29b37`

There are three commits: `c427512`, `c789f75` and `fd29b37`.

- **`c427512`** aligned the key-terms wording with the policies and disclosed Microsoft Clarity in `privacy.html:117` and `:141`. This fixes every wording point from pass 2 (row 4) and closes row 28.
- **`c789f75`** made two changes, and both **undo pass-2 fixes**:
  - The key-terms box is now `hidden` (`checkout.html:143`). It opens only if the customer clicks the "Terms & Conditions" link in the tick-box label (`:155`, handler `:373-380`).
  - The tick now reads "I have read and accept the Terms & Conditions". It no longer names the Cancellation Policy or the Returns & Refund Policy, and the error message at `:352` was cut back to match.
- **`fd29b37`** changed all five policy pages to "Effective 9 October 2026" (`terms.html:84`, `delivery.html:84`, `cancellation.html:84`, `returns.html:84`, `privacy.html:84`). The pages show the effective date only. The words "Version 2" from the Director's note don't appear on the published pages. `checkout.html:228` still sends `POLICY_VERSION = '2026-10-01'`. That is deliberate and accepted (row 41).
- **`catalogue.json`:** stock counts only. 520-BBLV and 450-BFFM still have an empty warranty and no spec rows (row 1, accepted).

### Rows that changed status in this pass

| Row | Requirement | Pass 2 | Pass 3 | Why |
|---|---|---|---|---|
| 2 | Refund policy acknowledged by click-to-accept (Sch 1 cl 1.4) | MEETS | **GAP** | `c789f75` cut the tick (`checkout.html:155`) back to "Terms & Conditions" only. The refund policy is no longer named on the click-to-accept, which is the same state that was a GAP in pass 1 |
| 3 | Terms on the checkout screen, "not in a separate hyper link" (cl 11.5, Sch 1 cl 1.4) | MEETS | **GAP** | The key terms are `hidden` by default (`checkout.html:143`) and appear only after clicking a link. A customer can tick both boxes and pay without the terms ever being shown |
| 4 | Return policy "including any restrictions" (cl 11.5) | GAP (narrowed) | **MEETS** | `c427512` fixed all four wording points: `:147` delivery refund now conditional, `:149` adds how to cancel and the loss-in-value deduction, `:151` adds the refund hold and the fault timing. The content is complete; whether it is *shown* is row 3 |
| 28 | Data Protection Laws (cl 16.1) | GAP | **MEETS** | `privacy.html:117` and `:141` disclose Microsoft Clarity (page interactions, cookies, not at checkout). Clarity loads on 7 pages and not on `checkout.html`, which matches the policy |
| 41 | Proof of what the cardholder agreed (cl 11.2) | (observation) | **GAP (accepted)** | Director's ruling of 9 October; see the row |

All other rows keep their pass-2 status.

## Checkout wording, line by line, against cl 11.5 and Sch 1 cl 1.4

The source is `checkout.html` at `fd29b37`. The box is `:143-153` (`hidden`); the order total is `:114`; the tick-boxes are `:155-156`; the pay button is `:159`; the box toggle is `:373-380`.

| Clause element | Checkout text (line) | Verdict |
|---|---|---|
| cl 11.5: disclose "at the time a Payment Transaction is processed" | Box is in the form before the pay button, but carries `hidden` (`:143`). It opens only on a click of the tick-box link (`:374-378`) | **Not met by default.** Disclosure depends on the customer choosing to click |
| cl 11.5 / Sch 1 cl 1.4: "displayed on the same screen view as the checkout screen" | On the same page as the total (`:114`), but not displayed until opened | **Not met by default** |
| cl 11.5 / Sch 1 cl 1.4: "should not be in a separate hyper link" | The only way to see the terms is the "Terms & Conditions" link in `:155`. It toggles the box in-page (`:375` stops it navigating), but to the customer it is a link. Without JavaScript it opens `terms.html` instead | **Not met.** The terms sit behind a hyperlink again |
| Sch 1 cl 1.4: refund policy acknowledged by "click-to-accept" | `:155` "I have read and accept the Terms & Conditions". The Cancellation and Returns & Refund policies are no longer named (they were in pass 2) | **Not met.** The tick doesn't identify the refund policy |
| cl 11.5: "fair policy for the return of goods or cancellation of services" | `:148-151` | Content meets. Fairness of the 10% fee and "ideally within 5 days" is row 27 (accepted) |
| cl 11.5: "including any restrictions" | `:149` now has return cost, 10% fee, delivery charge, condition and **loss-in-value deduction**. `:151` has the **refund hold** | Meets (content) |
| Consistency inside the box | `:147` "not refundable once your order has shipped" agrees with `:148` "refund everything you paid" | Fixed |
| Consistency with the policies | `:151` "within 30 days of the date you cancelled or, for faulty goods, within 30 days of us receiving and checking them" matches `cancellation.html:125` and `returns.html:146`. `:149` "email enquiries@whclips.co.za with your order number" matches `cancellation.html:120` | Fixed |
| Sch 1 cl 1.4: contact incl. email, currency, delivery, domicile, tariffs | `:146`, `:147` | Content meets, but only once the box is opened. The same facts are also visible at `:115` and in the footer (`:179-181`) |
| Sch 1 cl 1.4: "security capabilities and policy for transmission of payment card details" | `:161`, always visible | Meets |
| Sch 1 cl 1.4: "logos of Cards accepted in the format authorized by us" | `:162`, always visible | Format still UNCLEAR (row 10) |

**What would put rows 2 and 3 back to MEETS:**
1. Remove `hidden` from `checkout.html:143`. If the box must be compact, use an open-by-default `<details open>` so the customer can collapse it but sees it first.
2. Restore the policy names in the tick at `:155`, e.g. "I have read and accept the Terms & Conditions, including the Cancellation Policy and the Returns & Refund Policy". Keep the toggle link if wanted.

Both are markup-only changes. Both were in place at `c010e63`.

## Findings table

Quotes are taken word for word from the vault copy and kept under 15 words. "Sch 1" means Schedule 1. Line numbers refer to `fd29b37`.

| # | PayFast requirement (clause: quote) | Where our site stands (file:line) | Status | Suggested fix |
|---|---|---|---|---|
| 1 | **Sch 1 cl 1.4:** "Complete description of goods and/or services provided" | Product panel `store.html:371-391`. All 14 SKUs have a description. 520-BBLV and 450-BFFM still have no spec rows and an empty warranty value in `catalogue.json`, so `store.html:595` shows "the period is confirmed on request" | GAP (accepted) | **Closed by the Director's ruling.** Kept for the record |
| 2 | **Sch 1 cl 1.4:** "require the Cardholder to select a "click-to-accept" or other affirmative button" (to acknowledge the refund policy) | `checkout.html:155` "I have read and accept the Terms & Conditions"; enforced at `:352`. The Cancellation and Returns & Refund policies aren't named (they were at `c010e63`) | GAP | Restore the policy names in the `:155` label (see the line-by-line check) |
| 3 | **cl 11.5 and Sch 1 cl 1.4:** "displayed on the same screen view as the checkout screen" … "should not be in a separate hyper link" | Key terms box `checkout.html:143-153` carries `hidden` and opens only from the tick-box link (`:155`, `:373-380`). A customer can pay without it ever showing | GAP | Remove `hidden` at `:143`, or use `<details open>` |
| 4 | **cl 11.5:** "fair policy for the return of goods or cancellation of services", incl. restrictions, disclosed when the transaction is processed | Box content `checkout.html:147-151` is complete and consistent with `cancellation.html:112`, `:120`, `:123`, `:125` and `returns.html:146` | MEETS | Content only; the box must also be visible (row 3) |
| 5 | **Sch 1 cl 1.4:** "contact details of your customer service including an electronic mail address" | `checkout.html:146` (in the box). `terms.html:121-122`, `:124`. Footer on every store page, e.g. `checkout.html:179-181`, `store.html:715` | MEETS | The missing phone number is an ECTA point; see L3 |
| 6 | **Sch 1 cl 1.4:** "Transaction currency" | `checkout.html:115`, `:147`. `store.html:339`. `terms.html:146` | MEETS | — |
| 7 | **Sch 1 cl 1.4:** "export restrictions, as applicable" | `terms.html:186`, `delivery.html:119`. Checkout accepts only an SA province and a 4-digit postal code (`checkout.html:138-140`) | MEETS | — |
| 8 | **Sch 1 cl 1.4:** "delivery mode and policy" | `delivery.html:112-154`. Times in the checkout box (`checkout.html:147`) and the quote note (`:255`) | MEETS | — |
| 9 | **Sch 1 cl 1.4:** "country of your domicile" | `terms.html:146`, `:120`, `:193`. `checkout.html:146`, footer `:175`, `:179` | MEETS | — |
| 10 | **Sch 1 cl 1.4:** "logos of Cards accepted in the format authorized by us" | Visa and Mastercard chips at `checkout.html:162` and `:208`. The source of the logo files isn't recorded | UNCLEAR | Get the card-logo pack from PayFast (or the Visa/Mastercard merchant artwork pages), confirm these files match it, and record the source |
| 11 | **cl 15.1:** "display Card Schemes names and service marks of the Card types accepted" | `checkout.html:162`, footers `checkout.html:208`, `store.html:742` | MEETS | — |
| 12 | **cl 5.1 / 15.1:** card types are those "described in the Application"; marks shown only for types "accepted by you" | Six method chips (`checkout.html:162`, `:208`) and the same list in `terms.html:144`. Application not seen | UNCLEAR | Check the enabled methods in the PayFast dashboard and remove any that aren't on |
| 13 | **Sch 1 cl 1.4:** "other related tariffs and/ or regulations" | `checkout.html:115`, `:147`. `terms.html:131-134` | MEETS | — |
| 14 | **Sch 1 cl 1.4:** "security capabilities and policy for transmission of payment card details" | `checkout.html:161`, footer `:207`. `terms.html:144-145`. `privacy.html:116`, `:153` | MEETS | — |
| 15 | **cl 15.3:** use of PayFast's name or logo "shall not be without prior our written consent" | PayFast logo in the footer of 8 pages (e.g. `checkout.html:206`, `store.html:742`). No written consent found in the repo or vault | UNCLEAR | Ask PayFast for written consent and file it. Use one spelling of the name |
| 16 | **cl 15.4:** must not "create the impression that your goods or services are sponsored" | "Paid through PayFast" (`checkout.html:207`), "payment service provider" (`terms.html:144`), and we take responsibility (`terms.html:186`) | MEETS | — |
| 17 | **cl 12.3:** "advise the Cardholder of the time it will take to dispatch" | `delivery.html:125`, `:127`. `checkout.html:255` (quote note, always visible once a province is chosen) and `:147` | MEETS | — |
| 18 | **cl 12.3:** if goods aren't available in time, "the Cardholder shall be notified of that fact and the order re-confirmed" | `terms.html:152` and `cancellation.html:136`: we tell you; wait, choose another item, or cancel for a full refund within 30 days | MEETS | Minor: say who pays any price difference when the customer chooses another item |
| 19 | **cl 12.3:** "not to raise a Transaction Record prior to the goods being dispatched" (likewise cl 5.16) | Payment is taken at checkout (`checkout.html:159-161`); the order is "accepted when PayFast confirms your payment" (`terms.html:147`) | UNCLEAR | Ask PayFast whether 12.3 and 5.16 apply to an aggregation merchant shipping within 1–2 days |
| 20 | **cl 5.3:** "at the same price regardless of whether the payment is by Card". **cl 5.10(iii):** no "additional charge, surcharge, or other charge" | Total = items + delivery (`checkout.html:110-114`); no card fee | MEETS | — |
| 21 | **cl 5.2(ii):** "not impose minimum or maximum financial limits on Payment Transactions" | Only a stock-quantity cap (`checkout.html:240`) | MEETS | — |
| 22 | **cl 5.17(iii):** tax "added only where it is expressly required by the Applicable Law" | No VAT charged (`checkout.html:115`, `:147`; `terms.html:131`) | MEETS | — |
| 23 | **cl 11.7:** "only process a Refund to the same Card"; never more than the original amount | `returns.html:145`, `:147`. `cancellation.html:141`. `checkout.html:151` | MEETS | — |
| 24 | **cl 11.6:** "issue a Refund receipt and provide the Cardholder with a copy" | No refund confirmation mentioned in `returns.html` or `cancellation.html`; a back-office step | UNCLEAR | Promise a refund confirmation email, and make sure the refund procedure sends one |
| 25 | **cl 8.3:** receipt "presented to the Cardholder no later than seven (7) days". **Sch 1 cl 1.2** lists its contents, incl. "payment Transaction date and shipping date" | `store.html:687`; `terms.html:147`. Receipt contents not seen | UNCLEAR | Compare a sandbox receipt and our confirmation email with the Sch 1 cl 1.2 list; add the shipping date to the dispatch email |
| 26 | **cl 8.4:** keep receipts "for at least five (5) years following the date of completion" | `privacy.html:148` ("five to seven years") | MEETS | — |
| 27 | **Sch 1 cl 1.8:** "comply with Applicable Law and ensure that the Payment Transaction is legal". **cl 28** "Applicable Laws" includes "consumer protection laws (as applicable)" | `cancellation.html:118`, `:124`; `returns.html:144`; `checkout.html:149` ("ideally within 5 days", 10% handling fee) | GAP (accepted) | **Director's ruling:** known risk until PayFast says otherwise. If raised, see L1 |
| 28 | **cl 16.1:** "comply with the applicable Data Protection Laws and Privacy Notice" | `privacy.html:117` discloses Microsoft Clarity (page interactions, cookies, "not at checkout"); `:141` lists Cloudflare, GitHub, Google, Microsoft and Cloudinary. Clarity loads on `index`, `store`, `about`, `clips`, `contact`, `careers` and `careers-apply`, and not on `checkout.html`, as stated. PayFast's own Privacy Notice wasn't available | MEETS | Read PayFast's Privacy Notice once it can be fetched (row 40) |
| 29 | **cl 16.5:** tell PayFast of a data breach "not beyond 24 hours of the occurrence of such an incident" | `privacy.html:153` names customers and the Regulator only; a procedure item | UNCLEAR | Add PayFast (legal@network.global and the merchant contact) to the incident procedure |
| 30 | **cl 16.10:** "not to retain or store magnetic stripe or CVV/CVV2/CVC2" | Redirect to PayFast (`checkout.html:161`, `terms.html:145`); the browser only sends the signed order (`checkout.html:361`) | MEETS | — |
| 31 | **cl 16.9:** "at all times comply with the requirement of (a) PCI DSS", incl. signing forms such as an SAQ | No SAQ found in the repo or vault | UNCLEAR | Ask PayFast which SAQ applies (normally SAQ A for a hosted redirect), complete it and file it |
| 32 | **Sch 1 cl 1.6:** "capability for secure sockets layer encryption to the minimum standard" | GitHub Pages with custom domain (`CNAME`). The live site couldn't be reached from this environment | UNCLEAR | `curl -sI http://whclips.co.za/` should return 301 to `https://`; `curl -sI https://whclips.co.za/` should return 200. Confirm "Enforce HTTPS" in GitHub Pages settings |
| 33 | **Sch 1 cl 1.5:** "notify us in writing, of any modification to your website" (and any attack) | `c010e63`, `c427512`, `c789f75` and `fd29b37` all changed the checkout or the policies. Nothing shows how notices to PayFast are handled | UNCLEAR | Report these changes in the PayFast email, and ask what counts as a "modification" going forward |
| 34 | **Sch 1 cl 1.9:** "quarterly Authorized Scanning Vendor (ASV) scan and an annual Web Application scan" | No scan record found | UNCLEAR | Ask PayFast whether it applies to a hosted-redirect aggregation merchant |
| 35 | **Sch 3 cl 4.1:** "provide us in writing, the URLs which are intended to be used" | Shop link sent to PayFast (vault, 2026-10-01). Worker domain (`checkout.html:221`) not shown as approved | UNCLEAR | Confirm both `whclips.co.za` and the Worker domain are approved in writing before the live keys |
| 36 | **cl 2.3:** "notify to us in writing before you make any changes" (to the licensed goods/services) | 14 IT peripheral SKUs (`catalogue.json`). Application not seen | UNCLEAR | Check the Application's business description covers IT hardware retail |
| 37 | **cl 28 / 21.2(ii)(c):** "Undesirable Products": PayFast "considers undesirable for any reason, including ethical or moral reasons" | Mainstream branded IT peripherals (`store.html:428-437`) | MEETS | Ask before adding anything unusual |
| 38 | **cl 5.17(vi):** transaction "not submitted for or on behalf of third party" | We sell as principal (`terms.html:186`, `:118`; `checkout.html:146`) | MEETS | — |
| 39 | **cl 14.1:** "immediately notify us if the said service provider will have any access" | Cloudflare Worker (`checkout.html:221`), GitHub, and n8n/EspoCRM/Odoo downstream | UNCLEAR | Tell PayFast in writing which providers touch the integration, the Worker at minimum |
| 40 | **cl 15.1, 16.1, 28:** documents made binding: Card Scheme Rules, Privacy Notice, Gateway Documentation, the Application | Not in the vault and not reachable from here | UNCLEAR | Save the Application and PayFast's Privacy Notice into `Attachments/Payfast/`, then re-check rows 10, 12, 15, 28 and 36 |
| 41 | **cl 11.2:** to fight a chargeback, "prove to our satisfaction that the Payment Transaction was authorized by the Cardholder" (which includes showing the terms the cardholder accepted) | The policies are now effective 9 October 2026 (`terms.html:84` and the other four pages, `:84`). But `checkout.html:228` still sends `POLICY_VERSION = '2026-10-01'`, which is stored with each order. Per the Director, the Worker enforces the same value, so changing only one side makes every checkout fail. The Worker source isn't in this repo and is unverified from here | GAP (accepted) | **Director's ruling (9 Oct 2026):** known, deliberate gap. Only sandbox orders exist, and checkout stays closed to the public until PayFast approves and the live keys are in. The Worker constant (IT change review and deploy) and `checkout.html:228` must change together **before the first real order**. Make it a go-live gate (below) |

## Findings outside the PayFast clauses (South African law)

These come from reading our own policies. They are my reading of the statutes from memory, **not legal advice**.

| # | Issue | Where | Status | Note |
|---|---|---|---|---|
| L1 | 10% handling fee and non-refundable delivery charge on an ECTA cooling-off cancellation; no 7-day window stated | `cancellation.html:118`, `:122-125`; `returns.html:115`, `:136`, `:144`; `checkout.html:149` | Accepted risk (Director's ruling, row 27) | ECTA s44: 7 days from receipt; as I recall s44(2), the only charge allowed is the direct cost of return |
| L2 | Store credit instead of a refund when goods are unavailable | `terms.html:152` | Resolved in `c010e63` | — |
| L3 | No telephone number; no director names | `terms.html:116-124`, `checkout.html:146` | Open | ECTA s43(1) lists both. PayFast only asks for an email address (row 5) |
| L4 | Damage-report window may read as a time limit on CPA rights | `delivery.html:139` | Open | Reword as a request that doesn't affect the six-month CPA s56 right |

## Go-live gates (no PayFast clause unless stated)

1. **Policy version (row 41, cl 11.2).** The Worker's `POLICY_VERSION` and `checkout.html:228` must both read the 9 October version before the first real order. First confirm which Worker build is live (`1916649d…` vs IT-approved `6e72feb7…`).
2. **Rows 2 and 3.** Show the key terms by default and name both policies in the tick (see the line-by-line check).
3. `checkout.html:223-225` and `:383`: remove the `?checkout=sandbox-test` switch in the same change that moves the Worker to live keys.
4. `checkout.html:160`: remove "Checkout opens once payments go live" at the switch.

## Recommended order of work

1. **Rows 2 and 3 (one markup change to `checkout.html:143` and `:155`).** These are the two open gaps, and both were fixed at `c010e63`.
2. **One email to PayFast** covering rows 3 (whether key terms inline plus the full text linked is enough), 15, 19, 31, 33 (report the four recent site changes), 34, 35 and 39.
3. **Row 41 with IT:** confirm the live Worker build, then change the Worker constant and `checkout.html:228` together.
4. **Rows 10, 12, 24, 25 and 32 (small checks).** None blocks go-live.
