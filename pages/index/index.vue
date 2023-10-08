<template>
	<view class="content">
		{{title}}
	</view>
</template>

<script setup lang="ts">
	import { onReady } from '@dcloudio/uni-app'
	import { ref } from 'vue'
	const title = ref('Hello uni app')
	onReady(() => {
		console.log('onReady')
	})
</script>

<style>
	.content {}
</style>