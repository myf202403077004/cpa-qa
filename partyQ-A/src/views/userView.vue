<script setup>
import router from '@/router';
import tab from '../components/tab.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';

const id = ref('');
const partyBranch = ref('');

const fetchData = async () => {
  try {
    const response = await axios.get('/api/getUserInfo');
    id.value = response.data.id;
    partyBranch.value = response.data.partyBranch;
  } catch (error) {
    console.error('获取数据失败:', error);
  }
  // 模拟数据（用于测试）
  // 请在集成 API 后移除以下模拟数据代码
  id.value = '123456';
  partyBranch.value = '土建与水利学院XX党支部';
};

onMounted(() => {
  fetchData();
});

</script>

<template>
    <tab />
    
    <img src="../assets/箭头.png" alt="" style="width: 20px;height: 40px;" class="arrow" @click="() => {router.push('/homepage')}">

    <div class="basic">    
        <div class="information" style="font-size: 24px;">{{id}}</div>
        <div class="information" style="margin-top: 20px;font-size: 15px;">{{ partyBranch}}</div>
    </div>

    <div class="function">
        <div class="function-item">
            <img src="../assets/2 .png" alt="" style="width: 45px;height: 62px;">
        </div>
        <div class="function-item" id="mid" @click="() => {router.push('/allQA')}">
            <img src="../assets/1.png" alt="" style="width: 59px;height: 62px;">
        </div>
        <div class="function-item">
            <img src="../assets/3.png" alt="" style="width: 88px;height: 62px;">
        </div>
    </div>
</template>

<style>
body{
    margin: 0;
    padding: 0;
}

.arrow{
    float: left;
}

.basic{
    width: 100%;
    height: 135px;
    background-color: #9C0C13;
    color: #ffffff;
    margin: 0;
    padding: 40px 0 45px 0px;
}

.information{
    padding: 0 40px;
}

.function{
    width: 82%;
    height: 123px;
    position: relative;
    margin: 0 auto; /* 水平居中 */
    top: -62px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    box-shadow: 0 4px 10px #515151a2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 6%;
    padding-right: 4%;
}

.function-item{
    display: block;
    align-items: center;
    line-height: 150px;
    display: flex;
    align-items: center; 
}

#mid{
    /* flex: 0 1 auto; */
    padding-left: 25px;
}
</style>