import axios from "../utils/axios"

const getHomePlayList = async () => {
    try {
        const data = await axios.get("/home")
        return data.items.filter((e) => e.sectionType === "playlist")
    } catch (err) {
        console.log(err)
    }
}

export { getHomePlayList }
