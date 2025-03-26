<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import router from '@/router';

const question = ref('马王堆汉墓是西汉初期长沙国丞相、第一代轪侯利苍及其妻子辛追、儿子利豨3座墓葬的统称，皆为____木椁墓，出土帛书、帛画、竹简、纺织品、漆器、金属器等数千件珍贵文物。');
const options = ref([]);
const correctAnswer = ref(0);
const selectedOption = ref(null);
const isSubmitted = ref(false);

// const question = ref([
//     { id: 'Tab1', name: '所有问答', content: { title: '主炮射击技巧', status: 1, questionUnit: '党委', startTime: '1月2日12：00', endTime: '1月5日12：00', }, },
//     { id: 'Tab2', name: '已完成问答', content: { title: '内容2', status: 2, questionUnit: '党委', startTime: '', endTime: '' } },
//     { id: 'Tab3', name: '往期问答', content: { title: '内容3', status: 1, questionUnit: '党委', startTime: '', endTime: '' } },
// ]);

function fetchQuestion() {
    axios.get()
        .then((response) => {
            // question.value = response.question;
            // options.value = response.options;
            // correctAnswer.value = response.correctAnswer;

            // 模拟数据（用于测试）
            question.value = '马王堆汉墓是西汉初期长沙国丞相、第一代轪侯利苍及其妻子辛追、儿子利豨3座墓葬的统称，皆为____木椁墓，出土帛书、帛画、竹简、纺织品、漆器、金属器等数千件珍贵文物。';
            options.value = [{ A: '土坑', B: '11', C: '22', D: '33' }];
            correctAnswer.value = 0
        })
        .catch((error) => {
            console.error('获取数据失败:', error);
        })
}

const selectOption = (index) => {
    selectedOption.value = index;
};

const submitAnswer = () => {
    if (selectedOption.value !== null) {
        isSubmitted.value = true;
    }
};

const determineCorrectness = () => {
    if (selectedOption.value !== null) {
        return selectedOption.value === correctAnswer.value;
    }
    return false;
};

// 方法：获取选项的类名
const getOptionClass = (index) => {
    if (isSubmitted.value) {
        if (selectedOption.value === index) {
            return determineCorrectness() ? 'correct' : 'wrong';
        }
    }
    return '';
};

onMounted(() => {
    fetchQuestion();
});
</script>

<template>

    <!-- 返回键 -->
    <div class="arrow" @click="() => { router.push('/homepage') }">
        <img src="../assets/箭头.png" alt="" style="width: 20px;height: 40px;background-color: black;">

    </div>
    <button @click="submitAnswer">提交</button>
    <!-- 答题 -->
    <div class="main">
        <div class="quiz-container">
            <div class="description">
                <h3>单选题</h3>
                <h3>1/5</h3>
            </div>
            <div class="question">
                {{ question }}
            </div>
            <div class="options">
                <div v-for="(option, key, index) in options[0]" :key="key"
                    :class="['option', { selected: selectedOption === index }, getOptionClass(index)]"
                    @click="selectOption(index)">
                    {{ key }}. {{ option }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.arrow {
    width: 100%;
    height: auto;
}

.arrow img {
    float: left;
    margin: 15px;
}

button {
    float: right;
    margin: 15px;
    padding: 10px 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
}

button:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
}

.main {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}

.quiz-container {
    width: 90%;
    height: auto;
    margin: 0 auto;
    padding: 0 20px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    position: absolute;
    top: 15rem;
    border: 1px solid black;
    border-radius: 10px;
}

.description {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
    padding: 10px 0;
    margin-bottom: 20px;
}

.question {
    margin-bottom: 20px;
    font-size: large;
}

.options {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}

.option {
    width: 90%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    cursor: pointer;
    border-radius: 5px;
}

.option.selected {
    background-color: rgb(249, 245, 242);
}

.option.correct {
    background-color: #e6ffe6;
    color: #33cc33;
}

.option.wrong {
    background-color: #ffe6e6;
    color: #cc3333;
}
</style>