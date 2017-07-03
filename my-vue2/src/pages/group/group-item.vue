<template>
    <div class="group" >
    	<div class="photo">
    		<img src="../../assets/images/media.jpg" alt="">
    	</div>
    	<h6>{{ group.name }}</h6>
    	<p class="group_intro">{{ group.intro }}</p>
    	<div class="fans">
    		<span>{{ group.fans }}</span>人
    		<button class="checkbox" type="button" 
    			@click="toggleSel"
    			:class="{checked:checked }"
    		></button>
    	</div>
    </div>
</template>


<script>
export default {
	props: ["group","select" ],
	data() {
		return {
			checked: false
		}
	},
	methods: {
		toggleSel: function () {
			
			this.select(this.group.name);
			
			
			this.checked = !this.checked
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.group{min-height: 12vw; position: relative; padding-right: 30vw;text-align: left;}
	.photo{ width: 13vw;height: 13vw;float: left; padding-right:10px;overflow: hidden;}
	.photo img { width: 13vw; }
	h6 { font-size: 16px; }
	.group_intro { font-size: 12px;color: #666; }
	.fans {padding-bottom: 10px; height: 5vw; position: absolute;right: 10px;top: 20%; }
	.checkbox { width: 5vw;height: 5vw;margin-left: 10px; background: url(../../assets/images/ic_group_check_anonymous.png) no-repeat 0px 0;background-size: contain;border: none;outline: none;position: relative;top: 4px; }
	.checked { background-image: url(../../assets/images/ic_group_checked_anonymous.png); }
</style>
