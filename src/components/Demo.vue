<script setup>

import { useRoute, useRouter } from 'vue-router';

const route = useRoute()

const router = useRouter()

const goToHelloWorld = () => {
    // router.replace('/')

    router.go(-1)
}

console.log('=====MENSAJE=====');
console.log(router.currentRoute.value, route);
console.log('=====MENSAJE=====');
</script>

<template>
    

<button 
 @click="goToHelloWorld"
  class="bg-blue-500 p-2"> Go to Hello world</button>
</template>
