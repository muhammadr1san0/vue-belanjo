<template>
  <div class="container-home">
    <NavbarHome/>
    <div class="container">
      <div class="content">
        <div class="sidebar">
          <Sidebar/>
        </div>
        <div class="container-card">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarHome from '@/components/_module/NavbarHome/index.vue'
import Sidebar from '@/components/_module/Sidebar/index.vue'
import Card from '@/components/_module/Card/index.vue'
export default {
  name: 'Home',
  components: {
    NavbarHome,
    Sidebar,
    Card
  }
}
</script>
<style scoped>
.content{
  display: flex;
}
.sidebar{
  padding-top: 20px;
  width: 260px;
}
.container-card{
  display: flex;
  flex-wrap: wrap;
  padding: 30px 10px 20px 20px;
}
</style>
