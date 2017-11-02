<template>
  <div class="health-bar">
    <div
        :class="['health', {'being-hit': beingHit}]"
        :style="{width: `${health}%`}">
    </div>
    <div
        class="damage"
        :style="{width: `${health}%`}">
    </div>
  </div>
</template>

<script>
export default {
  name: 'health-bar',

  props: ['health'],

  data() {
    return {
      beingHit: false,
    };
  },

  watch: {
    health(newHealth, oldHealth) {
      if (newHealth < oldHealth && !this.beingHit) {
        this.beingHit = true;
        setTimeout(() => this.beingHit = false, 250);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.health-bar {
  background-color: #eee;
  border-radius: 2vw;
  border: 1px solid #aaa;
  box-shadow: 1px 1px 4px 1px #ddd;
  height: 2vw;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.damage {
  background-color: #ee4848;
  box-sizing: border-box;
  height: 100%;
  position: absolute;
  transition: width .5s linear;
}

.health {
  @extend .damage;

  background-color: #3c3;
  transition: width .1s linear;
  z-index: 999;

  &.being-hit {
    animation-name: damaging;
    animation-duration: .1s;
    animation-iteration-count: 4;
    animation-direction: alternate;
    animation-timing-function: linear;
  }
}

@keyframes damaging {
	to {
		background-color: #e50000;
	}
}
</style>
