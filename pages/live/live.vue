<template>
	<view class="live">
		<live-player
			id="player"
			class="live__player"
			src="rtmp://36.111.198.103:28936/live/652257e848bfa0a901edbd06"
			mode="live"
			autoplay
			@statechange="handleStateChange"
		/>
	</view>
</template>

<script setup lang="ts">
import { LivePlayerOnStatechangeEvent } from '@uni-helper/uni-app-types'

const handleStateChange = (e: LivePlayerOnStatechangeEvent) => {
	console.log('live-player code:', e.detail.code)
}
</script>

<style scoped lang="scss">
.live {
	width: 100%;
	height: 100vh;
	&__player {
		width: 100%;
		height: 100%;
	}
}
</style>
