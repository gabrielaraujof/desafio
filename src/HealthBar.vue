<template>
  <div class="health-bar">
    <div
        class="health"
        :style="{width: `${health}%`}">
      <div class="damage"></div>
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
  border-radius: 2vw;
  border: 1px solid #aaa;
  background-color: #eee;
  height: 2vw;
  overflow: hidden;
  width: 100%;
}

.health {
  background-color: #3c3;
  box-sizing: border-box;
  height: 100%;
  transition: width .1s linear;
}
</style>
