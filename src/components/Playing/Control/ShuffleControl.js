import React from 'react'
import IconShuffle from '../../Icons/Shuffle'
import { useSelector, useDispatch } from 'react-redux'
import { setShuffle } from '../../../store/audioSlice'

const ShuffleControl = ({ audioRef }) => {
    const isShuffle = useSelector((state) => state.audio.isShuffle)
    const dispatch = useDispatch()
    const isLyric = useSelector((state) => state.audio.isLyric)

    const handleShuffle = (e) => {
        e.stopPropagation()
        if (isShuffle) {
            dispatch(setShuffle(false))
        } else {
            dispatch(setShuffle(true))
        }
    }

    return (
        <button
            className={"lg:mr-8 mr-2 my-0 w-8 h-8 rounded-md sm:flex justify-center items-center trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]"
        + (isLyric ? ' flex w-12 h-12': ' hidden')
        }
            title="Shuffle"
            onClick={handleShuffle}
        >
            <IconShuffle
                setColor={`${
                    isShuffle ? 'var(--color-primary)' : 'var(--text-base)'
                }`}
                setWidth={isLyric ? ' 24' : '16'}
                setHeight={isLyric ? ' 24' : '16'}
            />
        </button>
    )
}

export default ShuffleControl
