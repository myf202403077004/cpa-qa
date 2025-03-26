<script setup>
import Tab from '@/components/tab.vue'
import { ref,onMounted } from 'vue';
import axios from 'axios';

function fetchAllQA() {
    axios.get('')
        .then((response) => {
            if (response.data && response.data.tabs) {
                tabs.value = response.data.tabs;
            } else {
                console.error('响应数据格式不正确');
            }
        })
        .catch((error) => {
            console.error('获取数据失败:', error);
        })
};

onMounted(() => {
    fetchAllQA();
});

const activeTab = ref('Tab1');

const tabs = ref([
    { id: 'Tab1', name: '所有问答', content: { title: '主炮射击技巧', status: 1, questionUnit: '党委', startTime: '1月2日12：00', endTime: '1月5日12：00', }, },
    { id: 'Tab2', name: '已完成问答', content: { title: '内容2', status: 2, questionUnit: '党委', startTime: '', endTime: '' } },
    { id: 'Tab3', name: '往期问答', content: { title: '内容3', status: 1, questionUnit: '党委', startTime: '', endTime: '' } },
]);

const openTab = (tabId) => {
    activeTab.value = tabId;
};

const getStatusText = (status) => {
    return status === 1 ? '未完成' : '已完成';
};
</script>

<template>
    <Tab />

    <!-- 标签栏 -->
    <div class="guide">
        <ul>
            <li v-for="(tab, index) in tabs" :key="index" :class="['tab-link', { active: activeTab === tab.id }]"
                @click="openTab(tab.id)">{{ tab.name }}
            </li>
        </ul>
    </div>

    <!-- 具体问题 -->
    <!-- class的动态绑定，一个静态的，另一个“active”，即数组语法和对象语法结合。如果写成tabs和question两个数组，而tabs数组要在两个template(俩个v-for)都用，但是一个v-for只能对应一个数组，那就写成一个数组里，里面套大括号 -->
    <div v-for="(tab, index) in tabs" :key="index" :id="tab.id"
        :class="['tab-content', { active: activeTab === tab.id }]">
        <div class="present">
            <div id="first-line">
                <p id="name">问答名称: {{ tab.content.title }}</p>
                <p :class="tab.content.status === 1 ? 'status-1' : 'status-2'"> {{ getStatusText(tab.content.status) }}
                </p>
            </div>
            <!-- 状态绑定一个三元运算符，用来展示未完成和已完成，此处响应式变量为一个自定义函数名。 -->
            <!-- 要想实现一红一绿两个色，在css里写，那就需要两个class。v-if可以，决定渲染style与否，class里直接写三元运算符最后输出两个 -->
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
.guide {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
}

.guide ul {
    width: 100%;
    height: 40px;
    list-style: none;
    display: flex;
    position: relative;
    padding: 0;
    margin: 0;
}

.guide ul li {
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
    background-color: #ffffff;
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

.present {
    width: 90%;
    height: 125px;
    border: 1px solid rgba(228, 228, 228, 1);
    font-size: 14px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 10px;
}

#first-line {
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: space-between;
}

#name {
    position: relative;
    top: 5px;
}

#second-line {
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: space-between;
}

#statusP {
    width: 48px;
    height: 27px;
    background-color: aqua;
}

.status-1 {
    background-color: rgb(240, 249, 235);
    padding: 5px 10px;
    border-radius: 15px;
    color: rgb(103, 194, 58, 1);
}

.status-2 {
    background-color: rgba(254, 240, 240);
    color: rgba(245, 108, 108, 1);
    padding: 5px 10px;
    border-radius: 15px;
}
</style>
