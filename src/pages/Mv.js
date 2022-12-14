import React, { useState, useEffect, useRef } from 'react'
import { getlistMV } from '../api/mv'
import Loading from '../components/Icons/Loading'
import MvComponent from '../components/Mv'
import InfiniteScroll from 'react-infinite-scroll-component'
import ArrowRight from '../components/Icons/ArrowRight'
import SearchIcon from '../components/Icons/Search'
import CloseIcon from '../components/Icons/Close'

const Mv = () => {
    const [dataListMV, setDataListMV] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const refSearch = useRef()
    const [valueSearch, setValueSearch] = useState('')
    const [isSearch, setIsSearch] = useState(false)

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
        <div className={"pt-8  px-[4vw]" 
        + (hasMore ? ' pb-80': ' pb-4')}>
            {dataListMV ? (
                <>
                    <div className="flex items-center justify-between mb-8 ml-1">
                        <div className={"sm:flex flex items-center lg:text-2xl text-xl text-[color:var(--text-highlight)]"
                    + (isSearch ? ' hidden': ' ')
                    }>
                            <span>MV Nổi Bật</span>
                            <ArrowRight
                                setColor="white"
                                setHeight="32"
                                setWidth="32"
                                className="relative top-0.5"
                            />
                        </div>
                        <div
                            className="ml-2 relative flex items-center bg-white 
                rounded-full"
                        >
                            <label className="md:ml-2 ml-0.5 md:px-2 pl-2 mt-0.5">
                                <SearchIcon
                                    setColor="var(--background-cardhover)"
                                    setHeight="24"
                                    setWidth="24"
                                />
                            </label>
                            <input
                                ref={refSearch}
                                type="text"
                                name="Search Mv"
                                placeholder="Mv bạn muốn tìm là gì?"
                                className={"sm:w-full sm:ml-2 ml-0 text-sm text-[color:var(--background-cardhover)] focus:border-0 border-none outline-none"
                            + (isSearch ? ' w-full': ' w-6')
                            }
                                value={valueSearch}
                                onFocus={() => setIsSearch(true)}
                                onBlur={() => setIsSearch(false)}
                                onChange={(e) => {
                                    setValueSearch(e.target.value)
                                    
                                }}
                            />
                            <span className="md:mr-2 mr-0.5 md:px-2 pl-2 mt-0.5 ">
                                <CloseIcon
                                    setColor="#000"
                                    setHeight="28"
                                    setWidth="28"
                                    onClick={() => {
                                        setValueSearch('')
                                        refSearch.current.focus()
                                    }}
                                />
                            </span>
                        </div>
                    </div>
                    <InfiniteScroll
                        dataLength={dataListMV.length}
                        next={fetchMoreDataListMV}
                        hasMore={hasMore}
                        loader = {
                            <Loading
                                setColor="white"
                                setHeight="30"
                                setWidth="30"
                            />
                        }
                    >
                        <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-x-6 gap-y-10">
                            {dataListMV.map((e, i) => {
                                let isMvSearch
                                if(valueSearch.trim() !== '' && e.title) {
                                    isMvSearch = e.title.toLowerCase().includes(valueSearch.trim().toLowerCase())
                                } else {
                                    isMvSearch = true
                                }

                                return <MvComponent search={isMvSearch} e={e} i={i} />
                            })}
                        </div>
                    </InfiniteScroll>
                </>
            ) : (
                <Loading setColor="white" setHeight="30" setWidth="30" />
            )}
        </div>
    )
}

export default Mv
