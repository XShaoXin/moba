const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: {
    type: String,
    unique: true, //唯一
  },
  password: {
    type: String,
    select: false, //不在前端展示
    set(val) {
      return require('bcryptjs').hashSync(val, 10) //对密码进行散列(加密),散列指数一般为10-12
    }
  }
})

module.exports = mongoose.model('AdminUser', schema)