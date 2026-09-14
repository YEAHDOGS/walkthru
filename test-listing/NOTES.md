# Walkthru test listing — candidate for first internal demo

**Listing URL:** https://www.airbnb.com/rooms/903371890884050782
**Title:** Contemporary Home | Cozy North Dallas Neighborhood
**Type:** Entire home in Dallas, Texas — 5 guests, 2 bedrooms, 2 beds, 2 baths

## Price
Not visible on the public page without selecting dates ("Add your travel dates for exact pricing").
No nightly price or fee breakdown could be confirmed from the fetched listing text.

## Host
- **Dustin — Superhost**, 5 years hosting
- 478 host reviews, 4.94 average rating
- 100% response rate, responds within an hour
- Co-host: Chris

## Reviews / standing
- 4.94 / 5 from **165 reviews** (95% five-star)
- Badged **"Top 1% of homes"** and "Guest favorite" by Airbnb
- Cleanliness 4.9, accuracy 4.9, check-in 5.0, communication 5.0, location 5.0, value 4.9

## Photos
- Exact photo count not exposed in the fetched page text. Listing description references
  a "sleek modern design," "beautiful kitchen," and "great outdoor space," consistent with
  a well-photographed, design-forward home.
- **Photo download was blocked this run** (see below). 0 photos saved; `test-listing/`
  directory is ready for them.

## Existing video
- **None observed.** The fetched listing page text contained no video hero or video
  section — this listing appears to have no promo video, which is exactly the gap
  Walkthru sells into.

## Why this listing is a good Walkthru test
1. **Ideal customer profile:** a professional Superhost (5 years, 478 reviews, 100%
   response rate) running a top-1%-ranked home — the exact host archetype most likely
   to pay for AI promo videos, and the demo will resonate with similar prospects.
2. **Design-forward interior:** the host's own copy ("no stone left unturned with this
   sleek modern design") plus near-perfect design-adjacent scores signal modern,
   photogenic interiors — the best raw material for photo→video generation tests.
3. **Room variety for a walkthrough arc:** 2 bed / 2 bath layout plus a called-out
   kitchen and outdoor space gives the classic exterior → entry → living → kitchen →
   bedrooms → baths → amenities shot sequence a demo video needs.
4. **No existing video:** nothing to compete with or be compared against; a clean
   before/after story for the internal demo ("listing had zero video; Walkthru made one").
5. **Representative mid-market segment:** a North Dallas 2/2 whole home — neither a
   budget private room nor a luxury mansion — matching the realistic nightly-price
   band Walkthru's target customers sit in.

## Photo-download block (2026-09-13)
- `browser_open` on the listing page succeeded once and returned full listing text,
  but **no Images: footnote** was emitted (gallery images are JS-lazy-loaded and the
  text extractor didn't surface them).
- A follow-up `browser_open` on the regional variant (airbnb.ca) failed, and the
  session was instructed not to retry or reproduce the blocked fetch via exec/curl
  this turn. A search-engine alternate route for the listing's direct photo URLs
  returned nothing usable.
- **To finish:** re-run with an agent/session that has live browser access — open the
  listing (or its photo tour), capture the muscache image URLs from the Images:
  footnote, then `curl` 8–12 of them into this directory as 01.jpg…12.jpg in
  viewing order (exterior → entry → living → kitchen → bedrooms → baths → amenities).
  Do NOT substitute stock or third-party photos — the test set must be this listing's
  actual photos.
- No one was contacted, nothing was booked, no accounts were created.
