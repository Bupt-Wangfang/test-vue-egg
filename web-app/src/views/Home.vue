<template>
 <div>
     <van-list @load="onLoad" v-model="loading" :finished='finished' finished-text="没有更多了">
         <van-cell v-for="item in list" :key="item.id" @click="clickEvent(item.id)">
             <div class="a-img">
                 <img :src="item.img">
             </div>
             <div class="a-text">
                 <div>{{item.title}}</div>
                 <div>{{item.createTime}}</div>
             </div>
         </van-cell>
     </van-list>
 </div>
</template>

<script>
// 引入组件
import {List, Cell} from "vant";
import moment from "moment";

export default {
 components:{
     // 声明组件
    [List.name]: List,
    [Cell.name]: Cell
 },
 data(){
    return {
        list: [],
        loading: false,
        finished: false
    }
 },
 methods:{
     onLoad() {
         // axios请求
         this.$axios.get('/api/article').then(res => {
             if (res.status == 200) {
                 this.loading = false;
                 this.finished = true;
                 // 文章时间格式化
                 this.list = res.data.msg.map(item => {
                     item.createTime = moment(item.createTime).format(
                         "YYYY-MM-DD HH:mm:ss"
                     );
                     return item;
                 });
             }
         });
     },
     // 点击文章跳转文章详情
     clickEvent(id) {
         this.$router.push({
             path: 'detail',
             query: {
                id
             }
         });
     }
 },
 watch: {
     list() {
         this.onLoad();
     }
 }
}
</script>
<style scoped>
.a-img {
    float: left;
}
.a-text {
    float: right;
}
</style>