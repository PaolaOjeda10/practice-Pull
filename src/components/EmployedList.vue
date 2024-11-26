<script setup>

import { computed } from 'vue';
const props = defineProps({
    listEmployed :{
        type: Array,
        default: []
    }
})

const totalSalary = computed(()=>{
   return props.listEmployed.reduce((acc, employed) => acc + employed.salary, 0)
})
</script>
<template>

    <table>
        <thead>
            <tr>
                <th>
                    Name
                </th>

                <th>
                    Cargo
                </th>

                <th>
                    Salary
                </th>

                <th>
                    Action
                </th>
            </tr>
        </thead>

        <tbody v-for="(employed, indexEmployed) in listEmployed" :key="indexEmployed">
            <slot  
                name="row"
                :nameEmployed="employed.name"
                :cargoEmployed="employed.cargo"
                :salaryEmployed="employed.salary"
                :indexEmployed="indexEmployed"
            />
        </tbody>
        
        <div class="text-black">
            TOTAL: {{ totalSalary }}
        </div>
    </table>
</template>