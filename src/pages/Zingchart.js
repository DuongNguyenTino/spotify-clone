import React, { useEffect, useState } from 'react'
import { getNewReleaseChart } from '../api/zingchart'
import TrackPlaylist from '../components/TrackPlaylist'
import { useDispatch } from 'react-redux'
import { setPlayListSong } from '../store/audioSlice'
import Loading from '../components/Icons/Loading'
import ArrowRight from '../components/Icons/ArrowRight'

const Zingchart = () => {
    const [dataZingchart, setDataZingChart] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        ;(async () => {
            // setDataZingChart(await getCharthome())
            setDataZingChart(await getNewReleaseChart())
        })()
    }, [])

    dataZingchart &&
        //   dispatch(setPlayListSong(dataZingchart.RTChart.items))
        dispatch(setPlayListSong(dataZingchart.items))

    return (
        <>
            {dataZingchart && (
                <img
                    src={dataZingchart.banner}
                    className="w-full h-full"
                    alt=""
                />
            )}
            <main className="inset-0 box-border px-[3vw]">
                <div className="mt-8">
                    {dataZingchart && dataZingchart.items ? (
                        <>
                            <div className="flex items-center mb-8 ml-4 text-2xl font-medium text-[color:var(--text-highlight)]">
                                <span>Bảng Xếp Hạng</span>
                                <ArrowRight
                                    setColor="white"
                                    setHeight="32"
                                    setWidth="32"
                                    className="relative top-1"
                                />
                            </div>
                            <TrackPlaylist
                                items={dataZingchart.items}
                                categary="zingchart"
                            />
                        </>
                    ) : (
                        <Loading
                            setColor="white"
                            setHeight="30"
                            setWidth="30"
                        />
                    )}
                </div>
            </main>
        </>
    )
}

export default Zingchart
