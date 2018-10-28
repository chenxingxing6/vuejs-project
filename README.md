# vue-sell

### 总结
1. mock数据或调用后台的  main.js
2. 跨域（前端/后端处理）
3. vue基本语法，webpack的使用


goods
```html
var openid = this.$route.query.openid;
console.log(openid)
if(typeof openid !== 'undefined') {
  var exp = new Date();
  exp.setTime(exp.getTime() + 3600 * 1000);//过期时间60分钟
  document.cookie = 'openid=' + openid + ";expires=" + exp.toGMTString();
}
//获取openid
if(getCookie('openid') == null) {
  location.href = config.openidUrl + '?returnUrl=' +  encodeURIComponent(config.sellUrl + '/#/');
}
```
