<template>
  <div id="app">
    <Header></Header>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/modules/header/Header';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-content {
  padding-top: 20px;
}
</style>
