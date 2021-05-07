<template>
	<div id="app" class="screen-container">
		<page-header></page-header>
		<page-content></page-content>
	</div>
</template>

<script>
import pageHeader from "./components/page-header"
import pageContent from "./components/page-content"
import "./assets/iconfont/iconfont.css"
import "./assets/style/index.css"
export default {
	components:{
		pageHeader,
		pageContent
	}
}
</script>

<style scoped>
	div.screen-container{
		height:100vh;
		overflow:hidden;
		background:#0a1231;
	}
</style>
