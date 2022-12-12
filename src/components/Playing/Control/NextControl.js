import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentIndexPlayList, changeIconPlay, setSongId } from '../../../store/audioSlice'
import IconNext from '../../Icons/Next'

const NextControl = () => {
    const dispatch = useDispatch()
    const currentIndexPlaylist = useSelector((state) => state.audio.currentIndexPlaylist)
    const playlistSong = useSelector((state) => state.audio.playlistSong)
    const isLyric = useSelector((state) => state.audio.isLyric)

    const handleNextSong = (e) => {
        e.stopPropagation()
        if(playlistSong !== undefined && playlistSong.length > 0) {
            let currentIdxSong

            if(currentIndexPlaylist === playlistSong.length - 1) {
                currentIdxSong = 0
            } else {
                currentIdxSong = currentIndexPlaylist + 1
            }

            dispatch(setCurrentIndexPlayList(currentIdxSong))
            dispatch(changeIconPlay(true))
            dispatch(setSongId(playlistSong[currentIdxSong].encodeId))
        }
    }

    return (
        <button className={'w-8 h-8 rounded-md flex justify-center items-center trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]'
        + (isLyric ? ' w-14 h-14': '')} title='Next' onClick={handleNextSong}>
            <IconNext setColor='var(--text-highlight)' setHeight={isLyric ? '28' : '20'} setWidth={isLyric ? '28' : '20'}/>
        </button>  
    )
}

export default NextControl
