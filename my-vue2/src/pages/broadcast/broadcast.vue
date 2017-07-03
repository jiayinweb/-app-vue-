<template>
	<div class="broadcast">
		<div class="publish_broadcast" v-if="isLogin()">
			<div class="text_wrap" @click="bullet=true">
				<span class="text">分享生活点滴...</span>
			</div>
			<div class="camera" @click="openCamera">
			</div>
		</div>
		<div class="bullet_broadcast" v-if="bullet">
			<div class="bullet_header">
				<div class="back" @click="bullet=false"></div>
				<div class="title">发广播</div>
				<div class="publish" @click="publish" ></div>
			</div>
			<textarea class="textarea" placeholder="分享生活点滴" v-model="publishMes"></textarea>
			<div class="warning" v-if="warning">内容不能为空</div>
		</div>

		<ComponentsHead>
			<h2>广播</h2>
			<img slot="header_search" src="../../assets/images/ic_status_search_user.png" alt="">
			<img slot="header_mine" src="../../assets/images/ic_chat_green.png" alt="">
		</ComponentsHead>
		<broadcast-msg v-for="item in data.broadcastList" :mesObj="item" key=""></broadcast-msg>

	</div>
</template>

<script >
	import ComponentsHead from '../../components/header.vue'
	import BroadcastMsg from '../../components/broadcast-msg.vue'
	import Common from '../../components/common.js'
	import Broadcast from '../../data/broadcast.json'

	export default{
		data: function (){
			return { data: Broadcast, bullet:false,publishMes:"",warning:false }
		},
		components: { ComponentsHead, BroadcastMsg},
		methods: {
			/*load: function () {
				this.axios.get('/api/broadcast').then( (res) => {
					this.data = res.data.data
					// this.mesObj = res.data.data.broadcastList[0];
					// this.mesObj1 = res.data.data.broadcastList[1];
					// console.log(this.mesObj.licked)
				})
			},*/
			publish: function () {
				var arr = this.data.broadcastList;
				var broadcast_id = arr.length+1;

				var title = title;
				var para = this.publishMes;
				if (para == "") {
					this.warning = true;
					var That = this;
					setTimeout(function (e) {
						That.warning = false;
					},1000);
					return
				}
				var infor = Common.myInfor;
				this.publishMes = "";//清空文本域
				this.bullet = false;//关闭弹窗
				this.data.broadcastList.unshift({
					"broadcast_id": broadcast_id,
					"user_id": infor.id,
					"user_name": infor.name,
					"head_portrait": infor.head_portrait,
					"beAttention": infor.attention.length,
					"title": title,
					"para": para,
					"pic_src": "https://qnmob2.doubanio.com/img/files/file-1488961780.JPG",
					"support": [],
					"feedback": []
				});
			},
			openCamera: function () {
				console.log("openCamera")
			},
			isLogin: function () {
				return Common.myInfor.id
			}
		}
		/*created: function () {
			this.load();
		}*/
	}
</script>

<style scoped>
	.broadcast{background-color: #eee;border: 1px solid transparent}

	.publish_broadcast{ height: 40px;background-color: #fff; }
	.text_wrap{ float: left;background:url(../../assets/images/avatar_male_70.png) no-repeat 20px center; background-size: 30px; }
	.text{padding-top: 10px;padding-left: 70px; display: inline-block; width: 68vw;height: 30px; background:url(../../assets/images/rd__modify_new.png) no-repeat 79vw center; background-size: 20px;text-align: left; }
	.camera{width: 50px;height: 30px;padding-top: 10px; float: right;background: url(../../assets/images/ic_chat_action_camera_normal.png) no-repeat center;background-size: 25px;}

	.bullet_broadcast{position: fixed;top: 0;left: 0; height: 100vh;width: 100vw;background-color: #fff;z-index: 200;padding-top: 4.5vh;}
	.bullet_header{ height: 30px; border-bottom: 1px solid #ccc;padding-bottom: 10px;}
	.back { float: left;width: 40px;height: 40px; background: url(../../assets/images/ic_bar_back_green.png) no-repeat 10px 0px; background-size: 30px; }
	.title {float: left; text-align: left;padding-left:  20px;padding-top: 5px; font-weight: bold; }
	.publish {float: right; width: 40px;height: 40px;background:url(../../assets/images/ic_send_focused.png) no-repeat left 0px ;background-size: 30px; padding-right: 20px;vertical-align: middle;}
	.textarea{width: 95vw;height: 100%;border: none;padding: 10px;font-size: 14px;line-height: 24px;}
	.warning {position: absolute;top: 30px;left: 150px; background: #c44;padding: 5px 15px; color: #fff;border-radius: 8px;}
</style>
