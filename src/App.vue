<script setup>
import article from '@/assets/science.json'

const articles = article
</script>

<template>
<div v-for="(a, index) in articles">
	<div v-if="a.title.includes('코로나')">
		<br>
		no : {{ index + 1 }} <br>
		author : {{ a.author }} <br>
		title : {{ a.title }} <br>
		description : {{ a.description }} <br>
		url : {{ a.url }} <br>
		content : {{ a.content }} <br>
		<hr>
	</div>
</div>
</template>
