<template>
  <div class="container-navbar">
    <h3>pasa-ku</h3>
    <h5 class="text-category">kategori</h5>
    <div class="form-search">
      <input type="text" name="cari" id=""> <button type="submit">Search</button>
    </div>
    <div class="box-icon">
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
    <div class="box-profile">
      <div class="photo">
      </div>
      <p>coba saja</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavbarHome'
}
</script>
<style scoped>
.container-navbar{
  padding: 8px 20px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, .2);
  align-items: center;
  /* font-size: 10px; */
}
.box-icon{
  width: 180px;
}
.box-icon ul{
  display: flex;
  justify-content: space-around;
}
.box-icon ul li{
  list-style: none;
}
.box-profile{
  width: 220px;
}
.form-search{
  position: relative;
  /* width: 400px; */
  /* background-color: blue; */
}
.form-search input[name="cari"]{
  border-radius: 10px;
  border: 1px solid #BDBDBD;
  width: 430px;
  height: 27px;
  padding-left: 40px;
}
.form-search input:focus{
 outline-width: 0;
 box-shadow: 0px 0px 1px 1px rgba(255, 112, 85, .5);
}
.form-search button{
  position: absolute;
  right: 0px;
  height: 27px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid #BDBDBD;
  width: 50px;
  font-size: 12px;
}
.box-profile{
  display: flex;
  align-items: center;
  width: 160px;
}
.box-profile .photo{
  height: 33px;
  width: 33px;
  background-color: salmon;
  border-radius: 50%;
  margin-right: 5px;
}
.box-profile p{
  line-height: 33px;
  margin-bottom: 0px;
}
.text-category{
  font-size: 15px;
  margin-bottom: 0px;
}
</style>
