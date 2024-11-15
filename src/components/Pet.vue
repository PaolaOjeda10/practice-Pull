<script setup>
const props = defineProps({
    pet:{
        type:Object,
        default:{}
    }
})
</script>
<template>

    <div>

        Type: {{ pet.type }}

        Name pet: {{ pet.name }}

    </div>
</template>