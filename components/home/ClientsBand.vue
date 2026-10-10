<template>
  <section class="clients">
    <div class="wrap">
      <p>Produced for</p>
      <ul>
        <li v-for="name in clients" :key="name">{{ name }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import clients from '@/data/clients.json'
</script>

<style lang="scss" scoped>
.clients {
  padding: 40px 0 44px;

  .wrap {
    display: flex;
    align-items: center;
    gap: 24px 56px;
    flex-wrap: wrap;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: var(--thread);
    flex: 0 0 auto;
  }

  ul {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Client names sit at the extended end of the width axis. */
  li {
    font-weight: 600;
    font-stretch: 105%;
    letter-spacing: .06em;
    text-transform: uppercase;
    font-size: 14px;
    color: #4a4f56;
  }
}
</style>
