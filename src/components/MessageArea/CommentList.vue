<template>
	<div class="comment-list-container">
		<h2>
			{{ title }}<span>{{ subTitle }}</span>
		</h2>
		<div class="comment-item" v-for="item in list" :key="item.id">
			<div class="comment-item-left">
				<Avatar
					url="https://gitee.com/Gorgeous-man/picture-library/raw/master/imgs/202201111200716.webp"
					:size="50"
				/>
			</div>
			<div class="comment-item-right">
				<div class="info">
					<span class="author">{{ item.nickname }}</span
					><span class="time">{{
						item.createDate | dateFormat("YYYY-MM-DD hh-mm-ss")
					}}</span>
				</div>
				<div class="comment">
					{{ item.content }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Avatar from "@/components/Avatar/Avatar.vue";
export default {
	components: {
		Avatar,
	},
	props: {
		title: {
			// 标题
			type: String,
			default: "",
		},
		subTitle: {
			// 副标题
			type: String,
			default: "",
		},
		list: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
.comment-list-container {
	padding-bottom: 20px;
	.comment-item {
		display: flex;
		border-bottom: 1px solid @gray;
		padding: 10px 0;
		.comment-item-left {
			margin: 0 10px;
		}
		.comment-item-right {
			flex: 1 1 auto;
			.info {
				display: flex;
				margin-bottom: 10px;
				.author {
					font-size: 18px;
					color: @success;
				}
				.time {
					flex: 1 1 auto;
					margin-right: 10px;
					font-size: 14px;
					color: @gray;
					text-align: right;
				}
			}
		}
	}
}
</style>
