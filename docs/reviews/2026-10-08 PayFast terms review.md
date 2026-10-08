# PayFast terms review: whclips.co.za online store

- **Date:** 8 October 2026. Re-run 8 October 2026 at 23:30 UTC.
- **Scope:** the customer-facing store at whclips.co.za, checked against PayFast's merchant terms
- **Site revision reviewed:** `main` at `c010e63`. The first pass was against `13edf11`.
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

## Summary

| MEETS | GAP | UNCLEAR | Total |
|---|---|---|---|
| 21 | 4 (2 open, 2 accepted by the Director) | 15 | 40 |

The first pass (`13edf11`) scored 18 MEETS / 7 GAP / 15 UNCLEAR.

### What changed between `13edf11` and `c010e63`

Five files differ: `checkout.html`, `terms.html`, `cancellation.html`, `privacy.html` and `catalogue.json`.

- `checkout.html` gained the "Before you pay: the key terms" box (`checkout.html:143-153`), and the tick-box now names both policies (`:155`, enforced at `:352`).
- `terms.html:152` and `cancellation.html:136` were reworded for unavailable items.
- `privacy.html:141` now lists Google (fonts) and Cloudinary (product images).
- `catalogue.json` changed only timestamps and stock counts. The descriptions for 520-BBLV and 450-BFFM are the same text as at `13edf11`, still with no spec rows and no warranty value. If new descriptions were written upstream (e.g. in the store-config feed), they haven't reached `catalogue.json` yet. Row 1 is closed by the Director's ruling either way.

### Rows that changed status

| Row | Requirement | Was | Now | Why |
|---|---|---|---|---|
| 2 | Click-to-accept for the refund policy (Sch 1 cl 1.4) | GAP | **MEETS** | `checkout.html:155` is a required tick naming the Cancellation Policy and the Returns & Refund Policy; the script refuses without it (`:352`) |
| 3 | Terms on the checkout screen, not a separate hyperlink (cl 11.5, Sch 1 cl 1.4) | GAP | **MEETS** | The key terms box `checkout.html:143-153` is on the same page as the total (`:114`), before the pay button (`:159`). One interpretation point remains; see the line-by-line check |
| 18 | Unavailable goods: notify and re-confirm (cl 12.3) | GAP | **MEETS** | `terms.html:152` and `cancellation.html:136` now say: we tell you, you may wait, choose another item or cancel for a full refund within 30 days. The two policies agree |
| 1 | Complete description (Sch 1 cl 1.4) | GAP | **GAP (accepted)** | Director's ruling: closed. Underlying data unchanged (see above) |
| 27 | Applicable law incl. consumer protection (Sch 1 cl 1.8) | GAP | **GAP (accepted)** | Director's ruling: the ECTA s44 7-day window and 10% handling fee stay as a known risk until PayFast says otherwise. The unavailable-item part (old L2) is fixed |
| 4 | Fair return policy "including any restrictions" (cl 11.5) | GAP | **GAP (narrowed)** | The restrictions are now disclosed at checkout, but the box contradicts itself on the delivery-charge refund and leaves out two restrictions. Wording fixes only |
| 28 | Data Protection Laws (cl 16.1) | GAP | **GAP (changed)** | Google and Cloudinary are now listed. But `store.html:298-304` and `index.html:19-25` load **Microsoft Clarity**, while `privacy.html:117` says "We do not use advertising or tracking cookies". **I missed Clarity on the first pass**; it was already on `13edf11` |

All other rows keep their status. Their checkout line references have been updated to `c010e63`.

## Checkout wording, line by line, against cl 11.5 and Sch 1 cl 1.4

The source is `checkout.html` at `c010e63`. The box is `checkout.html:143-153`; the order total is `:114`; the tick-box is `:155`; the pay button is `:159`.

