<template>
    <div>
        <LoadInterface :show="isFirstLoad" ref="loadInterfaceRef" />
        <Loading ref="loadingRef" :checkLoading="checkLoading" v-show="loadd" />
        <!-- 使用 router-view 作为占位符来切换不同路由的组件 -->
        <!-- 设置缓存 -->
        <router-view v-slot="{Component,route}">
            <keep-alive include="FunctionPage">
                <component
                    :is="Component"
                    :key="route.path"
                />
            </keep-alive>
        </router-view>
    </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import Loading from './components/TransitionAnimation.vue';
import LoadInterface from './components/LoadInterface.vue';
import { isFirstLoad } from './router'; // 导入 isFirstLoad
import { useRouter } from 'vue-router';

const loadd = ref(false);
const loadingRef = ref(null);
const loadInterfaceRef = ref(null);
const router = useRouter();

const checkLoading = () => {
    const timer = setInterval(() => {
        if (document.readyState === 'complete') {
            clearInterval(timer);
            loadingRef.value.outLoading();
        }
    }, 300);
};

onMounted(() => {
    checkLoading();
    router.beforeEach((to, from, next) => {
        loadingRef.value.inLoading(next);
    });

    window.addEventListener('load', () => {
        nextTick(() => {
            if (loadInterfaceRef.value && loadInterfaceRef.value.$refs) {
                const { downwave, context, image1, image2, image3, image4, notfoundteam } = loadInterfaceRef.value.$refs;
                if (downwave && context) {
                    // 播放动画
                    downwave.style.animation = 'down 3s 1s ease-out forwards';
                    context.style.animation = 'out 1.5s 2.5s ease-out forwards';
                    notfoundteam.style.animation = 'out 1.5s ease-out forwards'
                    // 添加图片的动画
                    image1.style.animation = 'move-1 5s infinite';
                    image2.style.animation = 'move-2 4s infinite';
                    image3.style.animation = 'move-3 3.5s infinite';
                    image4.style.animation = 'move-4 3s infinite';
                }
            }
            setTimeout(() => {
                loadd.value = true;
            }, 4500);
        });
    });
})
</script>

<style>
* {
    outline: none;
    /* 禁用蓝色框 */
    -webkit-tap-highlight-color: transparent;
    /* 禁用点击高亮效果 */
}
</style>