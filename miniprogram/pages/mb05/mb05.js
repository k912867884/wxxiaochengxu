// pages/mb05/mb05.js
//获取应用实例

const app = getApp();
//初始化数据、获取数据库实例
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  // 获取用户信息的函数,格式写死:js文件
  getUserInfo:function(e){

    //调用云函数,格式写死，后面跟云函数的名称和参数
    wx.cloud.callFunction({
      name:"login",
      data:{
        a:10,
        b:20
      },
      success:res=>{
        //console.log(res.result.wxInfo.OPENID);
        e.detail.userInfo.openid = res.result.wxInfo.OPENID;
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
          userInfo:e.detail.userInfo
        })
        // 本地存储
        wx.setStorageSync("userInfo", e.detail.userInfo)
      }
    })
    // 需要一个openid
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo){
      this.setData({
        userInfo:app.globalData.userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})