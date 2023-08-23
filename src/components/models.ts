import {ref} from "vue";

// 菜单数据
export let menu = ref([
    {
        icon: 'home', label: '版本', id: 1, isopen: true, name: "version", children: [
            {file: "versionManager", link: 'version-manager', icon: 'donut_large', desc: '版本管理', id: 4,},
            {file: "versionDetail", link: 'version-detail', icon: 'notifications_active', desc: '版本活动', id: 5},
        ]
    },
    {
        icon: 'perm_identity', label: '限时活动', name: "event", isopen: false, id: 2, children: [
            {file: "pool", link: 'pool', icon: 'people_alt', desc: '卡池', id: 6},
            {file: "event", link: 'event', icon: 'shopping_bag', desc: '活动', id: 7},
            {file: "eventDetail", link: 'event-detail', icon: 'shopping_bag', desc: '活动细节', id: 10},
        ]
    },
    // {
    //     icon: 'manage_accounts', label: '用户', id: 3, name: "user", isopen: false, children: [
    //         {file: "userManager", link: 'user-manager', icon: 'admin_panel_settings', desc: '用户管理', id: 8},
    //         {file: "userLog", link: 'user-log', icon: 'info', desc: '用户日志', id: 11},
    //     ]
    //
    // },
    {
        icon: 'settings', label: '系统', id: 3, isopen: false, name: "sys", children: [
            // {file: "sysConfig", link: 'sys-config', icon: 'admin_panel_settings', desc: '系统设置', id: 8},
            {file: "sysTag", link: 'sys-tag', icon: 'tag', desc: '标签管理', id: 11},
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

export const tagSortOption: any = ['全部', '版本', '版本活动', '卡池', '活动']
// {label: "全部", value: "全部"},
// {label: "版本", value: "版本"},
// {label: "版本活动", value: "版本活动"},
// {label: "卡池", value: "卡池"},
// {label: "活动", value: "活动"}]