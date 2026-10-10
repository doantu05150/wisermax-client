<template>
  <div class="contact-page">
    <!-- HERO -->
    <section class="band contact-hero">
      <div class="wrap">
        <div class="hero-meta">
          <span><b>Office</b> Trau Quy · Gia Lam · Hanoi</span>
          <span><b>Hours</b> Mon–Sat <em>·</em> GMT+7</span>
          <span><b>Response</b> One working day</span>
          <span><b>Quote</b> Full FOB within five</span>
        </div>

        <h1>
          Send a <em>tech pack.</em> We'll come back with a plan.
        </h1>

        <p class="lede">
          PDF, Illustrator, Excel or photos of a reference garment.
          A merchandiser replies within one working day with open questions,
          and a full FOB costing within five.
        </p>

        <div class="cta">
          <a
            class="btn"
            :href="`mailto:${info.email_primary}?subject=Tech%20pack%20—%20FOB%20Hai%20Phong`"
          >Email {{ info.email_primary }}</a>
          <a class="btn ghost" :href="`tel:${info.phone_href}`">Call {{ info.phone }}</a>
        </div>
      </div>
    </section>

    <!-- CONTACT GRID -->
    <section id="quote" class="band contact-grid">
      <div class="wrap">
        <div class="kicker">Contact channels</div>

        <div class="channels">
          <article class="channel">
            <div class="channel-code">01</div>
            <h2>Email a merchandiser</h2>
            <p>
              The fastest way to open a programme. Attach your tech pack, size chart or a reference garment.
              A merchandiser reviews it and comes back with questions inside one working day.
            </p>
            <dl>
              <dt>Primary</dt>
              <dd>
                <a :href="`mailto:${info.email_primary}?subject=Tech%20pack%20—%20FOB%20Hai%20Phong`">{{ info.email_primary }}</a>
              </dd>
              <dt>Director</dt>
              <dd>
                <a :href="`mailto:${info.email_secondary}`">{{ info.email_secondary }}</a>
              </dd>
            </dl>
          </article>

          <article class="channel">
            <div class="channel-code">02</div>
            <h2>Call, WhatsApp or WeChat</h2>
            <p>
              For a quick question about a running programme, a shipment or a payment,
              phone and messaging land straight on Helen's desk. Mon–Sat, GMT+7.
            </p>
            <dl>
              <dt>Phone &amp; WhatsApp</dt>
              <dd><a :href="`tel:${info.phone_href}`">{{ info.phone }}</a></dd>
              <dt>WeChat ID</dt>
              <dd>{{ info.wechat_id }}</dd>
              <dt>Office hours</dt>
              <dd>{{ info.hours }}</dd>
            </dl>
          </article>

          <article class="channel">
            <div class="channel-code">03</div>
            <h2>Visit the office</h2>
            <p>
              Our office and sample room sit in Trau Quy Ward, Gia Lam District,
              a short drive from Noi Bai International Airport (HAN). Factory visits arranged on request.
            </p>
            <dl>
              <dt>Company</dt>
              <dd>{{ info.company_name }}</dd>
              <dt>Address</dt>
              <dd>{{ info.street }}, {{ info.city }}, {{ info.country }}</dd>
              <dt>Port</dt>
              <dd>FOB {{ info.port }} — {{ info.port_coords }}</dd>
            </dl>
          </article>
        </div>
      </div>
    </section>

    <!-- QR BAND -->
    <section class="band qr-band">
      <div class="wrap">
        <div class="head">
          <div>
            <div class="kicker">Add us on WhatsApp / WeChat</div>
            <h2>Scan and message <em>directly.</em></h2>
          </div>
          <p>
            Both codes route straight to the director's phone.
            For programme quotes, please still send the tech pack by email so
            it's easier to track.
          </p>
        </div>

        <div class="qr-grid">
          <figure class="qr-card">
            <div class="qr-frame">
              <NuxtImg
                src="/members/qr-ceo.svg"
                width="220"
                height="220"
                alt="QR code to add Wisermax HN director on WhatsApp"
                loading="lazy"
              />
            </div>
            <figcaption>
              <div class="qr-label">Q / 01</div>
              <div class="qr-name">Add on WhatsApp</div>
              <div class="qr-sub">{{ info.phone }}</div>
            </figcaption>
          </figure>
          <figure class="qr-card">
            <div class="qr-frame">
              <NuxtImg
                src="/members/qr-wechat.svg"
                width="220"
                height="220"
                alt="QR code to add Wisermax HN on WeChat"
                loading="lazy"
              />
            </div>
            <figcaption>
              <div class="qr-label">Q / 02</div>
              <div class="qr-name">Add on WeChat</div>
              <div class="qr-sub">ID · {{ info.wechat_id }}</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import info from '@/data/info'

