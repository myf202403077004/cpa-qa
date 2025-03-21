<script setup>
import tab from '@/components/tab.vue'
import { ref } from 'vue';

const activeTab = ref('Tab1');

const tabs = ref([
  { id: 'Tab1', name: '所有问答', content: { title: '内容1', description: '这是标签1的内容。' } },
  { id: 'Tab2', name: '已完成问答', content: { title: '内容2', description: '这是标签2的内容。' } },
  { id: 'Tab3', name: '往期问答', content: { title: '内容3', description: '这是标签3的内容。' } },
]);

const openTab = (tabId) => {
  activeTab.value = tabId;
};
</script>

<template>
    <tab />

    <div class="guide">
        <ul>
            <li  v-for="(tab, index) in tabs" :key="index" :class="['tab-link', { active: activeTab === tab.id }]" @click="openTab(tab.id)">{{ tab.name }}</li>
        </ul>
    </div>

    <div v-for="(tab, index) in tabs" :key="index" :id="tab.id" :class="['tab-content', { active: activeTab === tab.id }]">
        <div class="present">
            <div id="first-line">
                <p>问答名称: {{ tab.content.questionName }}</p>
                <p>状态: {{ tab.content.status }}</p>
            </div>
            <div id="second-line">
                <p>出题单位: {{ tab.content.questionUnit }}</p>
                <div>
                    <p>开始时间: {{ tab.content.startTime }}</p>
                    <p>截止时间: {{ tab.content.endTime }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.guide{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(228, 228, 228, 1);   
}

.guide ul{
    width: 100%;
    height: 40px;
    list-style: none;
    display: flex;
    position: relative;  
    padding: 0;
    margin: 0;
}

.guide ul li{
    width: 30%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px 0 20px;
    cursor: pointer;
}

.tab-link {
  flex: 1;
  padding: 10px;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.tab-link.active {
    background-color: #fff;
    color: rgba(156, 12, 19, 1);
}

.tab-content {
  display: none;
  /* 这里设置成none才行 */
  padding: 20px;
}

.tab-content.active {
    display: block;
}

.present{
    width: 90%;
    height: 125px;
    border: 1px solid black;
    margin: 0 auto;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    padding: 5px;
}

#first-line{
    width: 90%;
    height: 125px;
    display: flex;
    justify-content: space-between;
}

#second-line{
    width: 90%;
    height: 125px;
    display: flex;
    justify-content: space-between;
}
</style>

