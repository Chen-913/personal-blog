import request from "./request.js";

export default async function () {
	return (await request.get("/api/setting")).data;
}
