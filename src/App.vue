<template>
  
  <dv-border-box4 :color="['red', 'green']" style="height: 97vh;width: 98vw;">
    
    <RouterView />
  <div class="link">
    <RouterLink to="/">page1</RouterLink>
    <RouterLink to="/page2">page2</RouterLink>
    <RouterLink to="/page3">page3</RouterLink>
  </div>
  </dv-border-box4>
  
  
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
html,body{padding: 0;margin: 0;}
.link a{color: white;margin-right: 10px;display: inline-block;}
</style>
