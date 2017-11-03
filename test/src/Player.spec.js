import Vue from 'vue'
import Player from '@/Player.vue'

import { Button } from 'element-ui'
Vue.use(Button)

function getComponent (propsData) {
  const Ctor = Vue.extend(Player)
  return new Ctor({ propsData: propsData }).$mount()
}

function getRenderedName (propsData) {
  const cmp = getComponent(propsData)
  return cmp.$el.querySelector('h1').textContent
}

function getRenderedAttackButton (propsData) {
  const cmp = getComponent(propsData)
  return cmp.$el.querySelector('button')
}

describe('Player.vue', () => {

  it('sets the correct default data', () => {
    Player.data.should.be.a('function')
    const defaultData = Player.data()
    defaultData.attackDamage.should.be.a('number').and.equal(20)
  })


  it('renders name correctly with different props', () => {
    getRenderedName({ name: 'Jogador 1' }).should.equal('Jogador 1')
    getRenderedName({ name: 'Jogador 2' }).should.equal('Jogador 2')
  })

  it('disable attack button when it cannot attack', () => {
    getRenderedAttackButton({ canAttack: true }).disabled.should.equal(false)
    getRenderedAttackButton({ canAttack: false }).disabled.should.equal(true)
  })

})
