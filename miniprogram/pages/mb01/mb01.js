// pages/mb01/mb01.js
//初始化数据库，获取数据库实例
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bnrUrl": [{
      "url": "../../images/lunbo/lb01.png"
    }, {
        "url": "../../images/lunbo/lb02.png"
    }, {
        "url": "../../images/lunbo/lb03.png"
    }, {
        "url": "../../images/lunbo/lb04.png"
    }],
    list:[]
  },
  //监听用户下拉刷新事件





  // 跳转页面
  toDetail(e){
    const id = e.currentTarget.id;
    wx.navigateTo({
      url:'/pages/detail/detail?id=' + id,
    })
    console.log(e);
  },

  //加载数据
  load(isInit){
    const PAGE = 5;
    wx.showLoading({
      title: '加载中',
    })
    db.collection("ceshi03").skip(0).get({
      success: res => {
        console.log(res);
        if(isInit){
          this.setData({
            list: res.data
          })
        }else{
          console.log(this.page);
          wx.stopPullDownRefresh();
        }

        wx.hideLoading();//移除加载中组件
      }
    })
  },

  //获取数据库中的值
  onLoad(options) {
    this.page=0;
    this.load(true)
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
    this.page += 1;
    this.load();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})