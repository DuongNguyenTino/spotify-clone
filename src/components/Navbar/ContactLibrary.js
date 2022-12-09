import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ContactLibrary = () => {
    const url = window.location.href
    const [active, setActive] = useState(url.split('/')[4])
    const navigate = useNavigate()

    return (
        <div className='flex items-center'>
            <div className={`cursor-pointer rounded-lg p-2 px-4 m-2 trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]
                ${active === 'playlist' ? 'bg-[color:var(--background-model-hover-items)]' : ''}
            `}
            onClick={() => {
                setActive('playlist')
                navigate('/collection/playlist')
            }}
            >
                <span className='font-medium text-[color:var(--text-highlight)]'>Playlist</span>
            </div>
            <div className={`cursor-pointer rounded-lg p-2 px-4 m-2 trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]
                ${active === 'podcast' ? 'bg-[color:var(--background-model-hover-items)]' : ''}
            `}
            onClick={() => {
                setActive('podcast')
                navigate('/collection/podcast')
            }}
            >
                <span className='font-medium text-[color:var(--text-highlight)]'>Podcast</span>
            </div>
            <div className={`cursor-pointer rounded-lg p-2 px-4 m-2 trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]
            ${active === 'artist' ? 'bg-[color:var(--background-model-hover-items)]' : ''}
            `}
            onClick={() => {
                setActive('artist')
                navigate('/collection/artist')
            }}
            >
                <span className='font-medium text-[color:var(--text-highlight)]'>Nghệ sĩ</span>
            </div>
            <div className={`cursor-pointer rounded-lg p-2 px-4 m-2 trasition-colors duration-300 hover:bg-[color:var(--background-model-hover-items)]
            ${active === 'album' ? 'bg-[color:var(--background-model-hover-items)]' : ''}
            `}
            onClick={() => {
                setActive('album')
                navigate('/collection/album')
            }}
            >
                <span className='font-medium text-[color:var(--text-highlight)]'>Album</span>
            </div>
        </div>
    )
}

export default ContactLibrary
