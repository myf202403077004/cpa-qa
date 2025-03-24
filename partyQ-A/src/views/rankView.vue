<script setup>
import Tab from '@/components/tab.vue';
import { ref } from 'vue';

const activeTab = ref('Tab1');

const tabs = ref([
    { id: 'Tab1', name: '当前排行榜' },
    { id: 'Tab2', name: '往期排行榜' },
]);

const data = ref([
    { id: 1, content: { username: '用户名', rightPropotion: '123', time: '10:00' } },
    { id: 2, content: { username: '用户名', rightPropotion: '123', time: '10:00' } },
])

const openTab = (tabId) => {
    activeTab.value = tabId
};
</script>

<template>
    <Tab />

    <div class="parent">
        <div v-for="(tab, index) in tabs" :key="index" :class="['rank-item', { active: activeTab === tab.id }]"
            @click="openTab(tab.id)">
            {{ tab.name }}
        </div>
    </div>

    <div class="mainContect">
        <div class="bar">
            <ul>
                <li>排名</li>
                <li>用户名</li>
                <li>正确率</li>
                <li>用时</li>
            </ul>
        </div>
        <div v-for="i in data" class="data">
            <div>{{ i.id }}</div>
            <div>{{ i.content.username }}</div>
            <div>{{ i.content.rightPropotion }}</div>
            <div>{{ i.content.time }}</div>
        </div>
    </div>

</template>


<style>
body {
    margin: 0;
    padding: 0;
}

.parent {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    font-size: 15px;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
}

.rank-item {
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
}

.rank-item.active {
    color: rgba(156, 12, 19, 1);
}

.mainContect {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}

.bar ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    text-align: center;
}

.bar {
    width: 100%;
    height: 40px;
    font-size: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(95, 91, 91, 0.4);
}

.bar ul li {
    line-height: 40px;
    width: 60px;
}

.data {
    width: 100%;
    height: 34px;
    line-height: 34px;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    box-sizing: border-box;
}

.data div {
    width: 60px;
    text-align: center;
}
</style>