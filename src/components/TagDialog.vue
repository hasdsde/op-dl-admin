<template>
    <q-card class="my-card  ">
        <q-card-section>
            <div class="text-h6">修改标签</div>
            <div></div>
            <div class="row">
                <div class="col q-pr-md">
                    <q-select filled dense v-model="tagSort" :options="tagSortOption" label="标签类型"/>
                </div>
                <div class="col">
                    <q-btn color="primary" label="搜索"/>
                </div>
            </div>
        </q-card-section>

        <q-card-section style="width: 500px">
            <q-checkbox v-model="right" label="Label on Right"/>
            <q-checkbox v-model="right" label="Label on Right"/>
            <q-checkbox v-model="right" label="Label on Right"/>
            <q-checkbox v-model="right" label="Label on Right"/>
        </q-card-section>

        <q-separator dark/>


        <q-card-section class="text-primary">

            <div class="text-right">
                <q-btn color="primary" class="text-right" label="关闭" flat v-close-popup/>
                <!--                <q-btn color="primary" class="text-right" label="提交" v-close-popup @click="handleSubmit"/>-->
            </div>
        </q-card-section>
    </q-card>
</template>

<script lang="ts" setup>
import {tagSortOption} from "components/models";
import {ref} from "vue";
import {api} from "boot/axios";

const props = defineProps(['tagData', 'title', 'link']);
const tagSort = ref(props.title)
const tags = ref([])

getTags()

//获取全部标签
function getTags() {
    api.get("/tag?currentPage=1&pageSize=50&sort=" + props.link).then((res: any) => {
        console.log(res)
    })
}

function getCheckedTags() {
    
}
</script>

<style scoped>

</style>

