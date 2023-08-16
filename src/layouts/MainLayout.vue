<template>
    <q-layout view="hHh Lpr fFf">
        <q-header elevated class="bg-white">
            <q-toolbar>
                <q-btn
                        flat
                        dense
                        round
                        color="black"
                        icon="menu"
                        aria-label="Menu"
                        @click="toggleLeftDrawer"
                />

                <q-toolbar-title class="text-black op-font">
                    死线原神-{{ position[0] + '-' + position[1] }}
                </q-toolbar-title>

                <div>user</div>
            </q-toolbar>
        </q-header>

        <q-drawer
                v-model="leftDrawerOpen"
                show-if-above
                bordered
        >
            <q-list>
                <Aside/>
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view/>
        </q-page-container>

    </q-layout>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import {menu} from "components/models";
import {useRouter} from "vue-router/dist/vue-router";
import Aside from "components/Aside.vue";

const $router = useRouter()
//从其他文件获取的菜单
let menus = ref(menu)
let position: any = ref([])


watch(() => $router.currentRoute.value.path, (newValue, oldValue) => {
    if ($router.currentRoute.value.path != '/') {
        position.value = findTitle()
    }
    // console.log(positions)
}, {immediate: true})

function findTitle() {
    let position = []
    for (let i = 0; i < menus.value.length; i++) {
        for (let j = 0; j < menus.value[i].children.length; j++) {
            if (menus.value[i].children[j].link === $router.currentRoute.value.path.replace("/", '')) {//匹配当前数据
                position[0] = menus.value[i].label//获取一级菜单
                position[1] = menus.value[i].children[j].desc//获取二级菜单
                return position
            }
        }
    }
}

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
