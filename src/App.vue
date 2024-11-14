<script setup>
import { ref } from 'vue';
import Student from './components/Student.vue';

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

</script>


<template>
  <!-- Student component -->
  <Student v-bind:name="nameOne"
    apellidoPaterno="Condori"
    apellidoMaterno="Machicado"
    :moneyMonth="months" />


  <!-- Student component -->
  <!-- <Student /> -->

</template>
