<template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="viewbox">
        <div class="scrollbox" ref="scrollbox">
            <div>
                <MainIndex />
            </div>
            <div class="main">
                <div class="container">
                    <!-- <p class="secondary">据说有七成的高中情侣会在一年内分手<br>若是连毕业后的也算上<br>可以算的上是全军覆没<br>但大部分人依旧投身于恋爱的旋涡中<br>时而哭泣，时而欢笑<br>能被这种一时的关系牵动心弦<br>于现实于自己，我都没那么指望</p>
            <p class="primary">但是有时我会想<br>要是我也能经历这样的青春的话<br>要是我的面前也有一个为我流泪的女主角的话<br>要是我是轻小说的主角的话<br>那时……我又会想些什么呢？</p> -->
                    <p class="secondary">そんな青春が私にあったとしたらですね</p>
                    <p class="primary">私はどんな感想を持ちますか</p>
                </div>
            </div>
            <NoticeBoard />
            <PokerItem />
            <FaultFont :content="'Anna Yanami'" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted} from 'vue';
import FaultFont from '../../components/FaultFont.vue';
import MainIndex from '../../components/MainIndex.vue';
import NoticeBoard from '../../components/NoticeBoard.vue'
import PokerItem from '../../components/PokerItem.vue';

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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body {
    margin: 0;
    padding: 0;
    background: #f2f2f2;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    user-select: none;
}

.scrollbox {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-shrink: 0;
    transition: 0.3s ease-out;
}

.viewbox {
    position: fixed;
    top: 0;
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

@import url("../../css/App.css");
</style>
