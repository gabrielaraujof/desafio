import Vue from 'vue'
import Game from './Game.vue'

import {
  Button,
  Message,
  MessageBox,
} from 'element-ui'

Vue.use(Button)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

new Vue({
  el: '#app',
  render: h => h(Game)
})
