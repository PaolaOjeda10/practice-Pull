<script setup>
import { computed, ref, watch } from 'vue';
import employedStore from '../stores/employedStore';

const props = defineProps({
  employedData: {
    type: Object,
    default: () => ({
      name: '',
      cargo: '',
      salary: 0,
      index: -1
    })
  }
});

const employedData = employedStore();

const isEditing = ref(false);

const employed = ref({
  name: '',
  cargo: '',
  salary: 0
});

const employedNew = ref({
  name: props.employedData.name,
  cargo: props.employedData.cargo,
  salary: props.employedData.salary,
  index: props.employedData.index
});

const resetForm = () => {
  employed.value = {
    name: '',
    cargo: '',
    salary: 0
  };
  isEditing.value = false;
};

const save = () => {
  if (!employed.value.name || !employed.value.cargo || !employed.value.salary) return;

  if (isEditing.value) {
    employedData.updateByIndexData(employedNew.value.index, {
      name: employed.value.name,
      cargo: employed.value.cargo,
      salary: employed.value.salary
    });
  } else {
    employedData.addData({
      name: employed.value.name,
      cargo: employed.value.cargo,
      salary: employed.value.salary
    });
  }

  resetForm();
};

watch(() => props.employedData, (newData) => {
  if (newData.index !== -1) {
    employedNew.value = { ...newData };
    employed.value = { ...newData };
    isEditing.value = true;
  } else {
    resetForm();
  }
});
</script>

<template>
  <div class="text-black flex space-x-5 w-full">
    <div>
      <input 
        v-model="employed.name"
        type="text"
        placeholder="Name"
      />
    </div>

    <div>
      <input 
        v-model="employed.cargo"
        type="text"
        placeholder="Cargo"
      />
    </div>

    <div>
      <input 
        v-model="employed.salary" 
        type="number"
        placeholder="Salary"
      />
    </div>

    <div>
      <button 
        @click="save" 
        class="text-white bg-blue-600 p-2"
      >
        {{ isEditing ? 'Update' : 'Add' }}
      </button>
    </div>
  </div>
</template>
