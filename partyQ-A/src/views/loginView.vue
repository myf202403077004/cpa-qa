<script setup>
import Login from "@/components/login.vue";
</script>

<template>
    <div class="imgDiv"></div>
    <div class="log">
        <Login />
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
    z-index: -10000;
    background-image: url('../assets/Frame418.png'), url('../assets/Frame417.png');
    background-size: 390px 402px, 390px 455px;
    background-position: top, bottom;
    background-attachment: scroll, scroll;
    background-repeat: no-repeat, no-repeat;
}

.log {
    position: relative;
    display: flex;
    justify-content: center;
    /* 水平居中 */
    /* 可选：垂直居中 */
    align-items: center;
}
</style>