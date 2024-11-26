import { ref } from "vue"

export const useAnimal = ({ log }) => {
    const animal = ref({
        name: ''
    })


    const showAnimal = ()  => {
        console.log(animal.value)
    }

    return {
        animal,
        showAnimal
    }
}