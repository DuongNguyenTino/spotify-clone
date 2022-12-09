import axios from '../utils/axios'

const getMV = async (id) => {
    try {
        const data = await axios.get('/video', {
            params: {
                id: id,
            },
        })
        return data
    } catch (err) {
        console.log(err)
    }
}

const getlistMV = async (id, page, count) => {
    try {
        const data = await axios.get('/listmv', {
            params: {
                id: id,
                page: page,
                count: count,
            },
        })
        return data
    } catch (err) {
        console.log(err)
    }
}

export { getMV, getlistMV }
