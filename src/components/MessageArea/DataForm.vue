<template>
	<div class="data-form-container" ref="form">
		<form @submit.prevent="handleSubmit">
			<div class="form-item">
				<div class="nickname">
					<input
						type="text"
						id="nickname"
						placeholder="用户昵称"
						maxlength="10"
						v-model="formData.nickname"
					/>
					<i>{{ formData.nickname.length }}/10</i>
				</div>
				<div class="warn" :class="{ active: !validNickname }">
					{{ errorMessage.errorNickname }}
				</div>
			</div>
			<div class="form-item">
				<div class="content">
					<textarea
						name="content"
						id="content"
						placeholder="输入内容"
						maxlength="500"
						v-model="formData.content"
					></textarea>
					<i>{{ formData.content.length }}/500</i>
				</div>
				<div class="warn" :class="{ active: !validContent }">
					{{ errorMessage.errorContent }}
				</div>
			</div>
			<div class="form-item">
				<button type="submit" :class="{ submitting: isSubmitting }">
					{{ isSubmitting ? "提交中..." : "提交" }}
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isSubmitting: false,
			validNickname: true,
			validContent: true,
			formData: {
				nickname: "",
				content: "",
			},
			errorMessage: {
				errorNickname: "*请填写昵称",
				errorContent: "*内容不能为空",
			},
		};
	},
	methods: {
		handleSubmit() {
			if (this.formData.nickname.replace(/ /g, "") === "") {
				this.validNickname = false;
				return;
			}
			if (this.formData.content.replace(/ /g, "") === "") {
				this.validContent = false;
				return;
			}
			this.isSubmitting = true;
			this.$emit("submit", this.formData, (msg) => {
				// 回调函数，用于处理提交过后的情况
				this.isSubmitting = false;
				this.validNickname = true;
				this.validContent = true;
				this.formData.nickname = "";
				this.formData.content = "";
				// 显示出提交成功的动画
				this.$showMessage({
					content: msg,
					type: "success",
					dom: this.$refs.form,
				});
			});
		},
	},
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
.data-form-container {
	height: 100%;
	form {
		color: @gray;
		.form-item {
			margin: 15px 5px;
			.same() {
				border-radius: 5px;
				outline: none;
				border: 2px dotted @gray;
				text-indent: 5px;
				font-family: Arial, Helvetica, sans-serif;
				transition: all 0.5s;
				&:focus {
					border-color: skyblue;
				}
			}
			.nickname {
				display: inline-block;
				position: relative;

				input {
					width: 15em;
					height: 30px;
					.same();
				}
				i {
					position: absolute;
					top: 0.8em;
					right: 0.5em;
					font-size: 12px;
				}
			}
			.content {
				position: relative;
				textarea {
					width: 100%;
					resize: none;
					height: 150px;
					padding-top: 5px;
					.same();
				}
				i {
					position: absolute;
					bottom: 8px;
					right: 15px;
					font-size: 12px;
				}
			}
			.warn {
				opacity: 0;
				color: @danger;
				transition: all 0.5s;
				&.active {
					opacity: 1;
				}
			}
			button {
				width: 10%;
				max-width: 130px;
				min-width: 2em;
				height: 35px;
				border: 0;
				margin: 10px 0;
				color: #fff;
				background-color: @primary;
				border-radius: 5px;
				cursor: pointer;

				&.submitting {
					background-color: @gray;
					cursor: not-allowed;
				}
			}
			i {
				user-select: none;
			}
		}
	}
}
</style>
