import Vue from 'vue'
import Game from '@/Game.vue'

Vue.prototype.$message = () => {}

function getComponent (propsData) {
  const Ctor = Vue.extend(Game)
  return new Ctor({ propsData: propsData }).$mount()
}

describe('Game.vue', () => {

  it('has a created hook', () => {
    Game.created.should.be.a('function')
  })

  it('sets the correct default data', () => {
    Game.data.should.be.a('function')
    const defaultData = Game.data()
    defaultData.player1.should.be.a('object')
    defaultData.player1.life.should.be.a('number').and.equal(100)

    defaultData.player2.should.be.a('object')
    defaultData.player2.life.should.be.a('number').and.equal(100)

    defaultData.gameRunning.should.be.a('boolean').and.equal(true)
  })

  it('correctly applies the damage on attacking', () => {
    const cmp = getComponent()
    cmp.player1.life.should.equal(100)
    cmp.attacks(cmp.player1, 46)
    cmp.player1.life.should.equal(54)
  })

  it('correctly sets health on start', () => {
    const cmp = getComponent()

    cmp.player1.life = 55
    cmp.player2.life = 47
    cmp.start()

    cmp.gameRunning.should.equal(true)
    cmp.player1.life.should.equal(100)
    cmp.player2.life.should.equal(100)
  })

  it('shows message on start', () => {
    const cmp = getComponent()

    const messageSpy = sinon.spy()
    Vue.prototype.$message = messageSpy

    cmp.start()
    messageSpy.should.have.been.calledOnce
  })

})
