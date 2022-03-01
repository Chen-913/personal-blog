import Mock from "mockjs";

Mock.mock("/api/banner", {
	code: 0, // 状态码     0正常     406错误
	msg: "获取数据成功", // 消息
	data: [
		// 具体的消息内容，如果code不为0，则必为null
		{
			id: "1",
			midImg:
				"https://gitee.com/Gorgeous-man/picture-library/raw/master/imgs/202202061448662.jpg",
			bigImg:
				"https://gitee.com/Gorgeous-man/picture-library/raw/master/imgs/202202061449244.jpg",
			title: "凛冬将至",
			description: "人唯有恐惧的时候方能勇敢",
		},
		{
			id: "2",
			midImg:
				"https://gitee.com/Gorgeous-man/picture-library/raw/master/imgs/202202061449057.jpg",
			bigImg:
				"https://gitee.com/Gorgeous-man/picture-library/raw/master/imgs/202202061449249.jpg",
			title: "血火同源",
			description: "如果我回头，一切都完了",
		},
		{
			id: "3",
			midImg:
				"https://gitee.com/Gorgeous-man/picture-library/raw/master/imgs/202202061450299.jpg",
			bigImg:
				"https://gitee.com/Gorgeous-man/picture-library/raw/master/imgs/202202061450218.jpg",
			title: "听我怒吼",
			description: "兰尼斯特有债必偿",
		},
	],
});
