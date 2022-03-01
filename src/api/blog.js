import request from "./request";

/**
 * 获取获取所有博客分类
 * @returns
 */
export async function getBlogType() {
	return (await request.get("/api/blogtype")).data;
}

/**
 * 分页获取博客
 * @returns
 */
export async function getBlogs(
	page = 1,
	limit = 10,
	categoryid = -1,
	keyword = ""
) {
	// /api/blog?page=1&limit=10
	return (
		await request.get("/api/blog", {
			params: {
				page,
				limit,
				categoryid,
				keyword,
			},
		})
	).data;
}

/**
 * 根据文章id获取单个文章
 * @param {String} id 博客文章id
 * @returns
 */
export async function getBlog(id) {
	return (await request.get(`/api/blog/${id}`)).data;
}

/**
 * 提交评论，包括文章id、昵称和评论内容
 * @param {String} blogId 文章id
 * @param {String} nickname 昵称，必填
 * @param {String} content 评论内容，必填
 * @returns
 */
export async function postComment(blogId, nickname, content) {
	return (
		await request.post("/api/comment", {
			params: {
				nickname,
				content,
				blogId,
			},
		})
	).data;
}

/**
 * 获取评论
 * @param {Number|String} page 当前页码
 * @param {Number|String} limit 页容量
 * @param {String} blogId 所属文章，-1表示不限
 * @param {String} keyword 模糊查询的关键字
 * @returns
 */
export async function getComments(
	page = 1,
	limit = 10,
	blogId = -1,
	keyword = ""
) {
	return (
		await request.get("/api/comment", {
			params: {
				page,
				limit,
				blogId,
				keyword,
			},
		})
	).data;
}
