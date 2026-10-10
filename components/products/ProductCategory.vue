<template>
  <div class="product-category">
    <!-- HERO -->
    <section class="band pc-hero">
      <div class="wrap">
        <div class="pc-hero-meta">
          <span><b>Category</b> {{ data.kicker }}</span>
          <span><b>Est.</b> 2014 <em>·</em> Gia Lam, Hanoi</span>
          <span><b>Trade</b> OEM <em>·</em> ODM <em>·</em> Private label</span>
          <span><b>Port</b> FOB Hai Phong</span>
        </div>

        <h1>
          {{ data.title }} <em>{{ data.titleAccent }}</em><template v-if="data.titleSuffix">{{ data.titleSuffix }}</template>
        </h1>

        <div class="pc-hero-layout">
          <p class="lede">{{ data.lede }}</p>
          <a class="btn" href="/contact#quote">Request a quote</a>
        </div>
      </div>
    </section>

    <!-- PHOTO PLATE -->
    <section class="plate">
      <div class="wrap">
        <NuxtImg
          :src="data.hero"
          :alt="data.heroAlt"
          format="webp"
          loading="eager"
          class="shot"
          sizes="100vw md:1200px"
        />
        <div class="caption">
          <span><b>Programme</b> · {{ data.kicker }}</span>
          <span class="mid">Sampled in Gia Lam · Produced across audited partners</span>
          <span class="r"><b>Wisermax HN</b> · Hanoi</span>
        </div>
      </div>
    </section>

    <!-- SPEC STRIP -->
    <section class="band spec-strip">
      <div class="wrap">
        <div class="kicker">Programme specs</div>
        <dl class="spec-list">
          <template v-for="spec in data.specs" :key="spec.term">
            <dt>{{ spec.term }}</dt>
            <dd>{{ spec.value }}</dd>
          </template>
        </dl>
      </div>
    </section>

    <!-- FEATURE BLOCKS -->
    <section class="band features">
      <div class="wrap">
        <div class="features-head">
          <div class="kicker">Feature runs</div>
          <h2>Selected pieces from our <em>{{ data.slug }}</em> programme.</h2>
        </div>

        <ol class="feature-list">
          <li v-for="(f, i) in data.features" :key="f.code" class="feature">
            <div class="feature-hd">
              <span class="feature-code">{{ f.code }}</span>
              <span class="feature-idx">{{ String(i + 1).padStart(2, '0') }} / {{ String(data.features.length).padStart(2, '0') }}</span>
            </div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.description }}</p>
            <div :class="['feature-media', mediaClass(f.images.length)]">
              <figure v-for="img in f.images" :key="img.src">
                <NuxtImg
                  :src="img.src"
                  :alt="img.alt"
                  loading="lazy"
                  format="webp"
                  sizes="sm:100vw md:600px lg:800px"
                />
              </figure>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- MORE GRID -->
    <section v-if="data.more && data.more.length" class="band more">
      <div class="wrap">
        <div class="kicker">And we can do more</div>
        <h2 class="more-title">Beyond the featured runs.</h2>
        <div class="more-grid">
          <figure v-for="m in data.more" :key="m.img">
            <NuxtImg
              :src="m.img"
              :alt="`${m.name} — Vietnam apparel manufacturer`"
              loading="lazy"
              format="webp"
              sizes="sm:100vw md:50vw lg:430px"
            />
            <figcaption>{{ m.name }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <TuRfqSection />
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})

function mediaClass(count) {
  if (count >= 4) return 'grid-4'
  if (count === 3) return 'grid-3'
  if (count === 2) return 'grid-2'
  return 'grid-1'
}
</script>

<style lang="scss" scoped>
.pc-hero {
  padding-top: clamp(48px, 6vw, 88px);
  padding-bottom: clamp(48px, 6vw, 88px);
}

.pc-hero-meta {
  display: flex;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--rule);
  font: 500 12px/1 var(--f);
  color: var(--thread);
  letter-spacing: .06em;
  flex-wrap: wrap;
  gap: 16px;

  b { color: var(--ink); font-weight: 600; margin-right: 4px; }
  em { font-style: normal; color: var(--thread); }
}

h1 {
  font-size: clamp(48px, 7vw, 108px);
  line-height: .96;
  margin: clamp(48px, 6vw, 80px) 0 0;
  max-width: 12ch;
  font-weight: 500;
  font-stretch: 78%;
  letter-spacing: -.025em;

  em { font-style: normal; color: inherit; }
}

