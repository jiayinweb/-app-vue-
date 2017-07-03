<!-- 翻页导航 -->
<template>
    <div>
        <ul>
            <li @click="current=1"><a href="##" >首页</a></li>
            <li>
                <button
                    @click="current<=1 ? 1 : current--" 
                    :disabled="current===1"
                >
                    上一页
                </button>
            </li>
            <li 
                v-for="item in 8"
                :class="{ac:current===item+frontPageIndex}"
                @click="current=item+frontPageIndex"
            >
                <a href="##">
                    {{ item+frontPageIndex }}
                </a>
            </li>
            <li>
                <button 
                    @click="current >=total ? total : current++"
                    :disabled="current===total"
                >
                    下一页
                </button>
            </li>
            <li><a href="##" @click="current=total">尾页</a></li>
        </ul>
        <div>当前第：{{ current }}页,总共{{ total }} 页 <input type="number" @keyup.enter="changePage" v-model:value="num"> </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            current: 5,
            total: 100,
            num:""
        }
    },
    props: ["change"],

    computed: {
        frontPageIndex: function() {
            var _index = this.current;
            var last = this.total
            this.change(_index) ;

            if (_index < 5) {
                return 0
            } else if (_index > last - 5) {
                return last - 8
            }
            return _index - 5
        }
    },
    methods: {
        changePage: function() {
            var _num = +this.num
            var _current = this.current
            console.log( typeof _num )
            console.log( _num<0 || _num >this.total || !_num )
            if (_num<0 || _num >this.total || !_num) {return}
                console.log(1)
            this.current=_num;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul{ display: inline-block; padding: 0;}
    ul:after{ content: "";display: block;clear: both;  }
    li{ float: left; background-color: #fff;border: 1px solid #000;list-style: none;height: 20px;padding: 5px; width: 50px;}
    li a{font-size: 1em;text-decoration: none;}
    li.ac{background-color: skyblue}
    button{width: 100%;height: 100%;border: none;background-color: transparent;padding: 0;}
</style>
