<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Email">
        <el-input v-model="form.email" placeholder="please enter your password"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password" placeholder="please enter your password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn_login" @click="login">Log In</el-button>
        
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  name: "formlogin",
  data() {
    return {
      form: {
        email: "correo@correo",
        password: "123456"
      }
    };
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
 
};
</script>
