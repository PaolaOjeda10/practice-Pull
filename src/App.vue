<script setup>
import { ref, computed } from 'vue';
import Student from './components/Student.vue';
import Person from './components/Person.vue';

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

</script>

<template>
  <!-- Student component -->
  <Student
    v-if="false"
    v-bind:name="nameOne"
    apellidoPaterno="Condori"
    apellidoMaterno="Machicado"
    :moneyMonth="months" />

  <!-- Person component -->
   <Person
    :persons="persons"
  />

</template>
