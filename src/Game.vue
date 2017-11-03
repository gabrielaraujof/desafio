<template>
  <div id="game">
    <main id="arena">
      <player
          :name="player1.name"
          :life="player1.life"
          :canAttack="gameRunning"
          @attacking="attacks(player2, $event.attackDamage)">
      </player>
      <player
          :name="player2.name"
          :life="player2.life"
          :canAttack="gameRunning"
          @attacking="attacks(player1, $event.attackDamage)">
      </player>
    </main>
    <el-button type="info" plain @click="start">Reiniciar Luta</el-button>
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

    $_game_declareWinner(winner) {
      this.gameRunning = false;
      const message = `${winner.name} venceu a luta! Reiniciar?`;

      this.$confirm(message, 'Vitória!', {
        cancelButtonText: 'Cancelar',
        closeOnClickModal: false,
        closeOnPressEscape: false,
        confirmButtonText: 'Reiniciar',
        customClass: 'message-box',
        type: 'success'
      })
      .then(() => this.start())
      .catch(() => {});
    },

    $_game_checkWin() {
      if (!this.player1.life) {
        this.$_game_declareWinner(this.player2);
      }
      if (!this.player2.life) {
        this.$_game_declareWinner(this.player1);
      }
    },

    attacks(player, damage) {
      if (!this.gameRunning) {
        return;
      }

      if (player.life > damage) {
        player.life -= damage;
      } else {
        player.life = 0;
      }

      this.$emit('attacked');
    },

    start() {
      this.gameRunning = true;
      this.player1.life = 100;
      this.player2.life = 100;
      this.$message({
        center: true,
        customClass: 'message',
        message: 'Que comece a luta!',
        type: 'info',
      });
    },
  },

  created() {
    this.$on('attacked', () => {
      this.$_game_checkWin();
    });

    this.start();
  }
}
</script>

<style lang="scss">
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);

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
  margin: 30px 0;
  justify-content: center;
  text-align: center;

  .player {
    flex-grow: 1;

    @media (max-width: 568px) {
      width: 100%;
    }
  }
}

@media (max-width: 568px) {
  .message {
    min-width: 200px;
  }

  .message-box {
    width: inherit;
  }
}

.message-box {
  .el-message-box__status {
    &.el-icon-success {
      font-family: "Ionicons"!important;
      color: gold;

      &:before {
        content: '\f356';
      }
    }
  }
}
</style>
