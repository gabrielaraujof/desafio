<template>
  <div id="app">
    <player
        :name="player1.name"
        :life="player1.life"
        @attacking="attacks(player2, $event.attackDamage)">
    </player>
    <player
        :name="player2.name"
        :life="player2.life"
        @attacking="attacks(player1, $event.attackDamage)">
    </player>
    <button @click="restart">Reiniciar</button>
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
      gameRunning: true,
    }
  },

  methods: {
    $_game_showVictoryMessage() {
      if (this.player1.life > this.player2.life) {
        alert(`Vitória! ${this.player1.name} venceu ${this.player2.name}`);
      } else {
        alert(`Vitória! ${this.player2.name} venceu ${this.player1.name}`);
      }
    },
    $_game_checkGame() {
      if (this.player1.life && this.player2.life) {
        return;
      } else {
        this.gameRunning = false;
        this.$_game_showVictoryMessage();
      }
    },
    attacks(player, damage) {
      if (player.life > damage) {
        player.life -= damage;
      } else {
        player.life = 0;
      }

      this.$emit('attacked');
    },
    restart() {
      this.player1.life = 100;
      this.player2.life = 100;
    },
  },

  created() {
    this.$on('attacked', () => {
      this.$_game_checkGame();
    })
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
