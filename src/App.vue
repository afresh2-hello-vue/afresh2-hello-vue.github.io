<script setup>
import { ref, onMounted } from 'vue'

// reactive state(초기값 선언 : 0)
const count = ref({
	cnt:0,
	name: "KIM",
})

// functions that mutate state and trigger updates
// 화면에서 버튼 클릭할 때마다 count 1씩 증가
function increment() {
	count.value.cnt ++
	count.value.name = count.value.name.split('').reverse().join('')
}

// lifecycle hooks
onMounted(() => {
	console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
	<button @click="increment">Count is: {{ count.cnt }} {{  count.name }}</button>
</template>

<style scoped>
button {
	font-weight: bold;
	}
</style>
