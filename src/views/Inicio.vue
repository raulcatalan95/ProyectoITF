<template>
    <div class="inicio">

 <header>
   
   <h2>Idols Team Futbol</h2>
   <h5 class="mb-5">La App que te informa sobre tus jugadores Favoritos</h5>
   
   </header> 
   <section class="subtitulo">
     <h5>Encuentra a los jugadores mas populares del Mundo</h5>
     </section> 
     
     <el-carousel :interval="3000" type="card" class="carrusel">
    <el-carousel-item  v-for="(jugador, index) in datos" :key="index">
      <el-col class="columna" :span="24">
        <el-card  :body-style="{ padding: '0px' }">
          <img :src="jugador.img" class="image" />
          <div style="padding: 14px;">
            <h5>{{ jugador.name }}</h5>
            <div class="bottom clearfix">
            
            </div>
          </div>
        </el-card>
      </el-col>
    </el-carousel-item>
  </el-carousel>

    
          
    <footer>ITF. Copyrigth 2020.</footer>



    </div>
</template>

<script>
import axios from "axios";
import Firebase from "firebase"
export default {
    data() {
        return {
        datos:[],
        listajugadores: [
        "messi",
        "neymar",
        "mbappe",
        "arturo vidal",
        "alexis sanchez",
        "cristiano ronaldo",
       
      ], 
        }
        },
     
    created(){
    this.listajugadores.forEach((e) => {
      axios
        .get(
          "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=" + e
        )
        .then((data) => {
          this.datos.push({
            img: data.data.player[0].strCutout,
            name: data.data.player[0].strPlayer,
            idteam: data.data.player[0].idTeam,
          });
        });
    });
  },
  mounted() {
    let correo = Firebase.auth().currentUser.email
    axios.get("https://us-central1-proyectoitf.cloudfunctions.net/jugadores/jugadores/"+correo ).then(data=>{
      let favs = data.data.jugadoresFavoritos
      favs? 
      this.$store.dispatch('setFavoritosInicial', favs)
      :
      this.$store.dispatch('setFavoritosInicial', [])
    })
  },
 
    
}
</script>

<style lang="scss"  scoped>


header h2{
  font-family: 'Noto Sans', sans-serif;
 font-weight: 700;
 font-size: 3rem;
  color: #fff;

}
 


header h5{
 color: #fff;

}
footer {
  background-color: #081b26;
  height: 50px;
  text-align: center;
  color:#ffffff80;
}
.subtitulo {
  background-color: #024873;
  width: 100%;
  height: 70px;
  color: white;
 
}

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
  background-color: #ad8f3b;
  margin: 2px;
  
}
header{
  background-image: url(../assets/futbol01.jpg);
  height: 360px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y:bottom;
  display: flex;
  flex-direction: column;
justify-content: flex-end;
align-items: center;

}


.el-carousel__item {
  height: 500px;
  h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }
}

  .el-carousel__item:nth-child(2n) {
    background-color: #fff;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #fff;
  }
  .carrusel {
    height: 500px;
  }
 .subtitulo{
   display: flex;
   align-items: center;
   justify-content: center;
 }
 @media screen and (min-width:320px){
 .el-carousel__item{
   height: 300px;
}
.carrusel{
  height: 250px;
}
  }
   @media screen and (min-width:450px){
 .el-carousel__item{
   height: 350px;
}
.carrusel{
  height: 350px;
}
  }
    @media screen and (min-width:760px){
 .el-carousel__item{
   height: 460px;
}
.carrusel{
  height: 460px;
}
  }
      @media screen and (min-width:950px){
 .el-carousel__item{
   height: 560px;
}
.carrusel{
  height: 560px;
}
  }

       @media screen and (min-width:1150px){
 .el-carousel__item{
   height: 500px;
}
.carrusel{
  height: 500px;
}
  }
</style>