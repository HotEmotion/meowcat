// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [
      {
        id: 1,
        name: '热情调',
        desc: '暗示法发顺丰',
        iconPath: '/images/bluep .png',
        latitude: 35.01505,
        longitude: 118.487847,
        width: 45,
        height: 45
      },
      {
        id: 2,
        name: '看见看见你看看',
        desc: '暗示法发顺丰',
        iconPath: '/images/bronep.png',
        latitude: 32.002607,
        longitude: 114.487847,
        width: 45,
        height: 45
      },
      {
        id: 3,
        name: '看见看见你看看',
        desc: '暗示法发顺丰',
        iconPath: '/images/bronep.png',
        latitude: 33.002607,
        longitude: 113.487847,
        width: 45,
        height: 45
      },
      {
        id: 3,
        name: '看见看见你看看',
        desc: '暗示法发顺丰',
        iconPath: '/images/bronep.png',
        latitude: 5,
        longitude: 123,
        width: 45,
        height: 45
      }
    ],
    longitude: '',
    latitude:'',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        that.setData(
          {
            longitude: res.longitude,
            latitude: res.latitude,
          }
        );
      },
    });
 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('map');
    
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
  
  },
  navigate:function(){
    wx.navigateTo({
      url: '/pages/cat/add/add',
    })
  }
})