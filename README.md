# Node.js + Vue.js 全栈开发王者荣耀手机端官网和管理后台

## 一、 入门
1. 项目介绍
1. 工具安装和环境搭建(nodejs,npm,mongodb)
1. 初始化项目

## 二、 管理后台
1. 基于Element UI的后台管理基础界面搭建
1. 创建分类
1. 分类列表
1. 修改分类
1. 删除分类
1. 子分类
1. **通用 CRUD 接口**
1. 装备管理
1. 图片上传 (multer)
1. 英雄管理
1. 编辑英雄 (关联,多选,el-select, multiple)
1. 技能编辑
1. 文章管理
1. 富文本编辑器 (quill)
1. 首页广告管理
1. 管理员账号管理 (bcryptjs)
1. 登录页面
1. 登录接口 (jwt,jsonwebtoken)
1. 服务端登录校验
    - 添加校验token中间件
    - 安装http-assert
    - Example
    > var assert = require('http-assert')  
    > assert(username === 'fjodor', 401, 'authentication failed')
    - 添加错误处理中间件发送一个err.message的错误信息
    - 前端判断是否有token,有则发送Authorization
    - 添加响应拦截器---有无登录,无则$router.push到登录页面
1. 客户端路由限制 (beforeEach, meta)
1. 上传文件的登录校验 (el-upload, headers)

## 三、移动端网站

1. "工具样式"概念和 SASS (SCSS)
    - $ npm i -D sass sass-loader
1. 样式重置
1. 网站色彩和字体定义 (colors, text)
1. 通用flex布局样式定义 (flex)
1. 常用边距定义 (margin, padding)
1. 主页框架和顶部菜单
    - 添加router ---- $ vue add router
1. 首页顶部轮播图片 (vue swiper)
1. 使用精灵图片 (sprite)
1. 使用字体图标 (iconfont)
1. 卡片组件 (card)
1. 列表卡片组件 (list-card, nav, swiper)
1. 首页新闻资讯-数据录入(+后台bug修复)
1. 首页新闻资讯-数据接口
1. 首页新闻资讯-界面展示
1. 首页英雄列表-提取官网数据
1. 首页英雄列表-录入数据
1. 首页英雄列表-界面展示
1. 新闻详情页
1. 新闻详情页-完善
1. 英雄详情页-1-前端准备
1. 英雄详情页-2-后台编辑
1. 英雄详情页-3-前端顶部
1. 英雄详情页-4-完善

## 四、发布和部署 (阿里云)

1. 生产环境编译
1. 购买域名和服务器
1. 域名解析
1. Nginx 安装和配置
1. MongoDB数据库的安装和配置
1. git 安装、配置ssh-key
1. Node.js 安装、配置淘宝镜像
1. 拉取代码，安装pm2并启动项目
1. 配置 Nginx 的反向代理
1. 迁移本地数据到服务器 (mongodump)

## 五、进阶
1. 使用免费SSL证书启用HTTPS安全连接
1. 使用阿里云OSS云存储存放上传文件
