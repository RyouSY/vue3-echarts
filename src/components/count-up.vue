<template>
	<div class="msg_txt">
	  <dv-decoration-9 :style="style">
	    <div class="text">
	      <dv-digital-flop :config="config" />
	    </div>
	  </dv-decoration-9>
	  <p>{{ title }}</p>
	</div>
</template>

<script setup>
	defineProps({
		title:{
			type: String,
			required: true
		},
		style: Object,
		config: {
			type: Object,
			required: true
		}
	})
</script>

<style scoped>
	.text {
	  color: #fff;
	  font-size: 22px;
	  margin-top: 10px;
	}
	.msg_txt>p {
	  color: #fff;
	  text-align: center;
	}
</style>