| Clause element | Checkout text (line) | Verdict |
|---|---|---|
| cl 11.5: disclose "at the time a Payment Transaction is processed" | Box sits inside the checkout form, before the tick-boxes and the pay button (`:143` → `:159`) | Meets |
| cl 11.5 / Sch 1 cl 1.4: "displayed on the same screen view as the checkout screen" that presents the total | The total is on the same page (`:114`). On wide screens the two cards sit side by side; on a phone the totals card is followed by the form containing the box. Either way the box is in "the sequence of website pages the Cardholder accesses during the checkout process" | Meets |
| cl 11.5 / Sch 1 cl 1.4: "should not be in a separate hyper link" | The key terms are inline (`:146-151`). The full Terms of Sale (risk and ownership, liability, complaints, governing law) are still link-only (`:153`, `:155`) | Meets, with one open point: if PayFast reads "the terms and conditions of the purchase" as the whole document rather than the key terms, add a collapsible `<details>` with the full Terms of Sale under the box. Put this question in the PayFast email |
| Sch 1 cl 1.4: refund policy acknowledged by "click-to-accept" | `:155` required tick: "I accept the Terms & Conditions, including the Cancellation Policy and the Returns & Refund Policy". Refused at `:352` if unticked | Meets |
| cl 11.5: "fair policy for the return of goods or cancellation of services" | `:148` before shipment, `:149` after shipment, `:150` faulty goods, `:151` refunds | Meets as a disclosure. Fairness of the 10% fee and the "ideally within 5 days" wording is row 27, accepted by the Director |
| cl 11.5: "including any restrictions" | `:149` states: direct return cost, 10% handling fee, delivery charge not refundable, goods back complete and in the condition received | **Two restrictions missing.** (a) The deduction for loss in value if goods come back damaged, used or incomplete (`cancellation.html:123`). (b) The refund may be held until the goods are back and checked (`cancellation.html:125`) |
| Consistency inside the box | `:147` says "The delivery charge … is not refundable" with no condition. `:148` says cancelling before shipment refunds "everything you paid", which matches `cancellation.html:112` | **Contradiction.** Fix `:147` to "The delivery charge is not refundable once your order has shipped" |
| Consistency with the policies | `:151` "within 30 days of the cancellation" applies to all refunds. For faulty goods, `returns.html:146` says 30 days from when we receive and check the goods | **Minor mismatch.** Reword `:151` to "within 30 days of the cancellation, or for faulty goods, of when we receive them back" |
| Consistency with the policies | `:147` dispatch 1–2 / delivery 2–3 and 2–10 working days = `delivery.html:125-126`. `:148` = `cancellation.html:112`. `:150` = `returns.html:135`, `:143` | Consistent |
| `:149` how to cancel after shipment | Not stated in the bullet (`:148` says "Email us your order number" only for before shipment) | Minor. Add "Email us your order number" to `:149` as well, matching `cancellation.html:120` |
| Sch 1 cl 1.4: "contact details of your customer service including an electronic mail address" | `:146` enquiries@whclips.co.za, hours | Meets |
| Sch 1 cl 1.4: "Transaction currency" | `:147` "All prices are in South African Rand", also `:115` | Meets |
| Sch 1 cl 1.4: "delivery mode and policy" | `:147` dispatch and delivery times. The mode (courier) is in `delivery.html:119`, linked at `:153` | Meets |
| Sch 1 cl 1.4: "country of your domicile" | `:146` full address, South Africa | Meets |
| Sch 1 cl 1.4: "other related tariffs and/ or regulations" | `:147` "no VAT is charged", delivery charge in total | Meets |
| Sch 1 cl 1.4: "security capabilities and policy for transmission of payment card details" | `:161` "redirected to PayFast to pay securely. Your card details never reach our systems." | Meets |
| Sch 1 cl 1.4: "logos of Cards accepted in the format authorized by us" | `:162` Visa and Mastercard chips | Format still UNCLEAR (row 10) |

