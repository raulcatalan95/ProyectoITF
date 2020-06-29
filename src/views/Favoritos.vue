<template>
    <div class="favoritos">
          <!--el-row>
      <el-col class="columna" :span="14" v-for="(jugador, index) in favoritos[0]" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="jugador.img" :alt="jugador.name" class="image" />
          <div style="padding: 14px;">
            <h5>{{ jugador.name }}</h5>
            <div class="bottom clearfix">
                 </div>
          </div>
        </el-card>
      </el-col>
    </el-row-->

  <el-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</el-button>

<el-dialog title="Shipping address" :visible.sync="dialogTableVisible">
 <div class="modalFut"><h1>hola</h1></div>
</el-dialog>
        
    </div>
</template>
<script>
import axios from 'axios'
import {mapState} from "vuex"

export default {
    computed: {
        ...mapState(['favoritos'])
    },
    methods: {
       
    },
    data() {
      return {
         dialogTableVisible: false,
      }
    },
    mounted() {
console.log(this.favoritos)

        
       /*axios.get("https://us-central1-proyectoitf.cloudfunctions.net/jugadores/jugadores")
        .then((data) => {
            alert('llego desde la api')
            console.log(data)
        }).catch((err) => {
            alert('no llego nada')
        });*/
    },
}
</script>
<style scooped>
.image {
 width: 100%;
 display: block;
 background-image: url(../assets/pngocean.png);
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


</style>