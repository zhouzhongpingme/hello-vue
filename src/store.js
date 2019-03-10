import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  //改变状态的方法级
  mutations: {
    increase(){
      this.state.count++

    }
  },
  actions: {

  }
})
