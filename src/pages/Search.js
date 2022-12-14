import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSearch } from '../api/search'
import TrackPlaylist from '../components/TrackPlaylist'
import DataNoSearch from '../config/DataNoSearch.json'
import ArrowRight from '../components/Icons/ArrowRight'
import SearchIcon from '../components/Icons/Search'

const Search = () => {
    const params = useParams()
    const [dataSearch, setDataSearch] = useState()

    useEffect(() => {
        ;(async () => {
            setDataSearch(await getSearch(params.keyword))
        })()
    }, [params])

    return (
        <div>
            <div className="mt-24 mx-[5vw]">
                {dataSearch && dataSearch.songs ? (
                    <>
                        <div className="flex items-center ml-2 text-lg text-[color:var(--text-base)] font-bold mb-6">
                            <SearchIcon
                                setColor="var(--text-base)"
                                setHeight="30"
                                setWidth="30"
                                className=""
                            />
                            <span className='ml-2'>Tìm kiếm hàng đầu</span>
                        </div>
                        <TrackPlaylist items={dataSearch.songs} />
                    </>
                ) : (
                    <>
                        <div className="flex items-center mb-6">
                            <span className="text-2xl font-bold text-[color:var(--text-highlight)]">
                                Duyệt tìm tất cả
                            </span>
                            <ArrowRight
                                setColor="white"
                                setHeight="32"
                                setWidth="32"
                                className="relative top-0.5"
                            />
                        </div>
                        <div className="sm:grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 flex flex-wrap">
                            {DataNoSearch.data.map((e, i) => (
                                <div
                                    key={i}
                                    className="w-full flex justify-center items-center"
                                >
                                    <div
                                        className="rounded-xl xl:h-52 xl:w-52 sm:h-48 sm:w-48 h-full w-full overflow-hidden relative"
                                        style={{
                                            background: `${e.color}`,
                                        }}
                                    >
                                        <p className="mx-4 my-6 text-xl font-bold text-[color:var(--text-highlight)]">
                                            {e.title}
                                        </p>
                                        <img
                                            src={e.thumbnailM}
                                            className="absolute rotate-45 w-28 h-28 right-[-10px] bottom-[-10px]"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Search
