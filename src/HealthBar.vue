<template>
  <div class="health-bar">
    <div class="bar">
      <div
          :class="['health', {'being-hit': beingHit}]"
          :style="{width: `${health}%`}">
      </div>
      <div
          class="damage"
          :style="{width: `${health}%`}">
      </div>
    </div>
    <div class="legend">{{`${health}%`}}</div>
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
$bar-height: 24px;
$health-color: #3c3;

.health-bar {
  position: relative;
}

.bar {
  background-color: #ddd;
  border-radius: 8px;
  border: 2px solid darken($health-color, 5%);
  box-shadow: 1px 1px 4px 1px #ddd;
  height: $bar-height;
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
  $legend-height: .9 * $bar-height;
  $legend-skew: 6px;
  $legend-bgc: #f3760e;

  align-items: center;
  background-color: $legend-bgc;
  color: #fff;
  display: flex;
  font-weight: bold;
  height: $legend-height;
  justify-content: center;
  line-height: 1.2;
  margin-left: 16px;
  padding: 0 8px;
  position: absolute;
  top: 2/3 * $bar-height;
  width: 48px;
  z-index: 999;

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 0;
  }

  &:after {
    border-right: $legend-skew solid transparent;
    border-top: $legend-height solid $legend-bgc;
    right: - $legend-skew;
  }

  &:before {
    border-bottom: $legend-height solid $legend-bgc;
    border-left: $legend-skew solid transparent;
    left: - $legend-skew;
  }
}

@keyframes damaging {
	to {
		background-color: #e50000;
	}
}
</style>
