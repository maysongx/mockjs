<template>
  <div class="hello">
    <h1>打开控制台查看数据</h1>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'HelloWorld',
    mounted() {
      axios.get('/user/userinfo').then(res => {
        console.table(res.data);
      }).catch(err => {
        console.error(err);
      });
    }
  };
</script>
<style scoped>
</style>
