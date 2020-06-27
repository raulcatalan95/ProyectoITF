<template>
  <div class="login">
  
    <h2>Login</h2>
   <div class="formulario p-5">
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
}
.login{
 
  height:600px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  color: azure;
}
</style>



