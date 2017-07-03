<template>
    
	<div class="scroll_wrap">
		<div class="scroller">
			<!-- 滚动内容 -->
			<slot></slot>

		</div>
	</div>
    
</template>


<script>
export default {
	props: {
		scrollbars: {
			default: false
		},
		mountedFn: {
			default: null
		},
		refresh:{
			default: -1
		}
	},
	data (){
		return{
			myScroll: {},
			lastY: 0
		}
	},
	updated: function (e) {
		var That = this;
		var end = false;
		//iscroll滚动插件
		That.myScroll = new IScroll('.scroll_wrap',{
			scrollY: true, 
			scrollX: true, //是否允许横向滚动
			scrollbars: this.scrollbars,//滚动条
			fadeScrollbars:true //停止隐藏滚动条
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

		this.mountedFn && this.mountedFn();

			
			
		setTimeout(function () {
			console.log("created")
			That.myScroll.refresh();
			//加载后保持滚动位置不变
			That.myScroll.options.startY = That.lastY-1
			 
		},3000);

	},

	watch: {
		refresh: function () {
			console.log("iscroll")
			var That = this;
			
			setTimeout(function () {
				That.myScroll.refresh();
				//加载后保持滚动位置不变
				That.myScroll.options.startY = That.lastY-1
				 
			},0);
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.scroll_wrap{ position: relative;top: 0;left: 0; width: 100vw; background-image: url(../assets/images/loading_green.gif);background-repeat: no-repeat;background-position: center 99.78%;background-size: 20px;}
	.scroller{ position: relative;width: 100vw; background-color: #fff; }
</style>
