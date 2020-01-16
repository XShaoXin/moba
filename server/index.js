const express = require('express')

const app = express()

app.set('secret', 'xsxlovexjy')

app.use(require('cors')())//跨域cors
app.use(express.json())//支持 req.body 的使用
app.use('/uploads', express.static(__dirname + '/uploads'))//定义静态文件路由

require('./plugins/db')(app)//绑定数据库模块
require('./routes/admin')(app)//admin 页面的 CRUD 模块


app.listen(3000, () => {
  console.log('http://localhost:3000')
})