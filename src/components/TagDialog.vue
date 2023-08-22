<template>
    <q-card class="my-card " style="min-width: 500px">
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

        <q-card-section>
            <div v-for="tag in allTags">
                <q-checkbox v-model="tag.check" :label="tag.name+' '+tag.icon"/>
            </div>
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
const allTags = ref([])
const myTags = ref([])

loadPage()

function loadPage() {
    getTags().then(() => {
        getCheckedTags()
    })

}

//获取全部标签
async function getTags() {
    api.get("/tag?currentPage=1&pageSize=100&sort=" + props.title).then((res: any) => {
        allTags.value = res.data.Data
        allTags.value.forEach((item: any) => {
            item.check = false
        })
    })
}

async function getCheckedTags() {
    api.get("/" + props.link + "-tag?currentPage=1&pageSize=100&id=" + props.tagData.num).then((res: any) => {
        myTags.value = res.data.Data
        if (myTags.value.length != 0) {
            myTags.value.forEach((mytag: any) => {
                allTags.value.forEach((alltag: any) => {
                    if (mytag.tagId.toString() == alltag.id.toString()) {
                        alltag.check = true
                    }
                })
            });
        }
    })
}
</script>

<style scoped>

</style>

