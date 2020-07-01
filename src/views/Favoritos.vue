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
                  <div class="bottom clearfix" id="botonfav">
                    <el-button
                      class="m-2"
                      @click="ModalVerMas(i, jugador.idteam)"
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
                      @click="TeamInfo()"
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
                    <div class="footerEquipo">

                    </div>
                  </el-dialog>

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
    ...mapState(["favoritos", "ModalInfo"]),
  },
  methods: {
    eliminar(i) {
      this.$store.dispatch("eliminarFav", i);
      alert("eliminado");
    },
    ModalVerMas(i, idteam) {
      this.$store.dispatch("SetModalInfo", i);
      this.ModalJugador = true;
      this.IdTeam = idteam;
    },
    TeamInfo() {
      this.dataTeam = [];
      this.ModalTeam = true;

      axios
        .get(
          "https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=" +
            this.IdTeam
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
  data() {
    return {
      ModalJugador: false,
      ModalTeam: false,
      IdTeam: "",
      dataTeam: [],
    };
  },
  mounted() {
    console.log(this.favoritos.filter(f => f.name == 'hola'));

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
  margin-top: 10%;
}
.footerEquipo{
  height: 120px;
}

@media screen and (min-width: 300px) {
  .carta {
    width: 60% !important;
  }
  #botonfav {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (min-width: 370px) {
  .carta {
    width: 50% !important;
  }
  #botonfav {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (min-width: 450px) {
  .carta {
    width: 40% !important;
  }
  #botonfav {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (min-width: 1020px) {
  .carta {
    width: 25% !important;
  }
  #botonfav {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (min-width: 1200px) {
  .carta {
    width: 25% !important;
  }
  #botonfav {
    display: inline-block;
  }
}
</style>
