<template>
    <div class="header">
        <div class="nav-container">
            <router-link to="/" class="logo"><span class="xiaoju">小鞠</span>的绘画实验室</router-link>

            <img src="../image/menu.svg" alt="" class="open" @click="openMenu">

            <div :class="['nav', { 'menu-btn': isMenuOpen }]">
                <img src="../image/exit.svg" alt="" class="exit" @click="closeMenu">
                <div class="left">
                    <router-link to="/" class="home current">主页</router-link>
                    <router-link to="/function" class="function">功能</router-link>
                    <router-link to="/" class="price">价格</router-link>
                </div>
                <div class="right">
                    <router-link to="/" class="contact">联系我们</router-link>
                    <router-link to="/" class="learn-more">了解更多</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false); // 控制 menu-btn 的状态

function openMenu() {
    isMenuOpen.value = true;
}

function closeMenu() {
    isMenuOpen.value = false;
}
</script>

<style>
@import url("../css/Mainindex.css");
</style>