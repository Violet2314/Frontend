<template>
    <div class="box">
        <div class="poker_container">
            <div 
                class="poker"
                v-for="(poker,index) in poker_eles"
                :key="index"
                :style="{zIndex: poker.nums,transform: transform_datas[poker.nums]}">
                <img :src="poker.imgSrc" alt="">
            </div>
            <div class="poker_top" @click="move"></div>
        </div>
        <div class="poker_text">
            <p>follow the path to the Lands Between beyond the foggy sea</p>
            <p>to stand before the Elden Ring.</p>
            <p>And become the Elden Lord.</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const imgs = ref([]);
const poker_eles = ref([]);
const img_index = ref([]);
const transform_datas = [
    'rotate(-10deg)',
    'rotate(-6deg) translate(35%, -12%)',  
    'rotate(-2deg) translate(65%, -19%)',  
    'rotate(2deg) translate(95%, -26%)',  
    'rotate(6deg) translate(125%, -23%)',  
];
// 因为在 setup 函数中没有 this，传统函数会出错，导致无法访问到 count。而箭头函数自动继承了 setup 的作用域，因此能够正常访问到定义的响应式数据。
const init = () => {
    for(let i = 0; i < 6; i++){
        const img = new Image();
        img.src = require(`../pokerphotos/photo_${i}.webp`);
        imgs.value.push(img);
    }

    poker_eles.value = [...Array(5)].map((_,index) => ({
        nums: index,
        imgSrc: imgs.value[4-index] ? imgs.value[4-index].src : "",
    }));

    img_index.value = poker_eles.value.length;
};

const move = () => {
    poker_eles.value.forEach((poker) => {
        let nums = poker.nums;
        if(nums + 1 >= poker_eles.value.length){
            nums = 0;
            poker.imgSrc = imgs.value[img_index.value].src;
            img_index.value++;
            if(img_index.value >= imgs.value.length) img_index.value = 0;
        }else{
            nums += 1;
        }

        poker.nums = nums;
    });
};

onMounted(() => {
    init();
});
</script>

<style>
.box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
    background-color: #000;
}

.poker_container{
    position: relative;
    left: 11vmin;
    margin: 0 auto;
    width: 90vmin;
    height: 33vmin;
    margin-bottom: 1rem;
}

.poker,
.poker_top{
    position: absolute;
    width: 30vmin;
    height: 39vmin;
    border: 0.15rem solid #fff;
    border-radius: 3vmin;
    background-color: #17f700;
    transform-origin: bottom left;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.poker img{
    position: relative;
    width: 100%;
}

.poker_top {
    opacity: 0;
    background-color: #fff;
    transition: 0.3s ease;
    cursor: pointer;
    z-index: 1000;
    transform: rotate(6deg) translate(125%, -23%);
}

.poker_top:hover {
    background-color: #aaa;
}

.poker_text{
    margin: 0 auto;
    margin-top: 2em;
    bottom: -8vmin;
    text-align: center;
    position: relative;
    font-size: clamp(1.2em, calc(1.2vw), 2.2em);
    color: rgba(255, 255, 255, 0.764);
}

.poker_text p{
    opacity: 0;
    animation-delay: 4.5s; 
    animation-name: float-up;
    animation-timing-function: ease-out;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
</style>