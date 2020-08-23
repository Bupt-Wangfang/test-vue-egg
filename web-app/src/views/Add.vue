<template>
    <div>
        <van-uploader :max-count="1" :after-read="afterRead" v-model="fileList" />
        <van-cell-group>
            <van-field v-model="title" placeholder="请输入文章标题" />
            <van-field v-model="content" placeholder="请输入文章内容" type="textarea" autosize />
        </van-cell-group>
        <van-button type="primary" class="submit" @click="addEvent">提交</van-button>
    </div>
</template>

<script>
import { Cell, CellGroup, Button, Uploader, Field } from "vant";
export default {
    components:{
        [Uploader.name]: Uploader,
        [Button.name]: Button,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [Field.name]: Field
    },
    data(){
        return {
            title: '',
            content: '',
            fileList: [],
            img: ''
        }
    },
    methods:{
        afterRead(info) {
            this.img = info.content;
        },
        addEvent() {
            let data = {
                title: this.title,
                content: this.content,
                img: this.img
            };
            this.$axios.post("/api/article", data)
            .then(
                this.$router.push({path: '/'})
            );
        }
    },
}
</script>
<style scoped>
.submit {
    width: 100%;
    margin-top: 50px;
} 
</style>