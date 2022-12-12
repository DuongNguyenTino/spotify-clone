import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeIconVolumn, setVolumn } from '../../../store/audioSlice'
import IconVolumn from '../../Icons/Volumn'
import IconVolumnMute from '../../Icons/VolumnMute'

const VolumnControl = ({audioRef}) => {
    const dispatch = useDispatch()
    const isMute = useSelector((state) => state.audio.isMute)

    const handleVolumnSong = (e) => {
        e.stopPropagation()
        if(isMute) {
            dispatch(changeIconVolumn(false))
            dispatch(setVolumn(
                Number(localStorage.getItem('volumn'))
            ))
            if(audioRef) {
                audioRef.volume = Number(localStorage.getItem('volumn'))
            }
        } else {
            dispatch(changeIconVolumn(true))
            dispatch(setVolumn(0))
            if(audioRef) {
                audioRef.volume = 0
            }
        }
    }

    return (
        <button className='mx-2 my-0 w-8 h-8 rounded-md flex justify-center items-center trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]'
        title={`${isMute ? 'Muted' : 'Volume'}`}
        onClick={handleVolumnSong}>
            {isMute ? <IconVolumnMute setColor='var(--text-base)' className='md:w-[20px] md:h-[20px] w-[16px] h-[16px]'/> :<IconVolumn setColor='var(--text-base)' className='md:w-[20px] md:h-[20px] w-[16px] h-[16px]'/>}
        </button>  
    )
}

export default VolumnControl
