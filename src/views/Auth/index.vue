<template>
  <div class="auth">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/_module/Navbar/index.vue'

export default {
  name: 'Auth',
  components: {
    Navbar
  }
}
</script>
<style scoped>
</style>
