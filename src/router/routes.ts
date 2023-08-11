import {RouteRecordRaw} from 'vue-router';
import {menu} from "components/models";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: []
    },
];

//将menus里面的装入其中
menu.value.forEach((element: any, index: number) => {
    element.children.forEach((children: any, i: number) => {
        // @ts-ignore
        routes[0].children.push({
            path: '/' + children.link,
            component: () => import('../pages/' + element.name + '/' + children.file + '.vue')
        })
    });
});
console.log(routes)
// routes.push({
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/ErrorNotFound.vue'),
// })

export default routes;
