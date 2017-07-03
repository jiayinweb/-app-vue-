
<template>
    <div class="cover_wrap">
    	<div class="contain">
    		<div class="title">
	        	<h2>{{ coverName }}</h2>
	        	<div class="title_more">更多 > </div>
	        </div>
			<!-- 封面item -->
	        <slot></slot>
			
    	</div>  
	</div>
</template>


<script>
export default {
	props: {
		coverName: {
			default: "传入标题(title)"
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.cover_wrap { background-color: #eee;padding-top: 10px;}
	.contain { background-color: #f9f9f9; padding-bottom: 20px;}
	.title {line-height: 60px;padding: 0 20px;}
	.title:after {content: "";display: block;height: 0;clear: both;}
	.title h2{float: left;font-size: 18px;}
	.title .title_more{float: right;font-size: 14px;color: green;}

</style>
