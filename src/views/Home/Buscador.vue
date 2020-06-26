<template>
  <div class="buscador">
    <div class="buscando">
      <el-input
        placeholder="Please input"
        v-model="nombre"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search" @click="buscar" ></el-button>
      </el-input>
    </div>

    <div class="mostrarJugadores">

        <el-row>
      <el-col class="columna" :span="14" v-for="(jugador, index) in datos" :key="index">
        <el-card  :body-style="{ padding: '0px' }">
          <img :src="jugador.strCutout" class="image" />
          <div style="padding: 14px;">
            <h5>{{ jugador.strPlayer }}</h5>
            <div class="bottom clearfix">
              
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "buscador",
data() {
  return {
    nombre:'',
    datos:[],
  }
},
methods: {
  buscar() {
      axios
        .get(
          "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=" +
            this.nombre
        )
        .then((data) => {
           this.datos= data.data.player
          
            //strCutout
            //strPlayer
      
        })
},

}
}
</script>

<style>

.buscador {
  background-image: url("./fondo_login.jpg");
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.buscando {
  width: 50%;
}
.el-button {
  font-size: 1rem !important;
  background-color: #42bf46 !important;
  color: aliceblue !important;
}
.el-input {
  margin-top: 30px;
}
.image {
 width: 100%;
  display: block;
  background-image: url("./pngocean.png");
 background-size: cover;
 background-repeat: no-repeat;
 background-position-x: center;
 background-position-y:inherit
}
.el-card {
  background-color: #ad8f3b !important;
  margin-top: 30px;
  border-radius: 40px !important ;
}



.el-row{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
