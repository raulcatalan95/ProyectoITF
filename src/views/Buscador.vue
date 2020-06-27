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
        <el-button
          class="btnSearch"
          slot="append"
          icon="el-icon-search"
          @click="buscar"
        ></el-button>
      </el-input>
    </div>

    <div class="mostrarJugadores">
      <el-row>
        <el-col
          class="columna"
          :span="14"
          v-for="(jugador, index) in dataPlayer"
          :key="index"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="jugador.img" :alt="jugador.name" class="image" />
            <div style="padding: 14px;">
              <h5>{{ jugador.name }}</h5>
              <div class="bottom clearfix">
                <el-button @click="drawer = true" type="warning" size="small"
                  >Ver mas</el-button
                >
                <el-drawer
                  :title="jugador.name"
                  :visible.sync="drawer"
                  size="80%"
                >
                  <div>
                    
            <div class="infoPlayer">
                     
                      <h5>Club: {{ jugador.team }}</h5>
                      <h5>Nacionalidad: {{ jugador.nation }}</h5>
                      <h5>Posicion: {{ jugador.position }}</h5>
                      <h5>N Camiseta: {{ jugador.number }}</h5>
                      <h5>Altura: {{ jugador.height }}</h5>
                      <h5>Peso: {{ jugador.weight }}</h5>
                      <h5>Origen: {{ jugador.location }}</h5>
                      <h5>Fecha Nacimiento: {{ jugador.date }}</h5>
                      </div>
                    
                    <div>
                      <el-button
                        @click="TeamInfo(jugador.idteam)"
                        type="warning"
                        size="small"
                        >iInformacion del Equipo</el-button
                      >
                      <el-drawer
                        :title="jugador.team"
                        :append-to-body="true"
                        :visible.sync="innerDrawer"
                         size="60%"
                      >
                        <div
                          class="infoteam"
                          v-for="equipo in dataTeam"
                          :key="equipo"
                        >
                         
                            
                            <h5>Proximo partido: {{ equipo.nextmatch }}</h5>
                            <h5>Equipo local: {{ equipo.hometeam }}</h5>
                            <h5>Fecha : {{ equipo.datematch }}</h5>
                            <h5>Horario: {{ equipo.timematch }}</h5>
                            <h5>Temporada: {{ equipo.season }}</h5>
                            <h5>Liga: {{ equipo.league }}</h5>
                         
                        </div>
                      </el-drawer>
                    </div>
                  </div>
                </el-drawer>

                <el-button
                  class="m-2"
                  type="warning"
                  icon="el-icon-star-off"
                  size="small"
                  @click="favorito"
                  >Añadir a Favoritos</el-button
                >
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "buscador",
  data() {
    return {
      nombre: "lionel messi",
      dataTeam: [],
      dataPlayer: [],
      drawer: false,
      innerDrawer: false,
      imagenModal: "./fondo_modal.jpg",
    };
  },

  computed: {
    ...mapState(["favoritos"]),
  },

  methods: {
    favorito() {
      axios
        .post(
          "https://us-central1-proyectoitf.cloudfunctions.net/jugadores/jugador",
          +this.dataPlayer
        )
        .then((result) => {
          this.$notify.success({
            title: "Favoritos",
            message: "Jugador añadido a Favoritos",
            offset: 100,
          });
          console.log(result.message);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },

    buscar() {
      this.dataPlayer = [];
      if (this.nombre && this.nombre.includes(" ")) {
        axios
          .get(
            "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=" +
              this.nombre
          )
          .then((data) => {
            this.dataPlayer.push({
              name: data.data.player[0].strPlayer,
              imgBanner: data.data.player[0].strBanner,
              img: data.data.player[0].strCutout,
              date: data.data.player[0].dateBorn,
              team: data.data.player[0].strTeam,
              nation: data.data.player[0].strNationality,
              number: data.data.player[0].strNumber,
              position: data.data.player[0].strPosition,
              height: data.data.player[0].strHeight,
              weight: data.data.player[0].strWeight,
              location: data.data.player[0].strBirthLocation,
              idteam: data.data.player[0].idTeam,
            });
            //strCutout
            //strPlayer
          })
          .catch(() => alert("jugador no existe"));
      } else {
        alert(
          "Ingrese Nombre y Apellido del Jugador para que la busqueda sea exitosa"
        );
      }
    },

     TeamInfo(idTeam) {
      this.dataTeam = [];
      this.innerDrawer = true;
      axios
        .get(
          "https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=" +
            idTeam
        )
        .then((data) => {
          console.log(data);
          this.dataTeam.push({
            nextmatch: data.data.events[0].strEvent,
            league: data.data.events[0].strLeague,
            season: data.data.events[0].strSeason,
            hometeam: data.data.events[0].strHomeTeam,
            datematch: data.data.events[0].dateEvent,
            timematch: data.data.events[0].strTime,
          });
        })
        .catch((err) => {
          alert("el equipo no tiene informacion reciente");
        });
    },
  },
};
</script>

<style scoped>
.buscador {
  background-image: url(../assets/fondo_login.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.buscador h2 {
  font-family: "Noto Sans", sans-serif;
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
.el-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-row h5 {
  font-weight: 700;
}
.buscando span {
  color: #fff;
  margin-top: 30px;
}


</style>
