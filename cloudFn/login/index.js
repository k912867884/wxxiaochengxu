// 引入云函数依赖的包
const cloud = require("wx-server-sdk");
//初始化云环境
cloud.init();
//用云函数实现加法运算
exports.main = (event)=>{
   const wxInfo = cloud.getWXContext();
  return{//返回一个算法
    //用户的openId
    sum :event.a + event.b,
    wxInfo,
  }
}


// // 云函数入口文件
// const cloud = require('wx-server-sdk')
// cloud.init()
// // 云函数入口函数
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()

//   return {
//     event,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
// }