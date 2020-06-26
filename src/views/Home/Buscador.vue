<template>
  <div class="buscador">
    <h2 class="mt-3">Busca a tu jugador</h2>
    <div class="buscando">
      <span>ingrese nombre y apellido</span>
      <el-input
        placeholder="Nombre y Apellido del jugador"
        v-model="nombre"
        class="input-with-select"
      >
        <el-button class="btnSearch" slot="append" icon="el-icon-search" @click="buscar" ></el-button>
      </el-input>
    </div>

    <div class="mostrarJugadores">

        <el-row>
      <el-col class="columna" :span="14" v-for="(jugador, index) in datos" :key="index">
        <el-card  :body-style="{ padding: '0px' }">
          <img :src="jugador.strCutout" :alt="jugador.strPlayer" class="image" />
          <div style="padding: 14px;">
            <h5>{{ jugador.strPlayer }}</h5>
            <div class="bottom clearfix">

  <el-popover
  :title="jugador.strPlayer"
  placement="top"
  width="400"
  height="700"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="Fecha nacimiento"></el-table-column>
    <el-table-column width="150" property="nation" label="Nacionalidad"></el-table-column>
    <el-table-column width="100" property="team" label="Equipo"></el-table-column>
    <el-table-column width="300" property="address" label="address"></el-table-column>
  </el-table>
  <el-button slot="reference" type="warning" size="small" >Ver mas</el-button>
</el-popover>

 <el-button class="ml-2" type="warning" icon="el-icon-star-off" size="small" @click="open">Añadir a Favoritos</el-button>

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
    gridData: [],
    nombre:'',
    datos:[],
  }
},
methods: {
   open() {
        this.$notify.success({
          title: 'Favoritos',
          message: 'Jugador añadido a Favoritos',
          offset: 100
        });
      },

  buscar() {
   if(this.nombre && this.nombre.includes(" ")){ 
     this.gridData=[];
      axios
        .get(
          "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=" +
            this.nombre
        )
        .then((data) => {
           this.datos= data.data.player
           this.gridData.push({
             date:data.data.player[0].dateBorn,
             team:data.data.player[0].strTeam,
             nation:data.data.player[0].strNationality
           })
            //strCutout
            //strPlayer
       }).catch (() =>
          alert('jugador no existe')
        )
        }else{
          alert('Ingrese Nombre y Apellido del Jugador para que la busqueda sea exitosa')
        }
},

}
}
</script>

<style>

.buscador {
  background-image: url("./fondo_login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.buscador h2{
   font-family: 'Noto Sans', sans-serif;
 font-weight: 700;
 color: white;
}
.buscando {
  width: 50%;
}
.btnSearch {
  font-size: 1rem !important;
  background-color: #42bf46 !important;
  color: #fff !important;
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
 }
.el-row{
  display: flex;
  align-items: center;
  justify-content: center;

  
}
.el-row h5{
  font-weight: 700;
}
.buscando span{
  color: #fff;
  margin-top: 30px;
}

</style>
