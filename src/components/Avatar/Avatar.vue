<template>
	<img
		class="avatar-container"
		:src="url"
		:style="{
			width: `${size}px`,
			height: `${size}px`,
		}"
	/>
</template>

<script>
export default {
	props: {
		url: {
			type: String, // url属性必须是一个String类型的值
			required: true, // 必须传入值
		},
		size: {
			type: Number,
			default: 150, // 默认值为150
		},
	},
};
</script>

<style scoped>
/**加上scoped后就是带有作用域的css样式 */
.avatar-container {
	display: block;
	border-radius: 50%;
	object-fit: cover;
}
</style>
