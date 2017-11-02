<template>
  <div id="app">
    <player
        :name="player1.name"
        :life="player1.life">
    </player>
    <player
        :name="player2.name"
        :life="player2.life">
    </player>
  </div>
</template>

<script>
import Player from './Player.vue';
export default {
  name: 'game',

  components: {
    Player
  },

  data () {
    return {
      player1: {
        name: "Jogador 1",
        life: 100,
      },
      player2: {
        name: "Jogador 2",
        life: 100,
      },
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
  margin: auto;
  text-align: center;
  width: 980px;

  .player {
    width: 50%;

    @media (max-width: 568px) {
      width: 100%;
    }
  }
}
</style>
