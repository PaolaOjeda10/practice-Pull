<script setup>
import { ref, computed, watch } from 'vue';
const text =ref('')
const rever = computed(()=>{
  // return text.value.split('').reverse().join('')
  return text.value.split(' ').map(item=>item.split('').reverse().join('')).join(' ')
})
const vowels = ref(['a','e','i','o','u'])

const resultado = computed(()=>{
  let count=0
  for (let index = 0; index < text.value.length; index++) {
    if (vowels.value.includes(text.value[index])) {
      count++;
    }
  }
  return count; 
})
</script>

<template>
<input v-model="text" type="text" class="text-black"> <br>

{{ resultado }}
</template>
