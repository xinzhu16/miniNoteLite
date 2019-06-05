// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const DB = cloud.database()
const API = {
  ADD: 'addUserNote',
  DEL: 'deleteUserNote',
  Edit: 'editUserNote'
}
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  switch (event.actionName) {
    case API.ADD:
      return await add(wxContext, event.content);
    default:
      return {
        error: 1
      }
  }
}

const add = async (wxContext, data) => {
  try {
    return await DB.collection('note').add({
      data: {
        _openid: wxContext.OPENID,
        ...data
      }
    })
  } catch (e) {
    console.error(e)
  }
}
