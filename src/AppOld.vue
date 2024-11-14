<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { id: 1, name: 'Apple', price: 3 },
  { id: 2, name: 'Banana', price: 1 },
  { id: 3, name: 'Cherry', price: 5 },
  { id: 4, name: 'Peach', price: 2 },
])

const students = ref([
  { id: 1, name: 'John', age: 21, grade: 85 },
  { id: 2, name: 'Anna', age: 19, grade: 92 },
  { id: 3, name: 'Louis', age: 22, grade: 76 },
  { id: 4, name: 'Martha', age: 20, grade: 100 },
])

const newName = ref('')
const newAge = ref(null)
const newGrade = ref(null)

const student = ref({
  name: '',
  age: null,
  newGrade: null
})


const foundItem = items.value.find(item => item.price > 3)
const filteredItems = items.value.filter(item => item.price < 4)
const foundIndex = items.value.findIndex(item => item.name === 'Cherry')
const names = items.value.map(item => item.name)
const hasCheapProduct = items.value.some(item => item.price < 2)
const allAreExpensive = items.value.every(item => item.price > 2)
const totalPrice = computed(() => {
  return items.value.reduce((total, item) => total + item.price, 0)
})
const foundStudent = computed(() => {
  return students.value.find(item => item.grade > 110)
})
const filteredStudents = computed(() => {
  return students.value.filter(item => item.age < 22)
})
const studentIndex = computed(() => {
  return students.value.findIndex(item => item.name === 'Louis')
})
const studentNames = computed(() => {
  return students.value.map(item => {

    return {
      ...item,
      address: 'here'
    }
  })
})
const hasHighGradeStudent = computed(() => {
  return students.value.some(item => item.grade > 90)
})
const allStudentsPassed = computed(() => {
  return students.value.every(item => item.grade >= 60)
})
const averageGrade = computed(() => {
  return students.value.reduce((total, item) => total + item.grade, 0) / students.value.length
})

const addStudent = () => {
  if (!newName.value || !newAge.value || !newGrade.value) {
    alert('Please fill in all fields.')
    return
  }

  students.value.push({
    id: students.value.length + 1,
    name: newName.value,
    age: newAge.value,
    grade: newGrade.value,
  })

  newName.value = ''
  newAge.value = null
  newGrade.value = null
}
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-6 p-4">
    <div class="flex-1 bg-white text-black p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-4">Example One</h3>
      <div class="mt-4 bg-white text-black p-4 rounded-lg shadow-md max-h-60 overflow-auto">
        <pre class="bg-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap">
          {{ items }}
        </pre>
        
      </div>
      <div class="space-y-4 text-left">
        <div>
          <strong>Find:</strong>
          {{ foundItem?.name }}
        </div>
        <div>
          <strong>Filter (price < 4):</strong>
          {{ filteredItems.map(item => item.name).join(', ') }}
        </div>
        <div>
          <strong>findIndex Cherry:</strong>
          {{ foundIndex }}
        </div>
        <div>
          <strong>Map:</strong>
          {{ names.join(', ') }}
        </div>
        <div>
          <strong>Some: Is there a cheap product? (price < 2):</strong>
          {{ hasCheapProduct }}
        </div>
        <div>
          <strong>Every: Are all products expensive? (price > 2):</strong>
          {{ allAreExpensive }}
        </div>
        <div>
          <strong>Reduce: Total Price:</strong>
          {{ totalPrice }}$
        </div>
      </div>
    </div>
    <div class="flex-1 bg-gray-600 p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-4 text-white">Example Two</h3>
       <div class="mt-4 bg-white text-black p-4 rounded-lg shadow-md">
        <h4 class="font-semibold mb-2">Add Student:</h4>
        <div class="space-y-4">
          <input 
            v-model="newName" 
            type="text" 
            placeholder="Name" 
            class="w-full p-2 border rounded bg-gray-100"
          />
          <input 
            v-model="newAge" 
            type="number" 
            placeholder="Age" 
            class="w-full p-2 border rounded bg-gray-100"
          />
          <input 
            v-model="newGrade" 
            type="number" 
            placeholder="Grade" 
            class="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <button @click="addStudent" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Add Student</button>
      </div>
        <div class="mt-4 bg-white text-black p-4 rounded-lg shadow-md max-h-60 overflow-auto">
          <h4 class="font-semibold mb-2">Student List:</h4>
            <pre class="bg-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap">
              {{ students }}
            </pre>
        </div>
      <div class="space-y-4 text-left text-white">
        <div>
          <strong>Student with grade > 90:</strong>
          {{ foundStudent?.name }}
        </div>
        <div>
          <strong>Students under 22:</strong> 
          {{ filteredStudents?.map(item => item.name).join(', ') }}
        </div>
        <div>
          <strong>Index of Louis:</strong>
          {{ studentIndex }}
        </div>
        <div>
          <strong>Student names:</strong>
          {{ studentNames }}
        </div>
        <div>
          <strong>Is there a student with grade > 90?</strong>
          {{ hasHighGradeStudent }}
        </div>
        <div>
          <strong>Did all students pass? (grade >= 60):</strong>
          {{ allStudentsPassed }}
        </div>
        <div>
          <strong>Average grade:</strong>
          {{ averageGrade }}%
        </div>
      </div>
    </div>
  </div>
</template>
