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
			<button
				type="button"
				v-on:click="handleClick"
				v-show="!isLoading && hasMore"
			>
				点击加载更多
			</button>
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
		async handleClick() {
			if (this.hasMore) {
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
