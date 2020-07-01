<template>
  <div class="home">
    <b-navbar id="navar" toggleable="lg" type="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="ml-3 mt-2" :to="{ name: 'inicio' }"
            ><img src="../assets/soccer.svg" alt=""
          />ITF</b-nav-item>
          <b-nav-item class="ml-5 mt-2" :to="{ name: 'buscador' }">
            Encuentra tu jugador</b-nav-item
          >
         
          <b-nav-item class="ml-5 mt-2" :to="{ name: 'favoritos' }">
            Favoritos<el-badge :value="favoritos.length" v-if="favoritos.length !=0" class="item"/></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right>
            <!-- Using 'button-content' slot -->
            <template>
              <b-button class="mb-2" variant="danger" @click="logout"
                ><b-icon icon="power" aria-hidden="true"></b-icon> Cerrar sesion
              </b-button>
            </template>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
import Firebase from "firebase";
import { mapState } from "vuex";
export default {
  name: "Home",
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then((accept) => {
          this.$router.push({name:"login"});
          console.log(accept);
        });
    },
  },
  computed: {
    ...mapState(["favoritos"]),
    
  },
};
</script>

<style scoped>
.home{
  text-align: center;
}


#navar {
  background-color: #081b26 !important;
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

.card-title {
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  margin-top: 23%;
}

</style>
