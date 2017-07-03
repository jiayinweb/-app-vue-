<template>
	<div class="audio">
		<ComponentsHead>
			<h2>书影音</h2>
			<img slot="header_search" src="../../assets/images/ic_group_search.png" alt="">
			<img slot="header_mine" src="../../assets/images/ic_chat_green.png" alt="">
		</ComponentsHead>

		<Subnav :navArr="navArr"></Subnav>
		<router-view ></router-view>
	</div>
</template>

<script >
	// import Vue from 'vue';
	// import VueRouter from 'vue-router';
	// Vue.use(VueRouter);
	var navArr=[
	  {"id": 1, "name":"电影","href": "/audio/film"},
	  {"id": 2, "name":"读书","href": "/audio/book"},
	  {"id": 3, "name":"电视","href": "/audio/television"},
	  {"id": 4, "name":"同城","href": "/audio/city"},
	  {"id": 5, "name":"音乐","href": "/audio/music"}
	];

	import ComponentsHead from '../../components/header.vue'
	import Subnav from '../../components/subnav.vue'
	export default{
		data () {
			return {
				navArr: navArr
			}
		},
		components: {
			ComponentsHead,
			Subnav
		},
		methods: {
			switchTab: function(d){
				this.current = d;
			}
		},
		created: function () {
			this.$router.push("/audio/film")
		}
	}
</script>
<style scoped>
	.audio{padding-top:6vh; }
</style>
