// url到渲染网页的过程

// 加载资源的形式
// html代码   媒体文件、图片视频     js css

// 加载资源的过程
// 1.DNS解析： 域名-> IP地址
// 2.浏览器根据IP地址向服务器发起http请求
// 3.服务器处理http请求，并返回给浏览器

// 渲染资源的过程
// 1.根据html代码生成DOM tree
// 2.根据CSS代码生成CSSOM （object mode）
// 3.将DOM Tree和CSSOM整合生成render Tree
// 4.根据render tree 渲染页面
// 5.遇到<script>则暂停渲染，优先加载并执行Js代码，完成再继续渲染，直到把render tree 渲染完成

// window.onload 和 DOMContentLoaded 区别
// onload
// 页面的全部资源加载完才会执行， 包括图片 视频

// DOMContentLoaded
// DOM渲染完即可执行，此时图片和图片还可能没加载完