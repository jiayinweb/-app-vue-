
<template>
  <div class="subnav_wrap">
    <ul>
      <li v-for="(item,index) in navArr" @click="current=index" :class="{active: status(index)}" :key="index">
        <router-link :to="item.href">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>


<script>

//navArr：[{"id": 1, "name":"电影","href": "/audio/film"}]
export default {
  props: ["navArr"],
  data () {
    return {
      current: 0
    }
  },
  methods: {
    status: function (index) {
      if (index == this.current ) {
        return true;
      };
      return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .subnav_wrap{width: 100%;border-bottom: 1px solid #ccc;background-color: #fff;position: fixed;top: 9.5vh;height: 6vh;}
  .subnav_wrap ul:after {content: "";display: block;height: 0px;clear: both;}
  .subnav_wrap li {position: relative;top: -2px; float: left;width: 20vw;border-bottom: 3px solid transparent;text-align: center;}
  .subnav_wrap li.active{ border-bottom-color: #73C682;}
  .subnav_wrap li.active a{color: #73C682;}
  .subnav_wrap li a {font-size: 1em;line-height: 12vw; height: 6vh; width: 100%; display: inline-block;color: #999;}
</style>



