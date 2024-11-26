<script setup>

import { ref } from 'vue';

const emit = defineEmits(['showMinQualification', 'showMaxQualification'])

const props = defineProps({
    students : {
        type:Array,
        value:[]
    },
    calcPromedio: {
        type: Function,
        default: void 0
    }
})
const prom = ref(0)
const ejecutarPromedio = () => {

    const resultadoPromedio = props.calcPromedio(subStudents(2))
    prom.value = resultadoPromedio
    console.log('hello world', resultadoPromedio)
}

const notaAproved = 71
 
const isAproved = (qualification) =>{
  return  qualification >= notaAproved
 }

 const showCustom = () => {
    console.log('FROM LOCAL')

    emit('showMinQualification', 'FROM CUSTOM')
 }

 const subStudents = (cantidad) => {
    return props.students.slice(0, cantidad)
 }


defineExpose({ subStudents, prom })
</script>
<template>
    <table>
        <thead>
            <tr>
                <th>
                    Name
                </th>

                <th>
                    qualification
                </th>
            </tr>
        </thead>

        <tbody v-for="(student, indexStuden) in students" :key="indexStuden">
            <slot
            name="row"
            :nameStudent="student.name"
            :qualification="student.qualification"
            :isAproved="() => isAproved(student.qualification)"
            >
                <tr>
                    <td>
                        {{ student.name }}
                    </td>

                    <td>
                        {{ student.qualification }}
                    </td>
                </tr>
            </slot>
        </tbody>
    </table>

    <button @click="emit('showMinQualification')">SHOW STUDENT</button>
    <br>
    <button @click="emit('showMinQualification', subStudents(2))">SHOW OTHER</button>
    <br>
    <button @click="showCustom">SHOW CUSTOM</button>
    <br>
    <button @click="emit('showMaxQualification', subStudents(2))">SHOW MAX QUALIFICATION</button>
    <br>
    <button @click="ejecutarPromedio">EJECUTAR PROMEDIO</button>
    <br>
    {{ prom }}
    <br>
    {{subStudents(2)}}

</template>