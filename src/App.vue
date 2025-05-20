<template>
  <div id="app">
    <StudentTable />
  </div>
</template>

<script>
import StudentTable from './components/StudentsView.vue';

export default {
  name: 'App',
  components: {
    StudentTable, 
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
