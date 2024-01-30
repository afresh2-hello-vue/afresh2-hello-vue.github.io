<script setup>
import article from '@/assets/science.json'

const articles = article
</script>

<template>
<div v-for="(a, index) in articles">
	no : {{ index + 1 }} <br>
	author : {{ a.author }} <br>
	title : {{ a.title }} <br>
	description : {{ a.description }} <br>
	url : {{ a.url }} <br>
	content : {{ a.content }} <br>
	<hr>
</div>
</template>
