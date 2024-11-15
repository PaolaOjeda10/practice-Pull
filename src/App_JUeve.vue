<script setup>
import { ref, computed } from 'vue';
import Student from './components/Student.vue';
import Person from './components/PersonOLD.vue';

const nameOne = ref('Juan Carlos')

const months = ref([
  {
    month: 'January',
    money: 11000,
  },
  {
    month: 'February',
    money: 10000
  },
  {
    month: 'March',
    money: 8500,
  },
  {
    month: 'April',
    money: 9800,
  },
  {
    month: 'May',
    money: 13000,
  },
  {
    month: 'June',
    money: 12500,
  },
  {
    month: 'July',
    money: 7000,
  },
  {
    month: 'August',
    money: 4400,
  },
  {
    month: 'September',
    money: 8500,
  },
  {
    month: 'October',
    money: 10500,
  },
  {
    month: 'November',
    money: 9800,
  },
  {
    month: 'December',
    money: 7900,
  }
])
const persons = ref([
{
  name:'Luana',
  age:3,
  pets:[
    {
      type: 'dog',
      name: 'mega'
    }
  ]
},
{
  name:'Rosario',
  age:32,
  pets:[]
},
{
  name:'Ander',
  age:10,
  pets:[
    {
      type: 'cat',
      name: 'tako'
    },
    {
      type: 'parrot',
      name: 'Lorenza'
    }
  ]
},
{
  name:'Jimena',
  age:34,
  pets:[
    {
      type: 'cat',
      name: 'guarani'
    }
  ]
}
])
const total = computed(()=>{
 return 0
})
const edadMaxima = computed(()=>{
  let edadMaxima = 0

  for (let index = 0; index < persons.value.length; index++) {
    const person = persons.value[index];

    if (person.age> edadMaxima) {
      edadMaxima = person.age
    }
  }
  return edadMaxima
})
const edadMinima = computed(() => {
  let edadMinima = 999

  for (let index = 0; index < persons.value.length; index++) {
    const person = persons.value[index];

    if(person.age < edadMinima){
      edadMinima = person.age
    }
  }
return edadMinima
})
const base = ref(0)
const altura = ref(0)
const resultado = computed(()=>{
  return (base.value * altura.value)/2 
})
const producto = computed(()=>{
  let res = base.value

  for (let index = base.value + 1; index <= altura.value; index++) {
    res = res * index
  }
})
const newPerson = ref([])
const save = computed(()=>{
  newPerson.value.push({name:'hola'})
})
console.log('new person', newPerson.value)
</script>

<template>
<!-- <input v-model="base" type="number"><br>
<input v-model="altura" type="number"><br>
{{ resultado  }} <br>
problem2: {{ producto  }} -->
<!-- 
  <h1>Edad máxima: </h1> {{ edadMaxima }}
  <h1>Edad mínima: </h1> {{ edadMinima }} -->
{{ newPerson }}
<button @click="save">guardar</button>
  <!-- Student component -->
  <Student
    v-if="false"
    v-bind:name="nameOne"
    apellidoPaterno="Condori"
    apellidoMaterno="Machicado"
    :moneyMonth="months" />

  <!-- Person component -->
   <Person
    v-for="(person, index) in persons"
    :key="index"
    :person="person"/>

</template>
