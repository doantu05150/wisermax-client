<template>
  <section id="factory" class="band network">
    <div class="wrap split">
      <div class="ph">
        <NuxtImg
          src="/home/so-production.jpg"
          alt="Bulk production floor at a partner factory — high capacity garment manufacturer Vietnam across Northern and Central provinces"
          sizes="sm:100vw md:50vw lg:560px"
          format="webp"
          loading="lazy"
        />
      </div>
      <div>
        <h2>One office in Hanoi. Twenty factories behind it.</h2>
        <p class="lede">
          WISERMAX runs merchandising, design and quality control from Gia Lam, Hanoi, and places
          production across more than twenty vetted partner factories in Northern and Central
          Vietnam. That is how we keep capacity flexible — six million pieces a year — without
          locking you into one line's schedule.
        </p>
        <ul class="list two">
          <li v-for="row in network" :key="row.term">
            <strong>{{ row.term }}</strong>
            <p>{{ row.value }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import network from '@/data/network.json'
</script>

<style lang="scss" scoped>
.network {
  :deep(.split) { align-items: center; }

  .ph { height: clamp(300px, 36vw, 520px); }

  :deep(.list) { margin-top: 36px; }
}
</style>
