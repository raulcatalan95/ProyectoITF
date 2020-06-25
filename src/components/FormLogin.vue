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
        <el-button class="btn_login">Log In</el-button>
        <el-button class="btn_login_2">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FormLogin",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  }
};
</script>
