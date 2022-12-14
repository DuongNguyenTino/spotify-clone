import axios from '../utils/axios'

const getCharthome = async () => {
    try {
        const data = await axios.get('/charthome')
        return data
    } catch (err) {
        console.log(err)
    }
}

const getNewReleaseChart = async () => {
    try {
        const data = await axios.get('/newreleasechart')
        return data
    } catch (err) {
        console.log(err)
    }
}

export { getCharthome, getNewReleaseChart }
