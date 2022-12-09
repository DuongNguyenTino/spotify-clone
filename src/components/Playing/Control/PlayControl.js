import React from "react"
import IconPlay from "../../Icons/Play"
import IconPause from "../../Icons/Pause"
import { useSelector, useDispatch } from "react-redux"
import { changeIconPlay } from "../../../store/audioSlice"

const PlayControl = ({ audioRef }) => {

  const isPlay = useSelector((state) => state.audio.isPlay)
  const dispatch = useDispatch()

  const handlePlaySong = () => {
    if(isPlay === true) {
      dispatch(changeIconPlay( false ))
      if(audioRef) {
        audioRef.pause()
      }
    } else {
      dispatch(changeIconPlay( true ))
      if(audioRef) {
        audioRef.play()
      }
    }
  }

  return (
    <button
      className="w-11 h-11 rounded-md mx-4 my-0 flex justify-center items-center
      trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]"
      title="Play"
      onClick={ handlePlaySong }
    >
      {
        isPlay
        ? <IconPause setColor="white" setWidth="26" setHeight="26"/>
        : <IconPlay setColor="white" setWidth="26" setHeight="26"/>
      }
    </button>
  )
}

export default PlayControl