<template>
<div class="container-login">
<div class="bg-img">
  <div class="box-register">
    <div class="title-box">
      <h1>Masuk</h1>
      <a href="/register">Daftar</a>
    </div>
    <div class="container-input">
        <Input
         label="No Handphone"
         type="number"
         placeholder="No HP"
         />
         <Input
         label="Password"
         type="password"
         placeholder="Password"
         />
    <div class="container-btn">
    <Button msg="Masuk"/>
    </div>
    <p class="text-daftar">
      Belum punya aku Pasa-ku ? <a href="#"> Daftar Sekarang </a>
    </p>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import Input from '@/components/_base/_input.vue'
import Button from '@/components/_base/_button.vue'
export default {
  name: 'Login',
  components: {
    Input,
    Button
  }
}
</script>
<style scoped>
.container-login{
  height: 100vh;
  /* background-color: blue; */
  padding-top: 20px;
}
.bg-img{
  height: 95%;
  width: 50%;
  margin-right: auto;
  margin-left: 50%;
  background-image: url('../../../assets/img/undraw_shopping_app_flsj.svg');
  background-size: cover;
  background-position-x: -30px;
}
.bg-img .box-register{
  height: 520px;
  width: 450px;
  margin-left: -40%;
  /* background-color: red; */
  border-radius: 15px;
  box-shadow: 0 0 6px rgba(0, 0, 0, .4);
  background-color: rgba(255, 255, 255, 0.4);
  padding: 20px;
}
.title-box{
  display: flex;
  justify-content: space-between;
}
.title-box a{
  font-size: 22px;
  font-weight: 500;
  color: #e17055;
}
.title-box a:hover{
  text-decoration: none;
}
.container-input{
  padding-top: 50px;
}
.container-btn{
  margin-top: 50px;
}
.text-daftar{
  margin-top: 50px;
  font-size: 18px;
  font-weight: 500;
  color: #292929;
  font-family: 'Roboto', sans-serif;
}
.text-daftar a{
  color: #e17055;
  font-weight: bold;
}
</style>
