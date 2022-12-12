import React from 'react'
import LyricControl from './LyricControl'
import NextControl from './NextControl'
import PlayControl from './PlayControl'
import PrevControl from './PreControl'
import RepeatControl from './RepeatControl'
import ShuffleControl from './ShuffleControl'
import TrackInfo from './TrackInfo'
import VolumnControl from './VolumnControl'
import VolumnSliderControl from './VolumnSliderControl'
import SongSliderControl from './SongSliderControl'
import { useSelector } from 'react-redux'

const Control = ({ audioRef }) => {
    const isLyric = useSelector((state) => state.audio.isLyric)

    return (
        <>
            <div className="md:hidden">
                <SongSliderControl audioRef={audioRef} />
            </div>
            <div
                className={
                    'flex items-center justify-between h-full mx-[3vw] z-[-1]'
                    + (isLyric ? ' ': ' md:grid md:grid-cols-3')
                }
            >
                <div className={`${isLyric ? 'hidden' : ''}`}>
                    <TrackInfo />
                </div>

                <div className={"flex sm:flex-col sm:justify-evenly justify-end items-center"
              + (isLyric ? ' flex-1' : ' ')
              }>
                    <div className={"flex justify-center items-center"
                  +(isLyric ? ' flex-1': ' ')}>
                        <ShuffleControl audioRef={audioRef} />
                        <PrevControl />
                        <PlayControl audioRef={audioRef} />
                        <NextControl />
                        <RepeatControl />
                    </div>
                    <div className="md:block hidden w-full">
                        <SongSliderControl audioRef={audioRef} />
                    </div>
                </div>

                <div className={'md:flex hidden justify-end items-center'}>
                    <LyricControl />
                    <div className="flex justify-between items-center">
                        <VolumnControl audioRef={audioRef} />
                        <VolumnSliderControl audioRef={audioRef} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Control
