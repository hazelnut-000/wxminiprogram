// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    
  },
  //跳转至logs页面的方法,API中使用wx.nagigateTo，url里写的是跳转页面；wx.redirectTo是能回到主页面；reLaunch也支持回到主页面
  toLogs(){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad()');
    //修改msg的状态数据。语法：this.setData
    console.log(this.data.msg)//this代表当前页面的实例对象
    this.setData({
      msg:'修改之后的数据'
    })
    console.log(this.data.msg)
  },
  //获取用户信息的回调
  handleGetUserProfile(res){
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  handleGetUserInfo(res){
    console.log(res)
      this.setData({
        userInfo: res.detail.userInfo,
        hasUserInfo: true
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady()');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow()');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide()');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload()');
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