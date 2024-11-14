<script setup>
import { computed } from 'vue';
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  apellidoPaterno: {
    type: String,
    default: ''
  },
  apellidoMaterno: {
    type: String,
    default: ''
  },
  moneyMonth: {
    type: Array,
    default: []
  }
})
const fullName = computed(() => {
  const fullName = `${props.name} ${props.apellidoPaterno} ${props.apellidoMaterno}`

  const arrayName = fullName.split('')

  const arrayReverseName = arrayName.reverse()

  const fullReverseName = arrayReverseName.join('')

  return fullName
})
const total = computed(() => {
  return props.moneyMonth.reduce((total, moneyPerMonth) => total + moneyPerMonth.money, 0)
})
</script>

<template>
  <!-- Se requiere que se muestre el nombre completo y cuanto gana en total -->
  {{ fullName }}

  {{ total }}
</template>