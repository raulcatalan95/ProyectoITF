<template>
  <div class="favoritos">
    <table class="table">
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
                      type="warning"
                      icon="el-icon-delete"
                      size="small"
                      @click="datosplayer(i)"
                      >Eliminar de favoritos</el-button
                    >
                  </div>
                </div>
              </el-card>
            </el-col>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["favoritos"]),
  },
  methods: {
    datosplayer(i) {
      this.ModalJugador = true;

      console.log(i);
    },
  },
  data() {
    return {
      ModalJugador: false,
      index: "",
    };
  },
  mounted() {
    console.log(this.favoritos);

    /*axios.get("https://us-central1-proyectoitf.cloudfunctions.net/jugadores/jugadores")
        .then((data) => {
            alert('llego desde la api')
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
  background-position-y:center;
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
</style>
