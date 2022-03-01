import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
	code: 0,
	msg: "",
	data: {
		avatar:
			"https://gitee.com/Gorgeous-man/picture-library/raw/master/imgs/202201111200716.webp",
		siteTitle: "我的个人空间",
		github: "https://github.com/chen-123",
		qq: "913910173",
		qqQrCode:
			"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.xjishu.com%2Fimg%2Fzl%2F2018%2F6%2F30%2F1241359458913.gif&refer=http%3A%2F%2Fimg.xjishu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641818453&t=e16c2ffebce2293da6122e06372f5572",
		weixin: "gorgeous-man",
		weixinQrCode:
			"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F18%2F06%2F10%2F3c6fca528d38ae18bf2143777182d0f0.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641818508&t=b77ee4b1df8f7923680605666a26c4a3",
		mail: "cpf@gmail.com",
		icp: "黑ICP备17001719号",
		githubName: "chen-123",
		favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
	},
});
