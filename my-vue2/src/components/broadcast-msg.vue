<template>
    <div class="broadcast_msg_item" v-if="show">
    	<div class="user_msg">
    		<div class="head_portrait">
    			<img :src="mesObj.head_portrait" alt="">
    		</div>
    		<div class="user_name">
    			{{ mesObj.user_name }}
    		</div>
    		<div class="beAttention" >
    			 {{ mesObj.beAttention }}人关注 
    		</div>
    		<div v-if="showButtonAttention">
	    		<button class="addAttention" 
	    			@click="toggleAttention"
	    			:class="{ active: myAttention.flag }"
	    		> 
    				<span v-if="myAttention.flag">取消关注</span>
    				<span v-else>关注</span>
	    		</button>
    		</div>
    	</div>
    	<p class="broadcast_title"> {{ mesObj.title }} </p>
    	<p class="broadcast_para"> {{ mesObj.para }} </p>
    	<div class="interaction">
    		<span class="ic_licked" 
    			@click="toggleLick"
    			:class="{ active: myLick.flag }"
    		></span>{{ mesObj.support && mesObj.support.length }}
    		<span class="ic_feedback"></span>{{ mesObj.feedback && mesObj.feedback.length }}
    	</div>
    	<div class="close" @click="show = !show"></div>
    </div>
</template>


<script>
import Common from './common.js';

export default {
	props: {
		mesObj:{ //需要使用的数据对象
		}
	},
	data (){
		return {
			show: true,	//点击删除广播
			common: Common, //声明数据以实现双向绑定
			showButtonAttention: true
		}
	},
	computed: {
		//是否喜欢
		myLick: function () {
			if (!this.common.myInfor.id) {
				return {"flag":false};
			}
			var obj = this.mesObj.support; //目标对象（数组或对象）
			var target = this.common.myInfor.id;//我的id

			return this.common.fn.isExist(obj,target)
		},
		//是否关注
		myAttention: function () {
			if (!this.common.myInfor.id) {
				return {"flag":false};
			}
			var obj = this.common.myInfor.attention;
			var target =  this.mesObj.user_id;
			var mineId = this.common.myInfor.id;

			if (target == mineId) {
				this.showButtonAttention = false;
			}			
			return this.common.fn.isExist(obj,target)
		}
	},
	methods: {

		//添加或删除点赞
		toggleLick: function () {
			if (!this.common.myInfor.id) {
				this.common.openLogin = true;
				return
			}
			var mineId = this.common.myInfor.id;

			var arr = this.mesObj.support;
			var flag = this.myLick.flag;
			var index = this.myLick.index;
			
			if (flag) {
				arr.splice(index,1);
			}else{
				arr.push({"id":mineId});
			}
			//console.log(arr)
		},

		//添加或删除关注
		toggleAttention: function () {
			if (!this.common.myInfor.id) {
				this.common.openLogin = true;
				return
			}
			var arr = this.common.myInfor.attention;
			var flag = this.myAttention.flag;
			var index = this.myAttention.index;
			var targetId =  this.mesObj.user_id;
			var mineId = this.common.myInfor.id;

			if (flag) {
				arr.splice(index, 1)
			} else {
				arr.push({"id":targetId })
			}
			//console.log(arr)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.broadcast_msg_item {  margin: 2vh 2vw ;background-color: #fff;border-radius: 5px;padding: 4vh 6vw 4vh 18vw; position: relative;text-align: left;}
	.user_msg {  }
	.head_portrait { height: 14vw;width: 14vw;border-radius: 50%;background-color: pink; position: absolute;top: 3.5vh;left: 2vw;overflow: hidden;}
	.head_portrait img{ width: 100%;height: 100%; }
	.user_name {font-size: 16px;font-weight: bold;line-height: 25px;}
	.beAttention { font-size: 12px;color: #ccc;line-height: 25px; }
	.addAttention { padding: 5px 0;width: 100px; font-size: 16px;color: #fff;background-color: green;border-radius: 4px;position: absolute;top: 4vh;right: 6vw;border: none;}
	.addAttention.active{background-color: #ccc;}
	.broadcast_title{ font-size: 15px;padding: 10px 0; }
	.broadcast_para {line-height: 24px; padding: 0 10px;background-color: #eee;color: #666;font-size: 14px; }
	.interaction { padding-top: 10px;color: #999;font-size: 12px; }
	.ic_licked, .ic_feedback {display: inline-block; width: 25px;height: 25px; background-image: url(../assets/images/ic_like.png);background-position: 0 4px;background-repeat:   no-repeat; background-size: contain;margin-right:5px;vertical-align: sub;}
	.ic_feedback { background-image: url(../assets/images/ic_review.png);background-position: 0 4px; margin-left: 10px;}
	.ic_licked.active{ background-image:url(../assets/images/ic_liked.png); }
	.close{ background: url(../assets/images/ic_close_status_recommend.png) no-repeat;position: absolute;top: 0px;right: 0px;height: 30px;width: 30px;background-size: contain; }
</style>
