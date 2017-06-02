<template>
<div>
	<div class="showbar">
		<div class="cover-image"></div>
		<div class="text" style="text-shadow:1px 1px 1px #000000">
			<h1>简书</h1>
			<h3>交流故事，沟通想法</h3>
			<p>一个基于内容分享的社区</p>
			<a href="#"><i class="fa fa-home"></i>提笔写篇文章</a>
		</div>
	</div>
	<div class="article-page">
		<nav>
			<span class="nav-text fir"><a href="#">发现</a></span>
			<span class="nav-text"><router-link :to="{name: 'bonus'}">2015精选</router-link></span>
			<span class="search clearfloat">
				<span class="input">
					<input type="search" placeholder="搜索">
				</span>
				<span class="search-icon"><i class="fa fa-seaSrch"></i></span>
			</span>					
		</nav>
		<div class="article-list clearfix">
			<ul class="btn-group">
				<li :class="{active: show === 'hot'}">
					<a v-on:click="displayArticle('hot')">热门</a>
				</li>
				<li :class="{active: show === 'new'}">
					<a v-on:click="displayArticle('new')">新上榜</a>
				</li>
				<li :class="{active: show === 'daily'}">
					<a v-on:click="displayArticle('daily')">日报</a>
				</li>
				<li :class="{active: show === 'weekhot'}">
					<router-link @click="show = 'weekhot'"
					   :to="{name: 'Home'}"
					>七日热门</router-link></li>
				<li :class="{active: show === 'monthhot'}">
					<router-link @click="show = 'monthhot'"
					   :to="{name: 'Home'}"
					>三十日热门</router-link></li>
				<li :class="{active: show === 'reward'}">
					<router-link @click="show = 'reward'"
					   :to="{name: 'Home'}"
					>有奖活动</router-link></li>
				<li :class="{active: show === 'publish'}">
					<router-link @click="show = 'publish'"
					   :to="{name: 'Home'}"
					>简书出版</router-link></li>
				<li :class="{active: show === 'video'}">
					<router-link @click="show = 'vedio'"
					   :to="{name: 'Home'}"
					>简书播客</router-link></li>
				<li :class="{active: show === 'hotnews'}">
					<router-link @click="show = 'hotnews'"
					   :to="{name: 'Home'}"
					>时事热闻</router-link></li>
				<li :class="{active: show === 'choice'}">
					<router-link @click="show = 'choice'"
					   :to="{name: 'Home'}"
					>专题精选</router-link></li>
			</ul>
			<router-view></router-view>
		</div>
	</div>
</div>
</template>
<style>
	.btn-group{
		text-align: left;
		margin-left: 18px;
		margin-top:20px;
	}
	.btn-group li{
		margin: 5px 5px;
	}
	.btn-group .active{
		background-color: #de533a;
	}
	.btn-group .active a{
		color: #ffffff;
	}
	.btn-group li{
		margin: 0 5px;
		display: inline-block;
		padding: 5px 10px;
		border: 1px solid #d9d9d9;
		border-radius: 10px;
		cursor: pointer;
	}
</style>
<script>
	import { mapState } from 'vuex'

	export default{	
		computed: mapState({
			show: state => state.Home.show
		}),
		methods: {
			displayArticle: function(str) {
				this.$store.dispatch('changeShowStatus', str)
				this.$store.dispatch('changeArticleList', str)
			}
		}
	}
</script>