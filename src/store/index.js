import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favoritos:[],
    ModalInfo:[]
  },
  mutations: {
setFavoritosState(state,jugadores){
  state.favoritos.push(jugadores)

},
INGRESOINFO(state,i){
  state.ModalInfo=[];
state.ModalInfo.push(state.favoritos[i])
},
eliminarFavorito(state,i){
  state.favoritos.splice(i,1)
}

  },
  actions: {
    setFavoritos({commit},jugadores){
    commit('setFavoritosState',jugadores)
   },
   eliminarFav({commit},i){
commit("eliminarFavorito",i)
   },
   SetModalInfo({commit},i){
commit("INGRESOINFO",i)
   }
  },
  modules: {
  }
})
