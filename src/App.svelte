<script>
  import { onMount } from 'svelte';
  import { PRODUCT_NAME, MAILTO_LINK, CONTACT_EMAIL, TIERS, STEPS } from './lib/brand.js';
  import badgeUrl from './assets/made-by-dogs.webp';

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
    <div class="content c-hero">
      <p class="kicker rv">{PRODUCT_NAME}</p>
      <h1 class="h-display rv" style="--d:.08s">Your space,<br />in motion.</h1>
      <p class="sub rv" style="--d:.16s">Photos in. Bookings out.</p>
      <a class="cta-btn rv" style="--d:.24s" href={MAILTO_LINK}>Get your video</a>
    </div>
    <div class="cue" aria-hidden="true"><span></span></div>
  </section>

  <!-- 2 · PRICING -->
  <section class="panel" aria-label="Pricing">
    <div class="pbg g-pricing" aria-hidden="true"></div>
    <div class="scrim s-pricing" aria-hidden="true"></div>
    <div class="giant" aria-hidden="true">PRICING</div>
    <div class="content c-pricing">
      <p class="kicker rv">Launch pricing — save up to 67%</p>
      <h2 class="h-section rv" style="--d:.08s">Pick your tier.</h2>
      <div class="tiers">
        {#each TIERS as t, i}
          <article class="tier rv" style="--d:{(i * 0.08).toFixed(1)}s">
            <h3>{t.name}</h3>
            <p class="tier-tag">{t.tag}</p>
            <p class="tier-anchor"><s>${t.anchor}</s></p>
            <p class="tier-amt"><span>$</span>{t.price}</p>
            <ul>
              {#each t.points as p}
                <li>{p}</li>
              {/each}
            </ul>
            <a class="tier-cta" href={MAILTO_LINK}>{t.cta}</a>
          </article>
        {/each}
      </div>
      <p class="retainer rv" style="--d:.3s">
        Manage 10+ properties?
        <a href={MAILTO_LINK}>Ask about Portfolio retainers.</a>
      </p>
    </div>
  </section>

  <!-- 3 · HOW IT WORKS -->
  <section class="panel" aria-label="How it works">
    <div class="pbg g-how" aria-hidden="true"></div>
    <div class="scrim s-how" aria-hidden="true"></div>
    <div class="giant" aria-hidden="true">EASY</div>
    <div class="content c-how">
      <p class="kicker rv">Listings with dead media lose bookings.</p>
      <h2 class="h-section rv" style="--d:.08s">Three steps. Zero shoots.</h2>
      <ol class="steps steps-row">
        {#each STEPS as s, i}
          <li class="step rv" style="--d:{(i * 0.08).toFixed(1)}s">
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

  <!-- 4 · LIVE DEMOS -->
  <section class="panel" aria-label="Live demos">
    <div class="pbg g-demo" aria-hidden="true"></div>
    <div class="scrim s-demo" aria-hidden="true"></div>
    <div class="giant" aria-hidden="true">LIVE</div>
    <div class="content c-demo">
      <p class="kicker rv">Don't take our word for it.</p>
      <h2 class="h-display rv" style="--d:.08s">Walk it<br />yourself.</h2>
      <p class="sub rv" style="--d:.16s">A real room, rendered live in your browser.</p>
      <div class="demo-ctas rv" style="--d:.24s">
        <a class="cta-btn" href="tour.html">Take the 3D tour</a>
        <a class="cta-ghost" href="studio.html">Open the Studio</a>
      </div>
    </div>
  </section>

  <!-- 5 · FINAL CTA + BADGE -->
  <section class="panel" aria-label="Get your video">
    <div class="pbg g-cta" aria-hidden="true"></div>
    <div class="scrim s-cta" aria-hidden="true"></div>
    <div class="giant" aria-hidden="true">GO</div>
    <div class="content c-final">
      <h2 class="h-display rv">Get your video.</h2>
      <a class="cta-btn rv" style="--d:.12s" href={MAILTO_LINK}>{CONTACT_EMAIL}</a>
      <!-- Badge: reveal-free on purpose — clip/opacity reveals on <img>
           wrappers never paint in headless Chromium. -->
      <a class="badge" href="https://wearedogs.net" aria-label="This product was made by DOGS">
        <img src={badgeUrl} alt="This product was made by DOGS" width="360" height="119" />
      </a>
    </div>
  </section>
</main>
