import axios from '../utils/axios'

const getDetailPlaylist = async(id) => {
	try {
		const data = axios.get('/detailplaylist', {
			params: {
				id : id
			}
		})
		return data
	} catch(err) {
		console.log(err)
	}
}

export { getDetailPlaylist }