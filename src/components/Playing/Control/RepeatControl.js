import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLoop } from '../../../store/audioSlice'
import IconRepeat from '../../Icons/Repeat'

const RepeatControl = () => {
    const dispatch = useDispatch()
    const isLoop = useSelector((state) => state.audio.isLoop)

    const handleRepeatSong = () => {
        if(isLoop) {
            dispatch(setLoop(false))
        } else {
            dispatch(setLoop(true))
        }
    }

    return (
        <button className='ml-8 my-0 w-8 h-8 rounded-md flex justify-center items-center trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]' title='Repeat' onClick={handleRepeatSong}>
            <IconRepeat setColor={`${ isLoop ? 'var(--color-primary)' : 'var(--text-base)'} `} setHeight='16' setWidth='16'/>
        </button>  
    )
}

export default RepeatControl
