import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const Home = () => import(/* webpackChunkName: "welcome" */'../views/Home.vue')
const Welcome = () => import(/* webpackChunkName: "welcome" */ '../views/welcome.vue')
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      home: Home
    }
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: ':id',
        // name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About,
        children: [
          {
            path: 'aboutId',
            name: 'aboutId',
            component: () => import('../components/router-test/about-id'),
            children: [
              {
                path: 'about-id-product/:productId',
                name: 'hello',
                meta: {
                  hello: 'nihao',
                  name: 'world'
                },
                props: {
                  hello: 'nihao',
                  height: '100px'
                },
                component: () => import('../components/router-test/about-id-product'),
                children: [
                  {
                    path: 'about-id-product-detail',
                    name: 'nihao',
                    component: () => import('../components/router-test/about-id-product-detail')
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/welcome',
    component: Welcome,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
