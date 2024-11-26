<script setup>
import { ref, computed, watch } from 'vue';
const text =ref(0)
const rever = computed(()=>{
  // return text.value.split('').reverse().join('')
  return text.value
  .split(' ')
  .map(item => item
    .split('')
    .reverse()
    .join(''))
  .join(' ')
})

const vowels = ref(['a','e','i','o','u'])

const numbers = ref ([1, 2, 3, 1, 3, 6, 6])

// const encontrados = computed (() => {
//     const encontrados = new Set()

//     for (let index = 0; index < numbers.value.length; index++) {
//       const numberOne = numbers.value[index]

//       const apariciones = numbers.value.filter( item => item  === numberOne)

//       if (apariciones.length > 1) encontrados.add(numberOne)      
//     }

//     return Array.from(encontrados)
//   })

// const resultado = computed(()=>{
//   let count=0
//   const textTransformmer = text.value.toLowerCase()
//   for (let index = 0; index < textTransformmer.length; index++) {
//     if (vowels.value.includes(textTransformmer[index])) {
//       count++;
//     }
//   }
  
  
//   return count; 
// })

const fibonacci = computed(()=>{
   let N = text.value
   let I = 0
   let F = 1
   let R = 0
   const serie = [1]
   for (let index = 0; index < N-1; index++) {
    R = I + F
    serie.push(R)
    I = F
    F = R
   }
   return serie
})
const impares = computed (()=>{
   let res = []
  for (let index = 1; index <= text.value; index++) {
    const impar = 2 * index
    res.push(impar)
  }
  return res
})
const asterisco = computed (()=>{
  let n = text.value
  const letter = '*'
  const res = []
for (let index = 0; index < n; index++) {
  res.push(letter.repeat(index+1))
}
return res
})
</script>

<template>
  <div>

    <input v-model="text" type="text" class="text-black"> <br>
    <pre>{{ asterisco }}</pre>

    <!-- <pre>{{ fibonacci }}</pre> -->

    <!-- <pre>{{ encontrados }}</pre>
    

  {{ resultado }}

  <div>

    Resultado inverso: {{ rever }}

  </div> -->

  </div>
</template>
