/**
 * 存储本地会话数据
 * @param key 键名
 * @param value 键值  
 */
export const setStorage = (key, value) => {
	localStorage.setItem(key, value)
}