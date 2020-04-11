<template>
  <div class="form-group">
    <label>{{label}}</label>
    <input
    :type="type"
    :placeholder="placeholder"
    :value="value"
    v-on:input="$emit('input', $event.target.value)"
    @change="$emit('change', $event.target.value)"
    :class="error ? 'error-input' : ''"
    >
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: {
    label: {
      type: String
    },
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    error: {
      type: String
    }

  }
}
</script>
<style scoped>
.form-group{
  display: flex;
  flex-direction: column;
  min-height: 80px;
}
.form-group label{
  text-decoration: capitalize;
  display: blok;
  font-size: 16px;
  color: #363434;
}
input[type=text], input[type=password], input[type=number], input[type=email]{
  padding: 10px 15px;
  border-radius: 3px;
  border: 1px solid #E2E5ED;
  font-size: 16px;
  /* width: 100%; */
}
</style>
