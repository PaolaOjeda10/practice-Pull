<script setup>
import { ref, watch } from 'vue';
import Animals from './components/Animals.vue';
import { useAnimal as useComposableAnimal } from './composables/useAnimal';

const listAnimal = ref([
    {
        name: 'Firulais',
        type:'Dog'
    },
    {
        name: 'Fisgato',
        type:'Cat'
    },
    {
        name: 'Pepito',
        type:'Parrot'
    },
    {
        name: 'Simba',
        type:'Lion'
    }
])

const useAnimal = useComposableAnimal({ log: true })

const { animal, showAnimal } = useAnimal

const mostrar = (animal) => {
    if(animal.type!== 'Dog'){
        return true
    }
    return false
}

const todos = ref(true)

console.log(todos.value)

const toogles = ()=>{
    todos.value = !todos.value
}

const Unwatch = watch(() => listAnimal.value, (newValue, oldValue) => {
    console.log(newValue, oldValue)
},{deep:true})

</script>
<template>
 {{ animal }}

    <input v-model="animal.name" class="text-black">

    <Button @click="showAnimal">SHOW NAME</Button>

<pre>{{ useAnimal }}</pre>
    <template 
        v-for="(animal, indexAnimal) in listAnimal" 
        :key="indexAnimal">
        <!-- Animal -->
        <Animals v-if="mostrar(animal)||todos"
            :animal="animal" />
    </template>
    <button @click="toogles">SHOW</button>

</template>
