<template>
<div class="container">
  <div class="sidebar">
    <ul class="dropdown">
      <li :class="{active: show === 'home'}">
        <router-link :to="{name: 'Home'}"><i class="fa fa-home"></i><span>&nbsp;&nbsp;首页</span></router-link>
      </li>
      <li :class="{active: show === 'topic'}">
        <router-link :to="'/topic/topic_article'"><i class="fa fa-th"></i><span>&nbsp;&nbsp;专题</span></router-link>
      </li>
      <li :class="{active: show === 'download'}">
        <router-link :to="'/download'"><i class="fa fa-mobile"></i><span>&nbsp;&nbsp;下载手机应用</span></router-link></li>
    </ul>
    <ul class="nav-user">
      <li><a href="#"><i class="fa fa-font"></i><span>&nbsp;&nbsp;显示模式</span></a></li>
      <li><router-link to="'/login'"><i class="fa fa-sign-in"></i><span>&nbsp;&nbsp;登录</span></router-link></li>
    </ul>
  </div>
  <div class="home">
    <router-view transition = 'display' transition-mode = 'out-in'></router-view>
  </div>
  <div class="rightbar">
    <nav v-if="login_success == 'false'">
      <router-link to="'/login'" @click="changeLogin('login')"><i class="fa fa-sign-in"></i>登录</router-link>
      <router-link to="'/login'" @click="changeLogin('register')"><i class="fa fa-user"></i>注册</router-link>
    </nav>
    <nav v-if="login_success == 'true'">
      <router-link to="'/login'" @click="changeLogin('login')"><i class="fa fa-sign-in"></i>个人信息</router-link>
    </nav>
  </div>
</div>
</template>
