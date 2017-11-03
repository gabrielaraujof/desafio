import Vue from 'vue'
import HealthBar from '@/HealthBar.vue'

function getRenderedHealth (propsData) {
  const Ctor = Vue.extend(HealthBar)
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm.$el.textContent.trim()
}

describe('HealthBar.vue', () => {

  it('renders health percentage correctly with different props', () => {
    getRenderedHealth({ health: 80 }).should.equal('80%')
    getRenderedHealth({ health: 26 }).should.equal('26%')
  })

})
