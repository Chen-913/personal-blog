// 混合配置服务器地址
// 因从接口请求来的src路径是相对路径，所以需要混合配置服务器地址
import serverConfig from '@/serverConfig.js';

export default function mixServerConfig() {
	return {
		data() {
			return {
				serverConfig:Object.freeze(serverConfig)
			}
		}
	}
}