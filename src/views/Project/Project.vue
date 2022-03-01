<template>
	<div class="project-container" v-loading="isLoading" ref="project-container">
		<ul v-if="data">
			<li v-for="item in data" :key="item.id">
				<div class="thumb">
					<a :href="item.url" target="_blank">
						<img v-img-lazy="item.thumb" :alt="item.name" />
					</a>
				</div>
				<div class="content">
					<h2 class="title">
						<a :href="item.url" target="_blank">{{ item.name }}</a>
					</h2>
					<div class="info">
						<a :href="item.github" target="_blank"
							><span class="github"><Icon type="github" />github</span></a
						>
					</div>
					<div class="description">{{ item.description }}</div>
				</div>
			</li>
		</ul>
		<!-- 无数据时显示Empty组件 -->
		<Empty v-if="data.length === 0 && !isLoading" />
	</div>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll.js";
import Empty from "@/components/Empty/Empty.vue";

export default {
	mixins: [mainScroll("project-container")],
	components: {
		Icon,
		Empty,
	},
	computed: mapState("project", ["data", "isLoading"]),
	created() {
		this.$store.dispatch("project/fetchData");
	},
};
</script>

<style scoped lang="less">
@import url("~@/styles/global.less");
.project-container {
	position: relative;
	height: 100%;
	padding: 15px;
	overflow-y: auto;
	scroll-behavior: smooth;
	ul {
		li {
			display: flex;
			max-width: 1250px;
			margin-bottom: 20px;
			padding: 5px;
			background: rgba(232, 232, 232, 0.5);
			border-radius: 5px;
			transition: all 0.5s;
			&:hover {
				box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
			}

			.thumb {
				display: flex;
				align-items: center;
				a {
					display: block;
					img {
						width: 16vw;
						vertical-align: bottom;
					}
				}
			}
			.content {
				padding: 0 20px;
				h2 {
					margin: 0;
					cursor: pointer;
					a {
						display: block;
					}
				}
				.info {
					font-size: 14px;
					margin: 5px 0;
					color: @gray;
					a {
						cursor: pointer;
						span {
							margin-right: 10px;
						}
					}
				}
				.description {
					color: @words;
					size: 15px;
				}
			}
		}
	}
}
</style>
