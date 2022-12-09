import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import IconHeart from '../components/Icons/Heart'
import { useParams } from 'react-router-dom'
import { getDetailPlaylist } from '../api/detailPlaylist'
import Loading from '../components/Icons/Loading'
import TrackPlaylist from '../components/TrackPlaylist'
import { setPlayListSong } from '../store/audioSlice'

const Playlist = () => {
    const [detailPlaylist, setDetailPlaylist] = useState()

    const params = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        ;(async () => {
            if (params.playlistId) {
                const detailPlaylist = await getDetailPlaylist(
                    params.playlistId
                )
                setDetailPlaylist(detailPlaylist)
                dispatch(setPlayListSong(detailPlaylist.song.items))
            }
        })()
    }, [params, dispatch])

    return (
        <>
            <div className="mx-[5vw] mt-20">
                {detailPlaylist ? (
                    <>
                        <div className="flex md:flex-row sm:flex-col my-[72px]">
                            <div className="relative xl:min-w-[288px] xl:min-h-[288px]
                            md:min-w-[200px] md:min-h-[200px]
                            ">
                                <img
                                    className="rounded-xl w-full h-full"
                                    src={detailPlaylist.thumbnailM}
                                    alt=""
                                />
                                <div
                                    className="absolute top-3 w-full h-full z-[-1] bg-cover rounded-xl blur-md scale-95"
                                    style={{
                                        backgroundImage: `url(${detailPlaylist.thumbnailM})`,
                                    }}
                                ></div>
                            </div>
                            <div className="flex flex-col justify-between lg:ml-14 md:ml-6 md:mt-0 sm:mt-6">
                                <div className="xl:text-4xl lg:text-2xl md:text-xl font-bold text-[color:var(--text-highlight)]">
                                    {detailPlaylist.title}
                                </div>

                                <div className="lg:text-lg md:text-sm mt-6">
                                    <span className=" opacity-80 text-[color:var(--text-base)] ">
                                        Playlist by{' '}
                                    </span>
                                    {detailPlaylist.artists &&
                                        detailPlaylist.artists.map((e, i) => {
                                            return (
                                                <span key={i}>
                                                    {i > 0 ? (
                                                        <span>, </span>
                                                    ) : (
                                                        ''
                                                    )}
                                                    <Link
                                                        className="text-[color:var(--text-base)] hover:underline opacity-100 font-medium"
                                                        to={`/artist/${e.alias}`}
                                                    >
                                                        {e.name}
                                                    </Link>
                                                </span>
                                            )
                                        })}
                                </div>

                                <div className="hidden lg:flex items-center text-sm opacity-70 font-medium text-[color:var(--text-base)] mt-[2px]">
                                    <span className="mr-3">
                                        Updated at{' '}
                                        {new Date(
                                            detailPlaylist.contentLastUpdate *
                                                1000
                                        ).toLocaleDateString('vi-VN')}
                                    </span>
                                    <span className="mr-3">
                                        {detailPlaylist.total} Songs
                                    </span>
                                    <span className="flex items-center">
                                        <IconHeart
                                            setColor="var(--color-primary)"
                                            setWidth="16px"
                                            setHeight="16px"
                                        />
                                        {detailPlaylist.like}
                                    </span>
                                </div>

                                <div
                                    className="text-sm opacity-70 font-medium text-[color:var(--text-base)] mt-6"
                                    style={{
                                        maxWidth: '100%',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 3,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    {detailPlaylist.description}
                                </div>

                            </div>
                        </div>
                        <TrackPlaylist items={detailPlaylist.song.items} />
                    </>
                ) : (
                    <Loading setColor="white" setHeight="30" setWidth="30" />
                )}
            </div>
        </>
    )
}

export default Playlist
