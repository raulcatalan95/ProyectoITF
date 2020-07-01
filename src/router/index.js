import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Firebase from 'firebase'
import Inicio from "../views/Inicio.vue"
import Buscador from "../views/Buscador.vue"
import Favoritos from "../views/Favoritos.vue"
import Registro from "../views/Registro.vue"
import Notfound from "../views/Notfound.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect:{name:"inicio"},
    meta:{
      login:true
    },
    children:[
      {
        path: "inicio",
        name: "inicio",
       component:Inicio,
     
      },
      {
        path: "buscador",
        name: "buscador",
       component:Buscador,
       
      },
      {
        path: "favoritos",
        name: "favoritos",
       component:Favoritos
      },
    ]
  },
 
      {
        path: "/login",
        name: "login",
        component:Login,
       },
       {
        path: "/registro",
        name: "registro",
        component:Registro,
       },
       {
        path: "/*",
        name: "notfound",
        component:Notfound,
       },
    
    
   
 

 
 
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser
  let authRequired = to.matched.some((route) => route.meta.login)
  if (!user && authRequired) {
    next('login')
  } else if (user && !authRequired) {
    from.name == 'Home' ? false : next('Home')
  } else {
    next()
  }
})


export default router;
