// pages/timeline/timeline.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "",
    user:{
      userName:"热情调",
      catName:"咚咚咚",
      catLei:"狸花猫",
      catSex:false,
      catTe:"长得好看，非常好看长得好看，非常好看长得好看，非常好看长得好看，非常好看长得好看，非常好看"
    },
    status: false,
    dongtaiList:[
      {
        dongtaiiId:1,
        date_month: 5,
        date_day: 2,
        date_time: "下午12:37",
        say: "今天老子心情不好，别惹老子！",
        images: ['/images/mao1.jpg',],
        commentList: [
          { name: "帅哥", comment: "我长得帅所以我家的猫也长得很帅！！！" },
          { name: "美女", comment: "我长得美所以我家的猫也长得很美！！！" }]
      },
      {
        dongtaiiId: 2,
        date_month: 4,
        date_day: 28,
        date_time: "上午10:29",
        say: "今天心情美美哒，求勾搭！",
        images: ['/images/mao1.jpg', '/images/mao1.jpg', '/images/mao1.jpg', '/images/mao1.jpg', '/images/mao1.jpg', '/images/mao1.jpg', '/images/mao1.jpg', '/images/mao1.jpg', '/images/mao1.jpg' ],
        commentList: [
          { name: "帅哥", comment: "我长得帅所以我家的猫也长得很帅！！！" },
          { name: "美女", comment: "我长得美所以我家的猫也长得很美！！！" }]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    status: (options.status == "true" ? true : false);
    this.setData({
      imgUrl: wx.getStorageSync('avatar')
    })
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
    this.setData({
      status: false
    })
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
  fShow: function (){
    this.setData({
      status:true
    })
  },
  fHide: function(){
    this.setData({
      status:false
    })
  },
  biggerImg: function(event){
     var src = event.currentTarget.dataset.src;
     var imgList = event.currentTarget.dataset.list;
     wx.previewImage({
       current:src,
       urls: imgList,
     })
  }
})
