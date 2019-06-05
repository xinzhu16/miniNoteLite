// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'test-h94bc'
})

const DB = cloud.database()
const NOTE_TABLE = 'note'
const _ = DB.command
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  update({state: 'valid'})
}

const update = async(data) => {
  try {
    const date = new Date().getTime();
    await DB.collection(NOTE_TABLE).where({
      endDate: _.lt(date)
    }).update({
      data: {
        state: 'del'
      }
    })
  } catch (e) {
    console.error(e)
  }
}
