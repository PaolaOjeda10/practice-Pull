<script setup>
import { ref, computed, watch } from 'vue';
const empleados = ref ([
    {
        idCargo: 1,
        nombre: 'Marcela',
        primerApellido: 'Cayo',
        segundoApellido: 'Aruquipa',
        mes: 8,
        anio: 2024,
        salario: 7000,
        descuentos: 10,
        idSupervisor: null
    },
    {
        idCargo: 2,
        nombre: 'Carlos',
        primerApellido: 'Mendoza',
        segundoApellido: 'López',
        mes: 7,
        anio: 2024,
        salario: 5000,
        descuentos: 8,
        idSupervisor: 1
    },
    {
        idCargo: 3,
        nombre: 'Ana',
        primerApellido: 'Pérez',
        segundoApellido: 'Ramírez',
        mes: 6,
        anio: 2024,
        salario: 4000,
        descuentos: 5,
        idSupervisor: 2
    },
    {
        idCargo: 4,
        nombre: 'Luis',
        primerApellido: 'Quispe',
        segundoApellido: 'Villca',
        mes: 9,
        anio: 2024,
        salario: 3500,
        descuentos: 7,
        idSupervisor: 2
    },
    {
        idCargo: 5,
        nombre: 'María',
        primerApellido: 'Choque',
        segundoApellido: 'Condori',
        mes: 10,
        anio: 2024,
        salario: 2500,
        descuentos: 3,
        idSupervisor: 4
    },
    {
        idCargo: 1,
        nombre: 'Jorge',
        primerApellido: 'Salas',
        segundoApellido: 'Huanca',
        mes: 8,
        anio: 2024,
        salario: 6800,
        descuentos: 6,
        idSupervisor: null
    },
    {
        idCargo: 2,
        nombre: 'Verónica',
        primerApellido: 'Silva',
        segundoApellido: 'Mamani',
        mes: 7,
        anio: 2024,
        salario: 5200,
        descuentos: 4,
        idSupervisor: 1
    },
    {
        idCargo: 4,
        nombre: 'Guillermo',
        primerApellido: 'Camacho',
        segundoApellido: 'Llanos',
        mes: 5,
        anio: 2024,
        salario: 4300,
        descuentos: 10,
        idSupervisor: 1
    },
    {
        idCargo: 4,
        nombre: 'Natalia',
        primerApellido: 'Mamani',
        segundoApellido: 'Callisaya',
        mes: 11,
        anio: 2024,
        salario: 3600,
        descuentos: 8,
        idSupervisor: 2
    },
    {
        idCargo: 2,
        nombre: 'Pedro',
        primerApellido: 'Choque',
        segundoApellido: 'Quispe',
        mes: 12,
        anio: 2024,
        salario: 2400,
        descuentos: 5,
        idSupervisor: 1
    },
    {
        idCargo: 1,
        nombre: 'Sofía',
        primerApellido: 'Arce',
        segundoApellido: 'Cabrera',
        mes: 6,
        anio: 2024,
        salario: 7100,
        descuentos: 9,
        idSupervisor: null
    },
    {
        idCargo: 2,
        nombre: 'David',
        primerApellido: 'López',
        segundoApellido: 'Poma',
        mes: 3,
        anio: 2024,
        salario: 5100,
        descuentos: 7,
        idSupervisor: 1
    },
    {
        idCargo: 3,
        nombre: 'Fernanda',
        primerApellido: 'Vargas',
        segundoApellido: 'Rojas',
        mes: 5,
        anio: 2024,
        salario: 4100,
        descuentos: 6,
        idSupervisor: 2
    },
    {
        idCargo: 4,
        nombre: 'Miguel',
        primerApellido: 'Callisaya',
        segundoApellido: 'Huanca',
        mes: 4,
        anio: 2024,
        salario: 3700,
        descuentos: 5,
        idSupervisor: 2
    },
    {
        idCargo: 5,
        nombre: 'Clara',
        primerApellido: 'Ticona',
        segundoApellido: 'Zeballos',
        mes: 2,
        anio: 2024,
        salario: 2600,
        descuentos: 4,
        idSupervisor: 4
    },
    {
        idCargo: 1,
        nombre: 'Hugo',
        primerApellido: 'González',
        segundoApellido: 'Pérez',
        mes: 1,
        anio: 2024,
        salario: 7300,
        descuentos: 3,
        idSupervisor: null
    },
    {
        idCargo: 2,
        nombre: 'Beatriz',
        primerApellido: 'Herrera',
        segundoApellido: 'Cruz',
        mes: 7,
        anio: 2024,
        salario: 5400,
        descuentos: 8,
        idSupervisor: 1
    },
    {
        idCargo: 3,
        nombre: 'Tomás',
        primerApellido: 'Ramos',
        segundoApellido: 'Velasco',
        mes: 9,
        anio: 2024,
        salario: 4200,
        descuentos: 2,
        idSupervisor: 2
    },
    {
        idCargo: 4,
        nombre: 'Paula',
        primerApellido: 'Cruz',
        segundoApellido: 'Blanco',
        mes: 12,
        anio: 2024,
        salario: 3800,
        descuentos: 6,
        idSupervisor: 2
    },
    {
        idCargo: 4,
        nombre: 'Adriana',
        primerApellido: 'Morales',
        segundoApellido: 'Reyes',
        mes: 10,
        anio: 2024,
        salario: 2700,
        descuentos: 10,
        idSupervisor: 3
    }
]
)

