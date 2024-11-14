<script setup>

import { computed } from 'vue';
const props=defineProps({
    persons:{
        type:Array,
        default:[]
    }
})
const styleBackground = computed(()=>{
    return props.persons.map(person => {
        return{
            name:person.name,
            age:person.age,
            backgroundColor: person.age<30? 'blue':'brown'
        }}
    )
})
</script>

<template>

  <div v-for="(data, index) in styleBackground" :key="index" :style="{ backgroundColor: data.backgroundColor }">
    name: {{ data.name }} -
    age: {{ data.age }} - 
    color: {{ data.backgroundColor }}
  </div>
</template>