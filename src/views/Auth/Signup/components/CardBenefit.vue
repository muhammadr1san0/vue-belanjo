<template>
<div class="cart-benefit">
  <h3>Pilihan Banyak</h3>
    <div class="icon-benefit">
    </div>
    <div class="content-benefit">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem facilis, facere odio rerum id soluta labore cumque ipsum modi quasi quia, quis distinctio aliquam animi, placeat impedit accusantium est.</p>
    </div>
</div>
</template>
<script>
export default {
  name: 'CarBenefit',
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    },
    content: {
      type: String
    }
  },
  data () {
    return {
      data1: 'satu',
      data2: 'dua'
    }
  }
}
</script>
<style scoped>
.cart-benefit{
  height: 400px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .4);
  margin: 10px;
  width: 330px;
  border-radius: 15px;
  padding: 10px 22px;
}
.cart-benefit h3{
  text-align: center;
  font-size: 22px;
  margin-bottom: 25px;
}
.cart-benefit .icon-benefit{
  height: 160px;
  width: 160px;
  border-radius: 50%;
  background-color: grey;
  margin-left: auto;
  margin-right: auto;
}
.cart-benefit .content-benefit{
  margin-top: 10px;
}
.cart-benefit .content-benefit p{
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  text-align: justify;
}
</style>
