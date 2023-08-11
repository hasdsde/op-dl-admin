<template>
    <div v-for="num in menus.length">
        <q-expansion-item class="op-font text-brown text-body1" v-model="menus[num - 1].isopen"
                          :icon="menus[num - 1].icon"
                          :label="menus[num - 1].label"
                          @click="handleOpen()" expand-separator>
            <q-card v-for="child in menus[num - 1].children">
                <div class="q-pa-md" style="max-width: 500px">
                    <q-list bordered padding class="rounded-borders text-primary" style="padding: 4px 0">
                        <q-item clickable v-ripple :to="child.link"
                                v-if="child.desc !== 'null'"
                                :class="link === child.link ? 'my-menu-link' : 'q-expansion-default'">
                            <q-item-section avatar>
                                <!--                                <q-icon :name="child.icon" class="text-black"/>-->
                            </q-item-section>
                            <q-item-section class="text-black  op-font no-padding text-body2">
                                <div :class="link === child.link ?'text-white':''">
                                    {{
                                    child.desc
                                    }}
                                </div>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </div>
            </q-card>
        </q-expansion-item>
    </div>
</template>
<script setup>
import {ref, watch} from 'vue'
import {useRouter} from "vue-router/dist/vue-router";
import {menu} from "src/components/models";


let menus = ref(menu)//从其他文件获取的菜单数据
let link = ref()
let $router = useRouter()
//当系统发现当前路由改变时，就替换到link中，高亮就生效了
watch(() => $router.currentRoute.value.path, (newValue, oldValue) => {
    link.value = $router.currentRoute.value.path.replace("/", '')
}, {immediate: true})


//储存菜单展开或关闭数据
if (!localStorage.getItem('menus')) {
    localStorage.setItem('menus', JSON.stringify(menus))
} else {
    //@ts-ignore
    menus.value = JSON.parse(localStorage.getItem('menus'))._value
}

//点击时修改展开数据
function handleOpen() {
    localStorage.setItem('menus', JSON.stringify(menus))
}
</script>

<style scoped>
.q-router-link--active {
    color: rgb(25, 118, 210);
}

.q-pa-md {
    padding: 0;
}

.q-list--bordered {
    border: 0px;
}

.my-menu-link {
    color: white;
    background: #F2C037;
}

.q-expansion-default {
    color: rgb(25, 118, 210)
}

.q-expansion-active {
    padding: 0 !important;
    margin: 4px 0;
    color: white !important;
    background-color: #F2C037;
}
</style>
