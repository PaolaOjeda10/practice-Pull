<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { id: 1, nombre: 'Manzana', precio: 3 },
  { id: 2, nombre: 'Banana', precio: 1 },
  { id: 3, nombre: 'Cereza', precio: 5 },
  { id: 4, nombre: 'Durazno', precio: 2 },
])

const items2 = ref([
  { id: 1, nombre: 'Juan', edad: 21, calificacion: 85 },
  { id: 2, nombre: 'Ana', edad: 19, calificacion: 92 },
  { id: 3, nombre: 'Luis', edad: 22, calificacion: 76 },
  { id: 4, nombre: 'Marta', edad: 20, calificacion: 88 },
])

// Variables reactivas para los inputs
const nuevoNombre = ref('')
const nuevaEdad = ref(null)
const nuevaCalificacion = ref(null)

const itemEncontrado = items.value.find(item => item.precio > 3)
const itemsFiltrados = items.value.filter(item => item.precio < 4)
const indexEncontrado = items.value.findIndex(item => item.nombre === 'Cereza')
const nombres = items.value.map(item => item.nombre)
const tieneProductoBarato = items.value.some(item => item.precio < 2)
const todosSonCaros = items.value.every(item => item.precio > 2)
const totalPrecio = computed(() => {
  return items.value.reduce((total, item) => total + item.precio, 0)
})
const estudianteEncontrado = computed(() => {
  return items2.value.find(item => item.calificacion > 90)
})
const estudiantesFiltrados = computed(() => {
  return items2.value.filter(item => item.edad < 22)
})
const indexEstudiante = computed(() => {
  return items2.value.findIndex(item => item.nombre === 'Luis')
})
const nombresEstudiantes = computed(() => {
  return items2.value.map(item => item.nombre)
})
const tieneEstudianteConAltaCalificacion = computed(() => {
  return items2.value.some(item => item.calificacion > 90)
})
const todosEstudiantesAprobados = computed(() => {
  return items2.value.every(item => item.calificacion >= 60)
})
const promedioCalificaciones = computed(() => {
  return items2.value.reduce((total, item) => total + item.calificacion, 0) / items2.value.length
})

const agregarEstudiante = () => {
  if (!nuevoNombre.value || !nuevaEdad.value || !nuevaCalificacion.value) {
    alert('Por favor, complete todos los campos.')
    return
  }

  items2.value.push({
    id: items2.value.length + 1,
    nombre: nuevoNombre.value,
    edad: nuevaEdad.value,
    calificacion: nuevaCalificacion.value,
  })

  nuevoNombre.value = ''
  nuevaEdad.value = null
  nuevaCalificacion.value = null
}
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-6 p-4">
    <div class="flex-1 bg-white text-black p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-4">Ejemplo Uno</h3>
      <div class="mt-4 bg-white text-black p-4 rounded-lg shadow-md max-h-60 overflow-auto">
        <pre class="bg-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap">
          {{ items }}
        </pre>
        
      </div>
      <div class="space-y-4 text-left">
        <div>
          <strong>Find:</strong>
          {{ itemEncontrado?.nombre }}
        </div>
        <div>
          <strong>Filter (precio < 4):</strong>
          {{ itemsFiltrados.map(item => item.nombre).join(', ') }}
        </div>
        <div>
          <strong>findIndex Cereza:</strong>
          {{ indexEncontrado }}
        </div>
        <div>
          <strong>Map:</strong>
          {{ nombres.join(', ') }}
        </div>
        <div>
          <strong>Some: ¿Hay algún producto barato? (precio < 2):</strong>
          {{ tieneProductoBarato }}
        </div>
        <div>
          <strong>Every: ¿Todos los productos son caros? (precio > 2):</strong>
          {{ todosSonCaros }}
        </div>
        <div>
          <strong>Reduce: Total Precio:</strong>
          {{ totalPrecio }}Bs
        </div>
      </div>
    </div>
    <div class="flex-1 bg-gray-600 p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-4 text-white">Ejemplo dos</h3>
       <div class="mt-4 bg-white text-black p-4 rounded-lg shadow-md">
        <h4 class="font-semibold mb-2">Agregar Estudiante:</h4>
        <div class="space-y-4">
          <input 
            v-model="nuevoNombre" 
            type="text" 
            placeholder="Nombre" 
            class="w-full p-2 border rounded bg-gray-100"
          />
          <input 
            v-model="nuevaEdad" 
            type="number" 
            placeholder="Edad" 
            class="w-full p-2 border rounded bg-gray-100"
          />
          <input 
            v-model="nuevaCalificacion" 
            type="number" 
            placeholder="Calificación" 
            class="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <button @click="agregarEstudiante" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Agregar Estudiante</button>
      </div>
        <div class="mt-4 bg-white text-black p-4 rounded-lg shadow-md max-h-60 overflow-auto">
          <h4 class="font-semibold mb-2">Lista de Estudiantes:</h4>
            <pre class="bg-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap">
              {{ items2 }}
            </pre>
        </div>
      <div class="space-y-4 text-left text-white">
        <div>
          <strong>Estudiante con calificación mayor a 90:</strong>
          {{ estudianteEncontrado?.nombre }}
        </div>
        <div>
          <strong>Estudiantes menores de 22 años:</strong> 
          {{ estudiantesFiltrados?.map(item => item.nombre).join(', ') }}
        </div>
        <div>
          <strong>Índice de Luis:</strong>
          {{ indexEstudiante }}
        </div>
        <div>
          <strong>Nombres de estudiantes:</strong>
          {{ nombresEstudiantes?.join(', ') }}
        </div>
        <div>
          <strong>¿Hay algún estudiante con calificación mayor a 90?</strong>
          {{ tieneEstudianteConAltaCalificacion }}
        </div>
        <div>
          <strong>¿Todos los estudiantes están aprobados (calificación >= 60)?</strong>
          {{ todosEstudiantesAprobados }}
        </div>
        <div>
          <strong>Promedio de calificaciones:</strong>
          {{ promedioCalificaciones }}%
        </div>
      </div>
    </div>
  </div>
</template>
