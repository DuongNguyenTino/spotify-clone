import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMV } from '../api/mv'
import ReactPlayer from 'react-player'
import TrackPlaylist from '../components/TrackPlaylist'

const DetailsMv = () => {
    const params = useParams()
    const [dataMv, setDataMv] = useState([])
    const [dataUrl, setDataUrl] = useState('')
    const [url, setUrl] = useState('')
    const [urlActive, setUrlActive] = useState('360')

    useEffect(() => {
        ;(async () => {
            const data = await getMV(params.id)
            setDataMv(data)
            setDataUrl(data.streaming.hls)
        })()
    }, [params.id])
    console.log(dataMv)

    return (
        <div>
            {params.id && (
                <div className="mt-4">
                    <div className="w-11/12 mx-auto">
                        {dataMv && (
                            <p className="mb-4 text-[color:var(--text-highlight)] font-medium">
                                <span className="cursor-default">
                                    {dataMv.title}
                                </span>
                                <span className="mx-1">-</span>
                                {dataMv.artists &&
                                    dataMv.artists.map((e, i) => {
                                        return (
                                            <span key={i}>
                                                {i > 0 ? <span>, </span> : ''}
                                                <Link
                                                    className="text-[color:var(--text-highlight)] hover:underline opacity-100 font-medium"
                                                    to={`/artist/${e.alias}`}
                                                >
                                                    {e.name}
                                                </Link>
                                            </span>
                                        )
                                    })}
                            </p>
                        )}
                        <div className="flex justify-center">
                            <ReactPlayer
                                url={url || dataUrl?.['360p']}
                                controls={true}
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="flex mt-3 items-center">
                            <p className="text-[color:var(--text-highlight)] font-medium cursor-default">
                                Chất lượng video :{' '}
                            </p>
                            <button
                                className={`p-2 rounded-lg text-[color:var(--text-base)] font-medium
                                hover:bg-[color:var(--background-press)] hover:text-[color:var(--color-primary)]
                                ${
                                    urlActive === '360'
                                        ? 'bg-[color:var(--background-press)] text-[color:var(--color-primary)]'
                                        : ''
                                }`}
                                onClick={() => {
                                    setUrl(dataUrl?.['360p'])
                                    setUrlActive('360')
                                }}
                            >
                                360p
                            </button>
                            <button
                                className={`p-2 rounded-lg text-[color:var(--text-base)] font-medium
                                hover:bg-[color:var(--background-press)] hover:text-[color:var(--color-primary)]
                                ${
                                    urlActive === '480'
                                        ? 'bg-[color:var(--background-press)] text-[color:var(--color-primary)]'
                                        : ''
                                }`}
                                onClick={() => {
                                    setUrl(dataUrl?.['480p'])
                                    setUrlActive('480')
                                }}
                            >
                                480p
                            </button>
                            <button
                                className={`p-2 rounded-lg text-[color:var(--text-base)] font-medium
                                hover:bg-[color:var(--background-press)] hover:text-[color:var(--color-primary)]
                                ${
                                    urlActive === '720'
                                        ? 'bg-[color:var(--background-press)] text-[color:var(--color-primary)]'
                                        : ''
                                }`}
                                onClick={() => {
                                    setUrl(dataUrl?.['720p'])
                                    setUrlActive('720')
                                }}
                            >
                                720p
                            </button>
                        </div>
                        <div className="mt-12 pt-12 cursor-default border-t">
                            <p className='mb-8 font-medium text-2xl text-[color:var(--text-highlight)]'>Khuyến Nghị</p>
                            {dataMv.recommends && <TrackPlaylist items={dataMv.recommends} />}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DetailsMv
