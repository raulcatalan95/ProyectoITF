<template>
  <div class="Logged">
    <div class="container header_logged">
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-1 col-9" type="search" placeholder="Search" aria-label="Search" />
        <el-button class="btn_login col-3">Buscar</el-button>
      </form>
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
  name: "Logged",
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
.header_home {
  background-color: #024873;
  width: 100%;
  height: 250px;
}
.header_logged {
  background-color: #024873;
  padding: 1%;
}
.btn_login {
  background: #bf045b !important;
  border: 1px solid #fff !important;
  color: #fff !important;
  margin: 5px !important;
}

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
