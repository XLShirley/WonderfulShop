<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    var userInfo = {
      openId: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
      nickName: "小肖",
      gender: 1,
      language: "zh_CN",
      city: "Changping",
      province: "Beijing",
      country: "China",
      avatarUrl: "https://s10.mogucdn.com/mlcdn/c45406/171116_62f571l0ki0ffcg94h6kg6452h497_356x356.png",
      watermark: { timestamp: 1535513485, appid: "wx601ce71bde7b9add" }
    };
    var openId = userInfo.openId;
    wx.setStorageSync("userInfo", userInfo);
    wx.setStorageSync("openId", openId);
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>
@import url('./iconfont/iconfont.css');
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
page{
  background: #f4f4f4;
  height: 100%;
}
button{
  background: none;
  padding: 0;
  font-weight: normal;
  font-size: 32rpx;
  box-sizing: content-box;
}
button::after{
  border: 0;
}
view,text{
  font-size: 28rpx;
  color: #333333;
}
.wxParse .p{
  margin: 0 !important;
}
.wxParse .img{
  display: block !important;
}
</style>
