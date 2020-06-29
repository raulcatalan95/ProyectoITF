import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favoritos:[]
  },
  mutations: {
setFavoritosState(state,jugadores){
state.favoritos=jugadores 
}

  },
  actions: {
    setFavoritos({commit},jugadores){
    commit('setFavoritosState',jugadores)
   

}
  },
  modules: {
  }
})
