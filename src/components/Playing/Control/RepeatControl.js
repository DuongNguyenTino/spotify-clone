import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLoop } from '../../../store/audioSlice'
import IconRepeat from '../../Icons/Repeat'

const RepeatControl = () => {
    const dispatch = useDispatch()
    const isLoop = useSelector((state) => state.audio.isLoop)
    const isLyric = useSelector((state) => state.audio.isLyric)

    const handleRepeatSong = (e) => {
        e.stopPropagation()
        if(isLoop) {
            dispatch(setLoop(false))
        } else {
            dispatch(setLoop(true))
        }
    }

    return (
        <button className={'lg:ml-8 ml-2 my-0 w-8 h-8 rounded-md sm:flex justify-center items-center trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]'
        + (isLyric ? ' flex w-14 h-14': ' hidden')
        } title='Repeat' onClick={handleRepeatSong}>
            <IconRepeat setColor={`${ isLoop ? 'var(--color-primary)' : 'var(--text-base)'} `} setHeight={isLyric ? ' 24' : '16'} setWidth={isLyric ? ' 24' : '16'}/>
        </button>  
    )
}

export default RepeatControl
