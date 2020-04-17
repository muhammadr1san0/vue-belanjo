<template>
<div class="signup">
  <Navbar/>
 <div class="bg-img">
   <div class="container-header">
     <div class="box-register">
       <h2>
         Daftar Sekarang {{remaining}}
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
       <CardBenefit title="Pilihan Banyak"/>
       <CardBenefit title="Diantar Cepat"/>
       <CardBenefit title="Layanan Terpecaya"/>
     </div>
   </div>
 </div>
 <div class="used">
   <div class="container">
     <h1>Cara Menggunakan Aplikasi</h1>
     <div class="box-used">
       <div class="user-section">
         <div class="img-used">
         </div>
       </div>
       <div class="user-section">
         <div class="used-card">
           <div class="used-number">
             1
           </div>
           <div class="used-content"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ipsum vel. Facere excepturi harum ea quod unde, doloremque est a.</p></div>
         </div>
         <div class="used-card">
           <div class="used-number">
             2
           </div>
           <div class="used-content"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ipsum vel. Facere excepturi harum ea quod unde, doloremque est a.</p></div>
         </div>
         <div class="used-card">
           <div class="used-number">
             3
           </div>
           <div class="used-content"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ipsum vel. Facere excepturi harum ea quod unde, doloremque est a.</p></div>
         </div>
         <div class="used-card">
           <div class="used-number">
             4
           </div>
           <div class="used-content"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, ipsum vel. Facere excepturi harum ea quod unde, doloremque est a.</p></div>
         </div>
       </div>
     </div>
   </div>
 </div>
  </div>
</template>
<script>
import Input from '../../../components/_base/_input.vue'
import Button from '../../../components/_base/_button.vue'
import CardBenefit from './components/CardBenefit.vue'
import Navbar from '@/components/_module/Navbar/index.vue'

export default {
  name: 'Register',
  components: {
    Input,
    Button,
    CardBenefit,
    Navbar
  },
  // mixins: [CardBenefit],
  data () {
    return {
      data: this.$store.state.todos
    }
  },
  created () {
    // console.log(process.env.VUE_APP_API)
    // this.$store.state.todos = null
    console.log(this.$store.state.todos)
    localStorage.cobalocalstroge = 'hello word saja2'
  },
  mounted () {
    console.log(this.data1)
    console.log(localStorage.cobalocalstroge)
  },
  computed: {
    remaining () {
      return this.$store.getters.remaining
    }
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
  font-family: 'Poppins', sans-serif;
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
  box-shadow: 0px -4px 2px rgba(0, 0, 0, .2);
  padding-top: 40px;
}
.benefit h1{
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  word-spacing: 5px;
  margin-bottom: 50px;
}
.box-benefit{
  display: flex;
  justify-content: space-around;
}
.used{
  background-color: #DFE6E9;
  height: 700px;
  padding-top: 40px;
}
.used h1{
  font-family: 'Roboto', sans-serif;
  font-size: 34px;
  text-align: center;
  margin-bottom: 70px;
}
.box-used{
  display: flex;
}
.box-used .user-section{
  width: 50%;
  height: 100px;
}
.box-used .user-section .img-used{
  height: 525px;
  width: 346px;
  background-color: #c4c4c4;
  margin-right: auto;
  margin-left: auto;
  border-radius: 22px;
}
.user-section .used-card{
  width: 530px;
  height: 105px;
  background: #fff;
  margin: 20px auto;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
}
.user-section .used-card:hover{
 box-shadow: 0 0 4px rgba(15, 53, 155, 0.2);
}
.user-section .used-card .used-number{
  height: 50px;
  width: 90px;
  border-radius: 50%;
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 10px;
}
.used-card .used-content{
  padding: 10px 5px;
}
.used-card .used-content p{
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
}
</style>
