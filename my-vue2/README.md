# my-vue
<!-- 
> 目前已知问题
#  2017-6-6   实现图片懒加载（require加载）（需要改进加载条件）
1. Ajax请求路径不能用变量设置，怎样写？
 

 -->

> 简介
#vue仿豆瓣App的单页面应用

#更新记录
*  2017-6-14：（home页）实现上拉加载更多  

### 项目技术架构
***
*  vue-cli
*  vue
*  vue-axios（ajax请求插件）
*  axios
*  vue-router
*  swiper（轮播图插件）
*  webpack
*  iscroll（滚动插件）

### 实现以下功能：
***
1. 登录加载用户数据，跨组件数据交换
2. 无限滚动，左右滑动切换图片
3. 上拉加载，
4. 图片懒加载
5. 发布广播

### 正在实现的功能:
***
*  搜索
*  查看我的广播
*  等


### 安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


###目录结构
***
<pre>
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // 图片资源
│   ├── components     // 各种组件
│   ├── data           // json数据
│   ├── pages          // 子页面组件
│   ├── vuex           // vuex状态管理器
│   ├── router.js      // 路由配置器
│   ├── App.vue        // 主页面组件
│   └── main.js        // Webpack 预编译入口
</pre>

























