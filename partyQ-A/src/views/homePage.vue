<script setup>
import tab from '@/components/tab.vue';
</script>

<template>
    <div class="imgDiv"></div>
    <div class="xx"><img src="../assets/xx.png" alt=""></div>
    <h1>党建问答</h1>
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

.xx{
    width:100%;
    height: auto;
    
    position: absolute;
    top: 0;
}

.xx img{
    width: 111px;
    height: 38px;
    padding: 9px;
    float: right;
}

h1{
    font-size: 48px;
    position: absolute;
    top: 80px;
    color: rgba(255, 255, 255, 1);
    margin-left: 20px;
}

.imgDiv {
    position: relative;
    width: auto;
    height: 932px;
    background-size: 430px 932px;
    z-index: -1;
    background-image: url(../assets/hmpg.png);
    background-position: top;
    background-attachment: scroll;
    background-repeat: no-repeat;
}

.btn {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    position: absolute;
    /* 添加定位属性 */
    top: 615px;
    margin: 0 auto;
}

.option {
    width: 158px;
    height: auto;
    display: block;
}

.button-container {
    margin: 20px;
    padding: 10px 30px;
    border-radius: 20px;
    width: 138px;
    height: 52px;
    border: 0;
    font-size: 16px;
    font-weight: bold;
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.5);
}
</style>