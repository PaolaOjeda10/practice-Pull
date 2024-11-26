<script setup>
import { ref, computed, watch } from 'vue';
const props = defineProps({
    productos: {
        type: Array,
        default: () => ([])
    }
})

const emit = defineEmits(['update:productos'])

const descuento = ref(0)

const productosModel = computed({
    get () {
      return props.productos
    },
    set (value) {
      vm.$emit(`update:productos`, value)
    }
  })

const add = () => {
    productosModel.value.push(
        {
            nombre: '',
            descripcion: '',
            precio:0
        }
    )
}
const subtotal = computed(()=>{
    return productosModel.value.reduce((acumulador, producto) => acumulador + producto.precio, 0)
})
const total = computed(() => subtotal.value - (subtotal.value * descuento.value) / 100);

</script>
<template>
    <pre>

        {{ productos }}

    </pre>
    <table>
        <thead>
            <tr>
                <td>Nombre</td>
                <td>Descripcion</td>
                <td>Precio</td>
            </tr>
        </thead>
        
        <tbody>
            <tr v-for="(producto, index) in productosModel" :key="index">

                <td>
                    <input class="text-black" type="text" v-model="productosModel[index].nombre">
                </td>

                <td>
                    <input class="text-black" type="text" v-model="productosModel[index].descripcion">
                </td>

                <td>
                    <input class="text-black" type="number" v-model="productosModel[index].precio">
                </td>
            </tr>
        </tbody>
    </table>
    <button @click="add">+</button>
    <div>
        Subtotal: {{ subtotal }}<br>
        Descuento: <input class="text-black" type="number" v-model="descuento"><br>
        Total: {{ total }} <br>
    </div>
</template>