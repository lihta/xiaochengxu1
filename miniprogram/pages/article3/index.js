//index.js
const app = getApp();

Page({
  data: {
    listP: [
      {
        des:
          "如果你有车辆维修保养相关的小妙招，或者你遇到哪些烦心事，小姐姐等你来聊一聊哦～",
        img: "./2.jpg"
      },
      {
        des: "投稿邮箱：18101380205@189.cn"
      },
      {
        des: "当然啦，也非常欢迎合作伙伴或者广告的入驻～"
      },
      {
        des: "最后，来两个美丽的小姐姐镇楼～",
        img: "./1.jpg"
      }
    ],
    title: "欢迎来稿～"
  },

  onLoad: function() {},

  callme() {
    wx.makePhoneCall({
      phoneNumber: "18101380205"
    });
  }
});
