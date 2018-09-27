# web_im

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


http://localhost:8081/swap/im?callback=success_jsonpCallback&appId=app_lis&source=13&clientType=pcweb_shjkf&key=1Y2aqh2cfJWZ3NGc9UGc5RFduVWasNmJzETPlNmc192cmMXas9FcwFWPklEcwFmJrNWYixGbhNEcu92cq91czV2YjV3c9s2YhJGbsF2Y%2F0WavAXY3N3L


Response.ContentType="text/html; charset=utf-8";
String callback = Request.QueryString["successCallback"].ToString();
Response.Write(callback + "{ \"success\": [{ \"id\": 1, \"title\": \"title 1\" }, { \"id\": 2, \"title\": \"title 2\" }, { \"id\": 3, \"title\": \"title 3\"}] }");



替换现在的im通讯组建，采用https://github.com/mt51/vue-im/tree/master/config   vue-im开源方案进行


!. 主系统生成的token， 由当前系统获得，然后获得主系统的用户id， 根据用户的id进行权限验证，和后台进行数据交互
   用户的权限来自后台， 获得user_id，=====》获得client_id, 获得client_id， 可以获得用户的权限等数据结构，根据这些数据结构，用户可以在前台进行交互操作。
