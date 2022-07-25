import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home.vue'

Vue.use(VueRouter)

const routes = [
	{path: '/login',name: 'login',component:() => import('@/views/login')},
	{path: '/',name: '系统配置',component:home,meta:{icon:'el-icon-setting'},
		children: [
            {path: '/sysUser',name: 'sysUser',component:() => import('@/views/sysManage/sysUser'),meta:{label:'系统用户'}},
            {path: '/permissionConfig',name: 'permissionConfig',component:() => import('@/views/sysManage/permissionConfig'),meta:{label:'权限配置'}},
            {path: '/roleConfig',name: 'roleConfig',component:() => import('@/views/sysManage/roleConfig'),meta:{label:'角色配置'}},
            {path: '/businessConfig',name: 'businessConfig',component:() => import('@/views/sysManage/businessConfig'),meta:{label:'业务配置'}},
            {path: '/hospitalApi',name: 'hospitalApi',component:() => import('@/views/sysManage/hospitalApi'),meta:{label:'医院接口'}},
            {path: '/timeTask',name: 'timeTask',component:() => import('@/views/sysManage/timeTask'),meta:{label:'定时任务'}},
            {path: '/dictionaryManage',name: 'dictionaryManage',component:() => import('@/views/sysManage/dictionaryManage'),meta:{label:'字典管理'}},
            {path: '/tencentConfig',name: 'tencentConfig',component:() => import('@/views/sysManage/tencentConfig'),meta:{label:'公众号配置'}},
            {path: '/backgroundLog',name: 'backgroundLog',component:() => import('@/views/sysManage/backgroundLog'),meta:{label:'后台日志'}},
            {path: '/orgManage',name: 'orgManage',component:() => import('@/views/sysManage/orgManage'),meta:{label:'机构管理'}},
            {path: '/orgConfig',name: 'orgConfig',component:() => import('@/views/sysManage/orgConfig'),meta:{label:'机构配置'}},
            {path: '/orgBusiness',name: 'orgBusiness',component:() => import('@/views/sysManage/orgBusiness'),meta:{label:'机构业务'}},
            {path: '/orgDep',name: 'orgDep',component:() => import('@/views/sysManage/orgDep'),meta:{label:'机构部门'}},
            {path: '/orgUser',name: 'orgUser',component:() => import('@/views/sysManage/orgUser'),meta:{label:'机构人员'}},
        ]
	},{path: '/',name: '挂号管理',component:home,meta:{icon:'el-icon-first-aid-kit'},
		children: [
            {path: '/registerConfig',name: 'registerConfig',component:() => import('@/views/register/registerConfig'),meta:{label:'挂号配置'}},
            {path: '/registerRecord',name: 'registerRecord',component:() => import('@/views/register/registerRecord'),meta:{label:'挂号记录'}},
        ]
	},{path: '/',name: '测试',component:home,meta:{icon:'el-icon-star-off'},
		children: [
            {path: '/components',name: 'components',component:() => import('@/views/test/components'),meta:{label:'components'}},
            {path: '/refresh',name: 'refresh',component:() => import('@/views/test/refresh'),meta:{label:'refresh'}},
            {path: '/select',name: 'select',component:() => import('@/views/test/select'),meta:{label:'select'}},
            {path: '/directive',name: 'directive',component:() => import('@/views/test/directive'),meta:{label:'directive'}},
            {path: '/echarts',name: 'echarts',component:() => import('@/views/test/echarts'),meta:{label:'echarts'}},
        ]
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router