<template>
    <div class="item" @click="change" :class="{active:!normal}">
        <div class="picWrap">
            <div v-if="normal"><slot name="nomalPic"></slot></div>
            <div v-else><slot name="activePic"></slot></div>
        </div>
        <p v-text="txt"></p>
    </div>
</template>


<script>

export default {
    props: ["txt","id","nowId","changePage"],
    computed: {
        normal: function () {
            if (this.id == this.nowId) {return false};
            return true ;
        }
    },
    methods: {
        change: function () {
            //再次点击无效
            if ( !this.normal )
            {
                return
            }
            this.$router.push("/"+this.id);
            this.changePage(this.id);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item {width: 20vw;height: 64px;float: left;}
    .picWrap {width: 40px;height: 40px;overflow: hidden;margin: 0 auto;}
    .picWrap img{width: 40px;height: 40px;}
    p{margin: 0;padding: 0;font-size: 12px;}
    .active p{color: green}
</style>
