module.exports = app => {
  const router = require('express').Router()
  const Article = require('../../models/Article')
  const Category = require('../../models/Category')

  router.get('/news/init', async (req, res) => {
    const newsTitles = ["王者荣耀祝各位召唤师春节快乐！", "《王者荣耀》获App store推荐，带你领略五岳东方之美！", "新皮肤爆料丨AI意识觉醒，机器少女妲己绚丽登场！", "五城战队团年饭，队友线下团聚回顾", "新皮肤爆料｜掌控万物，武则天化身宇宙女王！", "1月24日全服不停机更新公告", "【已修复】妲己时之彼端皮肤分享周边商城优惠券异常问题", "1月26日全服不停机更新公告", "【已恢复】关于手Q区部分召唤师反馈对局时卡顿问题说明", "部分召唤师参与组队消费抽免单活动异常说明", "妲己新皮肤即将上架 全新好礼不容错过！", "除夕，年兽宝藏登录即领，抢红包抽内测皮肤！", "贺鼠年新春 领多重好礼！", "金鼠送礼 峡谷新春福利来袭", "组队消费活动消费期开启说明", "2019年赛事数据盘点，峡谷最强选手全知道！", "2020KPL春季赛大名单公示", "假期狂欢季开启，高校区域联赛战队携手虎牙人气主播开战啦！", "高校自制定格动画：说出来你可能不信，我们的“作业”打起来了！", "2020年KPL春季转会期俱乐部挂牌名单公布"]
    const parent = await Category.findOne({
      name: '新闻资讯'
    })
    const cats = await Category.find().where({
      parent: parent
    }).lean()
    const newsList = newsTitles.map(title => {
      var randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
      return {
        categories: randomCats.slice(0, 2),
        title: title
      }
    })
    await Article.deleteMany({})
    await Article.insertMany(newsList)

    res.send(newsList)
  })

  router.get('/news/list', async (req, res) => {
    const parent = await Category.findOne({
      name: '新闻资讯'
    })
    const cats = await Category.aggregate(
      [{
          $match: {
            parent: parent._id
          }
        },
        {
          $lookup: {
            from: 'articles',
            localField: '_id',
            foreignField: 'categories',
            as: 'newsList'
          }
        },
        {
          $addFields: {
            newsList: {
              $slice: ['$newsList', 5]
            }
          }
        }
      ])
      const subCats = cats.map(v => v._id)
      cats.unshift({
        name: '热门',
        newsList: await Article.find().where({
          categories: {$in : subCats}
        }).populate('categories').limit(5).lean()
      })
      cats.map(cat => {
        cat.newsList.map(news => {
          news.categoryName = (cat.name === '热门') ? news.categories[0].name : cat.name
          return news
        })
        return cat
      })
    res.send(cats)
  })

  app.use('/web/api', router)
}