<script setup>

import { ref, computed } from 'vue';
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
const styleColor = ref(['red', 'yellow', 'green']);
</script>

<template>

  <div v-for="data in styleBackground" :style="{ backgroundColor: data.backgroundColor }">

    name: {{ data.name }} -

    age: {{ data.age }} - 

    color: {{ data.backgroundColor }}

  </div>

  <div v-for="(style, index) in styleColor" :key="index">

    <div :style="{ backgroundColor: style }">

      <p>Estilo de fondo: {{ style }}</p>

    </div>
  </div>
</template>