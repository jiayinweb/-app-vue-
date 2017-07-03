<template>
    <div class="login" v-if="common.openLogin">
    	<div class="back" @click="common.openLogin = false"></div>
    	<h2>欢迎来到豆瓣</h2>
    	<form action="" class="form">
    		<p><input class="user_name" type="text" placeholder="用户名" v-model="userName"></p>
    		<p><input class="password" type="password" placeholder="密码" v-model="password" @keydown.enter="login"> </p>
    		<button class="btn" type="button" @click="login">登陆</button>
    		<div class="tips">
    			<fieldset>
    				<legend>tips</legend>
    				<p>用户名：admin</p>
    				<p>密码：admin</p>
    			</fieldset>	
    			
    		</div>
    	</form>
    	<div class="help"><span class="register">注册豆瓣</span><s class="separate">|</s> <span>忘记密码</span></div>
		<div class="loginType">
			<span class="wechat">微信登陆</span><s class="separate">|</s>
			<span class="blogs">微博登陆</span>
		</div>
    </div>
</template>

<script>
import Common from './common.js'
export default {
	data () {
		return {
			close: true,
			userName: "",
			password: "",
			common: Common
		}
	},
	methods: {
		back: function () {
			console.log(1)
		},
		login: function () {
			this.axios.get("/api/userInfor").then((res) => {
				
				var arr = res.data.data;
				var That = this;
				for (var i = 0; i < arr.length; i++) {
					var ele = arr[i];
					
					if (ele.name === That.userName ){
						if ( ele.password === That.password ) {
							console.log(ele.id)
							That.common.myInfor = ele;
							console.log("登录成功");
							That.password = "";
							That.common.openLogin = false;
							return
						}
						alert("密码错误");
						That.password = "";
						return
					}
				}
				alert("用户名错误")
				That.password = "";
				That.userName = "";
			} )
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.login {width: 100vw; height: 95.5vh; background-color: #fff;z-index: 50;position: fixed;top: 0;left: 0;padding-top: 4.5vh;}
	.back { width: 40px;height: 40px; background: url(../assets/images/ic_bar_back_green.png) no-repeat 10px 0px; background-size: 30px; }
	h2{ font-size: 35px; letter-spacing: 2px;font-weight: normal;color: green;padding: 60px 0; }
	.form{ padding: 20px; position: relative;}
	input{width: 86vw; border: none; border-bottom: 1px solid #ccc;padding:0 1vw ; margin-bottom: 20px; line-height: 20px; outline: none; font-size: 16px;line-height: 24px;}
	.password {}
	.btn { width: 90vw;background-color: green;border: none; padding: 8px 0; font-size: 16px; color: #f3f3f3; border-radius: 5px; letter-spacing: 2px; outline: none;}
	.tips { position: absolute;font-size: 14px;color: #ccc;top: -48px;left: 30px; text-align: left;}
	fieldset{padding:3px 10px;border: 1px solid #ccc;}
	.register{ color: green; }
	.separate {padding: 0 20px;text-decoration: none; color: #aaa;}
	.loginType { position: absolute; bottom: 0;text-align: center;padding-bottom: 10px;width: 100vw;color: #999;font-size: 14px; }
	.wechat { background: url(../assets/images/ic_wechat.png) no-repeat 0px center; background-size: contain; padding-left: 25px;}
	.blogs {background: url(../assets/images/ic_weibo.png) no-repeat 0px center; background-size: contain; padding-left: 25px;}
	
</style>
