<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  min-width: 768px;
  margin: 0;
  padding: 0;
  -webkit-overflow-scrolling: touch;
  font-family: "Roboto", sans-serif;
}
.main {
  background-color: #eef1f9;
  margin: 0 auto;
  padding: 0 20px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.page-title {
  color: #4c4c4c;
  background-color: #f0fffe;
  font-size: 20px;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
</style>
