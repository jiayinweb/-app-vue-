<template>
    <div class="book">
    	<cover-wrap cover-name="图书">
    		<div class="item_wrap" @touchmove="fn">
    			<div class="item_inner_wrap" >
    				<div class="book_item" v-for="(item,index) in arr">
    					<cover-item :item="item" :status="num"></cover-item>
    				</div>
                    <div class="book_item" v-for="(item,index) in arr">
                        <cover-item :item="item" :status="num"></cover-item>
                    </div>
    			</div>
    		</div>
    	</cover-wrap>
    </div>

</template>

<script>
import coverItem from '../../../components/cover-item.vue' 
import coverWrap from '../../../components/cover-wrap.vue' 
export default {
    data: function () {
        return {
            arr: [],
            num: 0
        }
    },
	components: {coverItem,  coverWrap },
    methods: {
        run: function (e) {
            this.axios.get('/api/film').then((res) => {
                var resoult = res.data.data.commend_feeds
                this.arr = resoult.slice(0,10);  
                //console.log(this.arr)
            });
        },
        fn: function (e) {
        	this.num++
        	//console.log(this.num)
        }
    },
    mounted: function () {
       this.run()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.book_item{padding-left: 4vw;padding-bottom: 20px;}

	.wrap{width: 100%;overflow: scroll;}
	.item_wrap {padding:0 2vw; }
	.item_inner_wrap:after { content: "";display: block;height: 0;clear: both; }
    .book_item { float: left; }
</style>
