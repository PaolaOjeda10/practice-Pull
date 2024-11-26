<script setup>
import { computed, ref } from 'vue';
import EmployedList from './components/EmployedList.vue';
import FormEmployed from './components/FormEmployed.vue';
import EmployedInfo from './components/EmployedInfo.vue';
import employedStore from './stores/employedStore';

// const listEmployed=ref([
//     {
//         name:'Ana perez',
//         cargo:'Contabilidad',
//         salary:5000
//     },
//     {
//         name:'Eva castillo',
//         cargo:'Contabilidad',
//         salary:5600
//     },
//     {
//         name:'Adan luna',
//         cargo:'Contabilidad',
//         salary:9000
//     },
//     {
//         name:'Mario bross',
//         cargo:'Contabilidad',
//         salary:7400
//     },
//     {
//         name:'Martin Fierro',
//         cargo:'Contabilidad',
//         salary:8000
//     },
//     {
//         name:'Natalia oreiro',
//         cargo:'Contabilidad',
//         salary:8500
//     }
// ])

const employedStoreData = employedStore();

const employedStoreList = computed(() => {
  return employedStoreData.getData()
})

const selectedEmployed = ref({
  name: '',
  cargo: '',
  salary: 0,
  index: -1
});


const add = (employed) => {
    console.log(employed)
    listEmployed.value.push(employed)
}

const deleteEmployed = (indexEmployed) => {
    listEmployed.value.splice(indexEmployed, 1)
}

const editEmployed = (employedData) =>  {
    selectedEmployed.value = { ...employedData }; 
}
</script>

<template>
    <!-- form -->
    <FormEmployed 
        @addEmployed="add"
        :employedData="selectedEmployed"
     />

    <!-- employedList -->
    <EmployedList
        :listEmployed="employedStoreList" >
        <template #row="{nameEmployed, cargoEmployed, salaryEmployed, indexEmployed }">

            <!-- row employed -->
            <EmployedInfo 
                :nameEmployed="nameEmployed"
                :cargoEmployed="cargoEmployed"
                :salaryEmployed="salaryEmployed"
                :indexEmployed="indexEmployed"
                @deleteEmployed="deleteEmployed(indexEmployed)"
                @editEmployed="editEmployed"
            />

        </template>
    </EmployedList>

    
</template>
