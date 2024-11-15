<script setup>
const props=defineProps({
    person : {
        type:Object,
        default:{}
    }
})
</script>

<template>

   <div class="border-b border-b-lime-600">

        name: {{person.name}}

        age: {{person.age}}

    </div>
</template>