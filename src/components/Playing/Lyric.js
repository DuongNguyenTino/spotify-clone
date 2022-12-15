import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLyric } from '../../api/lyric'
import ArrowDown from '../../components/Icons/ArrowDown'
import { setOpenLyric } from '../../store/audioSlice'
import TrackInfo from './Control/TrackInfo'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../components/Icons/ArrowLeft'
import ArrowRight from '../../components/Icons/ArrowRight'

const Lyric = ({ audioRef }) => {
    const dispatch = useDispatch()
    const songId = useSelector((state) => state.audio.songId)
    const [lyric, setLyric] = useState([])
    const currentTime = useSelector((state) => state.audio.currentTime)
    const lyricRef = useRef(null)
    const isLyric = useSelector((state) => state.audio.isLyric)
    const info = useSelector((state) => state.audio.infoSongPlayer)
    const isPlay = useSelector((state) => state.audio.isPlay)
    const [isShowLyric, setIsShowLyric] = useState(false)

    useEffect(() => {
        ;(async () => {
            if (songId) {
                const data = await getLyric(songId)
                const customLyric = []
                data &&
                    data.sentences &&
                    data.sentences.forEach((element, i) => {
                        let customLyricOnLine = []
                        let lineLyric = ''
                        let startTimeLine = 0
                        let endTimeLine = 0
                        element.words &&
                            element.words.forEach((e, i) => {
                                customLyricOnLine.push({
                                    startTime: e.startTime,
                                    endTime: e.endTime,
                                    data: e.data,
                                })

                                if (i === 0) {
                                    startTimeLine = e.startTime
                                }
                                if (
                                    Array.isArray(element.words) &&
                                    i === element.words.length - 1
                                ) {
                                    endTimeLine = e.endTime
                                }
                                lineLyric += e.data + ' '
                            })
                        customLyric.push({
                            startTime: startTimeLine,
                            endTime: endTimeLine,
                            data: lineLyric,
                            dataOnLine: customLyricOnLine,
                        })
                    })
                setLyric(customLyric)
            }
        })()
    }, [songId])

    useEffect(() => {
        document.getElementById(`dot_start_lyric`)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }, [songId])
    // console.log(lyric);

    const checkIndexVer = () => {
        let indexVer = 0
        let endTimeVer = 0
        let startTimeNewVer = 1
        if (lyric) {
            for (let i = 1; i < lyric.length; i++) {
                if (lyric[i] && lyric[i + 1]) {
                    endTimeVer = lyric[i].endTime
                    startTimeNewVer = lyric[i + 1].startTime
                    if (startTimeNewVer - endTimeVer > 5000) {
                        indexVer = i + 1
                        break
                    }
                }
            }
            return indexVer
        }
    }

    const handleCloseLyric = () => {
        if (isLyric) {
            if (lyricRef.current) {
                lyricRef.current.classList.remove('animate-[lyric-up_1s]')
                lyricRef.current.classList.add('animate-[lyric-down_1s]')
            }
            setTimeout(() => {
                dispatch(setOpenLyric(false))
            }, 1000)
        } else {
            dispatch(setOpenLyric(true))
        }
    }

    return (
        <>
            <div
                className={
                    'fixed top-0 inset-x-0 bottom-20 z-[200] bg-[color:var(--background-base)] transition-all ease-linear duration-300 ' +
                    (isLyric ? 'animate-[lyric-up_1s]' : 'hidden')
                }
                ref={lyricRef}
            >
                <div className="flex border-b items-center">
                    <button
                        className="p-2 mx-3 my-3 bg-transparent rounded-[25%] transition-all duration-200 hover:bg-[color:var(--background-model-hover-items)]"
                        title="Close"
                        onClick={handleCloseLyric}
                    >
                        <ArrowDown
                            setColor="white"
                            setWidth="24px"
                            setHeight="24px"
                        />
                    </button>
                    <div className="flex-1">
                        <TrackInfo closeLyric={handleCloseLyric} />
                    </div>
                    {!isShowLyric ? (
                        <div className="p-3 mx-3 flex items-center justify-center"
                        onClick={() => setIsShowLyric(true)}
                        >
                            <ArrowRight
                                setColor="white"
                                setWidth="28px"
                                setHeight="28px"
                            />
                        </div>
                    ) : (
                        <div className='p-3 mx-3 flex items-center justify-center'
                        onClick={() => setIsShowLyric(false)}
                        >
                            <ArrowLeft
                                setColor="white"
                                setWidth="28px"
                                setHeight="28px"
                            />
                        </div>
                    )}
                </div>
                <div className="lyric_scroll font-semibold text-2xl max-w-2xl mx-auto h-full flex flex-col overflow-y-auto overflow-x-hidden">
                    <div className={(isShowLyric ? " xl:translate-x-[-1547px] lg:translate-x-[-1280px] md:translate-x-[-1025px] translate-x-[-769px] ": ' translate-x-0 ') + " fixed z-[500] top-16 bottom-20 inset-x-0 bg-[color:var(--background-base)] transition-all duration-500 overflow-y-auto overflow-x-hidden"
                
                }>
                        <img
                            src={info.thumbnail}
                            alt={info.title}
                            className={`m-auto mt-20 max-h-[320px] max-w-[320px] rounded-full object-contains`}
                            style={{
                                animation: `${
                                    isPlay ? 'spinImg 6s linear infinite' : ''
                                }`,
                            }}
                        />
                        <div className={'w-11/12 mt-20 mx-4'}>
                            <div className="font-semibold text-center text-4xl text-[color:var(--text-highlight)] opacity-90 mb-1 cursor-default capitalize">
                                {info.title}
                            </div>
                            <div
                                className="flex flex-wrap text-[color:var(--text-base)] items-center justify-center text-2xl opacity-60 my-8"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleCloseLyric()
                                }}
                            >
                                {info.artists &&
                                    info.artists.map((e, i) => {
                                        return (
                                            <span key={i}>
                                                {i > 0 ? <span>, </span> : ''}
                                                <Link
                                                    className="underline text-center"
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
                    {lyric &&
                        lyric.map((e, i) => {
                            if (
                                e.startTime <= currentTime * 1000 &&
                                currentTime * 1000 <= e.endTime
                            ) {
                                document
                                    .getElementById(`line-${i}`)
                                    ?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'center',
                                    })
                            }

                            return (
                                <div key={i}>
                                    {lyric[i] &&
                                        (i === 0 || i === checkIndexVer()) && (
                                            <div
                                                id="dot_start_lyric"
                                                className={
                                                    'flex items-center justify-start my-[8px] mx-0 px-[18px] py-3 ' +
                                                    (lyric[i].startTime -
                                                        currentTime * 1000 <=
                                                    0
                                                        ? ' opacity-0'
                                                        : ' opacity-100')
                                                }
                                            >
                                                <p
                                                    className={
                                                        'w-3 h-3 mr-2 rounded-full bg-[color:var(--text-highlight)]' +
                                                        (lyric[i].startTime -
                                                            currentTime *
                                                                1000 <=
                                                        0
                                                            ? ' opacity-0'
                                                            : ' opacity-100')
                                                    }
                                                ></p>
                                                <p
                                                    className={
                                                        'w-3 h-3 mr-2 rounded-full bg-[color:var(--text-highlight)]' +
                                                        (lyric[i].startTime -
                                                            currentTime *
                                                                1000 <=
                                                        1000
                                                            ? ' opacity-0'
                                                            : ' opacity-100')
                                                    }
                                                ></p>
                                                <p
                                                    className={
                                                        'w-3 h-3 rounded-full bg-[color:var(--text-highlight)]' +
                                                        (lyric[i].startTime -
                                                            currentTime *
                                                                1000 <=
                                                        2000
                                                            ? ' opacity-0'
                                                            : ' opacity-100')
                                                    }
                                                ></p>
                                            </div>
                                        )}
                                    <div
                                        id={`line-${i}`}
                                        className={
                                            'text-[color:var(--text-highlight)] flex flex-wrap cursor-pointer my-[2px] mx-0 px-[18px] py-3 rounded-xl transition-all duration-500 hover:bg-[color:var(--background-cardhover)] box-border ' +
                                            (e.startTime <=
                                                currentTime * 1000 &&
                                            currentTime * 1000 <= e.endTime
                                                ? 'origin-[center_left] opacity-100 text-[color:var(--text-highlight)]'
                                                : 'opacity-30')
                                        }
                                        onClick={() => {
                                            if (audioRef) {
                                                audioRef.currentTime =
                                                    e.startTime / 1000
                                            }
                                        }}
                                    >
                                        {e.dataOnLine.map((element, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className={
                                                        'mr-2 transition-all linear duration-500' +
                                                        (e.startTime <=
                                                            currentTime *
                                                                1000 &&
                                                        currentTime * 1000 <=
                                                            element.endTime
                                                            ? ' text-[color:var(--color-primary)]'
                                                            : ' text-[color:var(--text-highlight)]')
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            'inline-block'
                                                        }
                                                    >
                                                        {element.data}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    <div className="mb-16"></div>
                </div>
            </div>
        </>
    )
}

export default Lyric
