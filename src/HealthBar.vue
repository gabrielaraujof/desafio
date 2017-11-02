<template>
  <div class="health-bar">
    <div
        class="health"
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

  props: ['health']
}
</script>

<style lang="scss" scoped>
.health-bar {
  position: relative;
  border-radius: 2vw;
  border: 1px solid #aaa;
  background-color: #eee;
  height: 2vw;
  overflow: hidden;
  width: 100%;
  box-shadow: 1px 1px 4px 1px #ddd;
}

.damage {
  position: absolute;
  background-color: #ee4848;
  box-sizing: border-box;
  height: 100%;
  transition: width .5s linear;
}

.health {
  @extend .damage;
  background-color: #3c3;
  transition: width .1s linear;
  z-index: 999;
}
</style>
