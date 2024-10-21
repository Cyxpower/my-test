<template>
  <div class="mylike">
    <van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="bg"></div>
    <div v-if="mylikeArr.length>0" class="mylike-box">
            <transition-group name="animate__animated animate__bounce" leave-active-class="animate__bounceOut" >
     <div class="mylike-item" v-for="item in mylikeArr" :key="item.pid">
        <img :src="item.smallImg" alt @click="toDetail(item.pid)" />
        <div class="mylike-name" @click="toDetail(item.pid)">{{item.name}}</div>
        <div class="mylike-enname" @click="toDetail(item.pid)">
          <span>{{item.enname}}</span>
        </div>
        <div class="mylike-price" @click="toDetail(item.pid)">
          <span>¥{{item.price}}</span>
        </div>
        <div class="trash-bin">
          <van-icon name="delete-o" size="20" @click="deletemylike(item.pid)" />
        </div>
      </div>
      </transition-group>
      
    </div>
    <div v-else>
        <van-empty description="您还没有收藏的宝贝哦！" />
      </div>
  </div>
</template>

<script>
import "../assets/less/mylike.less";
import { Toast } from "vant";
export default {
  created() {
    this.getMylike();
    this.pid = this.$route.query.pid;
  },
  data() {
    return {
      pid: "",
      mylikeArr: []
    };
  },
  methods: {
    getMylike() {
      this.axios({
        method: "get",
        url: "/findAllLike",
        params: {
          appkey: this.appkey,
          tokenString: localStorage.getItem("_lk")
        }
      }).then(res => {
        console.log("查询成功", res);
        this.mylikeArr = res.data.result;
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    deletemylike(pid) {
        this.$dialog.confirm({
        title: '取消收藏',
        message: '是否取消收藏?',
        confirmButtonColor: '#0c34ba'
      }).then(() => {
     this.$toast({
        message: "已取消收藏",
        duration: 1000
      });
      this.axios({
        method: "post",
        url: "/notlike",
        data: {
          appkey: this.appkey,
          pid: pid,
          tokenString: localStorage.getItem("_lk")
        }
      }).then(res => {
        Toast.clear();
        console.log(res);
        this.getMylike();
      });
        

      }).catch(err => {
        
      })
    
      
    },
    toDetail(pid) {
      console.log(pid);
      //name 就是你想要跳转的页面名字 params传递参数
      //params传递的参数刷新后会消失
      //name 就是你想要跳转的页面名字 query传递参数
      this.$router.push({ name: "Detail", query: { pid: pid } });
    }
  }
};
</script>

