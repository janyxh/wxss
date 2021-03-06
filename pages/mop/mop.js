// pages/mop/mop.js
import { url } from "../../utils/const.js"

//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    url: url,
    code: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 如果存在用户信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        url: `${this.data.url}?nickName=${encodeURI(encodeURI(app.globalData.userInfo.nickName))}&&avatarUrl=${app.globalData.userInfo.avatarUrl}`
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          url: `${this.data.url}?nickName=${encodeURI(encodeURI(res.userInfo.nickName))}&&avatarUrl=${res.userInfo.avatarUrl}`
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            url: `${this.data.url}?nickName=${encodeURI(encodeURI(res.userInfo.nickName))}&&avatarUrl=${res.userInfo.avatarUrl}`
          })
        }
      })
    }


    // 如果存在code
    if (app.globalData.code) {
      this.setData({
        code:app.globalData.code
      })
    }
  },
  // 获取用户信息
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  // 获取用户绑定的手机号
  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
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