import React, { useEffect, useState } from 'react'
import { getCharthome, getNewReleaseChart } from '../api/zingchart'
import TrackPlaylist from '../components/TrackPlaylist'
import { useDispatch } from 'react-redux'
import { setPlayListSong } from '../store/audioSlice'
import Loading from '../components/Icons/Loading'

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
                    {dataZingchart ? (
                        <TrackPlaylist items={dataZingchart.items} />
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
