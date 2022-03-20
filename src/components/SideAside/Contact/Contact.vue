<template>
	<ul v-if="data" class="contact-container">
		<li>
			<a :href="data.github">
				<Icon type="github" />
				<span>{{ data.githubName }}</span>
			</a>
		</li>
		<li>
			<a :href="`mailto:${data.qq}@qq.com`">
				<Icon type="mail" />
				<span>{{ data.mail }}</span>
			</a>
		</li>
		<li>
			<a
				:href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
			>
				<Icon type="qq" />
				<span>{{ data.qq }}</span>
			</a>
			<div class="QRcode">
				<img :src="serverConfig.serverURL + data.qqQrCode" alt="qq" />
			</div>
		</li>
		<li>
			<a href="#">
				<Icon type="weixin" />
				<span>{{ data.weixin }}</span>
			</a>
			<div class="QRcode">
				<img :src="serverConfig.serverURL + data.weixinQrCode" alt="weixin" />
			</div>
		</li>
	</ul>
</template>

<script>
import Icon from "@/components/Icon/Icon.vue";
import { mapState } from "vuex";
import serverConfig from "@/mixins/serverConfig.js";
export default {
	mixins: [serverConfig()],
	components: {
		Icon
	},
	computed: mapState("setting", ["data"])
};
</script>

<style lang="less" scoped>
@import url("~@/styles/global.less");

.iconfont {
	font-size: 2em;
	margin-right: 8px;
}

.contact-container {
	width: 100%;
	padding-left: 10px;
	color: #999999;
	background-color: transparent;

	li {
		position: relative;
		margin: 10px 0;

		&:hover {
			.QRcode {
				transform: scaleY(1);
			}
		}

		a {
			display: flex;
			align-items: center;
		}

		.QRcode {
			position: absolute;
			bottom: 40px;
			padding: 20px;
			background-color: #fff;
			transform-origin: center bottom;
			transform: scaleY(0);
			transition: all 0.5s linear;
			border-radius: 10px;

			img {
				width: 150px;
				height: 150px;
			}

			&::after {
				content: "";
				position: absolute;
				bottom: -10px;
				left: calc(50% - 5px);
				display: block;
				width: 0;
				height: 0;
				border-top: 10px solid #fff;
				border-left: 5px solid transparent;
				border-right: 5px solid transparent;
			}
		}
	}
}
</style>
