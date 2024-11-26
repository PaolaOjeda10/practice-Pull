import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore('employedStore', () => {

    const listEmployed=ref([
        {
            name:'Ana perez',
            cargo:'Contabilidad',
            salary:5000
        },
        {
            name:'Eva castillo',
            cargo:'Contabilidad',
            salary:5600
        },
        {
            name:'Adan luna',
            cargo:'Contabilidad',
            salary:9000
        },
        {
            name:'Mario bross',
            cargo:'Contabilidad',
            salary:7400
        },
        {
            name:'Martin Fierro',
            cargo:'Contabilidad',
            salary:8000
        },
        {
            name:'Natalia oreiro',
            cargo:'Contabilidad',
            salary:8500
        }
    ])
    


    const setData = (newData) => {
        listEmployed.value = newData
    }

    const getData = () => {
        return JSON.parse(JSON.stringify(listEmployed.value))
    }
    const addData = (dataNew) => {
        listEmployed.value.push(dataNew)
    }

    const editEmployed = ref(null);

    const setEditData = (index) => {
        editEmployed.value = { ...listEmployed.value[index], index };
    };

    const updateByIndexData = (indexData, dataNewValue) => {
        listEmployed.value[indexData] = {...listEmployed.value[indexData], ...dataNewValue}
    }

    const deleteByIndexData = (indexData) => {
        listEmployed.value.splice(indexData, 1)
    }

    return {
        setData,
        getData,
        addData,
        setEditData,
        updateByIndexData,
        deleteByIndexData,
    }
})