All four of the checkout fixes above are wording changes to `checkout.html:147-151`. None needs code.

## Findings table

Quotes are taken word for word from the vault copy and kept under 15 words. "Sch 1" means Schedule 1. Line numbers refer to `c010e63`.

| # | PayFast requirement (clause: quote) | Where our site stands (file:line) | Status | Suggested fix |
|---|---|---|---|---|
| 1 | **Sch 1 cl 1.4:** "Complete description of goods and/or services provided" | Product panel `store.html:371-391`. All 14 SKUs have a description. 520-BBLV and 450-BFFM still have no spec rows and an empty warranty value in `catalogue.json`, so `store.html:595` shows "the period is confirmed on request" | GAP (accepted) | **Closed by the Director's ruling.** Kept for the record. If the warranty periods become available, add them to the feed |
| 2 | **Sch 1 cl 1.4:** "require the Cardholder to select a "click-to-accept" or other affirmative button" (to acknowledge the refund policy) | Required tick `checkout.html:155` names the Terms & Conditions, the Cancellation Policy and the Returns & Refund Policy; enforced at `:352` | MEETS | — |
| 3 | **cl 11.5 and Sch 1 cl 1.4:** "displayed on the same screen view as the checkout screen" … "should not be in a separate hyper link" | Key terms box `checkout.html:143-153` on the checkout page with the total (`:114`), before the pay button (`:159`). Full documents linked at `:153` | MEETS | Ask PayFast whether key terms inline plus the full text linked is enough. If not, add a `<details>` block with the full Terms of Sale (see the line-by-line check) |
| 4 | **cl 11.5:** "fair policy for the return of goods or cancellation of services", incl. restrictions, disclosed when the transaction is processed | Restrictions now at `checkout.html:149`. Missing: loss-in-value deduction (`cancellation.html:123`) and refund held until goods are checked (`cancellation.html:125`). `:147` contradicts `:148` on the delivery-charge refund | GAP (narrowed) | Wording only: fix `:147` ("not refundable once your order has shipped"), add both restrictions to `:149`, align `:151` with `returns.html:146` |
| 5 | **Sch 1 cl 1.4:** "contact details of your customer service including an electronic mail address" | `checkout.html:146`. `terms.html:121-122`, `:124`. Footer on every store page, e.g. `checkout.html:179-181`, `store.html:715` | MEETS | None needed for PayFast. The missing phone number is an ECTA point; see L3 |
| 6 | **Sch 1 cl 1.4:** "Transaction currency" | `checkout.html:115`, `:147`. `store.html:339`. `terms.html:146` | MEETS | — |
| 7 | **Sch 1 cl 1.4:** "export restrictions, as applicable" | `terms.html:186` (SA customers only), `delivery.html:119`. Checkout accepts only an SA province and a 4-digit postal code (`checkout.html:138-140`) | MEETS | — |
| 8 | **Sch 1 cl 1.4:** "delivery mode and policy" | `delivery.html:112-154`. Times in the checkout box (`checkout.html:147`) and the quote note (`:255`) | MEETS | — |
| 9 | **Sch 1 cl 1.4:** "country of your domicile" | `terms.html:146`, `:120`, `:193`. `checkout.html:146`. Name and registration number shown (`terms.html:118-119`, `checkout.html:175`) | MEETS | — |
| 10 | **Sch 1 cl 1.4:** "logos of Cards accepted in the format authorized by us" | Visa and Mastercard chips at `checkout.html:162` and `:208`. The source of the logo files isn't recorded | UNCLEAR | Get the card-logo pack from PayFast (or the Visa/Mastercard merchant artwork pages), confirm these files match it, and record the source |
| 11 | **cl 15.1:** "display Card Schemes names and service marks of the Card types accepted" | Visa and Mastercard marks at `checkout.html:162`, footers `checkout.html:208`, `store.html:742` | MEETS | — |
| 12 | **cl 5.1 / 15.1:** card types are those "described in the Application"; marks shown only for types "accepted by you" | Six method chips (`checkout.html:162`, `:208`) and the same list in `terms.html:144`. Application not seen | UNCLEAR | Check the enabled methods in the PayFast dashboard and remove any that aren't on |
| 13 | **Sch 1 cl 1.4:** "other related tariffs and/ or regulations" | `checkout.html:115`, `:147`. `terms.html:131-134` | MEETS | — |
| 14 | **Sch 1 cl 1.4:** "security capabilities and policy for transmission of payment card details" | `checkout.html:161`, footer `:207`. `terms.html:144-145`. `privacy.html:116`, `:153` | MEETS | — |
| 15 | **cl 15.3:** use of PayFast's name or logo "shall not be without prior our written consent" | PayFast logo in the footer of 8 pages (e.g. `checkout.html:206`, `store.html:742`). No written consent found in the repo or vault | UNCLEAR | Ask PayFast for written consent and file it. Use one spelling of the name ("Payfast" in their terms; our site mixes "PayFast" and "Payfast by Network") |
| 16 | **cl 15.4:** must not "create the impression that your goods or services are sponsored" | "Paid through PayFast" (`checkout.html:207`), "payment service provider" (`terms.html:144`), and we take responsibility (`terms.html:186`) | MEETS | — |
| 17 | **cl 12.3:** "advise the Cardholder of the time it will take to dispatch" | `checkout.html:147` ("We dispatch within 1 to 2 working days"). `delivery.html:125`, `:127`. `checkout.html:255` | MEETS | — |
| 18 | **cl 12.3:** if goods aren't available in time, "the Cardholder shall be notified of that fact and the order re-confirmed" | `terms.html:152`: "we tell you straight away. You may wait for stock, choose a different item, or cancel for a full refund within 30 days." `cancellation.html:136` says the same | MEETS | Minor: say who pays any price difference when the customer chooses a different item |
| 19 | **cl 12.3:** "not to raise a Transaction Record prior to the goods being dispatched" (likewise cl 5.16) | Payment is taken at checkout (`checkout.html:159-161`); the order is "accepted when PayFast confirms your payment" (`terms.html:147`) | UNCLEAR | Ask PayFast whether 12.3 and 5.16 apply to an aggregation merchant shipping within 1–2 days |
| 20 | **cl 5.3:** "at the same price regardless of whether the payment is by Card". **cl 5.10(iii):** no "additional charge, surcharge, or other charge" | Total = items + delivery (`checkout.html:110-114`); no card fee | MEETS | — |
| 21 | **cl 5.2(ii):** "not impose minimum or maximum financial limits on Payment Transactions" | Only a stock-quantity cap (`checkout.html:240`) | MEETS | — |
| 22 | **cl 5.17(iii):** tax "added only where it is expressly required by the Applicable Law" | No VAT charged (`checkout.html:115`, `:147`; `terms.html:131`) | MEETS | — |
| 23 | **cl 11.7:** "only process a Refund to the same Card"; never more than the original amount | `returns.html:145`, `:147`. `cancellation.html:141`. `checkout.html:151` | MEETS | — |
| 24 | **cl 11.6:** "issue a Refund receipt and provide the Cardholder with a copy" | No refund confirmation mentioned in `returns.html` or `cancellation.html`; a back-office step | UNCLEAR | Add a line promising a refund confirmation email, and make sure the refund procedure sends one (e.g. the Odoo credit note) |
| 25 | **cl 8.3:** receipt "presented to the Cardholder no later than seven (7) days". **Sch 1 cl 1.2** lists its contents, incl. "payment Transaction date and shipping date" | `store.html:687`; `terms.html:147`. Receipt contents not seen | UNCLEAR | Compare a sandbox receipt and our confirmation email with the Sch 1 cl 1.2 list; add the shipping date to the dispatch email |
| 26 | **cl 8.4:** keep receipts "for at least five (5) years following the date of completion" | `privacy.html:148` ("five to seven years") | MEETS | — |
| 27 | **Sch 1 cl 1.8:** "comply with Applicable Law and ensure that the Payment Transaction is legal". **cl 28** "Applicable Laws" includes "consumer protection laws (as applicable)" | `cancellation.html:118` ("ideally within 5 days"), `:124` and `returns.html:144` (10% handling fee); repeated at `checkout.html:149`. The unavailable-item part is fixed (row 18) | GAP (accepted) | **Director's ruling:** known risk, left until PayFast says otherwise. If PayFast raises it, see L1 |
| 28 | **cl 16.1:** "comply with the applicable Data Protection Laws and Privacy Notice" | `privacy.html:141` now lists Google (fonts) and Cloudinary (images). **But** `store.html:298-304` and `index.html:19-25` load Microsoft Clarity (tag `xhn6f6xk36`), an analytics and session-recording service that sets cookies. Clarity isn't listed, and `privacy.html:117` says "We do not use advertising or tracking cookies" | GAP | Either remove the Clarity tag from `store.html` and `index.html`, or disclose it in `privacy.html` (purpose, cookies, session recording, Microsoft as recipient, servers outside SA) and drop the "no tracking cookies" sentence. Clarity isn't on `checkout.html` |
| 29 | **cl 16.5:** tell PayFast of a data breach "not beyond 24 hours of the occurrence of such an incident" | `privacy.html:153` names customers and the Regulator only; a procedure item | UNCLEAR | Add PayFast (legal@network.global and the merchant contact) to the incident procedure |
| 30 | **cl 16.10:** "not to retain or store magnetic stripe or CVV/CVV2/CVC2" | Redirect to PayFast (`checkout.html:161`, `terms.html:145`); the browser only sends the signed order (`checkout.html:361`) | MEETS | — |
| 31 | **cl 16.9:** "at all times comply with the requirement of (a) PCI DSS", incl. signing forms such as an SAQ | No SAQ found in the repo or vault | UNCLEAR | Ask PayFast which SAQ applies (normally SAQ A for a hosted redirect), complete it and file it |
| 32 | **Sch 1 cl 1.6:** "capability for secure sockets layer encryption to the minimum standard" | GitHub Pages with custom domain (`CNAME`). The live site couldn't be reached from this environment | UNCLEAR | `curl -sI http://whclips.co.za/` should return 301 to `https://`; `curl -sI https://whclips.co.za/` should return 200. Confirm "Enforce HTTPS" in GitHub Pages settings |
| 33 | **Sch 1 cl 1.5:** "notify us in writing, of any modification to your website" (and any attack) | `c010e63` itself changed the checkout and three policies. Nothing shows how notices to PayFast are handled | UNCLEAR | Include `c010e63`'s changes in the PayFast email, and ask what counts as a "modification" going forward |
| 34 | **Sch 1 cl 1.9:** "quarterly Authorized Scanning Vendor (ASV) scan and an annual Web Application scan" | No scan record found | UNCLEAR | Ask PayFast whether it applies to a hosted-redirect aggregation merchant; if it applies and isn't done, this becomes a GAP |
| 35 | **Sch 3 cl 4.1:** "provide us in writing, the URLs which are intended to be used" | Shop link sent to PayFast (vault, 2026-10-01). Worker domain (`checkout.html:221`) not shown as approved | UNCLEAR | Confirm both `whclips.co.za` and the Worker domain are approved in writing before the live keys |
| 36 | **cl 2.3:** "notify to us in writing before you make any changes" (to the licensed goods/services) | 14 IT peripheral SKUs (`catalogue.json`). Application not seen | UNCLEAR | Check the Application's business description covers IT hardware retail |
| 37 | **cl 28 / 21.2(ii)(c):** "Undesirable Products": PayFast "considers undesirable for any reason, including ethical or moral reasons" | Mainstream branded IT peripherals (`store.html:428-437`) | MEETS | Ask before adding anything unusual |
| 38 | **cl 5.17(vi):** transaction "not submitted for or on behalf of third party" | We sell as principal (`terms.html:186`, `:118`; `checkout.html:146`) | MEETS | — |
| 39 | **cl 14.1:** "immediately notify us if the said service provider will have any access" | Cloudflare Worker (`checkout.html:221`), GitHub, and n8n/EspoCRM/Odoo downstream | UNCLEAR | Tell PayFast in writing which providers touch the integration, the Worker at minimum |
| 40 | **cl 15.1, 16.1, 28:** documents made binding: Card Scheme Rules, Privacy Notice, Gateway Documentation, the Application | Not in the vault and not reachable from here | UNCLEAR | Save the Application and PayFast's Privacy Notice into `Attachments/Payfast/`, then re-check rows 10, 12, 15, 28 and 36 |

