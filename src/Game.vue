<template>
  <div id="game">
    <main id="arena">
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
    </main>
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
    $_game_checkWin() {
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
      this.$_game_checkWin();
    })
  }
}
</script>

<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
}

#game {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 981px) {
    width: 980px;
  }
}


#arena {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  text-align: center;

  .player {
    flex-grow: 1;

    @media (max-width: 568px) {
      width: 100%;
    }
  }
}


</style>