.pc-hero-layout {
  display: grid;
  grid-template-columns: 1.4fr auto;
  gap: clamp(32px, 5vw, 72px);
  align-items: end;
  margin-top: clamp(40px, 5vw, 64px);
}

.lede {
  font-family: var(--f);
  font-weight: 400;
  font-size: clamp(18px, 1.5vw, 21px);
  line-height: 1.45;
  color: #3a3e44;
  margin: 0;
  max-width: 42ch;
}

.plate {
  padding: 0 0 clamp(48px, 6vw, 80px);
  .wrap { position: relative; }
  .shot {
    aspect-ratio: 16 / 9;
    width: 100%;
    object-fit: cover;
    background: var(--muslin);
  }
  :deep(.shot) {
    aspect-ratio: 16 / 9;
    width: 100%;
    object-fit: cover;
  }
  .caption {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 24px;
    align-items: center;
    font: 500 12px/1.4 var(--f);
    color: var(--thread);
    letter-spacing: .02em;
    padding-top: 14px;
    border-top: 1px solid var(--rule);

    b { color: var(--ink); font-weight: 600; }
    .mid {
      font-family: var(--f);
      font-style: normal;
      font-size: 14px;
      color: var(--ink);
      text-align: center;
    }
    .r { text-align: right; }
  }
}

.spec-strip {
  padding: clamp(56px, 7vw, 96px) 0;

  .kicker { margin-bottom: 24px; }

  .spec-list {
    margin: 0;
    display: grid;
    grid-template-columns: auto 1fr;
    row-gap: 18px;
    column-gap: clamp(24px, 4vw, 64px);
    border-top: 1px solid var(--ink);
    padding-top: 24px;
    max-width: 900px;

    dt {
      color: var(--thread);
      font: 500 12px/1 var(--f);
      letter-spacing: .14em;
      text-transform: uppercase;
      padding-top: 4px;
    }
    dd {
      margin: 0;
      font-family: var(--f);
      font-size: 19px;
      color: var(--ink);
      line-height: 1.35;
    }
  }
}

.features-head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 64px);
  align-items: end;
  margin-bottom: 48px;
}

.features-head .kicker { margin-bottom: 16px; }

h2 {
  font-size: clamp(32px, 4vw, 56px);
  line-height: 1;
  max-width: 18ch;

  em { font-style: normal; color: inherit; }
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.feature {
  padding: 48px 0;
  border-top: 1px solid var(--rule);
  &:last-child { border-bottom: 1px solid var(--rule); }

  &-hd {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font: 500 11px/1 var(--f);
    letter-spacing: .14em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  &-code { color: var(--selvedge); }
  &-idx { color: var(--thread); }

  h3 {
    font-size: clamp(24px, 2.6vw, 34px);
    line-height: 1.1;
    margin: 0 0 12px;
    max-width: 20ch;
  }

  p {
    color: #3a3e44;
    font-size: 16px;
    line-height: 1.65;
    margin: 0 0 28px;
    max-width: 60ch;
  }

  &-media {
    display: grid;
    gap: 12px;

    figure { margin: 0; overflow: hidden; background: var(--muslin); }
    figure :deep(img) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 4 / 5;
    }
  }

  .grid-1 { grid-template-columns: 1fr; figure :deep(img) { aspect-ratio: 16 / 9; } }
  .grid-2 { grid-template-columns: 1fr 1fr; }
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-4 { grid-template-columns: repeat(4, 1fr); }
}

.more {
  background: var(--muslin);

  .kicker { margin-bottom: 16px; }
  .more-title {
    font-size: clamp(30px, 3.8vw, 48px);
    line-height: 1;
    max-width: 20ch;
    margin-bottom: 40px;
  }
  .more-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    figure {
      margin: 0;
      background: var(--muslin);
      overflow: hidden;
    }
    figure :deep(img) {
      width: 100%;
      aspect-ratio: 4 / 5;
      object-fit: cover;
      display: block;
    }
    figcaption {
      padding: 12px 16px 18px;
      font-family: var(--f);
      font-style: normal;
      font-size: 15px;
      color: var(--ink);
    }
  }
}

@media (max-width: 1000px) {
  .pc-hero-layout { grid-template-columns: 1fr; }
  .features-head { grid-template-columns: 1fr; }
  .plate .caption { grid-template-columns: 1fr; .mid, .r { text-align: left; } }
  .feature .grid-3, .feature .grid-4 { grid-template-columns: 1fr 1fr; }
  .more .more-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 540px) {
  .feature .grid-2, .feature .grid-3, .feature .grid-4 { grid-template-columns: 1fr; }
  .more .more-grid { grid-template-columns: 1fr; }
}
</style>
