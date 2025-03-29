<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import router from '@/router';

const selectedOption = ref(null);
const isSubmitted = ref(false);

const questions = ref([]);

function fetchQuestion() {
    axios.get('/api/questions')
        .then((response) => {
            // questions.value = response.data.questions;

            // 模拟数据（用于测试）
            questions.value = [
                {
                    question: '马王堆汉墓是西汉初期长沙国丞相、第一代轪侯利苍及其妻子辛追的墓葬。',
                    options: {
                        A: '选项A',
                        B: '选项B',
                        C: '选项C',
                        D: '选项D'
                    },
                    correctAnswer: 0,
                }
            ];
            loading.value = false;
        })
        .catch((error) => {
            console.error('获取数据失败:', error);
            loading.value = false;
        })
}

//识别选择的选项
const selectOption = (index) => {
    selectedOption.value = index;
};

//点击按钮提交答案
const submitAnswer = () => {
    if (selectedOption.value !== null) {
        isSubmitted.value = true;
    }
};

//判断对错
const determineCorrectness = () => {
    if (selectedOption.value !== null) {
        return selectedOption.value === questions.value[0].correctAnswer;
    }
    return false;
};

//对的显示绿色，错的显示红色
const getOptionClass = (index) => {
    if (isSubmitted.value) {
        if (selectedOption.value === index) {
            return determineCorrectness() ? 'correct' : 'wrong';
        }
    }
    return selectedOption.value === index ? 'option selected' : 'option';
};

onMounted(() => {
    fetchQuestion();
});
</script>

<template>
    <div class="bcimg"></div>

    <!-- 返回键 -->
    <div class="arrow">
        <img @click="() => { router.push('/homepage') }" src="../assets/箭头.png" alt=""
            style="width: 30px;height: 50px;">
        <button @click="submitAnswer">提交</button>
    </div>

    <!-- 答题 -->
    <!-- 据ai所答：出现 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'question') 错误是因为在数据加载完成之前，
     questions 数组还没有被赋值，导致尝试访问 questions[0].question 时出现了 undefined 错误。
     为了解决这个问题，我们需要在模板中添加一个条件判断，确保在数据加载完成后再进行渲染。 -->
    <div class="main">
        <div class="quiz-container">
            <div v-if="loading" class="loading">
                加载中...
            </div>
            <div v-else class="description">
                <h3>单选题</h3>
                <h3>{{ currentQuestionIndex + 1 }}/{{ questions.length }}</h3>
                <!-- 显示题目数量1/n -->
            </div>
            <div v-if="!loading" class="question">
                {{ questions[currentQuestionIndex].question }}
            </div>
            <div v-if="!loading" class="options">
                <div v-for="(option, key, index) in questions[currentQuestionIndex].options" :key="key"
                    :class="['option', { selected: selectedOption === index }, getOptionClass(index)]"
                    @click="selectOption(index)">
                    {{ key }}. {{ option }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bcimg {
    position: relative;
    width: auto;
    height: 932px;
    background-size: 430px 932px;
    z-index: -1;
    background-image: url(../assets/qt.png);
    background-position: top;
    background-attachment: scroll;
    background-repeat: no-repeat;
}

.arrow {
    z-index: 0;
    width: 100%;
    height: auto;
    position: absolute;
    top: 1rem;
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
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.158);
    box-sizing: border-box;
    position: absolute;
    top: 15rem;
    border-radius: 10px;
    background-color: #fff5f56d;
}

.description {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(88, 88, 88);
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
    border: 1px solid rgba(88, 88, 88, 0.373);
    cursor: pointer;
    border-radius: 5px;
}

.option.selected {
    background-color: rgba(255, 255, 255, 0.603);
}

.option.correct {
    background-color: #e6ffe6;
    color: #33cc33;
}

.option.wrong {
    background-color: rgba(252, 170, 170, 0.805);
    color: #ec0404;
}
</style>