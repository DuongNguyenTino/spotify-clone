import React, { useState, useEffect } from 'react'
import { getHomePlayList } from '../api/home'
import Loading from '../components/Icons/Loading'
import PlaylistCover from '../components/PlaylistCover'

const Home = () => {
    const [loader, setLoader] = useState(false)
    const [dataHome, setdataHome] = useState([])

    useEffect(() => {
        (async () => {
            setdataHome(await getHomePlayList())
            setLoader(true)
        })()
    }, [])

    return (
        <>
            <main className="">
                <div className="lg:ml-6 md:ml-[-36px] mr-6 pt-1">
                    {dataHome && loader ? (
                        dataHome.map((e, i) => (
                            <div key={i}>
                                <div className="cursor-default font-bold uppercase text-[color:var(--text-highlight)] text-3xl mb-2 mt-16">
                                    {e.title === ''
                                        ? e.sectionId.slice(1)
                                        : e.title}
                                </div>
                                <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 mb-8">
                                    {e.items.map((element, index) => (
                                        <PlaylistCover
                                            key={index}
                                            title={element.title}
                                            link={`/playlist/${element.encodeId}`}
                                            thumbnail={element.thumbnail}
                                            sortDescription={
                                                element.sortDescription
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        ))) : (
                            <Loading setColor='white' setHeight='30' setWidth='30' />
                        )}
                </div>
            </main>
        </>
    )
}

export default Home
