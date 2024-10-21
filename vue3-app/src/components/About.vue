//关于echarts的使用

<script  setup>
import { ref, onMounted } from "vue";
//  按需引入 echarts
import * as echarts from "echarts";
// 引入地图文件
import chinaJson from '../assets/mapsJson/china.json'
const main = ref()
onMounted(
  () => {
    init()
  }
)
function init() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(main.value);
  myChart.showLoading()
  // 注册可用的地图
  echarts.registerMap('china', chinaJson)
  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '中华人民共和国地图'
    },
    tooltip: { formatter: '{b}注册用户{c}人' },
    series: [
      {
        type: 'map',
        map: 'china',
        // 显示标签样式
        label: {
          show: true,
          fontSize: 12,
          color: 'black',
        },
        // 图形样式 
        itemStyle: {
          areaColor: 'blue',
          borderColor: 'white',
          borderWvalueth: '3',
        },
        zoom: 1.2,
        // 添加数据，注意应与显示的标签名一致
        data: [
          { name: "北京市", value: "110000" },
          { name: "天津市", value: "120000" },
          { name: "河北省", value: "130000" },
          { name: "山西省", value: "140000" },
          { name: "内蒙古自治区", value: "150000" },
          { name: "辽宁省", value: "210000" },
          { name: "吉林省", value: "220000" },
          { name: "黑龙江省", value: "230000" },
          { name: "上海市", value: "310000" },
          { name: "江苏省", value: "320000" },
          { name: "浙江省", value: "330000" },
          { name: "安徽省", value: "340000" },
          { name: "福建省", value: "350000" },
          { name: "江西省", value: "360000" },
          { name: "山东省", value: "370000" },
          { name: "河南省", value: "410000" },
          { name: "湖北省", value: "420000" },
          { name: "湖南省", value: "430000" },
          { name: "广东省", value: "440000" },
          { name: "广西壮族自治区", value: "450000" },
          { name: "海南省", value: "460000" },
          { name: "重庆市", value: "500000" },
          { name: "四川省", value: "510000" },
          { name: "贵州省", value: "520000" },
          { name: "云南省", value: "530000" },
          { name: "西藏自治区", value: "540000" },
          { name: "陕西省", value: "610000" },
          { name: "甘肃省", value: "620000" },
          { name: "青海省", value: "630000" },
          { name: "宁夏回族自治区", value: "640000" },
          { name: '澳门特别行政区', value: "579494" },
          { name: "香港特别行政区", value: "374848" },
          {
            name: "新疆维吾尔自治区",
            value: "650000",
          }, {
            name: '台湾省', value: "599999"
          }, {
            name: '南海诸岛', value: "799999"
          }
        ],
        roam: true,
        scaleLimit: {
          min: 0.7,
          max: 3
        }
      }
    ],
    visualMap: {
      min: 300000,
      max: 1000000,
      text: ['高', '低'],
      realtime: false,
      calculable: true,
      inRange: {
        color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']

      }
    },
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  myChart.hideLoading()
}
</script>

<template>
  <div ref="main" style="wvalueth: 100%; height: 1000px"></div>
</template>

<style scoped></style>
