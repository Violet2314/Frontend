<template>
    <div>
        <!-- v-bind 可以给属性绑定一个值，动态改变 -->
        <input type="text" v-bind:value="inputValue" @input="updateValue" />
        <button :disabled="isDisabled" @click="wok">Submit</button>
        <p>{{ num }}</p>
        <p>{{ msg }}</p>
        <p>{{ object.id }} </p>
        <p>{{ auther.books[1] }}</p>
        <p>{{ calculateBooksMessage }}</p>
        <input type="text" :value="inputValue" @input="updateValue" />
        <input type="text" id="inputValue" />
        <div :style="styleObject">so</div>
    </div>
    <div :class="classObject"></div>
    <div :class="classObject1"></div>
    <BlogPost v-for="post in posts" :key="post.id" :title="post.title" :size="size" @enlarge-text="size += 0.1" />
    <!--  @enlarge-text = 可以接一个函数来处理逻辑 -->
    <!-- 只能用v-bind绑定变量，除非是自己直接传递的静态字符 “wok” 这样的才不用 -->
    <BlogPost :title="staticTitle"> wok chao </BlogPost>

    <!-- 使用 v-for 进行列表渲染时，Vue 要求每个循环的元素提供一个唯一的 key 属性 -->
    <ul>
        <li v-for="(item, index) in items" :key="index">
            {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
    </ul>
    <ul>
        <li v-for="(value, key ,index) in myObject" :key="index">
            {{ key }}: {{ value }}
        </li>
    </ul>
</template>

<script setup>
import BlogPost from './BlogPost.vue';
import { ref, computed, defineProps,onMounted } from 'vue'

// 子组件事件改变父组件的属性
const size = ref(2);

// v-for
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const myObject = ref({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

const posts = ref([
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fu' }
]);

//获得静态值
const staticTitle = posts.value[1].title;
posts.value[1].title = 'New Title';
console.log(staticTitle);

// 你想让整个对象的所有属性都变为响应式时，使用 reactive。当你只需要一个单一的响应式值或希望对某个对象的引用进行响应式操作时，使用 ref。
const object = { id: ref(3) }
const auther = ref({
    name: 'wok',
    books: [
        'vue-1',
        'vue-2'
    ]
});

// v-bind绑定class
const classObject = ref({
    active: true,
    'text-danger': false
})

const isActive = ref(true)
const error = ref(null)

const classObject1 = computed(() => ({
    active: isActive.value && !error.value,
    'text-danger': error.value && error.value.type === 'fatal'
}))

// 内连样式表
const styleObject = ref({
    color: 'red',
    fontSize: size.value + 'em'
})

// 接受msg
defineProps(['msg']);

const num = ref(0);
const inputValue = ref('')
const isDisabled = ref(true)

function updateValue(event) {
    inputValue.value = event.target.value
    isDisabled.value = !inputValue.value
}

// 计算属性和方法的差别
const calculateBooksMessage = computed(() => {
    return num.value > 3 ? 'Yes' : 'No'
})
// 用方法，
//不缓存: 方法在每次调用时都会执行，不会缓存结果。这意味着如果在模板中多次调用一个方法，它会每次都重新计算，即使依赖的数据没有改变。
// 用计算属性
// 缓存: 计算属性是基于它们的依赖关系进行缓存的。只有当依赖的数据发生变化时，计算属性才会重新计算。这意味着如果你在模板中多次使用同一个计算属性，它只会计算一次，然后缓存结果，直到依赖的数据改变。
// 就是只有在变的时候才变，所以性能高

// 改变值要加value
function wok() {
    num.value++;
    console.log(object.id);
    object.id.value++//要加value才可以
}

// 钩子方法: 在组件挂载之前执行
onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
