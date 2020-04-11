<template>
<div class="navbar-new">
  <header>
    <a href="#" class="logo">Belanjo</a>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Masuk</a></li>
      <li><a href="#">Daftar</a></li>
    </ul>
  </header>
</div>
</template>
<script>
export default {
  name: 'Navbar'
}
window.addEventListener('scroll', function () {
  var header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
})
</script>
<style scoped>
header{
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: .6s;
  padding: 25px 100px;
  z-index: 1000;
  font-family: 'Poppins', sans-serif !important;
}
header.sticky{
  padding: 5px 100px;
  background: #fff;
  box-shadow: 5px 0 4px rgba(0, 0, 0, .4);
}
header .logo{
  position: relative;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transform: .6s;
}

header ul{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul li{
  position: relative;
  list-style: none;
}

header ul li a{
  position: relative;
  margin: 0 15px !important;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500;
  transition: .6s;
  font-size: 14px;
  /* background-color: salmon; */
}
header.sticky .logo,
header.sticky ul li a{
color: #000;
}
</style>
