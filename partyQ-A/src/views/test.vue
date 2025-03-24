<script setup>
import tab from '@/components/tab.vue'
import { ref } from 'vue';

//所有问答/已完成/未完成的页面状态用这个响应式变量控制
// 0表示正在查看所有问答，1是已经完成，2是未完成
const current_checking = ref('0');

// 从后端获取的数据
const questions = ref([
    {
        title: '主炮射击技巧', author: '大毛', state: 1, st_time: '2025年3月1日', end_time: '2025年3月2日'
    },
    {
        title: '破交战术', author: '大毛', state: 1, st_time: '2025年3月1日', end_time: '2025年3月2日'
    },
    {
        title: '自爆卡车教学', author: '大毛', state: 2, st_time: '2025年3月1日', end_time: '2025年3月2日'
    },
    {
        title: '公海跳舞', author: '大毛', state: 2, st_time: '2025年3月1日', end_time: '2025年3月2日'
    },
]);
</script>

<template>
    <tab />

    <div class="guide">
        <!-- 点击切换current_checking的值，实现变色和状态切换 -->
        <!-- @click实现在点击时通过修改current_checking的值切换状态 -->
        <!-- 用一个动态绑定的class(tab_link_active)实现三种状态下对应的文字变色 -->
        <div class="tab_link" @click="current_checking = 0" :class="{ tab_link_active: current_checking == 0 }">所有问答
        </div>
        <div class="tab_link" @click="current_checking = 1" :class="{ tab_link_active: current_checking == 1 }">已经完成
        </div>
        <div class="tab_link" @click="current_checking = 2" :class="{ tab_link_active: current_checking == 2 }">未完成
        </div>
    </div>

    <!-- 没有和你说明的一个概念，“定义域”,这里这个i是局部变量，只能在这个v-for的标签里使用 -->
    <div v-for="i in questions">
        <!-- 这里用一个v-if对显示的内容进行筛选 -->
        <!-- 如果当前遍历的i的state和current_checking一样，那就渲染。另外，current_checking为0也渲染 -->
        <div class="present" v-if="i.state == current_checking || current_checking == 0">
            <!-- 这里删去了你的<p>标签。p是‘段落’的意思。<br>才是换行 -->
            <div id="first-line">
                <div>问答名称: {{ i.title }}</div>
                <div>状态: {{ i.state == 1 ? '已完成' : '未完成' }}</div>
            </div>
            <div id="second-line">
                出题单位: {{ i.author }}
                <div>
                    开始时间: {{ i.st_time }}<br>
                    截止时间: {{ i.end_time }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* css的class和id使用下划线而不是横杠 */
.guide {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
    display: flex;
    position: relative;
}

.tab_link {
    flex: 1;
    padding: 10px;
    text-align: center;
    border: none;
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.tab_link_active {
    background-color: #fff;
    color: rgba(156, 12, 19, 1);
}

.present {
    /* 用margin来设置 */
    box-sizing: border-box;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;

    border: 1px solid black;
    /* 字体的大小一般用rem设置 */
    font-size: 1rem;
    display: flex;
    flex-direction: column;

    /* 圆角设置 */
    padding: 1rem;
    border-radius: 1rem;
}

#first-line {
    display: flex;
    justify-content: space-between;
    /* 预留点间隙 */
    margin-bottom: 1rem;
}

#second-line {
    display: flex;
    justify-content: space-between;
}
</style>
