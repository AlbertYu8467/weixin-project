import Vue from 'vue'
import Router from 'vue-router'
const weixin = r => require.ensure([], () => r(require('@/components/weixin/weixin')), 'weixin')
const contacts = r => require.ensure([], () => r(require('@/components/contacts/contacts')), 'contacts')
const find = r => require.ensure([], () => r(require('@/components/find/find')), 'find')
const mine = r => require.ensure([], () => r(require('@/components/mine/mine')), 'mine')

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/weixin',
            name: 'weixin',
            component: weixin
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: contacts
        },
        {
            path: '/find',
            name: 'find',
            component: find
        },
        {
            path: '/mine',
            name: 'mine',
            component: mine
        }
    ]
})