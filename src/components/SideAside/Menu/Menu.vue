<template>
	<ul class="menu-container">
		<li v-for="item in menuList" :key="item.name">
			<RouterLink :exact="item.exact" :to="{ name: item.name }">
				<Icon :type="item.iconType" />
				<span>{{ item.title }}</span>
			</RouterLink>
		</li>
	</ul>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";

export default {
	components: {
		Icon,
	},
	data() {
		return {
			menuList: [
				{
					// link: "/", // 链接内容
					name: "Home",
					title: "首页", // 菜单内容
					iconType: "home", // 图标类型
					exact: true,
				},
				{
					// link: "/blog",
					name: "Blog",
					title: "文章",
					iconType: "blog",
					exact: false, // 是否以指定链接开头
				},
				{
					// link: "/about",
					name: "About",
					title: "关于我",
					iconType: "about",
					exact: true,
				},
				{
					// link: "/project",
					name: "Project",
					title: "项目&效果",
					iconType: "code",
					exact: true,
				},
				{
					// link: "/message",
					name: "Message",
					title: "留言板",
					iconType: "chat",
					exact: true,
				},
			],
		};
	},
};
</script>

<style lang="less" scoped>
@import url("~@/styles/global.less");

.menu-container {
	width: 100%;
	color: @lightWords;
	background-color: transparent;

	li {
		a {
			display: block;
			padding: 10px 0;
			padding-left: 30px;

			span {
				margin-left: 10px;
			}

			// 当前导航路径匹配目标导航路径时出现的样式
			&.router-link-active {
				color: #fff;
				background: lighten(@dark, 5%);
			}

			// 当前导航路径精准匹配目标导航路径时出现的样式
			// &.router-link-exact-active {
			// 	color: #fff;
			// 	background: lighten(@dark, 5%);
			// }
		}
	}
}
</style>
