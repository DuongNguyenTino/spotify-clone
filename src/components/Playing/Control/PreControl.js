import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentIndexPlayList, changeIconPlay, setSongId } from '../../../store/audioSlice'
import IconPrev from '../../Icons/Previous'

const PrevControl = () => {
    const dispatch = useDispatch()
    const currentIndexPlaylist = useSelector((state) => state.audio.currentIndexPlaylist)
    const playlistSong = useSelector((state) => state.audio.playlistSong)

    const handlePrevSong = () => {
        if(playlistSong !== undefined && playlistSong.length > 0) {
            let currentIdxSong

            if(currentIndexPlaylist === 0) {
                currentIdxSong = playlistSong.length - 1
            } else {
                currentIdxSong = currentIndexPlaylist - 1
            }

            dispatch(setCurrentIndexPlayList(currentIdxSong))
            dispatch(changeIconPlay(true))
            dispatch(setSongId(playlistSong[currentIdxSong].encodeId))
        }
    }

    return (
        <button className='w-8 h-8 rounded-md flex justify-center items-center trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]' title='Previous' onClick={handlePrevSong}>
            <IconPrev setColor='var(--text-highlight)' setHeight='20' setWidth='20'/>
        </button>  
    )
}

export default PrevControl
