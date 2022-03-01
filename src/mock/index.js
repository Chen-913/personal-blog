import Mock from "mockjs";

// 导入需要的拦截规则
import "./banner";
import "./blog";
import "./globalSetting";
import "./about";
import "./project";
import "./message";

Mock.setup({
	// 响应时间设置在1s到2s之间
	timeout: "1000-2000",
});
