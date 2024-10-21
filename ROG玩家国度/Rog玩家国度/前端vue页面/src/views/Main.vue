<template>
  <div>
    <van-tabbar route fixed>
      <van-tabbar-item :dot="item.dot" :badge="item.badge ? item.badge : ''" v-for="(item, index) in arr" :key="index"
        :to="item.path">
        <span>{{ item.text }}</span>
        <template #icon="props">
          <img :src="props.active ? item.active : item.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>
// 引入混合文件
import { a } from "../mixin"
export default {
  created() {
    this.shopBagCount()
  },
  mixins: [a],
  data() {
    return {
      active: 0,
      bagCount: 0,
      arr: [
        {
          dot: true,
          path: "/home",
          text: "主页",
          active: require("../assets/icons/home.png"),
          inactive: require("../assets/icons/home-o.png")
        },
        {
          path: "/menu",
          text: "分类",
          active: require("../assets/icons/list.png"),
          inactive: require("../assets/icons/list-o.png")
        },
        {
          badge: 0,
          path: "/car",
          text: "购物车",
          active: require("../assets/icons/bag.png"),
          inactive: require("../assets/icons/bag-o.png")
        },
        {
          dot:true,
          path: "/my",
          text: "用户",
          active: require("../assets/icons/user.png"),
          inactive: require("../assets/icons/user-o.png")
        }
      ]
    };
  },
  watch: {
    bagCount(newValue) {
      this.arr[2].badge = newValue
    }
  },
};
</script>