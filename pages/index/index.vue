<template>
	<view class="content">
		{{title}}
		<uni-badge text="1" type="primary"></uni-badge>
		<uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>
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
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>