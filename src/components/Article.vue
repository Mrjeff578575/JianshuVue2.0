<template>
	<ul>
		<li class='list' v-for="article in articles" @click="pushArticleInfo()">
			<p class="list-top"><a href="#" class="author"><span>{{ article.author }}</span></a><span class="time"> - {{ article.time}}</span></p>
			<h2 class="title"><a href="#">{{ article.title }}</a></h2>
			<div class="small-text-group">			
				<span class="small-text">阅读 {{article.read}} -</span>
				<span class="small-text">评论 {{article.comment}} -</span>
				<span class="small-text">喜欢 {{article.like}} -</span>
				<span class="small-text">打赏 {{article.pay}}</span>
			</div>
			<span class="image" 
				:style="{backgroundImage:article.src, backgroundSize:'100%', backgroundRepeat:'no-repat'}">
			</span>
		</li>
	</ul>
</template>
<script>
	import { mapState } from 'vuex'

	export default {
		computed: mapState({
			articles: state => state.Article.articles
		}),
		methods: {
			pushArticleInfo: function() {
				this.$router.push({ name: 'Home', params: { articleId: 123 }})
			}
		}
	}
</script>
<style>
	.list{
    	margin-left: 30px;
    	margin-top: 17px;
   	 	margin-bottom: 17px;
   	 	padding-bottom: 17px;
   		width: calc(100% - 30px);
    	border-bottom:1px dashed #efefef;
		border-bottom: 1px dashed #d9d9d9;
	}
	.list-top{
		padding-top: 10px; 
		text-align: left;
	}
	.small-text-group {
		text-align: left;
	}
	.list .title {
		text-align: left;
	}
	.list .title a{
		margin-top: 10px;
    	margin-bottom: 10px;
    	margin-left: 0;
    	display: inherit;
    	font-size: 18px;
    	font-weight: bold;
    	line-height: 1.5;
	}
</style>