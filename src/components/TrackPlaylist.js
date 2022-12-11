import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { formatTime } from '../utils/formatTime'
import MusicIcon from '../components/Icons/Music'
import {
    setSongId,
    changeIconPlay,
    setAutoPlay,
    setCurrentIndexPlayList,
} from '../store/audioSlice'

const TrackPlaylist = ({ items, categary }) => {
    const currentIndexPlaylist = useSelector(
        (state) => state.audio.currentIndexPlaylist
    )

    const songId = useSelector((state) => state.audio.songId)

    const dispatch = useDispatch()

    const handleClickPlaySong = (streamingStatus, encodeId, currentIndex) => {
        if (streamingStatus === 1) {
            dispatch(setSongId(encodeId))
            dispatch(setCurrentIndexPlayList(currentIndex))
            dispatch(changeIconPlay(true))
            dispatch(setAutoPlay(true))
        }
    }

    return (
        <div>
            {items.map((e, i) => {
                return (
                    <div
                        key={i}
                        className={
                            'flex items-center truncate p-2 rounded-lg transition-all duration-300 ' +
                            (e.streamingStatus === 1
                                ? 'cursor-pointer'
                                : 'cursor-default hover:bg-[color:var(--background-press)]') +
                            (currentIndexPlaylist === i && songId === e.encodeId
                                ? ' bg-[color:var(--background-press)]'
                                : ' hover:bg-[color:var(--background-model-hover-items)]')
                        }
                    >
                        {categary === 'zingchart' ? (
                            <div
                                className={`sm:mr-4 mr-2
                                ${i === 0 && 'text-[blue]'}
                                ${i === 1 && 'text-[green]'}
                                ${i === 2 && 'text-[red]'}
                                text-[color:var(--text-base)]
                                flex flex-col items-center justify-between
                                font-bold text-2xl
                                w-10
                                `}
                                onClick={() => {
                                    handleClickPlaySong(
                                        e.streamingStatus,
                                        e.encodeId,
                                        i
                                    )
                                }}
                            >
                                {i + 1}
                                <p className='m-0 p-0 w-[6px] h-[6px] bg-[color:var(--text-base)] rounded-full'>   
                                </p>
                            </div>
                        ) : (
                            <div
                                className="text-[color:var(--text)] sm:mr-4 mr-2"
                                onClick={() => {
                                    handleClickPlaySong(
                                        e.streamingStatus,
                                        e.encodeId,
                                        i
                                    )
                                }}
                            >
                                <MusicIcon
                                    setColor={`${
                                        currentIndexPlaylist === i &&
                                        songId === e.encodeId
                                            ? 'var(--color-primary)'
                                            : 'var(--text-base)'
                                    }`}
                                    className={`sm:w-11 sm:h-11 w-8 h-8`}
                                />
                            </div>
                        )}
                        <img
                            className="rounded-lg sm:w-[46px] sm:h-[46px] w-[36px] h-[36px] mr-5"
                            src={e.thumbnail}
                            alt={e.title}
                            onClick={() => {
                                handleClickPlaySong(
                                    e.streamingStatus,
                                    e.encodeId,
                                    i
                                )
                            }}
                        />
                        <div
                            className="flex flex-1 flex-col truncate"
                            onClick={() => {
                                handleClickPlaySong(
                                    e.streamingStatus,
                                    e.encodeId,
                                    i
                                )
                            }}
                        >
                            <div
                                className={
                                    'sm:text-lg text-md font-semibold truncate capitalize' +
                                    (currentIndexPlaylist === i &&
                                    songId === e.encodeId
                                        ? ' text-[color:var(--color-primary)]'
                                        : ' text-[color:var(--text-highlight)]')
                                }
                            >
                                {e.title}
                            </div>
                            <div
                                className={
                                    'mt-[2px] sm:text-sm text-xs opacity-70 truncate font-medium' +
                                    (currentIndexPlaylist === i &&
                                    songId === e.encodeId
                                        ? ' text-[color:var(--color-primary)]'
                                        : ' text-[color:var(--text-base)]')
                                }
                                onClick={(e) => e.stopPropagation()}
                            >
                                {(e.artists || [])
                                    .filter((element) => {
                                        return element !== undefined
                                    })
                                    .map((eArtist, iArtist) => {
                                        return (
                                            <span key={iArtist}>
                                                {iArtist > 0 ? (
                                                    <span>, </span>
                                                ) : (
                                                    ''
                                                )}
                                                <Link
                                                    className="hover:underline"
                                                    to={`/artist/${eArtist.alias}`}
                                                >
                                                    {eArtist.name}
                                                </Link>
                                            </span>
                                        )
                                    })}
                            </div>
                        </div>
                        <div className="text-yellow-500 font-medium mr-4">
                            {e.streamingStatus === 1 ? '' : 'VIP'}
                        </div>
                        <div
                            className={
                                'font-medium sm:text-md text-sm' +
                                (currentIndexPlaylist === i &&
                                songId === e.encodeId
                                    ? ' text-[color:var(--color-primary)]'
                                    : ' text-[color:var(--text-base)]')
                            }
                        >
                            {formatTime(e.duration)}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TrackPlaylist
