<template>
    <div>
        <van-panel :title="detail.title">
            <div>{{ detail.content }}</div>
            <template #footer>{{detail.createTime}}</template>
        </van-panel>
    </div>
</template>

<script>
import { Panel } from 'vant';
import moment from "moment";

export default {
    components:{
        [Panel.name]: Panel
    },
    data(){
        return {
            detail: {}
        }
    },
    created() {
        let id = this.$route.query.id;
        this.$axios.get(`/api/article/${id}`)
        .then(res => {
            res.data.msg.createTime = moment(res.data.msg.createTime).format("YYYY-MM-DD HH:mm:ss");
            this.detail = res.data.msg;
        });
    },
    methods:{},
}
</script>
<style scoped>
</style>