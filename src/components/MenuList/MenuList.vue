<template>
	<ul class="menu-list-container">
		<li v-for="(item, i) in list" :key="i">
			<div
				:class="{ selected: item.isSelected }"
				@click="handleClick(item)"
				:data-no="i"
			>
				{{ item.name }}
				<span v-if="item.articleCount">{{ item.articleCount }}篇</span>
			</div>
			<MenuList :list="item.children" @noticed="handleClick" />
		</li>
	</ul>
</template>

<script>
// import selected from "@/directives/selected.js";
export default {
	name: "MenuList",
	props: {
		list: {
			type: Array,
			default: () => [],
		},
	},
	methods: {
		handleClick(item) {
			this.$emit("noticed", item);
		},
	},
	// directives: {
	// 	selected,
	// },
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
.menu-list-container {
	list-style-type: none;
	height: 100%;
	padding: 0;
	.menu-list-container {
		margin-left: 2em;
	}

	li {
		div {
			padding: 10px 0;
			text-indent: 0.5em;
			user-select: none;
			cursor: pointer;

			&:hover {
				border-radius: 5px;
				background-color: #eee;
			}

			span {
				font-size: 12px;
				margin-left: 10px;
				color: @gray;
			}
		}

		.selected {
			font-weight: bold;
			color: red;
			span {
				color: red;
			}
		}
	}
}
</style>
