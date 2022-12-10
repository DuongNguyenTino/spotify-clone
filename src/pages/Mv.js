import React, { useState, useEffect } from 'react'
import { getlistMV } from '../api/mv'
import Loading from '../components/Icons/Loading'
import MvComponent from '../components/Mv'
import InfiniteScroll from 'react-infinite-scroll-component'

const Mv = () => {
    const [dataListMV, setDataListMV] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        ;(async () => {
            const data = await getlistMV('IWZ9Z08I', 1, 100)
            setDataListMV(data.items)
        })()
    }, [])

    const fetchMoreDataListMV = () => {
        setPage(page + 1)
        ;(async () => {
            const data = await getlistMV('IWZ9Z08I', page + 1, 100)
            if (dataListMV) {
                if (data.items) {
                    const customDataListMV = dataListMV.concat(data.items)
                    setDataListMV(customDataListMV)
                } else {
                    setHasMore(false)
                    console.log('Error more mv !')
                }
            }
        })()
    }

    return (
        <div className="pt-8 pb-[96px] px-[4vw]">
            {dataListMV ? (
                <InfiniteScroll
                    dataLength={dataListMV.length}
                    next={fetchMoreDataListMV}
                    hasMore={hasMore}
                    loader={<Loading setColor='white' setHeight='30' setWidth='30'/>}
                >
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-x-6 gap-y-10">
                        {dataListMV.map((e, i) => {
                            return (
                                <MvComponent e={e} i={i}/>
                            )
                        })}
                    </div>
                </InfiniteScroll>
            ) : (
                <Loading setColor='white' setHeight='30' setWidth='30'/>
            )}
        </div>
    )
}

export default Mv