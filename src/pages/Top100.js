import React, { useState, useEffect } from 'react'
import { getTop100 } from '../api/top100'
import ArrowRight from '../components/Icons/ArrowRight'
import Loading from '../components/Icons/Loading'
import PlaylistCover from '../components/PlaylistCover'

const Home = () => {
    const [loader, setLoader] = useState(false)
    const [dataTop100, setDataTop100] = useState([])

    useEffect(() => {
        (async () => {
            setDataTop100(await getTop100())
            setLoader(true)
        })()
    }, [])

    return (
        <>
            <main className="">
                <div className="ml-6 mr-6 pt-1">
                    {dataTop100 && loader ? (
                        dataTop100.map((e, i) => (
                            <div key={i}>
                                <div className="flex items-center font-bold uppercase text-[color:var(--text-highlight)] text-3xl mb-2 mt-16">
                                    {e.title === ''
                                        ? e.sectionId.slice(1)
                                        : e.title}
                                        <ArrowRight setColor='white' setHeight='40' setWidth='40'/>
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