const puestosLaborales = ref (
  [
  {
    id: "1",
    nombre: "Director de finanzas",
  },
  {
    id: "2",
    nombre: "Encargado de finanzas",
  },
  {
    id: "3",
    nombre: "Contador",
  },
  {
    id: "4",
    nombre: "Auditor",
  },
  {
    id: "5",
    nombre: "Auxiliar",
  },
]
)

const sumaTotal = computed(()=>{
  return empleados.value.reduce((acumulador, empleados) => acumulador + empleados.salario , 0)
})

const obtenerMontoPorcentaje = (salario, descuento) =>{
  const res =  (salario*descuento)/100
  console.log('desc:', res, salario, descuento)
  return res
}

const sumaDescuentos = computed(()=>{
  return empleados.value.reduce((acc, empleado) => acc + obtenerMontoPorcentaje(empleado.salario, empleado.descuentos), 0)
})

const mostrarCargo = (id)=>{
  const res = puestosLaborales.value.filter(item => parseInt(item.id) === id )
  return res[0].nombre
}

const trimestre = computed(()=>{
  return sumaDescuentos.value * 3
})

const cantidadPorCargo=computed(()=>{
  let count=0
  for (let index = 0; index < puestosLaborales.value.length; index++) {
    const element = puestosLaborales.value[index];
    element.reduce((acc, item)=>item,0)
  }
})

const primerTrimestre = [1,2,3]
const segundoTrimestre = [4,5,6]
const tercerTrimestre = [7,8,9]
const cuartoTrimestre = [10,11,12]

const sumaTotalTrimestre = computed(()=>{
let totalSalarioPrimer = 0
let totalSalarioSegundo = 0
let totalSalarioTercero = 0
let totalSalarioCuarto = 0

let totalDescuentosPrimero = 0
let totalDescuentosSegundo = 0
let totalDescuentosTercero = 0
let totalDescuentosCuarto = 0


for (let index = 0; index < empleados.value.length; index++) {
  const empleado = empleados.value[index]
  if(primerTrimestre.includes(empleado.mes)){
    totalSalarioPrimer = totalSalarioPrimer+empleado.salario
    totalDescuentosPrimero = totalDescuentosPrimero+obtenerMontoPorcentaje(empleado.salario,empleado.descuentos)
  }
  if(segundoTrimestre.includes(empleado.mes)){
    totalSalarioSegundo = totalSalarioSegundo+empleado.salario
    totalDescuentosSegundo = totalDescuentosSegundo+obtenerMontoPorcentaje(empleado.salario,empleado.descuentos)

  }
  if(tercerTrimestre.includes(empleado.mes)){
    totalSalarioTercero = totalSalarioTercero+empleado.salario
    totalDescuentosTercero = totalDescuentosTercero+obtenerMontoPorcentaje(empleado.salario,empleado.descuentos)
  }
  if(cuartoTrimestre.includes(empleado.mes)){
    totalSalarioCuarto = totalSalarioCuarto+empleado.salario
    totalDescuentosCuarto = totalDescuentosCuarto+obtenerMontoPorcentaje(empleado.salario,empleado.descuentos)
  }
}
return {totalSalarioPrimer, totalSalarioSegundo, totalSalarioTercero, totalSalarioCuarto,
  totalDescuentosPrimero, totalDescuentosSegundo, totalDescuentosTercero, totalDescuentosCuarto
}

})


const conteoCargos = computed(() => {
  let cargos = []

  for (let index = 0; index < puestosLaborales.value.length; index++) {
    const cargo = puestosLaborales.value[index];

    cargos.push({
      nombre: cargo.nombre,
      cantidad: empleados.value.filter(empleado => empleado.idCargo.toString() === cargo.id)?.length
    })   
  }

  
  cargos.sort((cargo, nextCargo) => nextCargo.cantidad - cargo.cantidad)
  return cargos


})
</script>

<template>

  <div>

  <li v-for="(empleado, index) in empleados" :key="index">

     Nombre: {{ empleado.nombre }} {{ empleado.primerApellido }} {{ empleado.segundoApellido }} <br>

     Cargo: {{ mostrarCargo(empleado.idCargo)}}

  </li>
</div>

<div>
  <h2>Reporte 1</h2>

  Suma total de salarios:  {{ sumaTotal }} Bs. <br>

  Suma total de descuentos:  {{ sumaDescuentos }} <br>

</div>

<div>

  <h2>Reporte 2</h2>

  Suma primer trimestre salarios: {{ sumaTotalTrimestre.totalSalarioPrimer }} <br>
  Suma segundo trimestre salarios: {{ sumaTotalTrimestre.totalSalarioSegundo }} <br>
  Suma tercer trimestre salarios: {{ sumaTotalTrimestre.totalSalarioTercero }} <br>
  Suma cuarto trimestre salarios: {{ sumaTotalTrimestre.totalSalarioCuarto }} <br>

  Suma primer trimestre descuentos: {{ sumaTotalTrimestre.totalDescuentosPrimero }} <br>
  Suma segundo trimestre descuentos: {{ sumaTotalTrimestre.totalDescuentosSegundo }} <br>
  Suma tercer trimestre descuentos: {{ sumaTotalTrimestre.totalDescuentosTercero }} <br>
  Suma cuarto trimestre descuentos: {{ sumaTotalTrimestre.totalDescuentosCuarto }} <br>

</div>
<div>

<h2>Reporte 3</h2>

<!-- cantidadPorCargo: {{ cantidadPorCargo }} <br> -->

</div>

<pre>{{ conteoCargos }}</pre>

</template>
