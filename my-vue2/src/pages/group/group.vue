<template>
	<div class="page_group">
		<ComponentsHead>
			<h2>小组</h2>
			<img slot="header_search" src="../../assets/images/ic_group_search.png" alt="">
			<img slot="header_mine" src="../../assets/images/ic_chat_green.png" alt="">
		</ComponentsHead>
		<div class="topper">
			<h4>418975个小组等你来玩</h4>
			<p class="sub_title">立即选择加入吧！</p>
			<p class="tips">根据你的兴趣推荐</p>
		</div>
		<h4 class="recommend">精选推荐</h4>
		<h5>影视</h5>
		<div class="group_inner_wrap" v-for="group in GroupData.films.groups">
			<group-item :group="group" :select="select"></group-item>
		</div>
		<h5>读书</h5>
		<div class="group_inner_wrap" v-for="group in GroupData.books.groups">
			<group-item :group="group" :select="select"></group-item>
		</div>


		<div class="enter_wrap">
			<div class="enter" :class="{active: selectedGroup.length>0}">选好了，去玩小组</div>
		</div>
	</div>
</template>

<script >
	import ComponentsHead from '../../components/header.vue'
	import GroupItem from './group-item.vue'
	import GroupData from '../../data/groups.json'
	export default{
		components: {
			ComponentsHead, GroupItem
		},
		data(){
			return {
				GroupData: GroupData,
				selectedGroup: []
			}
		},
		methods: {
			select: function (name) {
				
				var That = this
				var flag,index ;
				this.selectedGroup.forEach(function (ele,i) {
					if (ele == name) {
						flag = true;
						index = i;
						return;
					}
				});
				if (flag) {
					this.selectedGroup.splice(index,1);
					return
				}
				
				this.selectedGroup.push(name)
			}
		}
	}
</script>

<style scoped>
	.page_group { background-color: #fff; padding-bottom:8vh }
	.topper{padding: 0 20px; height: 23vh; background:url(../../assets/images/ic_group_banner.png) no-repeat center;background-size: 100vw;overflow: visible; }
	.topper h4 { font-size: 16px;padding-top: 6vh; }
	.sub_title { padding-top: 8px;color:#999;font-size: 14px; }
	.tips {color: #999;padding-top: 7vh;text-align: left;font-size: 12px;}
	.recommend { background: url(../../assets/images/ic_rec_group_banner_6.png) no-repeat;background-size: cover; padding: 6vh 0 5px 10px;margin: 0 10px; text-align: left;font-size: 14px;color: #eee;font-weight: normal; }
	h5 { padding: 10px 0; position: relative;font-size: 16px;}
	h5:after,
	h5:before{ border-bottom: 1px solid #ccc;content: ""; height: 1px; position: absolute;left: 10px; top: 20px; width: 38vw;}
	h5:before{ left:initial;right: 10px; }
	.group_inner_wrap { padding: 10px 10px; }
	
	.enter_wrap{background-color: #fff;border-top: 1px solid #ccc;height: 50px;position: fixed;bottom: 60px;left: 0;width: 100vw;}
	.enter {background-color: #ccc;border-radius: 5px;color: #eee;font-size: 14px;text-align: right;padding:5px 10px; position: absolute;right: 20px;top:5px;}
	.active { background-color: green; }
</style>


