<template>
    <div class="mine_item" @click="changPage">
    	<div class="pic"><img class="image" :src="item.src" alt=""></div>
    	<p class="title">{{ item.id }}</p>
    </div>
</template>


<script>
export default {
	props:["item"],
	methods: {
		changPage: function () {
			//this.$router.push()
			//console.log(1)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.mine_item { width: 60px;text-align: center; }
	.pic {width: 30px; height: 30px;margin:0 auto 10px;border: none;overflow: hidden;}
	.image { width: 100%;height: 100%;}
	.title{ font-size: 13px; height: 16px;}
</style>
