<template>
  <div class="registro">
  
    <h2>registro</h2>
       
    <div class="formulario p-5">
      <h4>Correo Electronico</h4>
      <b-input-group>
        <b-input-group-prepend is-text>
          <b-icon icon="envelope"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="email" placeholder="correo@example.com" v-model="correo"></b-form-input>
      </b-input-group>

      <h4>Contraseña</h4>
      <b-input-group>
        <b-input-group-prepend is-text>
          <b-icon icon="lock-fill"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="password" placeholder="contraseña" v-model="contraseña"></b-form-input>
      </b-input-group>
      <button @click="create" class="btn btn-success m-3">Registrarse</button>
    </div>
  </div>
</template>
<script>
import Firebase from "firebase";
export default {
  name: "registro",

  data() {
    return {
      correo: "correo2@correo.com",
      contraseña: "123456"
    };
  },
  methods: {
    create() {
      Firebase.auth()
        .createUserWithEmailAndPassword(this.correo, this.contraseña)
        .then(
          accept => {
            alert("fuiste Registrado correctamente");
            this.$router.push({ name: "inicio" });
          },
          reject => {
            alert("Ingrese un correo valido");
          }
        );
    }
  }
};
</script>

<style  scoped>
.formulario {
  width: 50%;
  margin: auto;
  background-image: url(../assets/fondoregistro.jpg);
  background-position-y: center;
  border-radius: 15px;
  padding: 30px;
  color:#fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formulario h4{
    background-color: #000;
}

.registro {
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-position-y: center;
  
}
@media screen and (min-width: 300px) {
  .formulario {
    width: 100%;
    padding: 2px;
  }
}
@media screen and (min-width: 600px) {
  .formulario {
    width: 70%;
  }
}
@media screen and (min-width: 900px) {
  .formulario {
    width: 50%;
  }
}
</style>