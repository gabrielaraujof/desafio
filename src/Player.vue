<template>
  <section class="player">
      <h1>{{name}}</h1>
      <health-bar :health="life"></health-bar>
      <h3>{{life}}%</h3>
      <button
          @click="$emit('attacking', {attackDamage})"
          :disabled="life <= 0">
        Atacar
      </button>
  </section>
</template>

<script>
import HealthBar from './HealthBar.vue';

export default {
  name: 'player',

  components: {
    HealthBar
  },

  props: ['name', 'life'],

  data() {
    return {
      attackDamage: 20,
    }
  }
}
</script>

<style lang="scss" scoped>
.player {
  padding: 0 24px;
}
</style>

