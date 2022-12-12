import React from "react"
import IconPlay from "../../Icons/Play"
import IconPause from "../../Icons/Pause"
import { useSelector, useDispatch } from "react-redux"
import { changeIconPlay } from "../../../store/audioSlice"

const PlayControl = ({ audioRef }) => {

  const isPlay = useSelector((state) => state.audio.isPlay)
  const dispatch = useDispatch()
  const isLyric = useSelector((state) => state.audio.isLyric)

  const handlePlaySong = (e) => {
    e.stopPropagation()
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
      className={`w-11 h-11 rounded-md mx-4 my-0 flex justify-center items-center
      trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]
      ${isLyric ? ' w-20' : ''}
      `}
      title="Play"
      onClick={ handlePlaySong }
    >
      {
        isPlay
        ? <IconPause setColor="white" setWidth={isLyric ? '34' : '26'} setHeight={isLyric ? '34' : '26'}/>
        : <IconPlay setColor="white" setWidth={isLyric ? '34' : '26'} setHeight={isLyric ? '34' : '26'}/>
      }
    </button>
  )
}

export default PlayControl