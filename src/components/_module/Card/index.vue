<template>
  <div class="card">
    <div class="container-img">
      <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/1/30/5233630/5233630_50d6b241-b2d3-4926-abc8-10c07ad0d21a_703_703.jpg" alt="" srcset="">
    </div>
    <div class="card-content">
    <h4 class="title">
      Kacamata Thug Life / Kacamata Deal With It
    </h4>
    <h5 class="price">
      Rp 10.000
    </h5>
    </div>
    </div>
</template>
<script>
export default {
  name: 'Card'
}
</script>
<style scoped>
.card{
  height: 270px;
  width: 207px;
  margin: 8px 5px;
  border-radius: 7px;
  overflow: hidden;
}
.card .container-img{
  height: 150px;
  background-color: blue;
}
.card .container-img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card .card-content{
  padding: 5px 8px;
}
.card .title{
  font-size: 14px;
}
.card-content .price{
  font-size: 15px;
  font-weight: 600;
  color: orangered;
}
</style>
