<template>
  <section id="capabilities" class="band">
    <div class="wrap split">
      <div>
        <h2>What we make</h2>
        <p class="lede">
          One point of contact from first sketch to shipped carton. We handle sourcing, sampling,
          bulk production and packing so your team works with one vendor, not six — full package
          apparel manufacturing Vietnam brands can audit end to end.
        </p>
      </div>
      <ul class="list">
        <li v-for="c in capabilities" :key="c.id">
          <strong>{{ c.name }}</strong>
          <p>{{ c.description }}</p>
          <span>{{ c.tag }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import capabilities from '@/data/capabilities.json'
</script>
