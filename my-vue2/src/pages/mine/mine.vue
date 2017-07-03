<template>
	<div class="page_mine">
		<ComponentsHead>
			<h2>我的</h2>
			<img slot="header_mine" src="../../assets/images/ic_settings.png" alt="">
		</ComponentsHead>
		
		<div class="mine_infor" v-if="Common.myInfor.id">
			<div class="head_portrait">
				<img :src="Common.myInfor.head_portrait" alt="">
			</div>

			<h3>{{ Common.myInfor.name }}</h3>
			<p class="mine_id">ID:{{ Common.myInfor.id }}</p>
			<div class="homepage">个人主页 > </div>
			<div class="attention">
				关注<span> {{ Common.myInfor.attention.length }} </span>
				被关注<span>0</span>
			</div>
		</div>
		<div v-else class="unlogin">
			<div class="head_portrait">
				<img src="../../assets/images/avatar_male_70.png" alt="头像">
			</div>
			<button class="login_btn" @click="login">登录/注册</button>
		</div>
		
		<div class="remind">
			<div class="remind_title">
				提醒<span> > </span>
			</div>
			<p class="reming_mes">
				<ul>
					<li>暂无新提醒</li>
				</ul>
			</p>
		</div>


		<div class="item_wrap" >
			<div class="row_wrap">
				<div class="inner_wrap" v-for="item in itemArr">
					<mine-item class="item" :item="item"></mine-item>
				</div>
			</div>
		</div>


	</div>
</template>

<script >
	var itemArr = [
		{
			"id": "喜欢",
			"src": require("../../assets/images/ic_my_likes.png"),
		},
		{
			"id": "日记",
			"src": require("../../assets/images/ic_my_note.png"),
		},
		{
			"id": "相册",
			"src": require("../../assets/images/ic_my_album.png"),
		},
		{
			"id": "我的广播",
			"src": require("../../assets/images/ic_my_status.png"),
		},
		{
			"id": "电影·电视",
			"src": require("../../assets/images/ic_my_movies_tvs.png"),
		},
		{
			"id": "读书",
			"src": require("../../assets/images/ic_my_books.png"),
		},
		{
			"id": "音乐",
			"src": require("../../assets/images/ic_my_music.png"),
		},
		{
			"id": "同城活动",
			"src": require("../../assets/images/ic_my_events.png"),
		},		
		{
			"id": "豆列",
			"src": require("../../assets/images/ic_my_doulist.png"),
		},
		{
			"id": "订单",
			"src": require("../../assets/images/ic_my_orders.png"),
		},
		{
			"id": "钱包",
			"src": require("../../assets/images/ic_my_wallet.png"),
		}
	]
	import ComponentsHead from '../../components/header.vue'
	import MineItem from '../../components/mine-item.vue'
	import Common from '../../components/common.js'

	export default{
		components: { ComponentsHead, MineItem},
		data () {
			return {
				itemArr: itemArr,
				Common: Common
			}
		},
		methods: {
			login: function () {
				console.log(1)
				Common.openLogin = true
			}
		}
	}
</script>

<style scoped>
	.page_mine { }
	.mine_infor { padding: 20px 20px 10px 30vw;background: url(../../assets/images/bg_default_profile_banner_org.jpg);position: relative;text-align: left;color: #eee;}
	.head_portrait { width: 20vw;height: 20vw;border-radius: 50%;position: absolute;top: 15px;left: 20px;background-color: #fff;border: 2px solid #fff;overflow: hidden; }
	.head_portrait img { width: 20vw; }
	.mine_infor h3 { font-size: 20px;letter-spacing: 1px;background: url(../../assets/images/ic_mine_female.png) no-repeat 70px center ;background-size: 15px; }
	.mine_id { padding: 8px 0 15px; border-bottom: 1px solid #ccc;}
	.homepage { font-size: 16px;position: absolute; top: 6.5vh;right: 20px; }
	.attention { font-size: 14px; padding: 20px 0;}
	.attention span{ padding-left: 5px; padding-right: 20px;}
	.unlogin{background: url(../../assets/images/bg_default_profile_banner_grn.jpg) no-repeat; background-size: cover; padding: 20px;position: relative;}
	.login_btn{ font-size: 14px;background-color: transparent; color: #fff;padding: 5px 40px ; border: 1px solid #eee;margin: 3vh 0 3vh 20vw; letter-spacing: 4px;font-weight:400;outline: none;}

	.remind{ margin-top: 20px;padding: 20px 0 20px 20px;text-align: left;background-color: #fff}
	.remind_title{ padding-left: 50px;padding-bottom: 20px;margin-bottom: 20px; font-size: 18px;letter-spacing: 2px;background: url(../../assets/images/ic_mine_notification.png) no-repeat 10px 0px;background-size: 30px;border-bottom: 1px solid #eee; }
	.remind_title span {float: right;font-size: 20px;padding-right: 20px;color: #ccc;font-family: }
	.reming_mes{ text-align: center; color: #ccc}

	.item_wrap { width: 100%;margin-top: 20px;background-color: #fff; border: 1px solid #ccc;position: relative;}
	.item_wrap:after { content: "";display: block;height: 0;clear: both; }
	.inner_wrap {float: left; width: 25%;border-bottom: 1px solid #ccc;padding: 20px 0;  }
	.item{ margin: 0 auto; }
	.inner_wrap:nth-last-child(1),
	.inner_wrap:nth-last-child(2),
	.inner_wrap:nth-last-child(3){ border-bottom: none; }
</style>







