/**
 * 传入字符串或数字的时间戳，返回指定格式
 * @param {String|Number} timestamp 时间戳
 * @returns year-month-day格式的字符串
 */
export default function (timestamp) {
	const date = new Date(+timestamp);
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	return `${date.getFullYear()}-${month}-${day}`;
}
