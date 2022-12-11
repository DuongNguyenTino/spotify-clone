import React from 'react'
import IconShuffle from '../../Icons/Shuffle'
import { useSelector, useDispatch } from 'react-redux'
import { setShuffle } from '../../../store/audioSlice'

const ShuffleControl = ({ audioRef }) => {
    const isShuffle = useSelector((state) => state.audio.isShuffle)
    const dispatch = useDispatch()

    const handleShuffle = () => {
        if (isShuffle) {
            dispatch(setShuffle(false))
        } else {
            dispatch(setShuffle(true))
        }
    }

    return (
        <button
            className="lg:mr-8 mr-2 my-0 w-8 h-8 rounded-md sm:flex hidden justify-center items-center trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]"
            title="Shuffle"
            onClick={handleShuffle}
        >
            <IconShuffle
                setColor={`${
                    isShuffle ? 'var(--color-primary)' : 'var(--text-base)'
                }`}
                setWidth="16"
                setHeight="16"
            />
        </button>
    )
}

export default ShuffleControl
