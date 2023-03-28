import path from "node:path"

/**
 * 获取项目根路径
 * @description 末尾不带斜杠
 */
export function getRootPath() {
	return path.resolve(process.cwd(),)
}

/**
 * 获取项目src 路径
 * @param srcName - src 目录名称(默认:"src")
 * @description 末尾不带斜杠
 */
export function getSrcPath(srcName = 'src') {
	const rootPath = getRootPath();
	return `${rootPath}/${srcName}`;
}
