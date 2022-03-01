<template>
	<div class="message-area-container">
		<h2 id="comment-container">评论</h2>
		<DataForm @submit="handleSubmit" />
		<CommentList
			title="评论列表"
			:subTitle="`（${data.total}）`"
			:list="data.rows"
		/>
		<div class="loading">
			<div class="showLoading" v-loading="isLoading"></div>
			<div class="underline" v-if="!hasMore">
				—————— 我要做一个有底线的好网站 ——————
			</div>
		</div>
	</div>
</template>

<script>
import DataForm from "./DataForm.vue";
import CommentList from "./CommentList.vue";
import { getComments, postComment } from "@/api/blog.js";
import fetchData from "@/mixins/fetchData.js";
export default {
	mixins: [fetchData({ total: 0, rows: [] })],
	components: {
		DataForm,
		CommentList,
	},
	data() {
		return {
			page: 1,
			limit: 10,
			blogId: -1,
		};
	},
	computed: {
		hasMore() {
			return this.data.rows.length < this.data.total;
		},
	},
	methods: {
		async getData() {
			return await getComments(this.page, this.limit, this.blogId);
		},
		async handleSubmit(formData, callback) {
			let result = await postComment(
				this.$route.params.blogId,
				formData.nickname,
				formData.content
			);
			this.data.rows.unshift(result);
			this.data.total++;
			callback("提交成功");
		},
		async getMoreData(page = 1, limit = 10, blogId = -1) {
			return await getComments(page, limit, blogId);
		},
		async handleScroll(scrollDom) {
			if (!scrollDom || this.isLoading || !this.hasMore) {
				// 元素不存在、已经处于加载中、已经没有可加载的评论  这三种情况不需要去请求更多数据
				return;
			}
			let range = 100;
			let distance = Math.abs(
				scrollDom.scrollTop + scrollDom.clientHeight - scrollDom.scrollHeight
			);
			if (distance < range) {
				// 滚动到页面指定底部距离时，加载更多评论
				this.isLoading = true;
				this.page += 1;
				const result = await this.getMoreData(
					this.page,
					this.limit,
					this.blogId
				);
				this.isLoading = false;
				// 将新请求的数据添加到原有评论数组的后面
				this.data.rows = this.data.rows.concat(result.rows);
			}
		},
	},
	created() {
		this.$eventBus.$on("mainScroll", this.handleScroll);
	},
	beforeDestroy() {
		this.$eventBus.$off("mainScroll", this.handleScroll);
	},
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
.loading {
	position: relative;
	text-align: center;
	.showLoading {
		margin-top: 10px;
	}
	.underline {
		font-size: 14px;
		color: @gray;
	}
}
</style>
