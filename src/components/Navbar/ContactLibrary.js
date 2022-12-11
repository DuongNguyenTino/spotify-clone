import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ContactLibrary = () => {
    const url = window.location.href
    const [active, setActive] = useState(url.split('/')[4])
    const navigate = useNavigate()

    return (
        <div className='flex items-center'>
            <div className={`cursor-pointer rounded-lg sm:p-2 sm:px-4 p-1 px-2 sm:m-2 m-0.5 trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]
                ${active === 'playlist' ? 'bg-[color:var(--background-model-hover-items)]' : ''}
            `}
            onClick={() => {
                setActive('playlist')
                navigate('/collection/playlist')
            }}
            >
                <span className='font-medium sm:text-md text-xs text-[color:var(--text-highlight)]'>Playlist</span>
            </div>
            <div className={`cursor-pointer rounded-lg sm:p-2 sm:px-4 p-1 px-2 sm:m-2 m-0.5 trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]
                ${active === 'podcast' ? 'bg-[color:var(--background-model-hover-items)]' : ''}
            `}
            onClick={() => {
                setActive('podcast')
                navigate('/collection/podcast')
            }}
            >
                <span className='font-medium sm:text-md text-xs text-[color:var(--text-highlight)]'>Podcast</span>
            </div>
            <div className={`cursor-pointer rounded-lg sm:p-2 sm:px-4 p-1 px-2 sm:m-2 m-0.5 trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]
            ${active === 'artist' ? 'bg-[color:var(--background-model-hover-items)]' : ''}
            `}
            onClick={() => {
                setActive('artist')
                navigate('/collection/artist')
            }}
            >
                <span className='font-medium sm:text-md text-xs text-[color:var(--text-highlight)]'>Nghệ sĩ</span>
            </div>
            <div className={`cursor-pointer rounded-lg sm:p-2 sm:px-4 p-1 px-2 sm:m-2 m-0.5 trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]
            ${active === 'album' ? 'bg-[color:var(--background-model-hover-items)]' : ''}
            `}
            onClick={() => {
                setActive('album')
                navigate('/collection/album')
            }}
            >
                <span className='font-medium sm:text-md text-xs text-[color:var(--text-highlight)]'>Album</span>
            </div>
        </div>
    )
}

export default ContactLibrary
