export default async function (actionName, data, name = 'handleUserNote') {
  return await wx.cloud.callFunction({
    name,
    data: {
      actionName,
      content: data
    }
  })
}
