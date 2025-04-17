<script setup>
import router from '@/router';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Rank from '@/components/rankView.vue'
import PersonalInfo from '@/components/personalInfo.vue'

// 基础api
const basurl = 'https://partyqa.rrrexyz.icu';
const name = ref('张三');
const student_id = ref('202500996677')

// 控制弹出框的显示与隐藏
const visible = ref(false)

// 存储选中的选项
const selectedFacultad = ref('外国语')
const selectedCurso = ref('24')
const selectedClase = ref('西班牙语')

// 打开弹出框
const openPopup = () => {
    visible.value = true
}
</script>

<template>
    <!-- tab栏 -->
    <div class="tab">
        <img src="../assets/箭头.png" alt="" style="width: 15px;height: 28px;" class="arrow"
            @click="() => { router.push('/homepage') }">
        <img src="../assets/xx.png" alt="">
    </div>

    <!-- 个人信息展示 -->
    <div class="basic">
        <div class="information" style="font-size: 24px;">{{ name }}</div>
        <div class="information" style="font-size: 20px;">{{ student_id }}</div>
        <div class="information" style="margin-top: 20px;font-size: 15px;">
            <div v-if="selectedFacultad && selectedCurso && selectedClase">
                <div>山东大学{{ selectedFacultad }}学院{{ selectedCurso }}级{{ selectedClase }}班党支部</div>
            </div>
        </div>
    </div>

    <!-- 两个功能 -->
    <div class="function">
        <div class="function-item" id="mid" @click="() => { router.push('/allQA') }">
            <img src="../assets/2.png" alt="">
            <div style="font-size: 15px;">所有问答</div>
        </div>
        <div class="function-item" @click="openPopup">
            <img src="../assets/3.png" alt="">
            <div style="font-size: 15px;">个人信息</div>
        </div>
    </div>

    <!-- 排行榜 -->
    <div style="position: relative;top: -50px;">
        <Rank />
    </div>

    <!-- 更改个人信息 的组件 -->
    <PersonalInfo :visible="visible" :selectedFacultad="selectedFacultad" :selectedCurso="selectedCurso"
        :selectedClase="selectedClase" @update:visible="visible = $event"
        @update:selectedFacultad="selectedFacultad = $event" @update:selectedCurso="selectedCurso = $event"
        @update:selectedClase="selectedClase = $event" />
</template>

<style scoped>
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
    font-weight: bold;
    margin: 0;
    padding: 40px 0 45px 0px;
}

.information {
    padding: 0 40px;
}

.function {
    width: 82%;
    height: 89px;
    position: relative;
    margin: 0 auto;
    /* 水平居中 */
    top: -62px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    box-shadow: 0 4px 10px #515151a2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
}

.function-item img {
    width: 30px;
    height: 30px;
}

.function-item {
    width: auto;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 13px;
    padding: 15px;
}

.popup-overlay {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.miranking {
    width: 90%;
    height: 71px;
    line-height: 71px;
    font-size: 20px;
    border-radius: 5px;
    box-shadow:
        inset 0 4px 4px rgba(0, 0, 0, 0.25),
        0 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    bottom: 10px;
    left: 50%;
    /* 将左边缘定位到视口宽度的50% */
    transform: translateX(-50%);
    /* 通过向左移动自身宽度的50%来居中 */
    display: flex;
    justify-content: space-around;
}
</style>