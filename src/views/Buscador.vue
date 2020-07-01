<template>
  <div class="buscador">
    <h2 class=" buscarPlayer mt-3">Busca a tu jugador</h2>
    <div class="buscando">
      <span>Ingrese nombre y apellido (a excepcion de Neymar)</span>
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
              <h5 class="nameplayer">{{ jugador.name }}</h5>
              <div class="bottom clearfix">
                <el-button
                  class="m-2"
                  @click="ModalJugador = true"
                  type="warning"
                  size="small"
                  >Ver mas</el-button
                >

                <el-dialog
                  id="modaljugador"
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

                  <el-button
                    class="m-2"
                    type="primary"
                    size="small"
                    @click="TeamInfo(jugador.idteam)"
                    >Informacion del Equipo</el-button
                  >

                  <el-dialog
                    :title="jugador.team"
                    :visible.sync="ModalTeam"
                    append-to-body
                  >
                    <div
                      class="fondoEquipo"
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
                    <div class="footerEquipo"></div>
                  </el-dialog>
                </el-dialog>

                <el-button
                  class="m-2"
                  type="warning"
                  icon="el-icon-star-off"
                  size="small"
                  @click="favorito()"
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
      nombre: "sergio aguero",
      dataTeam: [],
      dataPlayer: [],
      ModalJugador: false,
      ModalTeam: false,
    };
  },

  computed: {
    ...mapState(["favoritos"]),
  },

  methods: {
    favorito() {
      let FiltrarFav = "";
      this.dataPlayer.forEach((e) => {
        FiltrarFav = this.favoritos.filter((f) => f.idplayer == e.idplayer);
      });
      console.log(FiltrarFav);
      if (FiltrarFav[0]) {
        alert("este jugador ya existe en favoritos");
      } else {
        this.$store.dispatch("setFavoritos", this.dataPlayer[0]);
        this.$notify.success({
          title: "Favoritos",
          message: "Jugador añadido a Favoritos",
          offset: 100,
        });
      }
    },

    buscar() {
      this.dataPlayer = [];
      let validar = this.nombre.search(" ");
      if (
        (validar != 0 && validar != -1 && validar != this.nombre.length - 1) ||
        this.nombre == "neymar"
      ) {
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
              idplayer: data.data.player[0].idPlayer,
            });
            //strCutout
            //strPlayer
          })
          .catch(() =>
            alert("El jugador que buscaste no existe en nuestros Registros")
          );
      } else {
        alert(
          "Ingrese Nombre y Apellido del Jugador y verifique que no halla espacio en blanco antes del nombre y/o despues del apellido. Para que la busqueda sea exitosa"
        );
      }
    },

    TeamInfo(idTeam) {
      this.dataTeam = [];
      this.ModalTeam = true;

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
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buscador .buscarPlayer {
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  color: white;
  text-align: center;
}
.buscando {
  width: 50%;
  display: flex;
  flex-direction: column;
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
.el-row button {
  text-align: center;
}
.el-row .nameplayer {
  font-weight: 700;
  text-align: center;
}
.buscando span {
  color: #fff;
  margin-top: 30px;
  text-align: center;
}
.footerEquipo {
  height: 120px;
}
@media screen and (min-width: 300px) {
  .buscando {
    width: 90%;
    padding: 10px;
  }
}
@media screen and (min-width: 450px) {
  .buscando {
    width: 70%;
    padding: 10px;
  }
}
@media screen and (min-width: 750px) {
  .buscando {
    width: 60%;
    padding: 10px;
  }
}
@media screen and (min-width: 950px) {
  .buscando {
    width: 50%;
    padding: 10px;
  }
}
</style>
