<template>
  
  <div class="header">
    <div class="nav">
      <dv-button @click="console.log('click')" border="Border3" color="#c8161d" font-color="#e18a3b">页面一</dv-button>
      <dv-button @click="console.log('click')" border="Border3" color="#c8161d" font-color="#e18a3b">页面二</dv-button>
      <dv-button @click="console.log('click')" border="Border3" color="#c8161d" font-color="#e18a3b">页面三</dv-button>
      <dv-button @click="console.log('click')" border="Border3" color="#c8161d" font-color="#e18a3b">页面四</dv-button>
    </div>
    <div class="title">
      <h1>数据可视化平台</h1>
      <dv-decoration5 :dur="2" style="width:600px;height:40px;" />
    </div>
    <div class="filer">
      <dv-button @click="console.log('click')" border="Border3" color="#c8161d" font-color="#e18a3b">日期筛选</dv-button>
      <dv-button @click="test2" border="Border3" color="#c8161d" font-color="#e18a3b">地区筛选</dv-button>
      <dv-button @click="test" border="Border3" color="#c8161d" font-color="#e18a3b">页面设置</dv-button>
    </div>
  </div>


</template>

<script setup>
import axios from "axios";



const test = async () => {
const result = await axios.get('/api/mapData')
console.log(result.data)
}
const test2 = async () => {
const result = await axios.get('./mapjson/china.json')
console.log(result.data)
}

</script>

<style scoped>
.nav {
color: white;
display: flex;
}
.nav > div{margin-right: 20px;}
.header{display: flex;justify-content: space-between;padding: 20px 50px 0;align-items: center;padding-left: 30px;}
.title{text-align: center;}
.title h1{color: #fff;margin: 0;}
.title>div{margin: 0 auto;}
.filer{display: flex;align-items: flex-start;}
.filer>div{margin-left: 20px;}
</style>
