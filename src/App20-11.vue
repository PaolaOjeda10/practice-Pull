<script setup>
import { ref, computed, watch } from 'vue';
import FruitList from './components/FruitList.vue';
const fruits = ref([
    {
        name: 'banana',
        color: 'yellow',
    },
    {
        name: 'lemon',
        color: 'green',
    },
    {
        name: 'avocado',
        color: 'green',
    },
    {
        name: 'pineapple',
        color: 'orange',
    },
    {
        name: 'apple',
        color: 'red',
    },
])
const estilos = (indexFruit)=>{
    if(indexFruit % 2 === 0){
        return 'blue'
    }
    return ''
}
const students = ref([
    {
        name:'Adan',
        qualification:60
    },
    {
        name:'Eva',
        qualification:60
    },
    {
        name:'Pedro',
        qualification:60
    },
    {
        name:'Luisa',
        qualification:60
    },
    {
        name:'Julio',
        qualification:60
    },
])
</script>
<template>
    <FruitList :fruits="fruits">
        <template #row="{ nameFruit, color, indexFruit }">
            <tr>
                <td>{{ nameFruit }}</td>
                <td :style={backgroundColor:color}>{{ color }}</td>
                <td>{{ indexFruit }}</td>
            </tr>
        </template>
    </FruitList>

    <br>
    <br>
    <br>

    <FruitList :fruits="fruits" />

    <br>
    <br>
    <br>
    <FruitList :fruits="fruits">
        <template #row="{ nameFruit, color, indexFruit, showFruitName }">
            <tr>
                <td :style="{backgroundColor: estilos(indexFruit) }">
                    {{nameFruit}}
                </td>

                <td>
                    {{color}} <Button @click="showFruitName(color)">SHOW</Button>
                </td>
            </tr>
        </template>
    </FruitList>


</template>

<!-- inventar lista de studiants mostrar en tabla y a traves del scoped slot poner icono de x a los estudiantese repobrados nombre completo calificacion -->