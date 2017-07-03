<template>
    <div class="swiper-container">
    	<div class="swiper-wrapper">
    		<div class="swiper-slide"><img src="../assets/images/banner/01.jpg" alt=""></div>
	        <div class="swiper-slide" ><img src="../assets/images/banner/02.jpg" alt=""></div>
	        <div class="swiper-slide"><img src="../assets/images/banner/03.jpg" alt=""></div>
    	</div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>
	    

	    
	    <!-- 如果需要滚动条 -->
	    <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
import '../assets/libs/swiper/js/swiper.js';

export default {
	props: {
		pagination: {
			type: Boolean,
			default: true
		},
		paginationType: {
			type: String,
			default: "bullets"
		},
		autoplay: {
			type: Number,
			default: 3000
		},
	},
	mounted: function () {
		var that = this;
		new Swiper('.swiper-container',{
			loop: true,
			// 如果需要分页器
			pagination: '.swiper-pagination',
			paginationType: that.paginationType,
			// 自动切换
			autoplay: that.autoplay
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	@import '../assets/libs/swiper/css/swiper.css';
	.swiper-container{width: 100vw;}
	.swiper-container img{width: 100%;}
	.swiper-button-next {color: #ccc;}
</style>
