import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TrackInfo = ({closeLyric}) => {
    const isPlay = useSelector((state) => state.audio.isPlay)
    const info = useSelector((state) => state.audio.infoSongPlayer)
    const isLyric = useSelector((state) => state.audio.isLyric)

    return (
        <div className={ "flex items-center w-full" + (isLyric ? ' inline-block ' : ' ')}>
            <img
                src={info.thumbnail}
                alt={info.title}
                className={`${isLyric ? 'hidden' : ''} h-[56px] w-[56px] rounded-full object-contains
        `}
                style={{
                    animation: `${isPlay ? 'spinImg 6s linear infinite' : ''}`,
                }}
            />

            <div className={"flex flex-col justify-center h-[46px] ml-3 lg:w-60 w-40"
        + (isLyric ? ' w-60' : ' ')    
        } 
            >
                <div
                    className="font-semibold xl:text-lg text-[color:var(--text-highlight)] opacity-90 mb-1 cursor-default capitalize
        lg:text-md truncate
        "
                >
                    {info.title}
                </div>
                <div
                    className="flex text-[color:var(--text-base)] text-xs opacity-60 truncate"
                    onClick={(e) => {e.stopPropagation()
                        closeLyric()
                    }}
                >
                    {info.artists &&
                        info.artists.map((e, i) => {
                            return (
                                <span key={i}>
                                    {i > 0 ? <span>, </span> : ''}
                                    <Link
                                        className="hover:underline"
                                        to={`/artist/${e.alias}`}
                                    >
                                        {e.name}
                                    </Link>
                                </span>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default TrackInfo
