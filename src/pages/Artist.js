import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArtist, getArtistSong } from '../api/artist'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from '../components/Icons/Loading'
import TrackPlaylist from '../components/TrackPlaylist'

const Artist = () => {
    const params = useParams()

    const [detailsArtist, setDetailsArtist] = useState()
    const [listArtistSong, setListArtistSong] = useState()
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
        ;(async () => {
            if (params.name) {
                setDetailsArtist(await getArtist(params.name))
            }
        })()
    }, [params.name])

    useEffect(() => {
        ;(async () => {
            if (detailsArtist) {
                const data = await getArtistSong(detailsArtist.id, 1, 100)
                setListArtistSong(data)
            }
        })()
    }, [detailsArtist])

    const fetchMoreSongArtist = () => {
        setPage(page + 1)
        ;(async () => {
            if (detailsArtist) {
                const data = await getArtistSong(
                    detailsArtist.id,
                    page + 1,
                    100
                )
                if (data.items) {
                    const customListArtistSong = listArtistSong.items.concat(
                        data.items
                    )
                    setListArtistSong({ items: customListArtistSong })
                } else {
                    setHasMore(false)
                    console.log('Error more load !')
                }
            }
        })()
    }

    return (
        <div className="mx-[5vw] mt-8">
            {detailsArtist ? (
                <>
                    <div className="flex md:flex-row flex-col items-center md:mb-20 mb-10">
                        <div className="relative md:max-w-[320px] md:max-h-[320px] md:min-w-[248px] md:min-h-[248px]
                        max-w-[240px] max-h-[240px] min-w-[180px] min-h-[180px] md:mt-0 mt-6
                        ">
                            <img
                                className="rounded-full w-full h-full"
                                src={detailsArtist.thumbnailM}
                                alt=""
                            />
                            <div
                                className="absolute top-3 w-full h-full z-[-1] bg-cover rounded-full blur-md scale-95"
                                style={{
                                    backgroundImage: `url(${detailsArtist.thumbnailM})`,
                                }}
                            ></div>
                        </div>

                        <div className="flex flex-col justify-center items-center md:ml-20 ml-0">
                            <div className="md:text-4xl text-3xl md:mt-0 mt-4 font-bold text-[color:var(--text-base)]">
                                {detailsArtist.name}
                            </div>

                            {detailsArtist.realname && <div className="text-lg opacity-70 font-medium text-[color:var(--text-base)] mt-6">
                                Real Name: {detailsArtist.realname}
                            </div>}

                            <div className="flex items-center text-sm opacity-70 font-medium text-[color:var(--text-base)] mt-[2px]">
                                {detailsArtist.birthday && <span className="mr-3">
                                    Birthday: {detailsArtist.birthday}
                                </span>}
                                {detailsArtist.totalFollow && <span className="flex items-center">
                                    Total Follow: {detailsArtist.totalFollow}
                                </span>}
                            </div>

                            {detailsArtist.sortBiography && <div
                                className="text-sm text-justify opacity-70 font-medium text-[color:var(--text-base)] mt-6"
                                style={{
                                    maxWidth: '100%',
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 3,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {detailsArtist.sortBiography}
                            </div>}
                        </div>
                    </div>
                    {listArtistSong ? (
                        <>
                            <div className='text-2xl font-medium text-[color:var(--text-highlight)] mb-4 ml-1'>
                                <span>Bài Hát Nổi Bật</span>
                            </div>
                            <InfiniteScroll
                                dataLength={listArtistSong.items.length}
                                next={fetchMoreSongArtist}
                                hasMore={hasMore}
                                loader={
                                    <Loading
                                        setColor="white"
                                        setHeight="24"
                                        setWidth="24"
                                    />
                                }
                            >
                                <TrackPlaylist items={listArtistSong.items} />
                            </InfiniteScroll>
                        </>
                    ) : (
                        <Loading
                            setColor="white"
                            setHeight="24"
                            setWidth="24"
                        />
                    )}
                </>
            ) : (
                <Loading setColor="white" setHeight="24" setWidth="24" />
            )}
        </div>
    )
}

export default Artist
