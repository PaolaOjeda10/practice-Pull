<script setup>
import employedStore from '../stores/employedStore';

const props = defineProps({
    nameEmployed :{
        type: String,
        default: ''
    },
    cargoEmployed:{
        type: String,
        default: ''
    },
    salaryEmployed:{
        type: Number,
        default: 0
    },
    indexEmployed:{
        type:Number,
        default:0
    }
})

const employedData = employedStore()

// const emit = defineEmits(['deleteEmployed'])

const deleteEmployed = () => {
    // emit('deleteEmployed')
    employedData.deleteByIndexData(props.indexEmployed)
}

const emit = defineEmits(['editEmployed']); 

const editEmployed = () => {
  const employedData = {
    name: props.nameEmployed,
    cargo: props.cargoEmployed,
    salary: props.salaryEmployed,
    index: props.indexEmployed
  };
  emit('editEmployed', employedData);
};

</script>
<template>
    <tr class="text-black">
        <td>
            {{ nameEmployed }}
        </td>

        <td>
            {{ cargoEmployed }}
        </td>

        <td>
            {{ salaryEmployed }}
        </td>

        <td>
            <div class="flex space-x-5" >
                <button @click="editEmployed" class="bg-orange-500 p-2 ">Edit</button>

                <button @click="deleteEmployed" class="bg-red-500 p-2">Delete</button>
            </div>
        </td>
    </tr>
</template>