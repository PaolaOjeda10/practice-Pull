<script setup>
import { ref, computed, watch } from 'vue';
const props = defineProps({
    empleados: {
        type: Array,
        default: () => ([])
    }
})

const emit = defineEmits(['update:empleados'])


const empleadosModel = computed({
    get () {
      return props.empleados
    },
    set (value) {
      vm.$emit(`update:empleados`, value)
    }
  })

</script>

<template>
    <li>
        Nombres: 
        {{ empleadosModel.nombre }}

    </li>
</template>