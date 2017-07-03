<template>
    <div class="film">
        <div class="hot">
            <cover-wrap cover-name="近期值得看的剧">
                <div class="scroll_wrap" @touchmove="fn">
                    <div class="scroll_inner" >
                        <div class="item_wrap" v-for="(item,index) in arr">
                            <cover-item :item="item" :status="num"></cover-item>
                        </div>
                    </div>
                </div>
            </cover-wrap>
        </div>


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
    components: {
        coverItem,
        coverWrap
    },
    methods: {
        run: function (e) {
            this.axios.get('/api/film').then((res) => {
                var resoult = res.data.data.commend_feeds
                this.arr = resoult.slice(0,10);  
               
            });
        },
        fn: function (e) {
            this.num++
        }
    },
    mounted: function () {
       this.run()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroll_wrap{width: 100%;overflow: scroll;}
.scroll_inner { width: 307vw; }
.scroll_inner:after { content: "";display: block;height: 0;clear: both; }
.item_wrap{float: left; padding-left: 4vw;padding-bottom: 20px;}

.interest .scroll_inner { width: 100% }
</style>
