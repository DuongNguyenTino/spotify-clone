import React from "react"
import LyricControl from "./LyricControl"
import NextControl from "./NextControl"
import PlayControl from "./PlayControl"
import PrevControl from "./PreControl"
import RepeatControl from "./RepeatControl"
import ShuffleControl from "./ShuffleControl"
import TrackInfo from "./TrackInfo"
import VolumnControl from "./VolumnControl"
import VolumnSliderControl from "./VolumnSliderControl"
import SongSliderControl from "./SongSliderControl"

const Control = ({ audioRef }) => {

  return (
    <>
      <div className="grid grid-cols-3 h-full mx-[3vw] z-[-1]">
        <TrackInfo />

        <div className="flex flex-col justify-evenly items-center">
          <div className="flex justify-center items-center">    
            <ShuffleControl audioRef={audioRef}/>
            <PrevControl />
            <PlayControl audioRef={audioRef} />
            <NextControl />
            <RepeatControl />
          </div>
          <SongSliderControl audioRef={audioRef}/>
        </div>

        <div className="flex justify-between items-center">
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
