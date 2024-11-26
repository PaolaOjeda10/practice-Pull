<script setup>
import { inject } from 'vue';
import coreStore from '../stores/coreStore';

const core = coreStore()

const person = inject('person')
const names = inject('names')

const changeName = () => {
    person.value.name = 'Belia'
}

const add = () => {
    names.value.push({name:'hola'})

    // core.setData(['Change from test'])
    // core.addData({name:'hi'})
    // core.updateByIndexData(1, {name:'nameEleven'})
    core.deleteByIndexData(1)

}
</script>

<template>
    FROM TEST COMPONENT

    - {{ person?.name }} -
    <br>
    <br>

    <!-- {{ names }} -->

    <br>
    <button @click="changeName"
  class="bg-teal-900 p-2"> Change name</button>
  <br>
  <br>

  <button 
    @click="add"
    class="bg-orange-600 p-2">
    add name
  </button>

</template>