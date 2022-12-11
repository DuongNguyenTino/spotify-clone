import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isPlay: false,
    isMute: false,
    songId: localStorage.getItem('songId') || '',
    currentIndexPlaylist: 0,
    infoSongPlayer: {
        title: "",
        thumbnail: "",
        artistsNames: "",
        artists: [],
    },
    srcAudio: "",
    currentTime: 0,
    duration: 0,
    volumn: Number(localStorage.getItem("volumn")) || 1,
    isLoop: false,
    isShuffle: false,
    autoPlay: false,
    playlistSong: [],
    isLyric: false,
    activeUrl: window.location.href,
}

const audioSlice = createSlice({
    name: 'audio',
    initialState,
    reducers: {
      changeIconPlay: (state, action) => {
        state.isPlay = action.payload
      },

      changeIconVolumn: (state, action) => {
        state.isMute = action.payload
      },

      setSongId: (state, action) => {
        state.songId = action.payload
        localStorage.setItem('songId', action.payload)
      },

      setCurrentIndexPlayList: (state, action) => {
        state.currentIndexPlaylist = action.payload
      },

      setInfoSongPlayer: (state, action) => {
        state.infoSongPlayer = {
            ...state.infoSongPlayer,
            ...action.payload
        }
      },

      setSrcAudio: (state, action) => {
        state.srcAudio = action.payload
      },

      setCurrentTime: (state, action) => {
        state.currentTime = action.payload
      },

      setDuration: (state, action) => {
        state.duration = action.payload
      },

      setVolumn: (state, action) => {
        state.volumn = action.volumn
      },

      setLoop: (state, action) => {
        state.isLoop = action.payload
      },

      setShuffle: (state, action) => {
        state.isShuffle = action.payload
      },

      setAutoPlay: (state, action) => {
        state.autoPlay = action.payload
      },

      setPlayListSong: (state, action) => {
        state.playlistSong = action.payload
      },

      setOpenLyric: (state, action) => {
        state.isLyric = action.payload
      },

      setActiveUrl: (state, action) => {
        state.activeUrl = action.payload
      }
    }
})
  
export const { 
    changeIconPlay,
    changeIconVolumn,
    setSongId,
    setCurrentIndexPlayList,
    setInfoSongPlayer,
    setSrcAudio,
    setCurrentTime,
    setDuration,
    setVolumn,
    setLoop,
    setShuffle,
    setAutoPlay,
    setPlayListSong,
    setOpenLyric,
    setActiveUrl
} = audioSlice.actions
export default audioSlice.reducer