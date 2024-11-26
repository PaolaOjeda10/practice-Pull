<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import Student from './components/Student.vue';

const students = ref([
    {
        name:'Adan',
        qualification:80
    },
    {
        name:'Eva',
        qualification:60
    },
    {
        name:'Pedro',
        qualification:30
    },
    {
        name:'Luisa',
        qualification:60
    },
    {
        name:'Julio',
        qualification:90
    },
])

const studentsRef = ref()

const showMinQualification = (subStudents) => {
    let notaMinima = 100
    for (let index = 0; index < subStudents.length; index++) {
        const element = subStudents[index];
        if(element.qualification <= notaMinima){
            notaMinima = element.qualification 
        }
    }
    console.log('Show students', notaMinima)
}
const maxQualification = ref(0)
const showMaxQualification = (subStudents)=>{
    let notaMax = 0
    for (let index = 0; index < subStudents.length; index++) {
        const student = subStudents[index];
        if(student.qualification >= notaMax){
            notaMax=student.qualification
        }
    }
    console.log('Show max', notaMax)
    maxQualification.value = notaMax
}

const showPromedio = (subStudents) => {
    // TODO: Promedio
    const promedio =  subStudents.reduce((acumulador, student)=>acumulador + student.qualification,0)/subStudents.length
    console.log('showPromediopadre', promedio)
    return promedio
}

const calculoGral = () => {

}


onMounted(() => {
    const subStudents = studentsRef.value.subStudents(2)
    const prom = studentsRef.value.prom

    console.log('===================', subStudents, prom)
})
</script>
<template>
    <Student 
        ref="studentsRef"
        :students="students"
        @showMinQualification="showMinQualification"
        @showMaxQualification="showMaxQualification"
        @calculoGral="calculoGral"
        :calcPromedio="showPromedio">
        <template #row="{nameStudent, qualification, isAproved}">
            <tr>
                <td>
                    {{ nameStudent }}
                </td>

                <td>
                    {{ qualification }}
                </td>

                <td>
                    {{ isAproved()? '':'x'  }}
                </td>

                <td>
                    {{maxQualification}}
                </td>
            </tr>
        </template>
    </Student>
</template>

<!-- inventar lista de studiants mostrar en tabla y a 
 Straves del scoped slot poner icono de x a los estudiantese
  repobrados nombre completo calificacion -->