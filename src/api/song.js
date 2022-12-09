import axios from '../utils/axios'

const getSong = async (id) => {
    try {
        const data = await axios.get('/song', {
            params: {
                id: id,
            },
        })
        return data
    } catch (err) {
        console.log(err)
    }
}

const getInfoSong = async (id) => {
    try {
        const data = await axios.get('/infosong', {
            params: {
                id: id,
            },
        })
        return data
    } catch (err) {
        console.log(err)
    }
}

export { getSong, getInfoSong }
