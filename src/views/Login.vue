<template>
  <div class="about">
     <div class="navbar-style">
      <nav class="navbar navbar-expand-lg navbar-dark navbar_home">
        <a class="navbar-brand  ml-3" href="#"
          >ITF</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto"></ul>

          <div class="form-inline my-2 my-lg-0">
            <el-button class="btn_login" type="text" >Inicia Sesion</el-button>
             <b-nav-item class="ml-5" :to="{name:'formlogin'}"> Editar</b-nav-item>
          </div>
        </div>
      </nav>
    </div>

       <div class="loginhome">
         <div class="header_home">
      <!--b-card overlay img-src="./img/Futbol01.jpg" img-alt="Card Image" text-variant="white" title="Idols Team Futbol">
        <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>



      </b-card-->
    </div>
    <div>
      <section>
      
      </section>
    </div>
    <div class="carousel_home">
      <el-carousel height="200px" direction="vertical" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="medium">{{ "Carousel " + item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <footer>ITF. Copyrigth 2020.</footer>



       </div>
</div>
  
</template>
<script>
export default {
data() {
  return {
    
  }
},

    methods: {
      logueate(){
       this.$router.push({name:'formlogin'})
      
        
       
      },
      
    }
   
  }

</script>

<style>
.login_home{
  background-image: url("../../../public/img/Futbol01.jpg");

}

#Btnregistrate :hover {
  background-color: #bf045b;
}

</style>

