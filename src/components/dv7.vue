<template>
	<dv-decoration7 :style="style">
	  <div class="map_text">
	    {{ title }}
	  </div>
	</dv-decoration7>
</template>

<script setup>
	defineProps({
		title:{
			type: String,
			required: true
		},
		style: Object
	})
</script>

<style scoped>
	.map_text {
	  color: #fff;
	  padding: 0 10px;
	  font-weight: bold;
	}
</style>
