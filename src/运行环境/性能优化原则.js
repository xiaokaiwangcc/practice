// 多使用内存 缓存或者其他方法
// 减少cpu计算量,减少网络加载耗时
// 空间换事件

// 让加载更快
// 减少资源体积：压缩代码
// 减少访问次数：合并代码，ssr服务器端渲染。缓存
// 使用更快的网络：cdn
// 让渲染更快：
// 1。css放head js放body最下面
// 2.尽早执行js，用DOMContentLoaded触发
// 3.懒加载  图片懒加载，上滑懒加载
// 4.对dom查询缓存，频繁dom操作，合并到一起插入dom结构
// 5.节流防抖应用
