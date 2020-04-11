<template>
  <button
  @click="$emit('toogleEvent')"
  >{{msg ? msg: ''}}</button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    msg: {
      type: String
    }
  }
}
</script>
<style scoped>
button{
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid white;
  background-color: #E17055;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}
</style>
