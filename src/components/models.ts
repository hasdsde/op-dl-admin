import {ref} from "vue";

export interface Todo {
    id: number;
    content: string;
}

export interface Meta {
    totalCount: number;
}

// 菜单数据
export let menu = ref([
    {
        icon: 'home', label: '版本', id: 1, isopen: true, children: [
            {file: "versionManager", link: 'version-manager', icon: 'donut_large', desc: '版本管理', id: 4,},
            {file: "versionDetail", link: 'version-detail', icon: 'notifications_active', desc: '版本活动', id: 5},
        ]
    },
    {
        icon: 'perm_identity', label: '限时活动', isopen: false, id: 2, children: [
            {file: "pool", link: 'pool', icon: 'people_alt', desc: '卡池', id: 6},
            {file: "event", link: 'event', icon: 'shopping_bag', desc: '活动', id: 7},
        ]
    },
    {
        icon: 'user', label: '用户', id: 3, isopen: false, children: [
            {file: "userManager", link: 'user-manager', icon: 'admin_panel_settings', desc: '用户管理', id: 8},
            {file: "userLog", link: 'user-log', icon: 'info', desc: '用户日志', id: 9},
        ]

    },
    {
        icon: 'system', label: '系统', id: 3, isopen: false, children: [
            {file: "systemConfig", link: 'system-config', icon: 'admin_panel_settings', desc: '系统设置', id: 8},
            {file: "sysAbout", link: 'sys-about', icon: 'info', desc: '关于', id: 9},
        ]
    }
])

export class MenuItems {
    link: string | undefined;
    icon: string | undefined;
    desc: string | undefined;
    id: number | undefined;

}