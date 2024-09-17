import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import chengji from '@/views/modules/chengji/list'
    import dictionary from '@/views/modules/dictionary/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import jiaoxuejihua from '@/views/modules/jiaoxuejihua/list'
    import kecheng from '@/views/modules/kecheng/list'
    import laoshi from '@/views/modules/laoshi/list'
    import xuanke from '@/views/modules/xuanke/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import dictionaryBanji from '@/views/modules/dictionaryBanji/list'
    import dictionaryChengji from '@/views/modules/dictionaryChengji/list'
    import dictionaryJiaoxuejihua from '@/views/modules/dictionaryJiaoxuejihua/list'
    import dictionaryKechengKaohe from '@/views/modules/dictionaryKechengKaohe/list'
    import dictionaryKechengXingzhi from '@/views/modules/dictionaryKechengXingzhi/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryYuanxi from '@/views/modules/dictionaryYuanxi/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBanji',
        name: '班级',
        component: dictionaryBanji
    }
    ,{
        path: '/dictionaryChengji',
        name: '成绩类型',
        component: dictionaryChengji
    }
    ,{
        path: '/dictionaryJiaoxuejihua',
        name: '计划类型',
        component: dictionaryJiaoxuejihua
    }
    ,{
        path: '/dictionaryKechengKaohe',
        name: '考核方式',
        component: dictionaryKechengKaohe
    }
    ,{
        path: '/dictionaryKechengXingzhi',
        name: '课程性质',
        component: dictionaryKechengXingzhi
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryYuanxi',
        name: '院系',
        component: dictionaryYuanxi
    }


    ,{
        path: '/chengji',
        name: '成绩',
        component: chengji
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/jiaoshi',
        name: '教室',
        component: jiaoshi
      }
    ,{
        path: '/jiaoxuejihua',
        name: '教学计划',
        component: jiaoxuejihua
      }
    ,{
        path: '/kecheng',
        name: '课程',
        component: kecheng
      }
    ,{
        path: '/laoshi',
        name: '老师',
        component: laoshi
      }
    ,{
        path: '/xuanke',
        name: '选课',
        component: xuanke
      }
    ,{
        path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
