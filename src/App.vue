<template>
  <div id="app">
   
    <router-view />
  </div>
</template>
<script>
export default {
    methods: {
    
    }
  }

</script>

<style>

.el-dialog__body{
  height: 100%;
  width: 100%;
  background-image: url(assets/fondo_modal.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  color: #fff !important;
  padding: 10px;
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.el-dialog__header{
  background-color: #032d5f;
  
}

.el-dialog__header .el-dialog__title{
  color: #fff ; 
  font-weight: 900;
  font-size: 2rem;
   font-family: 'Noto Sans', sans-serif;
}
 @media screen and (min-width:300px){

.el-dialog{
  width: 100% !important;
}
  }
    @media screen and (min-width:450px){
.el-dialog{
  width: 90% !important;
}
  }
  @media screen and (min-width:750px){
.el-dialog{
  width: 60% !important;
}
  }
      @media screen and (min-width:950px){
 .el-dialog{
  width: 50% !important;
}
  }

</style>
