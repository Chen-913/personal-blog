<template>
	<div class="blog-detail-container">
		<h1>{{ articleData.title }}</h1>
		<div class="info">
			<span>日期：{{ articleData.createDate | dateFormat("YYYY-MM-DD") }}</span>
			<span>浏览：{{ articleData.scanNumber }}</span>
			<a href="#comment-container"
				><span>评论：{{ articleData.commentNumber }}</span></a
			>
			<router-link
				:to="{
					name: 'BlogCategory',
					params: {
						categoryId: articleData.category.id,
					},
				}"
				><span>{{ articleData.category.name }}</span></router-link
			>
		</div>
		<!-- 文章内容 -->
		<div class="content markdown-body" v-html="articleData.htmlContent"></div>
	</div>
</template>

<script>
// 文章内容的基本样式
import "@/styles/markdown.css";
// 代码块高亮着色
import "highlight.js/styles/atom-one-dark.css";
export default {
	props: {
		articleData: {
			type: Object,
			require: true,
		},
	},
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
.blog-detail-container {
	padding: 20px;
	.info {
		font-size: 14px;
		color: @gray;
		margin-bottom: 20px;
		span {
			margin-left: 10px;
		}
	}
}
</style>
