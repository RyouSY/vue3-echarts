<template>
  <div class="index_box">
    <div class="left_box">
      <leftTop />
      <leftCenter />
      <leftBom />
    </div>
    <div class="center_box">
      <centerMap />
      <centerBom />
    </div>
    <div class="right_box">
      <rightTop />
      <rightCenter />
      <rightBom />
    </div>
  </div>
</template>

<script setup>
import leftTop from './left-top.vue';
import leftCenter from './left-center.vue';
import leftBom from './left-bom.vue';
import centerMap from './center-map.vue';
import centerBom from './center-bom.vue';
import rightTop from './right-top.vue';
import rightCenter from './right-center.vue';
import rightBom from './right-bom.vue';

</script>

<style scoped>
.index_box {
  width: 100%;
  display: flex;
  min-height: calc(100% - 64px);
  justify-content: space-between;
}
.left_box,
.right_box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 540px;
  box-sizing: border-box;
  flex-shrink: 0;
}
.center_box{
  flex: 0 0 780px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
