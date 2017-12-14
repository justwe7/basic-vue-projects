# basevue
+vue项目基础构建，按自己需求配置vue-router，axios，vuex文件基本配置及简单实用语法。<br>
+修改/build/utils.js，增加sass-mixin的方便移动端计算rem单位<br>
+修改/build/webpack.base.conf.js，增加路径简写<br>
+缩减css/js等的hash长度为7<br>


如果使用mock.js文件方式模拟数据请求，官方推荐方式chrome无法监听网络请求，可以在dev-server中配置服务，在42行左右位置(proxy配置之前)添加 if (process.env.NODE_ENV === 'development') {app.use('', require('../src/api/mock.js'))}。但是每次修改mock数据都需要重启环境

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8848
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
