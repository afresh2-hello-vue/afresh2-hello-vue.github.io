<script setup>
import { ref } from 'vue'

// 상태 변수 설정
const show = ref(true)
const list = ref([1, 2, 3])

// 함수
const addItemToList = () => {
	list.value.push(list.value.length + 1)
}

const removeItemFromList = () => {
	list.value.pop()
}

const reverseListOrder = () => {
	list.value.reverse()
}
</script>

<template>
	<button @click = "show = !show">List렌더링 ON/OFF</button>
        <button @click = "addItemToList">List추가</button>
        <button @click = "removeItemFromList">List제거</button>
        <button @click = "reverseListOrder">List뒤집기</button>

	<!-- List를 보여주는 부분 -->
	<ul v-if="show">
		<li v-for="item of list">{{ item }}</li>
	</ul>
	
	<!-- List가 비어있지 않으면서 숨겨져 있는 경우 -->
	<p v-else-if="list.length">List is not empty, but hidden.</p>

	<!-- List가 비어 있을 경우 -->
	<p v-else>List is empty.</p>
</template>
