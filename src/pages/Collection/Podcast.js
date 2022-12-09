import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setActiveUrl } from '../../store/audioSlice'
import PodcastIcon from '../../components/Icons/Podcast'
import DataPodcast from '../../config/DataPodcast.json'

const Podcast = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isDisplay, setIsDisplay] = useState(false)

    return (
        <main className="">
            <div className="flex flex-col items-center mb-8">
                <div className="">
                    <PodcastIcon
                        setColor="white"
                        setHeight="24"
                        setWidth="24"
                    />
                </div>
                <div className="mt-4 mb-8 text-3xl font-bold text-[color:var(--text-highlight)]">
                    <span>Theo dõi podcast đầu tiên của bạn</span>
                </div>
                <div className="mb-4 text-md font-medium text-[color:var(--text-highlight)]">
                    <span>
                        Theo dõi podcast bạn yêu thích bằng cách nhấn vào nút
                        theo dõi.
                    </span>
                </div>
                <div className="mt-8 mb-4">
                    <button
                        className="cursor-default bg-[color:var(--text-highlight)] text-md font-bold py-3 px-5 rounded-full
                    transition-transform duration-200 hover:scale-110
                    "
                    onClick={() => {
                        navigate('/search')
                        dispatch(setActiveUrl(window.location.href))
                    }}
                    >
                        Tìm podcast
                    </button>
                </div>
            </div>
            <div className="mx-[3vw] mt-4">
                <div className="flex justify-between items-center mb-8">
                    <div className="cursor-default font-bold text-[color:var(--text-highlight)] text-2xl">
                        <span>Podcast hàng đầu</span>
                    </div>

                    {!isDisplay ? (
                        <div
                            onClick={() => setIsDisplay(!isDisplay)}
                            className="cursor-pointer font-medium text-[color:var(--text-base)] text-md uppercase hover:underline"
                        >
                            <span className="">Hiện tất cả</span>
                        </div>
                    ) : (
                        <div
                            onClick={() => setIsDisplay(!isDisplay)}
                            className="cursor-pointer font-medium text-[color:var(--text-base)] text-md uppercase hover:underline"
                        >
                            <span className="">Thu nhỏ lại</span>
                        </div>
                    )}
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8">
                    {DataPodcast.data.map((e, i) =>
                        !isDisplay && i >= 4 ? (
                            ''
                        ) : (
                            <div key={i}>
                                <div
                                    className="cursor-pointer py-4 rounded-lg bg-[color:var(--background-card)]
                                    transition-colors duration-300 hover:bg-[color:var(--background-cardhover)]"
                                >
                                    <div className="w-10/12 mx-auto">
                                        <img
                                            src={e.thumbnailM}
                                            className="rounded-lg"
                                            alt=""
                                        />
                                        <div className="mt-4 text-[color:var(--text-highlight)] font-medium truncate">
                                            <span>{e.title}</span>
                                        </div>
                                        <div className="mt-2 text-[color:var(--text-base)] truncate">
                                            <span>{e.subtitle}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </main>
    )
}

export default Podcast
