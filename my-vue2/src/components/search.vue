
<template>
	<div class="search">
		<div><input type="text" v-bind:value="value" @keyup="keyup"></div>
		<ul>
			<li v-for="item in resoult"></li>
		</ul>
	</div>
</template>


<script>


export default {
  data () {
    return {
      resoult: [],
      value: '0'
    }
  },

  methods: {
    keyup: function () {
      this.axios.post('https://sug.so.360.cn/suggest',{word:"123ccc"}).then(function (res) {
        console.log(res)
      },function (err, d) {
        
      });
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search{width: 100vw;height: 100vh;background-color: #fff;position: absolute;top: 0vh;left: 0;z-index: 20; }
</style>
<!-- 
https://sug.so.360.cn/suggest?callback=suggest_so&encodein=utf-8&encodeout=utf-8&format=json&fields=word&word=a&sid=2d4215dd198bf4dbe6367c20ba78d4c7&pq=a -->


