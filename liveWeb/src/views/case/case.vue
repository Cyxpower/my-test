<template>
  <div class="case">
    <div class="c_content1">
      <img src="../../assets/case/banner@2x.png" alt="" />
      <h1>行业解决方案</h1>
      <p>数字化直播解决方案，赋能行业直播提升</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.case {
  margin-top: 50px;
}
.c_content1 {
  width: 100%;
  height: 630px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  h1 {
    position: absolute;
    top: 233px;
    left: 460px;
    font-size: 40px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
  }
  p {
    position: absolute;
    top: 300px;
    left: 460px;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #999999;
  }
}
</style>