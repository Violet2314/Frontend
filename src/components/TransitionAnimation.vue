<template>
    <div class="loading">
        <div class="logo-container">
            <img src="../assets/404team.png" alt="Logo" class="logo" />
        </div>
        <div class="brush-mask"></div>
    </div>
</template>

<script setup>
import { defineProps, defineExpose } from 'vue';

const props = defineProps({
    checkLoading: {
        type: Function,
        required: true
    }
});

const inLoading = (next) => {
    const container = document.querySelector(".loading");
    const mask = document.querySelector(".brush-mask");
    const logo = document.querySelector(".logo-container");
    
    container.style.display = "block";
    logo.style.opacity = "0";
    mask.style.left = "100%";
    
    setTimeout(() => {
        mask.style.left = "-30vw";
    }, 50);

    setTimeout(() => {
        logo.style.opacity = "1";
    }, 500);

    setTimeout(() => {
        next();
        props.checkLoading();
    }, 1000);
};

const outLoading = () => {
    const mask = document.querySelector(".brush-mask");
    const logo = document.querySelector(".logo-container");
    
    mask.style.left = "100%";
    setTimeout(() => {
        logo.style.opacity = "0";
    },300);
    setTimeout(() => {
        const container = document.querySelector(".loading");
        container.style.display = "none";
    }, 1000);
};

defineExpose({
    inLoading,
    outLoading,
});
</script>

<style scoped>
.loading {
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    display: none;
}

.logo-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.logo {
    max-width: 200px;
    height: auto;
}

.brush-mask {
    position: absolute;
    top: 0;
    left: 100%;
    width: 140vw;
    height: 100%;
    background-color: #469ce5;
    transition: left 1s ease-in-out;
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
}
</style>