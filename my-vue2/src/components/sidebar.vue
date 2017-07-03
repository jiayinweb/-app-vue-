
<template>
<div>
    <div class="item-wrap">
      <item v-for="(item,index) in pageNav" :txt="item.txt" :id="item.id"
        :nowId="nowId"
        :changePage="changePage"
        key=""
      >
        <img :src="item.normalUrl" alt="pic" slot="nomalPic"/>
        <img :src="item.activeUrl" alt="pic2" slot="activePic"/>
      </item>
    </div>
</div>
</template>


<script>
import Item from  './item.vue'

/*
  pageNav = [ {
    "id": "home",
    "txt": "首页",
    "normalUrl": require("../assets/images/ic_tab_home_normal.png"),
    "activeUrl": require("../assets/images/ic_tab_home_active.png")
  }]
*/
export default {
  props: ["pageNav"],
  data:function () {
    return {
      nowId: "home"
    }
  },
	components: {
	  Item
	},
  methods:{
    changePage: function (id) {
      this.nowId=id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item-wrap {width: 100vw;height: 64px;background-color: #eee;border-top: 1px solid #ccc;position: fixed;bottom: 0;left: 0;}
</style>
