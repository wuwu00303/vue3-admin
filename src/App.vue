<script setup lang="ts">
</script>

<template>
  <RouterView />
</template>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  
}
#app{
  min-width: 1300px;
  height: 100%;
  overflow: hidden;
}
html,body{
  width: 100%;
  height: 100%;
}
.center{
  display: flex;
  justify-content:center;
  align-items:center;
}
</style>
