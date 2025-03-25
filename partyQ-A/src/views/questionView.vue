<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import router from '@/router';

const question = ref('');
const options = ref([]);
const correctAnswer = ref('');
const selectedOption = ref(null);
const isSubmitted = ref(false);

function fetchQuestion() {
    axios.get()
        .then((response) => {
            // question.value = response.question;
            // options.value = response.options;
            // correctAnswer.value = response.correctAnswer;

            // // 模拟数据（用于测试）
            question.value = '马王堆汉墓是西汉初期长沙国丞相、第一代轪侯利苍及其妻子辛追、儿子利豨3座墓葬的统称，皆为____木椁墓，出土帛书、帛画、竹简、纺织品、漆器、金属器等数千件珍贵文物。';
            // options.value = '[A. 土坑, B. 石坑]';
            correctAnswer.value = 'A'
        })
        .catch((error) => {
            console.error('获取数据失败:', error);
        })
}

const selectOption = (index) => {
    selectedOption.value = index;
};

const submitAnswer = () => {
    isSubmitted.value = true;
};

const isCorrect = (index) => {
    return isSubmitted.value && index === selectedOption.value && index === correctAnswer.value;
};

const isIncorrect = (index) => {
    return isSubmitted.value && index === selectedOption.value && index !== correctAnswer.value;
};

onMounted(() => {
    fetchQuestion();
});
</script>

<template>

    <!-- 返回键 -->
    <div class="arrow" @click="() => { router.push('/homepage') }">
        <img src="../assets/箭头.png" alt="" style="width: 20px;height: 40px;">
    </div>

    <!-- 答题 -->
    <div class="quiz-container">
        <div class="question">
            <p>{{ question }}</p>
        </div>
        <div class="options">
            <div v-for="(option, index) in options" :key="index"
                :class="['option', { selected: selectedOption === index, correct: isCorrect(index), incorrect: isIncorrect(index) }]"
                @click="selectOption(index)">
                {{ option }}
            </div>
        </div>
        <button @click="submitAnswer" :disabled="selectedOption === null">提交</button>
    </div>
</template>

<style scoped>
.arrow {
    float: left;
    margin: 15px;
}

.quiz-container {
    width: 80%;
    height: auto;
    margin: 0 auto;
    padding: 20px;
    background-color: #c6fba5;
}

.question {
    margin-bottom: 20px;
}

.options {
    margin-bottom: 20px;
}

.option {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    cursor: pointer;
}

.option.selected {
    background-color: #e6f3ff;
    border-color: #3399ff;
}

.option.correct {
    background-color: #e6ffe6;
    border-color: #33cc33;
}

.option.incorrect {
    background-color: #ffe6e6;
    border-color: #cc3333;
}

button {
    padding: 10px 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    cursor: pointer;
}

button:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
}
</style>