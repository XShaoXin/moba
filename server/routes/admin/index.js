module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true //父级路由合并到子路由,子路由才能获取到 resource
  })

  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  router.get('/', async (req, res) => {
    const queryOptions= {}
    if (req.Model.modelName === 'Category') {
      //modelName 等于模块module.exports = mongoose.model('Category', schema)里面的 'Category'
      queryOptions.populate = 'parent' //populate返回全部的数据
    }
    // else if (req.Model.modelName === 'Article') { 
    //   queryOptions.populate = 'categories'
    // }
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const ModelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${ModelName}`)
    next() 
  }, router)

  const multer = require('multer')
  const upload = multer({dest: __dirname + '/../../uploads'}) //上传的路径
  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file //upload.single('file') 使得 file 添加到 req
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
}