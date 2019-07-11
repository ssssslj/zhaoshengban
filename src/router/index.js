import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Education from '@/components/Education'
import Education_Manage from '@/components/Education_Manage'
import Education_Material from '@/components/Education_Material'
import School_Single from '@/components/School_Single'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/education_manage',
      name: 'education_manage',
      component: Education_Manage
    },
    {
      path: '/education_material',
      name: 'education_material',
      component: Education_Material
    },
    {
      path: '/school_single',
      name: 'school_single',
      component: School_Single
    },
  ]
})
