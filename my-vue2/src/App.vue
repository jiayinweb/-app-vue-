<template>
  <div id="app">
    <router-view></router-view>
    <sidebar :pageNav="pageNav"></sidebar>
    <login></login>
  </div>
</template>

<script>
var pageNav=[
  {
    "id": "home",
    "txt": "首页",
    "normalUrl": require("./assets/images/ic_tab_home_normal.png"),
    "activeUrl": require("./assets/images/ic_tab_home_active.png")
  },
  {
    "id": "audio",
    "txt": "书影音",
    "normalUrl": require("./assets/images/ic_tab_subject_normal.png"),
    "activeUrl": require("./assets/images/ic_tab_subject_active.png")
  },
  {
    "id": "broadcast",
    "txt": "广播",
    "normalUrl": require("./assets/images/ic_tab_status_normal.png"),
    "activeUrl": require("./assets/images/ic_tab_status_active.png")
  },
  {
    "id": "group",
    "txt": "小组",
    "normalUrl": require("./assets/images/ic_tab_group_normal.png"),
    "activeUrl": require("./assets/images/ic_tab_group_active.png")
  },
  {
    "id": "mine",
    "txt": "我的",
    "normalUrl": require("./assets/images/ic_tab_profile_female_normal.png"),
    "activeUrl": require("./assets/images/ic_tab_profile_female_active.png")
  }
];

import Sidebar from  './components/sidebar.vue'
import Login from './components/login.vue'

export default {

  data () {
    return {
      pageNav: pageNav
    }
  },
  name: 'app',
  components: {Sidebar,Login },
  created: function () {
    this.$router.push("/home")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial,'Microsoft YaHei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:9.4vh;
  margin-bottom: 64px;
  background-color: #eee;
  overflow: hidden;
  
}
body{ 
  overflow-x:hidden;
}
*{margin: 0;padding: 0;}
li{list-style: none;}
a{text-decoration: none;}
</style>
