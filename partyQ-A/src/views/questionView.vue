<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import router from '@/router';


const selectedOption = ref(null);
const isSubmitted = ref(false);
const questions = ref([{
    question: '',
    options: {
        A: '',
        B: '',
        C: '',
        D: '',
    },
    correctAnswer: 0,
}]);
let currentQuestionIndex = 0
const length = ref(5)

function fetchQuestion() {
    axios.get('/api/questions')
        .then((response) => {
            // questions.value = response.data.questions;
            // 模拟数据（用于测试）
            questions.value = [
                {
                    question: '马王堆汉墓是西汉初期长沙国丞相、第一代轪侯利苍及其妻子辛追、儿子利豨3座墓葬的统称，皆为______木椁墓，出土帛书、帛画、竹简、纺织品、漆器、金属器等数千件珍贵文物。',
                    options: {
                        A: '土坑',
                        B: '11',
                        C: '22',
                        D: '33',
                    },
                    correctAnswer: 0,
                    length: length.value
                }
            ];
        })
        .catch((error) => {

            console.error('获取数据失败:', error);

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
        nextButtonDisplay.value = true;
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


// 定义响应式数据
const isOverlayVisible = ref(false);
const isDialogVisible = ref(false);
const nextButtonDisplay = ref(false)

// 函数：打开弹窗
const openDialog = () => {
    isOverlayVisible.value = true;
    isDialogVisible.value = true;
};

// 函数：退出
const exit = () => {
    isOverlayVisible.value = false;
    isDialogVisible.value = false;
    //剩下的题全部判断错误，并提交到后端
};

// 函数：继续答题
const continueAnswer = () => {
    isOverlayVisible.value = false;
    isDialogVisible.value = false;
    router.push('/homepage');
};
</script>

<template>
    <div class="bcimg"></div>

    <!-- 返回键 -->
    <div class="arrow">
        <img @click="openDialog" src="../assets/箭头.png" alt="" style="width: 30px;height: 50px;"
            class="clickable-image">
        <button @click="submitAnswer">提交</button>
    </div>

    <!-- 下一题 -->
    <div class="nextDiv">
        <button @click="handleNextQ" class="nextQ" :style="{ display: nextButtonDisplay ? 'block' : 'none' }">下一题</button>
    </div>
    

        <!-- 遮罩层 -->
    <div class="overlay" :style="{ display: isOverlayVisible ? 'block' : 'none' }"></div>

        <!-- 确认弹窗 -->
    <div class="confirm-dialog" :style="{ display: isDialogVisible ? 'block' : 'none' }">
        <div class="dialog-title">确定要退出答题？</div>
        <div class="dialog-message">如果退出将会结束此次答题，后面的题目会算全错</div>
        <div class="dialog-buttons">
                <button class="dialog-button exit" @click="exit">取消</button>
                <button class="dialog-button continue" @click="continueAnswer">继续</button>
        </div>
    </div>

    <!-- 答题 -->
    <div class="main">
        <div class="quiz-container">
            <div class="description">
                <h3>单选题</h3>
                <h3>{{ currentQuestionIndex + 1 }}/{{ length }}</h3>
            </div>
            <div class="question">
                {{ questions[currentQuestionIndex].question }}
            </div>
            <div class="options">
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

.nextDiv {
    z-index: 10;
    width: 100%;
    height: auto;
    position: absolute;
    top: 1rem;
}

.nextQ{
    float: right;
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

/* 遮罩层样式 */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.545);
    display: none;
}

/* 弹窗样式 */
.confirm-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 4px;
    width: 80%;
    text-align: center;
    display: none;
    z-index: 10;
}
 /* 标题样式 */
 .dialog-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
}

/* 提示信息样式 */
.dialog-message {
    background: #f0f0f0;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 13px;
}

/* 按钮样式 */
.dialog-button {
    padding: 8px 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.dialog-button.exit {
    background: white;
    color: #333;
}

.dialog-button.continue {
    background: #d4af37;
    color: white;
}
</style>