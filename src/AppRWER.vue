<script setup>
import { ref, computed, watch } from 'vue';
import Productos from '../src/components/Productos.vue';
const client = ref('')
const address = ref('')
const productosLista = ref([
  {
    nombre: '',
    descripcion: '',
    precio:0
  }
])
</script>

<template>
  <div>
    Client : <input class="text-black" type="text" v-model="client"> <br>

    Adrress : <input class="text-black" type="text" v-model="address"> <br>

    <Productos
    v-model:productos="productosLista"
    
    />
  </div>

</template>
