import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Firebase from 'firebase'
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
, SET_FAVORITOS_INICIAL(state,favs){
  state.favoritos = favs
}
  },
  actions: {
    setFavoritosInicial({commit},favs){
      commit('SET_FAVORITOS_INICIAL', favs)
    },
    setFavoritos({commit, state},jugador){
      let email = Firebase.auth().currentUser.email
      let jugadoresFavoritos = state.favoritos
      jugadoresFavoritos.push(jugador)
      let favs ={
        jugadoresFavoritos
      }
      let payload = {
        email , 
        favs
      }
    commit('setFavoritosState',jugador)
    axios.post("https://us-central1-proyectoitf.cloudfunctions.net/jugadores/jugador", payload ).then( data => console.log(data)   )
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
