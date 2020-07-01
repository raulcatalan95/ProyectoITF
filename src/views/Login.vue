<template>
  <div class="login">
    <router-link :to="{ name: 'registro'}">Registro</router-link>
  
    <h2>Login</h2>
   <div class="formulario ">
     <h4>Correo Electronico</h4>
      <b-input-group >
      <b-input-group-prepend is-text>
        <b-icon icon="envelope"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="email" placeholder="correo@example.com"  v-model="correo"></b-form-input>
    </b-input-group>
   
   
    <h4>Contraseña</h4>
     <b-input-group >
      <b-input-group-prepend is-text>
        <b-icon icon="lock-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="password" placeholder="contraseña"  v-model="contraseña"></b-form-input>
    </b-input-group>
    <button @click="login" class="btn btn-success m-3">Ingresar</button>
</div>


</div>
</template>
<script>
import Firebase from 'firebase'
export default {
  name:'login',
  
  data() {
    return {
      correo:'correo@correo.com',
      contraseña:'123456',
    }
  },
methods: {
  
 login() {
 Firebase.auth().signInWithEmailAndPassword(this.correo,this.contraseña).then(
 accept => {
   alert('fuiste logeado correctamente')
 this.$router.push('/');
 console.log(accept.email)
 },
 reject => {
 alert('usuario no existente')
console.log(reject.message)
 
 
 });
 },

},
}
</script>

<style  scoped>
.formulario{
  width: 50%;
  margin: auto;
  background-image: url(../assets/estadio.jpg);
   background-position-y: center;
   border-radius: 15px;
  padding: 30px;
  color: azure;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login{
 
  height:600px;
  display: flex;
  flex-direction: column;
  align-items: center;

background-position-y: center;
  color: azure;
}
.login h2{
  color: black;
}
@media screen and (min-width:300px){
  .formulario{
      width: 100%;
      padding: 5px;
}
  }
  @media screen and (min-width:600px){
  .formulario{
      width: 70%;
 padding: 20px;
}
  }
    @media screen and (min-width:900px){
  .formulario{
      width: 50%;
 padding: 40px;
}
  }

 

</style>



