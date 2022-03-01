import request from "./request.js";
/**
 * 获取 about 页面的数据
 */
export default async function () {
	return (await request.get("/api/about")).data;
}
