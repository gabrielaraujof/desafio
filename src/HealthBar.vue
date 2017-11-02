<template>
  <div class="health-bar">
    <div class="legend">{{`${health}%`}}</div>
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
$health-color: #3c3;

.health-bar {
  background-color: #bbb;
  border-radius: 8px;
  border: 2px solid darken($health-color, 5%);
  box-shadow: 1px 1px 4px 1px #ddd;
  height: 24px;
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

  background-color: $health-color;
  transition: width .1s linear;
  z-index: 888;

  &.being-hit {
    animation-name: damaging;
    animation-duration: .1s;
    animation-iteration-count: 4;
    animation-direction: alternate;
    animation-timing-function: linear;
  }
}

.legend {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 999;

  text-shadow: 1px 1px 2px #222;
  font: {
    weight: bold;
    size: 1.2em;
  }
  color: #fff;
}

@keyframes damaging {
	to {
		background-color: #e50000;
	}
}
</style>
