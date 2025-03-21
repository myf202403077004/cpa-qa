<script setup>
import tab from '@/components/tab.vue';
</script>

<template>
    <tab />
    <div class="imgDiv">
        <img class="imgStyle" src="../assets/Frame 418.png" alt="">
        <img class="picStyle" src="../assets/Frame 417.png" alt="">
    </div>
    <div class="btn">
        <div class="option">
            <button class="button-container" @click="() => $router.push('/question')">开始答题</button>
            <br>
            <button class="button-container" @click="() => $router.push('/user')">个人中心</button>
        </div>
    </div>
</template>

<style>
body {
    margin: 0;
}

.imgDiv {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    margin: 0;
    padding: 0;
    display: block;
}

.imgStyle {
    display: block;
    width: 100%;
    height: 45%;
    margin: 0;
    padding: 0;
}

.picStyle {
    display: block;
    width: 100%;
    height: 55%;
}

.btn{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    position: absolute; /* 添加定位属性 */
    bottom: 50px;
}

.option{
    width: 120px;
    height: auto;
    display: block;
}

.button-container{
    margin: 20px;
    padding: 10px;
}

.button-container:hover {
    background-color: #fa1414c5;
    color: #ffffff;
    box-shadow: 4px 4px #000;
}
</style>