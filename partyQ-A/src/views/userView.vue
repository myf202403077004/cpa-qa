<script setup>
import router from '@/router';
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 基础api
const basurl = 'https://';
const id = ref('');
const partyBranch = ref('');

function fetchData() {
    axios.get()
        .then((response) => {
            // id.value=response.data.id;
            // partyBranch.value = response.data.partyBranch;

            // // 模拟数据（用于测试）
            id.value = '123456';
            partyBranch.value = '土建与水利学院XX党支部';
        })
        .catch((error) => {
            console.error('获取数据失败:', error);
        })
}
// basurl+'/api/'填入get后的括号里

onMounted(() => {
    fetchData();
});

</script>

<template>
    <!-- tab栏 -->
    <div class="tab">
        <img src="../assets/箭头.png" alt="" style="width: 20px;height: 40px;" class="arrow"
            @click="() => { router.push('/homepage') }">
        <img src="../assets/xx.png" alt="">
    </div>

    <!-- 个人信息展示 -->
    <div class="basic">
        <div class="information" style="font-size: 24px;">{{ id }}</div>
        <div class="information" style="margin-top: 20px;font-size: 15px;">{{ partyBranch }}</div>
    </div>

    <!-- 三个功能 -->
    <div class="function">
        <div class="function-item" @click="() => { router.push('/rank') }">
            <img src="../assets/1.png" alt="">
            <div style="font-size: 15px;">排行榜</div>
        </div>
        <div class="function-item" id="mid" @click="() => { router.push('/allQA') }">
            <img src="../assets/2.png" alt="">
            <div style="font-size: 15px;">所有问答</div>
        </div>
        <div class="function-item">
            <img src="../assets/3.png" alt="">
            <div style="font-size: 15px;">更改个人信息</div>
        </div>
    </div>
</template>

<style>
body {
    margin: 0;
    padding: 0;
}

.tab {
    width: 100%;
    height: 61px;
    background-color: #9C0C13;
    display: flex;
    justify-content: space-between;
    padding: 0 22px;
    box-sizing: border-box;
}

.tab img {
    width: 105px;
    height: 32px;
    line-height: 61px;
    position: relative;
    top: 17px;
    left: 9px;
}

.arrow {
    float: left;
}

.basic {
    width: 100%;
    height: 135px;
    background-color: #9C0C13;
    color: #ffffff;
    margin: 0;
    padding: 40px 0 45px 0px;
}

.information {
    padding: 0 40px;
}

.function {
    width: 82%;
    height: 123px;
    position: relative;
    margin: 0 auto;
    /* 水平居中 */
    top: -62px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    box-shadow: 0 4px 10px #515151a2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
}

.function-item img {
    width: 40px;
    height: 40px;
}

.function-item {
    width: 90px;
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>