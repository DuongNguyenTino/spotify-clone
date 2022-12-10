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

const TrackPlaylist = ({ items }) => {
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
                        <div
                            className="text-[color:var(--text)] mr-4"
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
                                setHeight="42"
                                setWidth="42"
                            />
                        </div>
                        <img
                            className="rounded-lg w-[46px] h-[46px] mr-5"
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
                            className="flex flex-1 flex-col"
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
                                    'text-lg font-semibold truncate capitalize' +
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
                                    'mt-[2px] text-sm opacity-70 truncate font-medium' +
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
                                'font-medium ' +
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
