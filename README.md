# Node.js + Vue.js 全栈开发王者荣耀手机端官网和管理后台
# 展示: https://test.xsxin.top/, 后台管理页面为: https://test.xsxin.top/admin, 管理员:admin,密码123456
## 一、 初始化项目
1. server
    - 配置 : nodemon index.js
    - npm i express@next, mongooes, cors(跨域)
    - 设置db, models, routes
1. admin和web---vue create name
    - 添加router ---- $ vue add router
    - npm i axios, 配置$http
    - 
## 二、 管理后台
1. 基于Element UI的后台管理基础界面搭建---npm i ElementUI
1. 创建分类
1. 分类列表
1. 修改分类
1. 删除分类
1. 子分类
1. **通用 CRUD 接口**---npm i inflection(用于单复数装换,开头大小写)
1. 装备管理
1. 图片上传 (multer)
1. 英雄管理
    - 报错(this.model = res.data) => 解决: this.model = Object.assign({}, this.model, res.data)
1. 编辑英雄 (关联,多选,el-select, multiple)
1. 技能编辑
1. 文章管理
1. 富文本编辑器 (quill)
1. 首页广告管理(轮播图)
1. 管理员账号管理 (bcryptjs)
1. 登录页面
1. 登录接口 (jwt,jsonwebtoken)
    - server: npm run jsonwebtoken(sign()生成token)
    - admin: 保存token, 然后添加请求拦截把token发送给服务端---添加Authorization
1. 服务端登录校验
    - 添加中间件(除登录接口),接收的token进行jwt(verify())校验, 并把查询到的数据添加到req.user
    - npm i http-assert
    - 添加错误处理中间件发送一个err.message的错误信息
    - 前端判断是否有token,有则发送Authorization
    - 添加响应拦截器---错误拦截和有无登录拦截,无则$router.push到登录页面
1. 客户端路由限制 (beforeEach, meta)
1. 上传文件的登录校验 (el-upload, headers)

## 三、移动端网站

1. SASS
    - $ npm i -D sass sass-loader
1. 样式重置
1. 工具类
    - 网站色彩和字体定义 (colors, text)
    - 通用flex布局样式定义 (flex)
    - 常用边距定义 (margin, padding)
1. 主页框架和顶部菜单
    - 添加router ---- $ vue add router
1. 首页顶部轮播图片 (vue swiper)
    - 安装 $npm install vue-awesome-swiper --save
1. 使用精灵图片 (sprite)
1. 使用字体图标 (iconfont)
    - 阿里图标
1. 卡片组件 (card)
1. 列表卡片组件 (list-card, nav, swiper)
1. 首页新闻资讯-数据录入(+后台bug修复)
    - 导入require-all,把所有的模型先引入
1. 首页新闻资讯-数据接口
    - /web/api/news/init
1. 首页新闻资讯-界面展示
    - 安装dayjs和axios, 设置baseURL
1. 首页英雄列表-提取官网数据
    - $$('li',$$('.hero-nav')[0]).map((v, i) => {
return {   
name : v.innerText,   
heroes : $$('li', $$('.hero-list')[i]).map(hero => {   
return {   
name: hero.innerText,   
avatar: $$('img', hero)[0].src   
}})}})
1. 首页英雄列表-录入数据
    - /web/api/heroes/init
1. 首页英雄列表-界面展示
1. 新闻详情页
1. 新闻详情页-完善
1. 英雄详情页-1-前端准备
1. 英雄详情页-2-后台编辑
1. 英雄详情页-3-前端顶部
1. 英雄详情页-4-完善

## 四、发布和部署 (阿里云)

## 文档：编译生产环境并放到服务器.note链接：http://note.youdao.com/noteshare?id=1c094559c02ade57b2fe9ab42efc7a3b
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

## 五、SSL和OSS
1. 使用免费SSL证书启用HTTPS安全连接
https://letsencrypt.org/
https://certbot.eff.org/
1. 使用阿里云OSS云存储存放上传文件