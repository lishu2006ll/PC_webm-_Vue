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
