import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const TrackInfo = () => {
  const isPlay = useSelector((state) => state.audio.isPlay)
  const info = useSelector((state) => state.audio.infoSongPlayer)

  return(
    <div className="flex items-center">
      <img
        src={info.thumbnail}
        alt={info.title}
        className={`h-16 rounded-full object-contains
        `}
        style={{
          animation: `${isPlay ? 'spinImg 5s linear infinite' : ''}`
        }}
      />

      <div className="flex flex-col justify-center h-[46px] ml-3">
        <div className="font-semibold text-lg text-[color:var(--text-highlight)] opacity-90 mb-1 truncate cursor-default capitalize">{info.title}</div>
        <div className="flex text-[color:var(--text-base)] text-xs opacity-60">
        {
          info.artists &&
          info.artists.map((e, i) => {
            return (
              <span key={i}>
                {
                  (i > 0) ? (<span>, </span>) : ("")
                }
                <Link
                  className="hover:underline"
                  to={`/artist/${e.alias}`}
                >
                  {e.name}
                </Link>
              </span>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default TrackInfo
