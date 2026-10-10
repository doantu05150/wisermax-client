<template>
  <section class="band members mats">
    <div class="wrap">
      <div class="head">
        <div>
          <div class="kicker">Meet our director</div>
          <h2>Every order arrives at <em>Helen's</em> desk first.</h2>
        </div>
        <p>
          Ten years leading full-package programmes for US and EU brands.
          A merchandiser first and a business owner second — every quote,
          tech pack response and shipment sample crosses her desk
          before it reaches you.
        </p>
      </div>

      <div class="director">
        <div class="portrait">
          <NuxtImg
            src="/members/ceo_helen.jpg"
            alt="Ms Helen Hoang, founder of Wisermax HN — Vietnam apparel manufacturer in Hanoi"
            loading="lazy"
            format="webp"
            sizes="sm:100vw md:50vw lg:520px"
          />
        </div>
        <div class="info">
          <div class="kicker">Founder &amp; Director</div>
          <h3>Ms Helen Hoang</h3>
          <p class="lede">
            Trained as a merchandiser, ten years running full-package
            programmes for US, Canadian, European and Korean brand and
            department-store buyers.
          </p>

          <dl>
            <dt>Email</dt>
            <dd><a href="mailto:helen@wiser.vn">helen@wiser.vn</a></dd>
            <dt>Phone &amp; WhatsApp</dt>
            <dd><a href="tel:+84974806625">+84 974 806 625</a></dd>
            <dt>Hours</dt>
            <dd>Mon–Sat · GMT+7</dd>
          </dl>

          <div class="qr-block">
            <div>
              <div class="qr-label">Add on WhatsApp</div>
              <NuxtImg
                src="/members/qr-ceo.svg"
                width="140"
                height="140"
                alt="QR code to add Helen Hoang on WhatsApp"
                loading="lazy"
              />
            </div>
            <div>
              <div class="qr-label">Add on WeChat</div>
              <NuxtImg
                src="/members/qr-wechat.svg"
                width="140"
                height="140"
                alt="QR code to add Wisermax HN on WeChat"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="teams">
        <div class="team" v-for="t in teams" :key="t.title">
          <div class="team-idx">{{ t.idx }}</div>
          <h4>{{ t.title }}</h4>
          <p>{{ t.des }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const teams = [
  {
    idx: '01',
    title: 'Purchasing team',
    des: 'Receives tech packs, coordinates with the sample room and MD, sources and orders fabric and trims from nominated or approved mills.',
  },
  {
    idx: '02',
    title: 'Technical team & sample room',
    des: 'Pattern making, marker planning, protos and PP samples — everything sampled in our own room in Gia Lam before production releases.',
  },
  {
    idx: '03',
    title: 'Merchandising & QC',
    des: 'Follows the production plan across partner factories, resolves issues on the floor, runs AQL inspection before packing.',
  },
  {
    idx: '04',
    title: 'Shipping team',
    des: 'Books vessels at Hai Phong, prepares export documentation, tracks each container to arrival — FOB, CIF or DDP as required.',
  },
]
</script>

<style lang="scss" scoped>
.head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 64px);
  align-items: end;
  margin-bottom: 48px;
}

.kicker { margin-bottom: 16px; }

h2 {
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1;
  max-width: 16ch;

  em { font-style: normal; color: inherit; }
}

.head p {
  margin: 0;
  color: #3a3e44;
  font-size: 16px;
  max-width: 44ch;
  justify-self: end;
}

.director {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: clamp(28px, 5vw, 72px);
  padding-top: 48px;
  border-top: 1px solid var(--rule);
}

.portrait {
  aspect-ratio: 4 / 5;
  background: var(--paper);
  overflow: hidden;

  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.info {
  .kicker { margin-bottom: 20px; }

  h3 {
    font-size: clamp(30px, 3.4vw, 48px);
    line-height: 1;
    margin: 0 0 16px;
  }

  .lede {
    font-family: var(--f);
    font-size: 18px;
    line-height: 1.5;
    color: #3a3e44;
    max-width: 40ch;
    margin: 0 0 28px;
  }

  dl {
    margin: 0 0 32px;
    padding: 16px 0;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px 20px;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    font-size: 14px;
    max-width: 44ch;

    dt { color: var(--thread); font-weight: 500; letter-spacing: .02em; }
    dd {
      margin: 0;
      color: var(--ink);
      font-weight: 500;
      a {
        border-bottom: 1px solid var(--ink);
        padding-bottom: 1px;
        &:hover { color: var(--indigo); border-color: var(--indigo); }
      }
    }
  }

  .qr-block {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;

    .qr-label {
      font: 600 11px/1 var(--f);
      letter-spacing: .14em;
      text-transform: uppercase;
      color: var(--thread);
      margin-bottom: 10px;
    }

    :deep(img) {
      background: #fff;
      padding: 8px;
      border: 1px solid var(--rule);
    }
  }
}

.teams {
  margin-top: clamp(56px, 7vw, 96px);
  padding-top: 48px;
  border-top: 1px solid var(--rule);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px 32px;
}

.team {
  padding-top: 16px;
  border-top: 1px solid var(--ink);

  .team-idx {
    font: 600 11px/1 var(--f);
    letter-spacing: .14em;
    color: var(--selvedge);
    margin-bottom: 16px;
  }

  h4 {
    font-family: var(--f);
    font-size: 20px;
    margin: 0 0 12px;
    line-height: 1.2;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #3a3e44;
    line-height: 1.55;
  }
}

@media (max-width: 900px) {
  .head { grid-template-columns: 1fr; p { justify-self: start; } }
  .director { grid-template-columns: 1fr; }
  .teams { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 540px) {
  .teams { grid-template-columns: 1fr; }
}
</style>
