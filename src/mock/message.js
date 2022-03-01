import Mock from "mockjs";
import qs from "qs";

// 提交留言评论
Mock.mock(/\/api\/message/, "post", {
	code: 0,
	msg: "",
	data: {
		id: "@guid",
		nickname: "@cname",
		content: "@cparagraph(1, 10)",
		createDate: Date.now(),
		avatar:
			"https://gitee.com/Gorgeous-man/picture-library/raw/master/imgs/202201111200716.webp",
	},
});

// 分页获取留言
Mock.mock(/\/api\/message(\/\w+)?/, "get", (apiInfo) => {
	let queryInfo = qs.parse(apiInfo.url);
	return Mock.mock({
		code: 0,
		msg: "",
		data: {
			"total|20-50": 0,
			[`rows|${queryInfo.limit || 10}`]: [
				{
					id: "@guid",
					nickname: "@cname",
					content: "@cparagraph(1, 10)",
					createDate: Date.now(),
					avatar:
						"https://gitee.com/Gorgeous-man/picture-library/raw/master/imgs/202201111200716.webp",
				},
			],
		},
	});
});
