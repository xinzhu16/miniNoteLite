// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const DB = cloud.database()
const API = {
  ADD: 'addUserNote',
  DEL: 'deleteUserNote',
  EDIT: 'editUserNote',
  GET_VALID: 'getValidUserNote',
  GET_DEL: 'getDelUserNote'
}
const NOTE_TABLE = 'note'
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  switch (event.actionName) {
    case API.ADD:
      console.log(111);
      return await add(wxContext, event.content)
    case API.GET_VALID:
      console.log(3333);
      return await get(wxContext, 'valid')
    case API.EDIT:
      console.log(555555);
      return await update(event.content)
    case API.GET_DEL:
      return await get(wxContext, 'del')
    default:
      return {
        error: 1
      }
  }
}

const add = async (wxContext, data) => {
  try {
    return await DB.collection(NOTE_TABLE).add({
      data: {
        _openid: wxContext.OPENID,
        ...data
      }
    })
  } catch (e) {
    console.error(e)
  }
}

const get = async(wxContext, state) => {
  const data = await DB.collection(NOTE_TABLE)
    .where({
      _openid: wxContext.OPENID,
      state
    })
    .get()
  return data
}

const update = async(data) => {
  try {
    return await DB.collection(NOTE_TABLE).where({
      _id: data._id
    })
      .update({
        data: {
          content: data.content,
          beginDate: data.beginDate,
          endDate: data.endDate,
          state: data.state,
          type: data.type
        }
      })
  } catch (e) {
    console.error(e)
  }
}
