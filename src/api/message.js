import request from "./request.js";

// 提交留言
export async function setMessage(msgInfo) {
	return (await request.post("/api/message", msgInfo)).data;
}

//  分页获取留言
export async function getMessages(page = 1, limit = 10, keyword = "") {
	return (
		await request.get("/api/message", {
			params: {
				page,
				limit,
				keyword,
			},
		})
	).data;
}
