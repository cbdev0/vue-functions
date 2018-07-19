<template>
  <div>
    <input type="text" v-model="name">
  </div>
</template>
<script>
export default {
  name: 'NameInput',
  data() {
    return {}
  },
  props: [
    'initialName'
  ],
  computed: {
    name: {
      get: function() {
        return this.initialName;
      },
      set: function(value) {
        this.$emit('name-change', value)
      }
    }
  }
}
</script>
<style scoped>

</style>
