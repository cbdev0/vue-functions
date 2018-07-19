<template>
  <div>
    <p>Your name is {{name}}</p>
    <name-input @name-change="nameChangeHandler" :initial-name="name"></name-input> 
  </div>
</template>
<script>
import NameInput from './NameInput';

export default {
  name: 'AzureLearning',
  data() {
    return {
      name: 'Chris'
    } 
  },
  components: {
    'name-input': NameInput
  },
  methods: {
    nameChangeHandler: function(value) {
      this.name = value;
      let url = `https://newphonebookfunctionapp.azurewebsites.net/phonebook/name/${value}`;
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function(e) {
        console.log('response:', xhr.responseText)
      };
      xhr.send();
    }
  }
}
</script>
<style>

</style>
