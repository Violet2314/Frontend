<template>
    <div class="viewbox">
        <div class="scrollbox" ref="scrollbox"> 
            <FaultFont :content="'Absolute aesthetic'" class="aes" @click="navigateToPage('/')" />
            <InfiniteSliding />
        </div>
    </div>
</template>

<script setup>
import FaultFont from '@/components/FaultFont.vue';
import InfiniteSliding from '@/components/InfiniteSliding.vue';
import { ref, onMounted, onUnmounted, defineOptions} from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
  name: 'FunctionPage' //组合式定义组件名称的方法
});

const router = useRouter();
const scrollbox = ref(null);
const resizeBody = () => {
    if (scrollbox.value) {
        document.body.style.height = `${scrollbox.value.offsetHeight}px`;
    }
};

const scroll = () => {
    if (scrollbox.value) {
        scrollbox.value.style.transform = `translateY(${-window.scrollY}px)`
    }
};

const navigateToPage = (path) => {
    router.push(path);
};

onMounted(() => {
    resizeBody();
    window.addEventListener('scroll', scroll);
    window.addEventListener('resize', resizeBody);
});
onUnmounted(() => {
    window.removeEventListener('scroll', scroll);
    window.removeEventListener('resize', resizeBody);
});
</script>

<style>
body {
    padding: 0;
    margin: 0;
}

.aes {
    background: #1a1a1a;
    color: white;
    border: 1px solid white;
}
</style>