module.exports = options =>{
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../models/AdminUser')
  return async (req, res, next) => {
    try {
      const token = String(req.headers.authorization || "").split(' ').pop()
      const {
        id
      } = jwt.verify(token, req.app.get('secret')) //解析token
      req.user = await AdminUser.findById(id)
      await next()
    } catch (error) {
      res.status(401).send({
        message: '请先登录'
      })
    }
  }
} 