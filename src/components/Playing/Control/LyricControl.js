import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setOpenLyric } from '../../../store/audioSlice'
import IconLyric from '../../Icons/Lyric'

const LyricControl = () => {
    const dispatch = useDispatch()
    const isLyric = useSelector((state) => state.audio.isLyric)

    const handleOpenLyric = () => {
        isLyric ? 
        dispatch(setOpenLyric(false))
        : dispatch(setOpenLyric(true))
    }

    return (
        <div className=''
            onClick={handleOpenLyric}
        >
            <button className={`mx-2 my-1 ml-14 w-8 h-8 rounded-md flex justify-center items-center trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]
            ${isLyric ? 'hidden' : ''}
            `} title='Lyric'>
                <IconLyric setColor='var(--text-base)' className='md:w-[20px] md:h-[20px] w-[16px] h-[16px]'/>
            </button>  
        </div>
    )
}

export default LyricControl
