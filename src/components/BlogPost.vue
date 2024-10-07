<template>
    <h4 :style="{ fontSize: size + 'em' }">{{ title }}</h4>
    <!-- 两种发出事件的方法 -->
    <button @click="$emit('enlarge-text')">Enlarge text</button>
    <button @click="enlargeText">Enlarge text</button>
    <!-- 这个是会填充父组件传递过来的html信息 -->
    <slot />
</template>

<script setup>
import {defineProps,defineEmits} from 'vue'
defineProps(['title','size'])

// defineEmits 是用于声明当前组件中有哪些自定义事件可以被触发。它类似于为组件定义一个事件接口，让你明确知道这个组件可以发出哪些事件。
const emit = defineEmits(['enlarge-text']);

// 这个才是触发事件
function enlargeText(){
    emit('enlarge-text');
}

</script>

<style>

</style>


