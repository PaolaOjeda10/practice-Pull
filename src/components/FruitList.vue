<script setup>
const props = defineProps({
    fruits :{
        type:Array,
        value:[]
    }
})

const showFruitName = (name, color) => {
    console.log(name, '-----', color)
}
</script>
<template>
    <table>

        <thead>
            <tr>
                <th>Name</th>

                <th>Color</th>
            </tr>
        </thead>

        <tbody v-for="(fruit, indexFruit) in fruits" :key="indexFruit">
            <slot 
                name="row"
                :nameFruit="fruit.name"
                :color="fruit.color"
                :indexFruit="indexFruit"
                :showFruitName="(color) => showFruitName(fruit.name, color)"
            >
                <tr>
                    <td>
                        {{ fruit.name }}
                    </td>
                    
                    <td>
                        {{ fruit.color }} K
                    </td>
                </tr>
            </slot>
        </tbody>
    </table>
</template>