const title = 'Contact Wisermax HN — Vietnam garment manufacturer, Hanoi'
const description = 'Contact Wisermax HN, a Vietnam apparel manufacturer in Gia Lam, Hanoi. Email, phone, WhatsApp or WeChat — a merchandiser replies within one working day with a full FOB costing inside five.'
const url = 'https://www.wisermaxhn.com/contact'

useHead({
  title,
  meta: [
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:url', property: 'og:url', content: url },
    { hid: 'twitter:title', name: 'twitter:title', content: title },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
  ],
  link: [{ rel: 'canonical', href: url }],
})

useBreadcrumb([
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
])
</script>

<style lang="scss" scoped>
.contact-hero {
  padding-top: clamp(48px, 6vw, 88px);
  padding-bottom: clamp(48px, 6vw, 88px);
}

.hero-meta {
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
  font-size: clamp(44px, 6.8vw, 108px);
  line-height: .96;
  margin: clamp(48px, 6vw, 80px) 0 24px;
  max-width: 15ch;
  font-weight: 500;
  font-stretch: 78%;
  letter-spacing: -.025em;

  em { font-style: normal; color: inherit; }
}

.lede {
  font-family: var(--f);
  font-size: clamp(18px, 1.5vw, 21px);
  line-height: 1.45;
  color: #3a3e44;
  margin: 0 0 32px;
  max-width: 60ch;
}

.cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.contact-grid {
  .kicker { margin-bottom: 32px; }
}

.channels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(24px, 3.5vw, 56px);
  border-top: 1px solid var(--ink);
  padding-top: 40px;
}

.channel {
  &-code {
    font: 600 12px/1 var(--f);
    letter-spacing: .14em;
    color: var(--selvedge);
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  h2 {
    font-size: clamp(22px, 2.2vw, 28px);
    line-height: 1.15;
    margin: 0 0 16px;
    max-width: 16ch;
  }

  p {
    color: #3a3e44;
    font-size: 15px;
    line-height: 1.6;
    margin: 0 0 24px;
    max-width: 40ch;
  }

  dl {
    margin: 0;
    padding: 18px 0 0;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 10px 20px;
    border-top: 1px solid var(--rule);
    font-size: 14px;
    max-width: 42ch;

    dt {
      color: var(--thread);
      font: 500 12px/1 var(--f);
      letter-spacing: .06em;
      text-transform: uppercase;
      padding-top: 3px;
    }
    dd {
      margin: 0;
      color: var(--ink);

      a {
        border-bottom: 1px solid var(--ink);
        padding-bottom: 1px;
        &:hover { color: var(--indigo); border-color: var(--indigo); }
      }
    }
  }
}

.qr-band {
  background: var(--muslin);

  .head {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(28px, 4vw, 64px);
    align-items: end;
    margin-bottom: 48px;

    .kicker { margin-bottom: 16px; }
    h2 { font-size: clamp(30px, 3.6vw, 48px); line-height: 1; max-width: 18ch; em { font-style: normal; color: inherit; } }
    p { margin: 0; color: #3a3e44; font-size: 15.5px; max-width: 44ch; justify-self: end; }
  }
}

.qr-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.qr-card {
  margin: 0;
  background: var(--paper);
  border: 1px solid var(--rule);
  padding: 32px;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
  align-items: center;

  .qr-frame {
    background: #fff;
    padding: 14px;
    border: 1px solid var(--rule);
    width: 220px;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;

    :deep(img) { width: 100%; height: 100%; }
  }

  .qr-label {
    font: 600 11px/1 var(--f);
    letter-spacing: .14em;
    color: var(--selvedge);
    text-transform: uppercase;
  }

  .qr-name {
    font-family: var(--f);
    font-size: 24px;
    margin: 10px 0 6px;
    line-height: 1.1;
  }

  .qr-sub {
    color: var(--thread);
    font-size: 14px;
    font-family: var(--f);
    font-style: normal;
  }
}

@media (max-width: 1000px) {
  .channels { grid-template-columns: 1fr; }
  .qr-band .head { grid-template-columns: 1fr; p { justify-self: start; } }
  .qr-grid { grid-template-columns: 1fr; }
  .qr-card { grid-template-columns: 180px 1fr; gap: 24px; padding: 24px; .qr-frame { width: 180px; height: 180px; } }
}

@media (max-width: 540px) {
  .qr-card { grid-template-columns: 1fr; text-align: left; }
}
</style>
