<!-- 
evaluate改造（未完）
(封面页展示item)
传入以下格式的数组
{
    "title": "神奇女侠",
    "cover_url":"",
    "grade":7.4
}, 
-->
<template>
	<div class="item" >
		<div class="pic"><img :src="imgSrc" alt=""></div>
		<h4>{{ item.title }}</h4>
		<div class="comment">
			<div class="icon"
				v-for="i in 5" 
				:class="{active: item.grade-(i-1)*2>1,
				helf: item.grade>(i-1)*2 && (item.grade)-(i-1)*2<=1 }" 
			></div>
			<div class="grade"> {{ item.grade }}</div>
		</div>
	</div>

</template>


<script>
export default {
	props: {
		item: {
			type:Object
		},
		status
	},
	data: function () {
		return {
			// 空的背景图片
			imgSrc: "",
			hidden: true
		}
	},
	watch: {
		status: function (e) {
			
			this.lazyLoad()
		}
	},
	methods: {
		// 懒加载图片
		lazyLoad: function (ev) {
			if (!this.hidden) {return}
			var That=this
			setTimeout(function () {
				var clientTop = -That.$el.offsetParent.scrollTop-document.documentElement.clientHeight + That.$el.offsetTop
				// 元素出现在窗口中时，加载图片
				if (clientTop <=0 ) {
					That.imgSrc =  That.item.cover_url;
					// 显示图片后讲状态更改为false，避免重新重新执行
					That.hidden = false;
				}
			},300);
		}
	},
	// 预加载
	mounted: function () {
		this.lazyLoad()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	.item{width: 26.4vw;}
	.item:after{content: "";display: block;height: 0;clear: both;}
	.item h4{text-align: left;font-size: 14px;margin: 6px 0;}
	.item .pic{width: 26.4vw;height: 21.1vh;background: url(../assets/images/timg.gif) no-repeat center;background-size: 200%; }
	.item img{width: 26.4vw;height: 21.1vh;}
	.comment:after{display: block;height: 0;clear: both;}
	.grade{float:left;font-size: 12px;}
	.icon{background: url(../assets/images/rating_star_xsmall_gray.png); width: 13px;height: 13px;float: left; background-size: contain;}
	.active{background-image: url(../assets/images/rating_star_xsmall_on.png);}
	.helf{background-image: url(../assets/images/rating_star_xsmall_half.png);}
</style>
