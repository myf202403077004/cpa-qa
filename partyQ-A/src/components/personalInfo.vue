<template>
    <div v-if="isVisible" class="popup-overlay" @click.self="closePopup">
        <div class="popup-content" @click.stop>
            <h2>请选择选项</h2>
            <div class="options">
                <div class="column">
                    <div v-for="province in provinces" :key="province">
                        <label>
                            <input type="checkbox" v-model="selectedOptions" :value="province" />
                            {{ province }}
                        </label>
                    </div>
                </div>
                <div class="column">
                    <div v-for="city in cities" :key="city">
                        <label>
                            <input type="checkbox" v-model="selectedOptions" :value="city" />
                            {{ city }}
                        </label>
                    </div>
                </div>
                <div class="column">
                    <div v-for="district in districts" :key="district">
                        <label>
                            <input type="checkbox" v-model="selectedOptions" :value="district" />
                            {{ district }}
                        </label>
                    </div>
                </div>
            </div>
            <div class="buttons">
                <button @click="closePopup">取消</button>
                <button @click="confirmSelection">确定</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'

// 定义接收的属性
const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    }
})

// 定义触发的自定义事件
const emit = defineEmits(['update:visible', 'update:selectedOptions'])

// 定义选项数据
const provinces = ref(['外国语', '医', '土建', '历史'])
const cities = ref(['24', '23', '22', '21'])
const districts = ref(['专业1', '专业2', '专业3', '专业4'])

// 选中的选项
const selectedOptions = ref([])

// 控制弹出框的显示与隐藏
const isVisible = ref(props.visible)

// 监听属性变化
// 监听 visible 属性的变化
watch(() => props.visible, (newVal) => {
    isVisible.value = newVal
})

// 关闭弹出框
const closePopup = () => {
    isVisible.value = false
    emit('update:visible', false)
}

// 确认选择
const confirmSelection = () => {
    if (selectedOptions.value.length === 3) {
        emit('update:selectedOptions', selectedOptions.value)
        closePopup()
    } else {
        alert('请选择正确个数选项')
    }
}
</script>

<style scoped>
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* 半透明背景 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.popup-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    width: 600px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.options {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.column {
    flex: 1;
    margin: 0 10px;
}

.column div {
    margin-bottom: 10px;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:first-child {
    background-color: #dc3545;
    color: #fff;
}

button:last-child {
    background-color: #28a745;
    color: #fff;
}
</style>