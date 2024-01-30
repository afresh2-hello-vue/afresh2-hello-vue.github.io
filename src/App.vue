<script setup>
// ref : 반응적인 데이터를 생성하는 함수
// watch : 데이터의 변경을 감시하는 함수
import { ref, watch } from 'vue'

// todoId라는 반응적인 데이터를 생성하고, 초기값으로 1 설정
const todoId = ref(1);
// todoData라는 반응적인 데이터를 생성하고, 초기값으로 null 설정
// 비동기로 받아온 할일 데이터를 저장할 용도로 사용된다
const todoData = ref(null);

// 비동기 함수
// : fetch를 사용하여 외부API에서 할일 데이터를 가져오고, 그 결과를 todoData에 저장
async function fetchData() {
 todoData.value = null
 const res = await fetch(
  `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
 )
 todoData.value = await res.json()
}
fetchData()

function get(){
 todoId.value++
 // *변경사항* todoId변수값이 변경될 때마다 fetchData함수를 호출하도록 감시 설정
 watch(todoId, fetchData)
 // fetchData()
}

</script>

<template>
 <p>Todo id : {{ todoId }}</p>
 <button @click="get" :disabled="!todoData">Fetch next todo</button>

 <!-- 데이터가 로딩 중인 동안 화면에 "Loading..." 메시지 출력 -->
 <p v-if="!todoData">Loading...</p>
 <!-- 데이터가 로딩되면 todoData를 출력 -->
 <pre v-else>{{ todoData }}</pre>
</template>
