import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentIndexPlayList, changeIconPlay, setSongId } from '../../../store/audioSlice'
import IconPrev from '../../Icons/Previous'

const PrevControl = () => {
    const dispatch = useDispatch()
    const currentIndexPlaylist = useSelector((state) => state.audio.currentIndexPlaylist)
    const playlistSong = useSelector((state) => state.audio.playlistSong)
    const isLyric = useSelector((state) => state.audio.isLyric)

    const handlePrevSong = (e) => {
        e.stopPropagation()
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
        <button className={'w-8 h-8 rounded-md sm:flex justify-center items-center trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]'
        + (isLyric ? ' flex w-14 h-14' : ' hidden')
        } title='Previous' onClick={handlePrevSong}>
            <IconPrev setColor='var(--text-highlight)' setHeight={isLyric ? '28' : '20'} setWidth={isLyric ? '28' : '20'}/>
        </button>  
    )
}

export default PrevControl
