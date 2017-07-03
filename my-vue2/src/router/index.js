import Vue from 'vue'
import Router from 'vue-router'
//多页翻页组件
import Page1 from '../components/turn-page.vue'
//搜索页面
import Search from '../components/search'

// 主页面
import Home from '../pages/home/home'
import Audio from '../pages/audio/audio.vue'
import Broadcast from '../pages/broadcast/broadcast.vue'
import Group from '../pages/group/group.vue'
import Mine from '../pages/mine/mine.vue'

//audio 的子页面
import Film from '../pages/audio/subpage/film'
import Book from '../pages/audio/subpage/book'
import Television from '../pages/audio/subpage/television'
import City from '../pages/audio/subpage/city'
import Music from '../pages/audio/subpage/music'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Audio',
      name: 'Audio',
      component: Audio,
      children:[
        {
          path: 'Film',
          component: Film
        },
        {
          path: 'Book',
          component: Book
        },
        {
          path: 'Television',
          component: Television
        },
        {
          path: 'City',
          component: City
        },
        {
          path: 'Music',
          component: Music
        },
      ]
    },
    {
      path: '/Broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/Group',
      name: 'Group',
      component: Group
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
  ]
});
