import CreateStudentView from '@/components/CreateStudentView.vue'
import StudentsView from '@/components/StudentsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: StudentsView
        },
        {
            path: '/create',
            name: 'createStudent',
            component: CreateStudentView
        }
        // {
        //     path: "/login",
        //     name: "login",
        //     component: LoginView
        // },
        // {
        //     path: "/register",
        //     name: "register",
        //     component: RegisterView
        // },
    ],
})

// router.beforeEach((to, from, next) => {
//     const publicPages = ['home', 'login', 'register'];
//     const authRequired = !publicPages.includes(to.name);
//     const token = localStorage.getItem("token");

//     if (authRequired && !token) {
//         return next({ name: 'login' });
//     }

//     if ((to.name === 'login' || to.name === 'register') && token) {
//         return next({ name: 'barang' });
//     }

//     next();
// });


export default router