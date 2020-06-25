<template>
  <div class="home">
    <!--    -->
    <div class="header_home">
      <b-card overlay img-src="./img/Fondoheader2.png" img-alt="Card Image" text-variant="black" title="Idols Team Futbol">
        <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
      </b-card>
    </div>
    <div>
      <section>
        <el-button class="btn_login">Log In</el-button>
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

<script>
export default {
  name: "Home",
};
</script>

<style>
footer {
  background-color: #081b26;
  height: 50px;
}
.navbar_home {
  background-color: #081b26 !important;
}
section {
  background-color: #024873;
  width: 100%;
  height: 50px;
}
.btn_login {
  background: #bf045b !important;
  border: 1px solid #fff !important;
  color: #fff !important;
  margin: 5px !important;
}

/* .carousel_home {
  height: 200px; */

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
