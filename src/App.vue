<template>
  <div class="container">
    <div class="sidebar">
      <ul class="dropdown">
        <li :class="{active: show === 'home'}">
          <router-link v-on:click="changeShow('home')" :to="{name: 'Home'}"><i class="fa fa-home"></i><span>&nbsp;&nbsp;首页</span></router-link>
        </li>
        <li :class="{active: show === 'topic'}">
          <router-link v-on:click="changeShow('topic')" :to="{name: 'Topic'}"><i class="fa fa-th"></i><span>&nbsp;&nbsp;专题</span></router-link>
        </li>
        <li :class="{active: show === 'download'}">
          <router-link v-on:click="changeShow('download')" :to="'/download'"><i class="fa fa-mobile"></i><span>&nbsp;&nbsp;下载手机应用</span></router-link></li>
      </ul>
      <ul class="nav-user">
        <li><router-link to="/test" ><i class="fa fa-font"></i><span>&nbsp;&nbsp;显示模式</span></router-link></li>
        <li><router-link :to="{name: 'login'}"><i class="fa fa-sign-in"></i><span>&nbsp;&nbsp;登录</span></router-link></li>
      </ul>
    </div>
    <div class="home" id="app">
      <transition name="display">
        <router-view transition = 'display' transition-mode = 'out-in'></router-view>
      </transition>
    </div>
    <div class="rightbar">
      <nav v-if="!login_success">
        <router-link :to="{name: 'login', params: { loginWay: 'login'}}" ><i class="fa fa-sign-in"></i>登录</router-link>
        <router-link :to="{name: 'login', params: { loginWay: 'register'}}" ><i class="fa fa-user"></i>注册</router-link>
      </nav>
      <nav v-if="login_success == 'true'">
        <router-link :to="{name: 'login'}" v-on:click="changeLogin('login')"><i class="fa fa-sign-in"></i>个人信息</router-link>
      </nav>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
      data: function() {
          return {
            show: 'home'
          }
      },
      computed: mapState({
          login_success: function(state) {
            return state.app.login_success
          }
      }),
      method: {
          changeLogin: function(str) {
              this.$store.dispatch('changeLoginWay', str)
          },
          changeShow: function(str) {
              this.show = str;
          }
      },
      watch: {
          '$route'(to, from) {
              if (to.name) {
                this.show = to.name.toLowerCase()
              }
              if (to.params.loginWay) {
                this.$store.dispatch('changeLoginWay', to.params.loginWay)
                //this.changeLogin(to.params);
              }
          }
      }
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .display-enter-active, .display-leave-active{
    transition: all .3s ease;
  }
  .display-enter, .display-leave-to {
    opacity: 0;
    transform: translateX(10px);
  }
  .container{
    height: 100%;
  }
  .dropdown .active{
    background-color: #e78170;
  }
  .dropdown .active a{
    color: #ffffff;
  }
  @media screen and (max-width: 1100px){
    .home{
      width: calc(100% - 80px);
      margin-right: 0;
    }
  }
  @media screen and (max-width: 1300px){
    .home{
      width: calc(100% - 240px);
      margin-left: 40px;
    }
    .nav-user li{
        width: 40px;
        height: 30px;
        overflow: hidden;
    }
    .sidebar{
      transition: all 0.5s;
      width: 40px;
      overflow: hidden;
    }
    .sidebar li{
      padding: 20px 0;
    }
    .sidebar li a{
      padding: 0 auto;
      margin:0 auto;
    }
    .sidebar i{
      font-size: 30px;
    }
    .sidebar .fa-mobile{
      margin-right: 8px;
      font-size: 50px;
    }
  }
</style>
