//index.js
const app = getApp();

Page({
  data: {
    listP: []
  },

  onLoad: function() {
    this.getlistData();
  },

  getlistData() {
    const db = wx.cloud.database({
      env: "production-594426"
    });
    const listCollection = db.collection("yunhanshu1_articlelist");
    listCollection
      .where({})
      .get()
      .then(
        res => {
          let listP = res.data;
          console.log("res", listP);

          this.setData({ listP });
        },
        err => {
          console.log("err", err);
        }
      );
  },

  godetail(e) {
    console.log("wwwwwww", e.currentTarget.dataset.info.id_);
    let articleid = e.currentTarget.dataset.info.articleid;
    wx.navigateTo({
      url: `/pages/article${articleid}/index`,
      success: function(res) {
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });
  },

  callme() {
    wx.makePhoneCall({
      phoneNumber: "18101380205"
    });
  }
});
