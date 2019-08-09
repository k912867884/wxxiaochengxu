// pages/mb02/mb02.js
//初始化数据库
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  adddata(){
    db.collection("ceshi03").add({
      data:{  
        title:"小米K5",
        price:3088,
        label:["潮流","高性能","拍照","黑科技"],
        img:"cloud://cdshi-z4il4.6364-cdshi-z4il4/xiaom05.jpg"    
      },success:res=>{
        console.log("成功",res);
      },fail:err=>{
        console.log("失败",err);
      }
    })

  },
  //添加商品的函数
  addMall(e){
    //添加一张图片到云存储上面
    wx.chooseImage({//选择图片
      count:1,
      success:res=>{
        const filePath = res.tempFilePaths[0];
        const tempFile = filePath.split(".")
        const cloudPath = "path-img-"+tempFile[tempFile.length-2]
        //上传文件
         wx.cloud.uploadFile({
           cloudPath,//文件的名字
           filePath, //文件的路径
           success:res=>{
              db.collection("ceshi03").add({//添加云数据库
                data:{
                  name:"商品2",
                  price:14,
                  tab:["看书","游戏"],
                  image:res.fileID
                },success:res=>{
                 console.log("添加成功");
                },fail:err=>{
                  console.log("添加失败");
                }
              })
           }
         })
       
      }
    })


  //往数据库添加东西

  },





  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {

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