<template>
  <scale-screen width="1920" height="1080" :delay="500" :fullScreen="false" :boxStyle="{
    background: '#03050C',
    overflow: isScale ? 'hidden' : 'auto',
  }" :wrapperStyle="wrapperStyle" :autoScale="isScale">
    <div class="content_wrap">
      <Header />
      <RouterView />
    </div>
  </scale-screen>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from './Header.vue'
import ScaleScreen from "@/components/scale-screen.vue";
import { ref } from "vue";

const isScale = ref(true)
const wrapperStyle = {}
</script>

<style scoped>
.content_wrap {
  width: 100%;
  height: 100%;
  padding: 16px 16px 16px 16px;
  box-sizing: border-box;
  background-image: url("@/assets/img/pageBg.png");
  background-size: cover;
  background-position: center center;
}
</style>
