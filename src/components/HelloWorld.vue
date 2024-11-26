<script setup>

import { useRouter } from 'vue-router';
import Test from './Test.vue'
import { computed, provide, ref } from 'vue';
import coreStore from '../stores/coreStore';
// Parametros: /demo/:id
// Query: /demo?id=

const core = coreStore()

// core.setData(['Demo data'])


const dataCoreStore = computed(() => {
  return core.getData()
})


const router = useRouter()

const person = ref({
  name: 'Paola',
  cargo: 'Dev'
})
const names = ref([
  {
    name:'Ana'
  },
  {
    name:'Pedro'
  },
  {
    name:'Luis'
  },
  {
    name:'Adan'
  },
  {
    name:'Eva'
  },
  {
    name:'Juan'
  },
])
const goToDemo = () => {
  // router.push('/demo/123')

  router.push({
    name: 'DemoId',
    params: {
      id: '123'
    },
    query: {
      page: 10,
      limit: 100
    }
  })
}

const changeName = () => {
  person.value.name = 'Andrea'
}

// provide('person', {person, names})
provide('person', person)
provide('names', names)
</script>

<template>
  <!-- FROM HELLO WORLD  {{ names }} -->
=============================
  <br>
  <br>
 {{ dataCoreStore }}
  ================

  <Test /> 

  <br>
  <br>

  <button @click="changeName"
  class="bg-blue-500 p-2"> Change name</button>

<!-- <button @click="goToDemo"
  class="bg-blue-500 p-2"> Go to demo</button> -->
</template>
