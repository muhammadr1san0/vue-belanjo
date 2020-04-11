<template>
<div class="signup">
 <div class="bg-img">
   <div class="container-header">
     <div class="box-register">
       <h2>
         Daftar Sekarang
       </h2>
       <p>Sudah Punya Akun ? <a href="#">Masuk</a></p>
       <form action="">
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
          <Input
         label="Password"
         type="password"
         placeholder="Ulangi Password"
         />
         <div class="container-button">
         <Button msg="Daftar Sekarang"/>
         </div>
       </form>
     </div>
   </div>
 </div>
 <div class="container">
   <div class="benefit">
     <h1>Pengapa Pilih Belanjo</h1>
     <div class="box-benefit">
       <div class="cart-benefit"></div>
       <div class="cart-benefit"></div>
       <div class="cart-benefit"></div>
     </div>
   </div>
 </div>
  </div>
</template>
<script>
import Input from '../../../components/_base/_input.vue'
import Button from '../../../components/_base/_button'
export default {
  name: 'Register',
  components: {
    Input,
    Button
  },
  created () {
    console.log(process.env.VUE_APP_API)
  }
}
</script>
<style scoped>
.container-button{
  padding-top: 10px;
  /* background-color: red; */
}
.signup{
  height: 200vh;
  margin-top: 0 !important;
}
.bg-img{
  position: relative;
  background-image: url('../../../assets/img/backgourd-signup.png');
  height: 110vh;
  background-size: cover;
}
.bg-img::after{
  content: '';
  position: absolute;
  background: linear-gradient(to bottom, rgba(0,0,0,.4 ), rgba(0,0,0,.0 ));
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
/* .container-header{
  width:100%;
  height:100%;
  background-color: #123;
  z-index: 1;
  position: relative;
} */
.box-register{
  position: absolute;
  top: 0px;
  right: 50px;
  height: 485px;
  width: 400px;
  border-radius: 6px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  box-sizing: border-box;
  z-index: 1;
  padding:20px 20px 30px;
}
.box-register h2{
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  text-align: center;
  color: #1c1c1c;
  /* margin-bottom: 10px; */
}
.box-register p{
  text-align: center;
  line-height: 30px;
  font-family: 'Poppins', sans-serif;
}
.box-register form{
  padding-top: 5px;
}
.benefit{
  height: 550px;
  border-radius: 20px;
  background-color: #fff;
  position: relative;
  top: -50px;
  box-shadow: 0px 0 4px rgba(0, 0, 0, .2);
  padding-top: 30px;
}
.benefit h1{
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  word-spacing: 5px;
}
.box-benefit{
  display: flex;
  /* justify-content:; */
}
.cart-benefit{
  height: 100px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .4);
  flex: 1;
  margin: 10px;
}
</style>
