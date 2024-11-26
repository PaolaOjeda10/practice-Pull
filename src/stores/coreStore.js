import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore('coreStore', () => {
    const data = ref([
        {
            name:'nameOne',
            lastName:'lastNmaeOne'
        },
        {
            name:'nameTWo',
            lastName:'lastNmaeTwo'
        },
        {
            name:'nameThree',
            lastName:'lastNmaeThree'
        },
    ])


    const setData = (newData) => {
        data.value = newData
    }

    const getData = () => {
        return JSON.parse(JSON.stringify(data.value))
    }
    const addData = (dataNew) => {
        data.value.push(dataNew)
    }

    const updateByIndexData = (indexData, dataNewValue) => {
        data.value[indexData] = {...data.value[indexData], ...dataNewValue}
    }
    const deleteByIndexData = (indexDatan) => {
        data.value.splice(indexDatan, 1)
    }

    return {
        setData,
        getData,
        addData,
        updateByIndexData,
        deleteByIndexData
    }
})