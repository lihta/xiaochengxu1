//index.js
const app = getApp();

Page({
  data: {
    listP: "",
    title: ""
  },

  onLoad: function() {
    this.getDetailInfo();
  },

  getDetailInfo() {
    const db = wx.cloud.database({
      env: "production-594426"
    });
    const listCollection = db.collection("yunhanshi1_articledetail");
    listCollection
      .where({})
      .get()
      .then(
        res => {
          let info = res.data[0];
          let { title } = info;
          let listP = JSON.parse(info.listP);
          console.log("res", res);
          this.setData({ listP, title });
        },
        err => {
          console.log("err", err);
        }
      );
  },

  callme() {
    wx.makePhoneCall({
      phoneNumber: "18101380205"
    });
  }
});
