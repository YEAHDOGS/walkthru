<script>
  import { onMount } from 'svelte';
  import { PRODUCT_NAME, MAILTO_LINK, TIERS, STEPS } from './lib/brand.js';

  onMount(() => {
    const panels = [...document.querySelectorAll('.panel')];

    // Staggered clip reveals — observe the PANEL (clip-path on the text
    // itself zeroes its intersection ratio, so the panel is the trigger).
    // Text elements only, never images.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.rv').forEach((el) => el.classList.add('in'));
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.2 }
    );
    panels.forEach((p) => io.observe(p));

    // Parallax background drift — transform only, rAF-throttled.
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      for (const p of panels) {
        const bg = p.querySelector('.pbg');
        if (!bg) continue;
        const r = p.getBoundingClientRect();
        const off = (r.top + r.height / 2 - vh / 2) * -0.12;
        bg.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<svelte:head>
  <title>{PRODUCT_NAME} — Your space, in motion.</title>
  <meta
    name="description"
    content="AI promo videos and interactive 3D tours for Airbnbs, wedding venues, and listings. Photos in. Bookings out."
  />
</svelte:head>

<main>
  <!-- 1 · HERO -->
  <section class="panel" aria-label="Intro">
    <div class="pbg g-hero" aria-hidden="true"></div>
    <div class="scrim s-hero" aria-hidden="true"></div>
    <div class="giant" aria-hidden="true">WALK</div>
    <div class="content c-top-left">
      <p class="kicker rv">{PRODUCT_NAME}</p>
      <h1 class="h-display rv" style="--d:.08s">Your space,<br />in motion.</h1>
      <p class="sub rv" style="--d:.16s">Photos in. Bookings out.</p>
    </div>
    <div class="cue" aria-hidden="true"><span></span></div>
  </section>

  <!-- 2 · PROBLEM -->
  <section class="panel" aria-label="The problem">
    <div class="pbg g-problem" aria-hidden="true"></div>
    <div class="scrim s-problem" aria-hidden="true"></div>
    <div class="giant" aria-hidden="true">STILL</div>
    <div class="content c-bottom-left">
      <h2 class="h-display rv">Dead listings<br />lose bookings.</h2>
      <p class="sub rv" style="--d:.12s">Guests scroll past still photos.<br />Motion stops the thumb.</p>
    </div>
  </section>

  <!-- 3 · TEASER -->
  <section class="panel" aria-label="The Teaser — $99">
    <div class="pbg g-teaser" aria-hidden="true"></div>
    <div class="scrim s-teaser" aria-hidden="true"></div>
    <div class="giant" aria-hidden="true">TEASER</div>
    <div class="content c-mid-right">
      <p class="tier-price rv">$99</p>
      <h2 class="h-display rv" style="--d:.08s">The Teaser</h2>
      <p class="sub rv" style="--d:.16s">30 seconds.<br />Your photos, in motion.</p>
    </div>
  </section>

  <!-- 4 · WALKTHROUGH -->
  <section class="panel" aria-label="The Walkthrough — $299">
    <div class="pbg g-walk" aria-hidden="true"></div>
    <div class="scrim s-walk" aria-hidden="true"></div>
    <div class="giant" aria-hidden="true">CINEMA</div>
    <div class="content c-top-right">
      <p class="tier-price rv">$299</p>
      <h2 class="h-display rv" style="--d:.08s">The Walkthrough</h2>
      <p class="sub rv" style="--d:.16s">60 seconds of cinema.<br />Cut for every feed.</p>
      <p class="fine rv" style="--d:.24s">TikTok · Reels · Shorts</p>
    </div>
  </section>

  <!-- 5 · 3D TOUR -->
  <section class="panel" aria-label="The 3D Tour — $599">
    <div class="pbg g-tour3d" aria-hidden="true"></div>
    <div class="scrim s-tour3d" aria-hidden="true"></div>
    <div class="giant" aria-hidden="true">WALK&nbsp;IN</div>
    <div class="content c-tour3d">
      <div class="c-top-left">
        <p class="tier-price rv">$599</p>
        <h2 class="h-display rv" style="--d:.08s">The 3D Tour</h2>
        <p class="sub rv" style="--d:.16s">They don't just watch.<br />They walk in.</p>
      </div>
      <div class="tour-frame rv" style="--d:.24s" aria-label="Interactive 3D tour preview placeholder">
        <span class="tour-mono" aria-hidden="true">3D</span>
        <p class="tour-label">INTERACTIVE 3D PREVIEW</p>
        <p class="tour-sub">Your space, walkable — embedded on your listing.</p>
        <p class="tour-note">Ships with The 3D Tour</p>
      </div>
    </div>
  </section>

  <!-- 6 · PRICING -->
  <section class="panel" aria-label="Pricing">
    <div class="pbg g-pricing" aria-hidden="true"></div>
    <div class="scrim s-pricing" aria-hidden="true"></div>
    <div class="giant" aria-hidden="true">PRICING</div>
    <div class="content c-pricing">
      <h2 class="h-section rv">Pick your tier.</h2>
      <div class="tiers">
        {#each TIERS as t, i}
          <article class="tier rv" style="--d:{(i * 0.1).toFixed(1)}s">
            <h3>{t.name}</h3>
            <p class="tier-tag">{t.tag}</p>
            <p class="tier-amt"><span>$</span>{t.price}</p>
            <ul>
              {#each t.points as p}
                <li>{p}</li>
              {/each}
            </ul>
            <a class="tier-cta" href={MAILTO_LINK}>Get {t.name}</a>
          </article>
        {/each}
      </div>
      <p class="retainer rv" style="--d:.3s">
        Manage 10+ properties?
        <a href={MAILTO_LINK}>Ask about Portfolio retainers.</a>
      </p>
    </div>
  </section>

  <!-- 7 · HOW IT WORKS -->
  <section class="panel" aria-label="How it works">
    <div class="pbg g-how" aria-hidden="true"></div>
    <div class="scrim s-how" aria-hidden="true"></div>
    <div class="giant" aria-hidden="true">EASY</div>
    <div class="content c-mid-left">
      <h2 class="h-section rv">Three steps. Zero shoots.</h2>
      <ol class="steps">
        {#each STEPS as s, i}
          <li class="step rv" style="--d:{(i * 0.1).toFixed(1)}s">
            <span class="step-n">{s.n}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </li>
        {/each}
      </ol>
    </div>
  </section>

  <!-- 8 · CTA -->
  <section class="panel" aria-label="Get your video">
    <div class="pbg g-cta" aria-hidden="true"></div>
    <div class="scrim s-cta" aria-hidden="true"></div>
    <div class="giant" aria-hidden="true">GO</div>
    <div class="content c-center">
      <h2 class="h-display rv">Get your video.</h2>
      <a class="cta-btn rv" style="--d:.12s" href={MAILTO_LINK}>hello@dogs.red</a>
      <footer class="foot rv" style="--d:.2s">
        <a href="https://wearedogs.net">This product was made by DOGS</a>
      </footer>
    </div>
  </section>
</main>
