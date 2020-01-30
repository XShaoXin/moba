module.exports = app => {
  const express = require('express')
  const multer = require('multer')
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../../models/AdminUser')
  const authMiddlewate = require('../../middleware/auth')
  const resourceMiddlewate = require('../../middleware/resource')
  const router = express.Router({
    mergeParams: true //父级路由合并到子路由,子路由才能获取到 resource
  })

  //添加资源
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  //更新资源
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  //删除资源
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  //请求资源列表
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      //modelName 等于模块module.exports = mongoose.model('Category', schema)里面的 'Category'
      queryOptions.populate = 'parent' //populate返回全部的数据
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
  })
  //查找资源
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
    //通用的CRUD接口
  app.use('/admin/api/rest/:resource', authMiddlewate(), resourceMiddlewate(), router)

  //上传图片
  const upload = multer({
    dest: __dirname + '/../../uploads'
  }) //上传的路径
  app.post('/admin/api/upload', authMiddlewate(), upload.single('file'), async (req, res) => {
    const file = req.file //upload.single('file') 使得 file 添加到 req
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  //登录接口
  app.post('/admin/api/login', async (req, res) => {
    const {
      username,
      password
    } = req.body
    //1.根据用户名找用户, 使用 select('+password') 才能得到password密文
    const user = await AdminUser.findOne({
      username
    }).select('+password')
    assert(user, 422, '用户不存在')
    //2.校验密码
    //compareSync (明码, 密文) 返回 boolen ---- 校验
    const isValid = require('bcryptjs').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    //3.返回token
    const token = jwt.sign({
      id: user._id
    }, app.get('secret'))
    res.send({
      token
    })
  })

  //错误处理中间件
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}