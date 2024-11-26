<script setup>

import { computed, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, watch } from 'vue';
const props = defineProps({
    animal:{
        type:Object,
        default:{}
    }
})
const emit = defineEmits(['update:animal'])

const animalModel = computed( {
    get(){
        return props.animal
    },
    set(value){
        emit('update:animal', value)
    }
})

// const unwatch = watch(() => animalModel.value, (newValue, oldValue) => {
//     console.log(newValue, oldValue)
// }, { deep: true })

onBeforeMount(() => {
    console.log('BEFORE MOUNTED')
})

onMounted(() => {
    console.log('MOUNTED')
})


onBeforeUnmount(() => {
    console.log('BEFORE UNMOUNTED')

    // unwatch()
})

onUnmounted(() => {
    console.log('UNMOUNTED')
})
</script>
<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input class="text-black" v-model="animalModel.name" type="text">
                    </td>

                    <td>
                        <input class="text-black" v-model="animalModel.type" type="text">
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- {{animal.name}}  {{animal.type}} <br> -->
    </div>

</template>