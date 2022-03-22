<template>
	<div class="blog-list-container" ref="blogList" v-loading="isLoading">
		<ul v-if="data.rows.length !== 0">
			<li v-for="item in data.rows" :key="item.id">
				<div class="thumb" v-if="item.thumb">
					<RouterLink
						:to="{
							name: 'Detail',
							params: {
								blogId: item.id
							}
						}"
					>
						<img
							v-img-lazy="item.thumb"
							:alt="item.title"
							:title="item.title"
						/>
					</RouterLink>
				</div>
				<div class="content">
					<h2 class="title">
						<RouterLink
							:to="{
								name: 'Detail',
								params: {
									blogId: item.id
								}
							}"
							>{{ item.title }}</RouterLink
						>
					</h2>
					<div class="info">
						<span class="time"
							>日期:{{
								item.createDate | dateFormat("YYYY-MM-DD hh-mm-ss")
							}}</span
						>
						<span class="visit-count">浏览:{{ item.scanNumber }}</span>
						<span class="comment-count">评论:{{ item.commentNumber }}</span>
						<span class="category" v-if="item.category">
							<RouterLink
								:to="{
									name: 'BlogCategory',
									params: {
										categoryId: item.category.id
									}
								}"
							>
								{{ item.category.name }}
							</RouterLink>
						</span>
					</div>
					<div class="description">
						{{ item.description }}
					</div>
				</div>
			</li>
		</ul>
		<!-- 无数据时显示Empty组件 -->
		<Empty v-if="data.rows.length === 0 && !isLoading" />
		<!-- 分页组件 -->
		<Pager
			v-if="data.total"
			:current="routeInfo.page"
			:total="+data.total"
			:limit="routeInfo.limit"
			@page-change="handlePageChange"
		/>
	</div>
</template>

<script>
import Pager from "@/components/Pager/Pager.vue";
import fetchData from "@/mixins/fetchData.js";
import { getBlogs } from "@/api/blog.js";
import mainScroll from "@/mixins/mainScroll.js";
import Empty from "@/components/Empty/Empty.vue";
import serverConfig from "@/mixins/serverConfig.js";
export default {
	mixins: [
		fetchData({ rows: [], total: 0 }),
		mainScroll("blogList"),
		serverConfig()
	],
	components: {
		Pager,
		Empty
	},
	methods: {
		async getData() {
			const result = await getBlogs();
			return result;
		},
		handlePageChange(newPage) {
			const query = {
				page: newPage,
				limit: this.routeInfo.limit
			};
			// 如果categoryId为-1，则展示全部
			if (this.routeInfo.categoryId === -1) {
				this.$router.push({
					name: "Blog",
					query
				});
			} else {
				// 如果categoryId不为-1，则表示展示指定的分类
				this.$router.push({
					name: "BlogCategory",
					query,
					params: {
						categoryId: this.$route.params.categoryId
					}
				});
			}
		}
	},
	computed: {
		routeInfo() {
			const limit = +this.$route.query.limit || 10;
			const page = +this.$route.query.page || 1;
			const categoryId = +this.$route.params.categoryId || -1;
			const total = +this.data.total;
			return {
				limit,
				page,
				categoryId,
				total
			};
		}
	},
	watch: {
		$route: {
			async handler() {
				// handler处理函数，在$route变化时要做的事情
				this.$refs.blogList.scrollTop = 0;
				this.isLoading = true;
				this.data = await getBlogs(
					this.routeInfo.page,
					this.routeInfo.limit,
					this.routeInfo.categoryId
				);
				this.isLoading = false;
			},
			deep: false, // 是否监听该数据内部属性的变化，默认 false
			immediate: false // 是否立即执行一次 handler，默认 false
		}
	}
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
.blog-list-container {
	position: relative;
	height: 100%;
	width: 100%;
	overflow-y: auto;
	scroll-behavior: smooth; // 滚动平滑
	ul {
		padding: 10px;
		li {
			display: flex;
			padding: 10px 0;
			border-bottom: 1px solid @gray;
			.thumb {
				a {
					display: block;
					img {
						width: 16vw;
					}
				}
			}
			.content {
				padding: 0 10px;
				h2 {
					margin: 0;
					a {
						display: block;
					}
				}
				.info {
					font-size: 14px;
					margin: 10px 0;
					color: @gray;
					span {
						margin-right: 10px;
					}
				}
				.description {
					color: @words;
				}
			}
		}
	}
	.pager-container {
		margin-top: 20px;
		margin-bottom: 50px;
	}
}
</style>
