import axios from '../utils/axios'

const getSearch = async (keyword) => {
    try {
        const data = await axios.get('/search', {
            params: {
                keyword: keyword,
            },
        })
        return data
    } catch (err) {
        console.log(err)
    }
}

export { getSearch }
