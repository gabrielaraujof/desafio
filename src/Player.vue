<template>
  <section class="player">
      <h1>{{name}}</h1>
      <health-bar :health="life"></health-bar>
      <el-button
          type="warning"
          @click="$emit('attacking', {attackDamage})"
          :disabled="!canAttack">
        ATACAR
      </el-button>
  </section>
</template>

<script>
import HealthBar from './HealthBar.vue';

export default {
  name: 'player',

  components: {
    HealthBar
  },

  props: ['name', 'life', 'canAttack'],

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

.health-bar {
  margin: 16px 0 48px;
}
</style>

