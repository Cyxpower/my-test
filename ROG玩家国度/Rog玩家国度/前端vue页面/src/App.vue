<template>
  <div id="app">
    <router-view v-if="isShow"/>
  </div>
</template>

<script>
export default{
  
  provide(){
    return{
      reload:this.reload
    }
  },
  data() {
    return {
      isShow:true
    }
  },
  methods:{
    reload(){
      this.isShow = false
      this.$nextTick(()=>{
        this.isShow =true
      })
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: scroll;
  background: #f7f7f7;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.auto-img{
    width: 100%;
    display: block;
  }
  .clearfix::after{
    content: "";
    display: block;
    clear: both;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }

  .one-text{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