## Observation: policy version not bumped (not scored)

`c010e63` changed the wording of `terms.html` section 05, `cancellation.html` section 04 and `privacy.html` section 03. But all five policies still say "Effective 1 October 2026", and `checkout.html:228` still sends `POLICY_VERSION = '2026-10-01'`, which the Worker stores with each order.

So an order placed today records acceptance of the 1 October text, even though the customer saw the new text. That matters when a chargeback has to be fought: cl 11.2 puts the burden on us to "prove to our satisfaction" what the cardholder agreed. It also breaks the revision discipline the company uses for governed documents.

**Fix:** set a new effective date on the three changed policies, change `POLICY_VERSION` to match (the Worker refuses a mismatch, so change both together, as the comment at `checkout.html:226-227` says), and archive the 1 October versions.

## Findings outside the PayFast clauses (South African law)

These come from reading our own policies. They are my reading of the statutes from memory, **not legal advice**.

| # | Issue | Where | Status | Note |
|---|---|---|---|---|
| L1 | 10% handling fee and non-refundable delivery charge on an ECTA cooling-off cancellation; no 7-day window stated | `cancellation.html:118`, `:122-125`; `returns.html:115`, `:136`, `:144`; `checkout.html:149` | Accepted risk (Director's ruling, row 27) | ECTA s44: 7 days from receipt; as I recall s44(2), the only charge allowed is the direct cost of return |
| L2 | Store credit instead of a refund when goods are unavailable | `terms.html:152` | **Resolved** in `c010e63` | Now: wait, choose another item, or a full refund within 30 days |
| L3 | No telephone number; no director names | `terms.html:116-124`, `checkout.html:146` | Open | ECTA s43(1) lists both. PayFast only asks for an email address (row 5) |
| L4 | Damage-report window may read as a time limit on CPA rights | `delivery.html:139` | Open | Reword as a request that doesn't affect the six-month CPA s56 right |

## Go-live checklist items (no PayFast clause)

- `checkout.html:223-225`: the `?checkout=sandbox-test` switch ("REMOVE THIS LINE before the live PayFast switch"). Also `checkout.html:375`, which carries the same parameter on the back link. Remove both in the same change that moves the Worker to live keys.
- `checkout.html:160`: "Checkout opens once payments go live" goes at the switch.

## Recommended order of work

1. **Row 28 (Clarity).** Remove the tag or disclose it. This is the only open GAP that could look like a misstatement to a customer, since the privacy policy says we don't use tracking cookies.
2. **Row 4 and the policy-version observation (one change).** Fix the wording at `checkout.html:147`, `:149` and `:151`, set the new effective date and `POLICY_VERSION`, and archive the 1 October policies.
3. **One email to PayFast** covering rows 3 (open point), 15, 19, 31, 33 (including the `c010e63` changes), 34, 35 and 39.
4. **Rows 10, 12, 24, 25 and 32 (small checks).** None blocks go-live.
