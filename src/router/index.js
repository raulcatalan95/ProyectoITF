import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Firebase from 'firebase'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      login:true
    }
  },
  {
    path: "/login",
    name: "login",
    component:Login,
   
    
   
  },
 
  {
    path: "/logged",
    name: "Logged",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Home/Logged.vue"),
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
