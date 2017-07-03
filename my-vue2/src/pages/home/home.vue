<template>
	<div class="home">
		<ComponentsHead  :addClass="true">
			<div class="search" @click="searchToggle=false">
				<input class="search_input" type="text" placeholder="影音 图书 唱片 小组等">
				<img class="search_right_icon" src="../../assets/images/ic_scan_gray.png" alt="">
			</div>
			<img slot="header_mine" src="../../assets/images/ic_chat_white.png" alt="">
		</ComponentsHead>

		<search v-if="searchToggle"></search>
		

		<div class="scroll_wrap">
			<div class="scroller">

				
					<!-- 轮播图 -->
					<swiper></swiper>
					<div class="hotNews">
						<h3>热点</h3>
						<div class="itemWrap">
							<div class="content" v-for="item in mes">
								<div class="pic"><img :src="item.target.cover_url" @error="changeSrc" alt=""></div>
								<h4>{{ item.title }} </h4>
								<p>{{ item.target.desc }} </p>
								<s></s>
								<p>作者：<span> {{ item.target.author.name }} </span></p>
							</div>
						</div>
					</div>
				

			</div>
		</div>

	</div>
</template>


<script >
	import ComponentsHead from '../../components/header.vue';
	// 轮播图
	import Swiper from '../../components/swiper.vue';
	import Search from '../../components/search.vue';
	import '../../assets/libs/iscroll.js';
	export default{
		components: {
			ComponentsHead, Swiper, Search
		},
		data: function(){
			return {
				searchToggle:false,
				mes: [],
				touch: {},
				arr: [],
				clickFlag: false,
				moveFlag: false,
				index: 5,
				myScroll: {},
				lastY: 0
			}
		},
		methods: {
			run: function (e) {
				var That = this;
				this.axios.get('/api/homeData').then((res) => {
					this.arr = res.data.data.recommend_feeds;	
					this.mes = this.arr.slice(0,this.index);
				})
			},
			changeSrc: function (ev ) {
				console.log(ev.target.src = require("../../assets/images/media.jpg") ) 
			}

		},
		//预加载
		mounted: function (e) {
			this.run();
			var That = this;
			//iscroll滚动插件
			That.myScroll = new IScroll('.scroll_wrap',{
				
				scrollX: true, //是否允许横向滚动
				scrollbars: false,
				fadeScrollbars:true,
				click: false //不阻止点击事件
				//preventDefault: false
			});

			function isPassive() {
			    var supportsPassiveOption = false;
			    try {
			        addEventListener("test", null, Object.defineProperty({}, 'passive', {
			            get: function () {
			                supportsPassiveOption = true;
			            }
			        }));
			    } catch(e) {}
			    return supportsPassiveOption;
			};

			/*document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
				capture: false,
				passive: false
			} : false);*/

			//加载更多
			//1.当滚动开始时，元素位于最底部
			That.myScroll.on('scrollEnd', function () {
				
				//2.且向上滚动。则加载更多
				if ( That.myScroll.y == That.myScroll.maxScrollY && That.myScroll.directionY===1 ) { 
				
			        if (That.index>40) {return}
			        	That.index+=5;
			      	That.mes = That.arr.slice(0,That.index);
				    That.lastY = That.myScroll.y;
				}
				
			});

		},

		updated: function () {
			var That = this;
			
			setTimeout(function () {
				That.myScroll.refresh();
				//加载后保持滚动位置不变
				That.myScroll.options.startY = That.lastY-1
				 
			},0);

		}
	}
</script>
<style scoped>
	.home {border: 1px solid transparent; }
	h3{padding-left: 10px;border-left:4px solid #FC8243;color: #FC8243;text-align: left;margin-top: 10px;}
	
	.itemWrap{}
	.content{padding: 10px 20px;border-bottom: 1px solid #ccc;text-align: left;}
	.content:after{ clear: both;content: "";display: block; }
	.content h4{font-size: 18px; line-height: 24px;}
	.content p{padding: 8px 0;font-size: 13px;line-height: 20px;color: #aaa}
	.content s{display: block; width: 20px;height: 1px;background-color: #ccc;margin: 5px 0;}
	.content .pic{float: right; width: 100px;padding-left: 20px;min-height: 100px;}
	.content img{width: 100px;}
	.hotNews{background-color: #fff;}
	.scroll_wrap{ position: absolute;top: 9.5vh;bottom: 8.8vh; width: 100vw; background-image: url(../../assets/images/loading_green.gif);background-repeat: no-repeat;background-position: center 99.78%;background-size: 20px;}
	.scroller{ position: absolute;top: 0; width: 100vw;background-color: #fff;}
	
</style>
