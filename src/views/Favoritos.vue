<template>
  <div class="favoritos">
    <h1 v-if="favoritos.length == 0" class="tituloFav">
      La Lista de Favoritos Esta Vacia
    </h1>
    <table class="table" v-else>
      <thead class="thead-dark">
        <tr>
          <th scope="col">Jugadores Favoritos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(jugador, i) in favoritos" :key="i">
          <td>
            <el-col class="carta" :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="jugador.img" :alt="jugador.name" class="image" />
                <div style="padding: 14px;">
                  <h5>{{ jugador.name }}</h5>
                  <div class="bottom clearfix">
                    <el-button
                      class="m-2"
                      @click="ModalVerMas(i)"
                      type="warning"
                      size="small"
                      >Ver mas</el-button
                    >

                 
                    <el-button
                      type="warning"
                      icon="el-icon-delete"
                      size="small"
                      @click="eliminar(i)"
                      >Eliminar de favoritos</el-button
                    >
                  </div>
                </div>
              </el-card>
            </el-col>
          </td>
        </tr>
        
                   
      </tbody>
      <div v-for="jugador in ModalInfo" :key="jugador">
       <el-dialog id="modaljugador"
                  :title="jugador.name"
                  :visible.sync="ModalJugador"
                 
                >
                
                    
                    <h5>Club: {{ jugador.team }}</h5>
                    <h5>Nacionalidad: {{ jugador.nation }}</h5>
                    <h5>Posicion: {{ jugador.position }}</h5>
                    <h5>N Camiseta: {{ jugador.number }}</h5>
                    <h5>Altura: {{ jugador.height }}</h5>
                    <h5>Peso: {{ jugador.weight }} Kg</h5>
                    <h5>Origen: {{ jugador.location }}</h5>
                    <h5>Fecha Nacimiento: {{ jugador.date }}</h5>
                    
                    </el-dialog>
                   </div> 

    </table>

    
                    
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["favoritos","ModalInfo"]),
  },
  methods: {
    eliminar(i) {
      this.$store.dispatch("eliminarFav", i);
      alert("eliminado");
    },
    ModalVerMas(i){
   this.$store.dispatch("SetModalInfo", i);
   this.ModalJugador = true
 
   console.log(this.index);
    },
  },
  data() {
    return {
      ModalJugador: false,
      
    };
  },
  mounted() {
    console.log(this.favoritos);

    /*axios.get("https://us-central1-proyectoitf.cloudfunctions.net/jugadores/jugadores")
        .then((data) => {
            alert('llego desde la info')
            console.log(data)
        }).catch((err) => {
            alert('no llego nada')
        });*/
  },
};
</script>
<style scooped>
.image {
  width: 100%;
  display: block;
  background-image: url(../assets/pngocean.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: inherit;
}

.el-card {
  background-color: #ad8f3b !important;
  margin-top: 30px;
}
tbody tr {
  background-image: url(../assets/seccion_favoritos.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
}

.carta .el-card .el-card__body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carta .el-card .el-card__body h5 {
  font-weight: 700;
  text-align: center;
}
.table thead tr th {
  text-align: center !important;
}
.table tbody tr td {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.tituloFav {
  text-align: center;
  margin: auto;
}
</style>
