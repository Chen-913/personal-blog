<template>
	<div class="message-container" ref="messageContainer">
		<div class="body">
			<h1>留言板</h1>
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
	</div>
</template>

<script>
import CommentList from "@/components/MessageArea/CommentList.vue";
import DataForm from "@/components/MessageArea/DataForm.vue";
import fetchData from "@/mixins/fetchData.js";
import mainScroll from "@/mixins/mainScroll.js";
import { getMessages, setMessage } from "@/api/message.js";
export default {
	mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
	components: {
		CommentList,
		DataForm,
	},
	data() {
		return {
			page: 1,
			limit: 10,
			keyword: "",
		};
	},
	methods: {
		async getData() {
			return await getMessages(this.page, this.limit, this.keyword);
		},
		async handleSubmit(formData, callback) {
			let result = await setMessage(formData);
			this.data.rows.unshift(result);
			this.data.total++;
			callback("评论成功");
		},
		async getMoreData(page = 1, limit = 10, keyword = "") {
			return await getMessages(page, limit, keyword);
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
	computed: {
		hasMore() {
			return this.data.rows.length < this.data.total;
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
.message-container {
	width: 100%;
	height: 100%;
	overflow-y: auto;
	scroll-behavior: smooth;
	.body {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}
	.loading {
		position: relative;
		text-align: center;
		padding-bottom: 20px;
		.showLoading {
			margin-top: 10px;
		}
		.underline {
			font-size: 14px;
			color: @gray;
		}
	}
}
</style>
