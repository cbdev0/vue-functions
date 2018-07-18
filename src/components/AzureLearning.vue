<template>
  <div>
    <p>Hello {{name}}</p>
    <input type="text" @input="handleNameInput">
  </div>
</template>
<script>
export default {
  name: "AzureLearning",
  data() {
    return {
      name: 'Chris'
    }
  }
}

function handleNameInput(input) {
  this.name = input;
}
</script>
<style>

</style>


