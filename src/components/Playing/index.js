import React, { useEffect, useRef } from 'react'
import Controls from './Control'
import { getSong, getInfoSong } from '../../api/song'
import { useSelector, useDispatch } from 'react-redux'
import {
    setInfoSongPlayer,
    setCurrentTime,
    setDuration,
    setSrcAudio,
    changeIconPlay,
    setSongId,
    setCurrentIndexPlayList,
    setOpenLyric
} from '../../store/audioSlice'
import Lyric from "./Lyric"

const Playing = () => {
    const songId = useSelector((state) => state.audio.songId)
    const srcAudio = useSelector((state) => state.audio.srcAudio)
    const isLoop = useSelector((state) => state.audio.isLoop)
    const isShuffle = useSelector((state) => state.audio.isShuffle)
    const isPlay = useSelector((state) => state.audio.isPlay)

    const currentIndexPlaylist = useSelector(
        (state) => state.audio.currentIndexPlaylist
    )
    
    const playlistSong = useSelector((state) => state.audio.playlistSong)
    const dispatch = useDispatch()

    const audioRef = useRef('')

    useEffect(() => {
        ;(async () => {
            try {
                if (songId === '') {
                    console.log('Không tìm thấy bài hát !')
                } else {
                    const linkSong = await getSong(songId)
                    if(linkSong && linkSong[128]) {
                        linkSong && linkSong[128]
                            ? dispatch(setSrcAudio(linkSong[128]))
                            : dispatch(setSrcAudio(''))
    
                        const infoSong = await getInfoSong(songId)
                        linkSong[128] &&
                            dispatch(
                                setInfoSongPlayer({
                                    title: infoSong.title,
                                    thumbnail: infoSong.thumbnail,
                                    artistsNames: infoSong.artistsNames,
                                    artists: infoSong.artists,
                                })
                            )
                    } else {
                        if(playlistSong !== undefined && playlistSong.length > 0) {
                            let currentIdxSong
                
                            if(currentIndexPlaylist === playlistSong.length - 1) {
                                currentIdxSong = 0
                            } else {
                                currentIdxSong = currentIndexPlaylist + 1
                            }
                
                            dispatch(setCurrentIndexPlayList(currentIdxSong))
                            dispatch(changeIconPlay(true))
                            dispatch(setSongId(playlistSong[currentIdxSong].encodeId))
                        }
                    }
                }
            } catch (err) {
                console.log(err)
            }
        })()
    }, [songId, dispatch, currentIndexPlaylist])

    return (
        <>
            {songId ? (
                <div className="flex flex-col justify-around h-20 backdrop-saturate-[150%] backdrop-blur-[50px] bg-[color:var(--background-card)] fixed inset-x-0 bottom-0 z-[300]
                "
                onClick={() => dispatch(setOpenLyric(true))}
                >
                    <Controls audioRef={audioRef.current} />
                </div>
            ) : (
                ''
            )}
            <audio
                ref={audioRef}
                src={srcAudio}
                className="hidden"
                loop={isLoop}
                autoPlay={isPlay}
                hidden
                onTimeUpdate={() => {
                    if (audioRef.current) {
                        dispatch(setCurrentTime(audioRef.current.currentTime))
                    }
                }}
                onLoadedData={() => {
                    if (audioRef.current) {
                        dispatch(changeIconPlay(isPlay))
                        dispatch(setDuration(audioRef.current.duration))
                    }
                }}
                onEnded={() => {
                    if (!isLoop) {
                        dispatch(setCurrentTime(0))
                        dispatch(changeIconPlay(false))

                        if (
                            playlistSong !== undefined &&
                            playlistSong.length > 0
                        ) {
                            let currentIndex

                            if (!isShuffle) {
                                if (
                                    currentIndexPlaylist ===
                                    playlistSong.length - 1
                                ) {
                                    currentIndex = 0
                                } else {
                                    currentIndex = currentIndexPlaylist + 1
                                }
                            } else {
                                currentIndex = Math.floor(
                                    Math.random() * (playlistSong.length - 1)
                                )
                            }

                            dispatch(setCurrentIndexPlayList(currentIndex))

                            dispatch(
                                setSongId(playlistSong[currentIndex].encodeId)
                            )

                            dispatch(changeIconPlay(true))
                        }
                    }
                }}
            />
            <Lyric audioRef={audioRef.current}/>
        </>
    )
}

export default Playing
