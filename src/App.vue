<template>
  <dv-border-box4 :color="['red', 'green']" style="height: 98vh;width: 99vw;" :reverse="true">
    <div class="header">
      <div class="nav">
        <RouterLink to="/"><dv-button @click="console.log('click')" border="Border3" color="#c8161d" font-color="#e18a3b">页面一</dv-button></RouterLink>
        <RouterLink to="/page2"><dv-button @click="console.log('click')" border="Border3" color="#c8161d" font-color="#e18a3b">页面二</dv-button></RouterLink>
        <RouterLink to="/page3"><dv-button @click="console.log('click')" border="Border3" color="#c8161d" font-color="#e18a3b">页面三</dv-button></RouterLink>
      </div>
      <div class="title">
        <h1>数据可视化平台</h1>
        <dv-decoration5 :dur="2" style="width:600px;height:40px;" />
      </div>
      <div class="filer">
        <dv-button @click="console.log('click')" border="Border3" color="#c8161d" font-color="#e18a3b">日期筛选</dv-button>
        <dv-button @click="console.log('click')" border="Border3" color="#c8161d" font-color="#e18a3b">地区筛选</dv-button>
        <dv-button @click="console.log('click')" border="Border3" color="#c8161d" font-color="#e18a3b">页面设置</dv-button>
      </div>
    </div>
    <RouterView />
  </dv-border-box4>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
.nav a {
  color: white;
  margin-right: 20px;
  display: inline-block;
}
.header{display: flex;justify-content: space-between;padding: 20px 50px 0;align-items: center;padding-left: 30px;}
.title{text-align: center;}
.title h1{color: #fff;margin: 0;}
.title>div{margin: 0 auto;}
.filer{display: flex;align-items: flex-start;}
.filer>div{margin-left: 20px;}
</style>
