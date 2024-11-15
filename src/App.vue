<script setup>
import { ref, computed } from 'vue';
import Person from './components/Person.vue';

const newPerson = ref([])
const name = ref('')
const age = ref(0)
const save = computed(()=>{
  newPerson.value.push({name:name.value, age:age.value})
})
</script>

<template>

    <!-- Form register -->
    <div>

      <label class="block">Name:</label>

      <input v-model="name" type="text" placeholder="name" class="block text-black">  <br>

      <label >Age:</label>

      <input v-model="age" type="number" class="block text-black">  <br>

      <button @click="save" class="rounded-lg bg-white text-black">guardar</button>

    </div>

  <!-- Person component -->
   
   <Person
    v-for="(person, index) in newPerson"
    :key="index"
    :person="person"/>

</template>
