<script setup>
import Login from "@/components/login.vue";
</script>

<template>
    <Login />

    <div class="imgDiv">
        <img class="imgStyle" src="../assets/Frame 418.png" alt="">
        <img class="picStyle" src="../assets/Frame 417.png" alt="">
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
</style>