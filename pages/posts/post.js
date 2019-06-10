Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content = [
      {
        date: 'Nov 25 2016',
        title: '直击顶峰礼包',
        post_img: '/images/post/content_1.jpg',
        author_img: '/images/post/avatar_1.jpg',
        content: '两个都是售价8888点劵，只能用点劵',
        view_num: 66, 
        collect_num: 66
      },
      {
        date: 'Nov 26 2016',
        title: '直击顶峰礼包1',
        post_img: '/images/post/content_1.jpg',
        author_img: '/images/post/avatar_1.jpg',
        content: '两个都是售价8888点劵，只能用点劵',
        view_num: 66,
        collect_num: 66
      }
    ];

    this.setData({post_content});
  }
})