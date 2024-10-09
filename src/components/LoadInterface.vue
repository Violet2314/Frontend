<template>
    <div class="Load" v-if="show">
        <div class="notfound-team" ref="notfoundteam">
            <img src="../assets/404team.png" alt="" class="glitch">
            <FaultFont :content="'Team 404 never breaks a promise'" ref="faultFontRef"/>
        </div>
        <div class="startwaves" id="downout" ref="downwave" @animationend="hideDownwave">
            <div class="waves">
                <img src="../image/wave-1.svg" alt="" ref="image1">
                <img src="../image/wave-3.svg" alt="" ref="image2">
                <img src="../image/wave-4.svg" alt="" ref="image3">
                <img src="../image/wave-5.svg" id="shape" alt="" ref="image4">
            </div>
        </div>
        <div class="context" ref="context" @animationend="hideDowncontext">
            <h1>Memento Mori</h1>
            <p>Remember, You Will Die.<br />Time never waits.<br />It delivers all equally to the same end.</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';
import FaultFont from './FaultFont.vue';
const downwave = ref(null);
const context = ref(null);
const image1 = ref(null);
const image2 = ref(null);
const image3 = ref(null);
const image4 = ref(null);
const notfoundteam = ref(null);

// 定义隐藏元素的方法
const hideDownwave = () => {
    if (downwave.value) {
        downwave.value.style.display = 'none';
    }
};

const hideDowncontext = () => {
    if(context.value){
        context.value.style.display = 'none';
    }
};

const faultFontRef = ref(null);

const triggerFault = () => {
    if (faultFontRef.value) {
        faultFontRef.value.fault(); // 调用 fault 方法
    }
};

defineProps({
    show: {
        type: Boolean,
        required: true,
    },
});
onMounted(() => {
    const interval = setInterval(() => {
        triggerFault();
    }, 3000);

    onUnmounted(() => {
        clearInterval(interval);
    });
});
</script>

<style>
@import url("../css/LoadInterface.css");
</style>