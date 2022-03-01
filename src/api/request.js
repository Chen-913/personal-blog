import axios from "axios";

import showMessage from "@/utils/showMessage";

// 创建一个axios实例
const ins = axios.create();

// 给这个实例添加响应拦截器，用于在得到响应数据之前的进行一些操作
ins.interceptors.response.use((resp) => {
	// 如果响应码为406，那么将直接弹出错误消息
	if (resp.data.code === 406) {
		showMessage({
			content: resp.data.msg,
			type: "error",
		});
	}
	return resp.data;
});

export default ins;
