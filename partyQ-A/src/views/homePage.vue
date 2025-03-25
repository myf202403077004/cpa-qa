<script setup>
import tab from '@/components/tab.vue';
</script>

<template>
    <tab />
    <div class="imgDiv"></div>
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
    position: relative;
    width: auto;
    height: 844px;
    left: 0;
    top: 0;
    z-index: -1;
    background-image: url('../assets/Frame418.png'), url('../assets/Frame417.png');
    background-size: 390px 402px, 390px 455px;
    background-position: top, bottom;
    background-attachment: scroll, scroll;
    background-repeat: no-repeat, no-repeat;
}

.btn {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    position: absolute;
    /* 添加定位属性 */
    top: 602px;
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
}
</style>