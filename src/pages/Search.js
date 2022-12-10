import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSearch } from '../api/search'
import TrackPlaylist from '../components/TrackPlaylist'
import DataNoSearch from '../config/DataNoSearch.json'

const Search = () => {
    const params = useParams()
    const [dataSearch, setDataSearch] = useState()

    useEffect(() => {
        (async() => {
            setDataSearch(await getSearch(params.keyword))
        })()
    },[params])

    return (
        <div>
            <div className='mt-24 mx-[5vw]'>
                {dataSearch && dataSearch.songs ? 
                <>
                    <div className='pb-6 text-lg text-[color:var(--text-base)] font-bold mb-8 border-b border-[color:var(--color-primary)]'>
                        <span>Tìm kiếm với : </span>
                        <span className='italic text-[color:var(--text-highlight)]'>{params.keyword}</span>
                    </div>
                    <TrackPlaylist items={dataSearch.songs} />
                </>
                    : <>
                        <div className='mb-6'>
                            <span className='text-2xl font-bold text-[color:var(--text-highlight)]'>Duyệt tìm tất cả</span>
                        </div>
                        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                            {DataNoSearch.data.map((e,i) => (
                                <div key={i} className='w-full flex justify-center items-center'>
                                    <div className='rounded-xl xl:h-52 xl:w-52 lg:h-48 lg:w-48 h-48 w-48 overflow-hidden relative' 
                                    style={{
                                        background: `${e.color}`
                                    }}>
                                        <p className='mx-4 my-6 text-xl font-bold text-[color:var(--text-highlight)]'>{e.title}</p>
                                        <img src={e.thumbnailM}
                                        className='absolute rotate-45 w-28 h-28 right-[-10px] bottom-[-10px]'
                                        alt='' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Search