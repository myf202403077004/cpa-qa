<script setup>
import Login from "@/components/login.vue";
</script>

<template>
    <div class="bgimg"></div>
    <div class="log">
        <Login />
    </div>

</template>

<style>
body {
    margin: 0;
}

.bgimg {
    position: relative;
    width: auto;
    height: 932px;
    background-size: 430px 932px;
    z-index: -10000;
    background-image: url(../assets/log.png);
    
    background-position: top;
    background-attachment: scroll;
    background-repeat: no-repeat;
}

.log {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>