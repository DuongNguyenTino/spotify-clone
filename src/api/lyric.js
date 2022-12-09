import axios from "../utils/axios";

const getLyric = async (id) => {
    try {
        const data = await axios.get("/lyric", {
            params: {
                id: id,
            },
        })
        return data
    } catch (err) {
        console.log(err)
    }
}

export { getLyric }
