const mongooes = require('mongoose')

const schema = new mongooes.Schema({
  name: {type: String}
})

module.exports = mongooes.model('Category', schema)