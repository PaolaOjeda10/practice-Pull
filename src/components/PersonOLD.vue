<script setup>
import { ref, computed } from 'vue';
import Pet from './Pet.vue';
const props=defineProps({
    person:{
        type:Object,
        default:{}
    }
})
</script>

<template>

  <div>
    name: {{ person.name }}
    age: {{ person.age }}

    <!-- component pet -->
    <Pet 
      v-for="(pet, index) in person.pets"
      :key="index"
      :pet="pet" />

  </div>


<hr>
<br>
<br>
<br>
</template>
