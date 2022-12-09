import axios from "../utils/axios";

const getArtist = async (name) => {
    try {
        const data = await axios.get("/artist", {
            params: {
                name: name,
            },
        })
        return data
    } catch (err) {
        console.log(err)
    }
}

const getArtistSong = async (artistId, page, count) => {
    try {
        const data = await axios.get("/artistsong", {
            params: {
                id: artistId,
                page: page,
                count: count,
            },
        })
        return data
    } catch (err) {
        console.log(err)
    }
};

export { getArtist, getArtistSong }
