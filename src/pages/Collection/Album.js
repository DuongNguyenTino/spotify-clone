import React from 'react'
import AlbumIcon from '../../components/Icons/Album'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setActiveUrl } from '../../store/audioSlice'

const Album = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <main className="mt-16">
            <div className="flex flex-col items-center">
                <div className="mb-12 mt-20">
                    <AlbumIcon setColor="white" setHeight="64" setWidth="64" />
                </div>
                <div className="mb-8 text-3xl font-bold text-[color:var(--text-highlight)]">
                    <span>Theo dõi album đầu tiên của bạn</span>
                </div>
                <div className="text-md font-medium text-[color:var(--text-highlight)]">
                    <span>Lưu album bằng cách nhấn vào biểu tượng trái tim.</span>
                </div>
                <div className="mt-8 mb-4">
                    <button className='cursor-default bg-[color:var(--text-highlight)] text-md font-bold py-3 px-5 rounded-full
                    transition-transform duration-200 hover:scale-110
                    '
                    onClick={() => {
                        navigate('/search')
                        dispatch(setActiveUrl(window.location.href))
                    }}
                    >Tìm album</button>
                </div>
            </div>
        </main>
    )
}

export default Album
