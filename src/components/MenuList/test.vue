<template>
	<div class="test-container">
		<MenuList :list="list" @noticed="handleNoticed" />
	</div>
</template>

<script>
import MenuList from "./MenuList.vue";
export default {
	components: {
		MenuList,
	},
	data() {
		return {
			list: [
				{ title: "一级标题1", isSelected: false, children: [] },
				{
					title: "一级标题2",
					isSelected: true,
					children: [
						{
							title: "二级标题1",
							isSelected: true,
							children: [
								{ title: "三级标题1", isSelected: false, children: [] },
								{ title: "三级标题2", isSelected: true, children: [] },
								{ title: "三级标题3", isSelected: false, children: [] },
							],
						},
						{ title: "二级标题2", isSelected: false, children: [] },
					],
				},
			],
		};
	},
	methods: {
		handleNoticed(item) {
			item.isSelected = !item.isSelected;
		},
	},
};
</script>

<style></style>
