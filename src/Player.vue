<template>
  <section class="player">
      <h1>{{name}}</h1>
      <h3>{{life}}%</h3>
      <button
          @click="$emit('attacking', {attackDamage})"
          :disabled="life <= 0">
        Atacar
      </button>
  </section>
</template>

<script>
export default {
  name: 'player',

  props: ['name', 'life'],

  data() {
    return {
      attackDamage: 20,
    }
  }
}
</script>
