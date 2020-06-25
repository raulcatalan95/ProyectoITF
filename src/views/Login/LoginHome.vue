<template>
    
        <div class="loginhome">
         <div class="header_home">
      <b-card overlay img-src="./img/Futbol01.jpg" img-alt="Card Image" text-variant="white" title="Idols Team Futbol">
        <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
      </b-card>
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
    
</template>