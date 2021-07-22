import { createApp } from 'vue'
import { VueRouter } from 'vue-router'
import App from './App.vue'
// import Post from './Post.vue'

const Home = { template: '<div> Home </div>' }
const Contact = { template: '<div> Contact Us</div>' }
const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact }
]

console.log(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routes
})
createApp(App).use(router).mount('#app')


