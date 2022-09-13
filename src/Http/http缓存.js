// 强制缓存  response headers中
// cache-control： max-age
// expires 相对时间

// no-cache 不做强制缓存
// no-store
// private
// public


// 服务端缓存策略--协商缓存

// last-modified
// 浏览器                                          服务器
// 初次请求                                        浏览器返回资源和last-modified 最后修改时间
// 再次请求,request headers 带 if-modified-since    如果命中缓存服务器返回304状态码,和新的last-modified

// Etag资源的唯一标识
// 浏览器                                          服务器
// 初次请求                                        返回资源和Etag
// 再次请求,request Headers带着if-none-match        返回304,或者返回资源和新的Etag


// 如果last-modified和Etag同时存在会用Etag
// last-modified只能精确到秒级

// 三种刷新操作
// 正常操作: 地址栏输入url.跳转链接,前进后退等 (强制缓存和协商缓存有效)
// 手动刷新: F5,点击刷新按钮,点击菜单刷新 (强制缓存失效,协商缓存有效)
// 强制刷新: ctrl+F5 (都失效)