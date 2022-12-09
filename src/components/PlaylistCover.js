import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PlaylistCover = ({ title, link, thumbnail, sortDescription }) => {
    const [isHoverImg, setIsHoverImg] = useState(false)

    return (
        <div className=' mt-6'>
            <div className='relative'>
                <Link to={link}>
                    <img
                        className="w-full rounded-lg"
                        src={thumbnail}
                        onMouseOver={() => {
                            setIsHoverImg(true)
                        }}
                        onMouseOut={() => {
                            setIsHoverImg(false)
                        }}
                        alt=""
                    />
                </Link>

                <div
                    className={`absolute top-2 rounded-lg blur-lg w-full h-full z-[-1] transition-opacity duration-300 scale-95
                    ${isHoverImg? 'opacity-100' : 'opacity-0'}
                    `}

                    style={{
                        backgroundImage: `url(${thumbnail})`
                    }}
                >
                </div>
            </div>

            <div className='text-[color:var(--text-highlight)] mt-2 text-sm font-bold hover:underline truncate'>
                <Link to={link}>
                    {title}
                </Link>
            </div>

            <div className='text-[color:var(--text-base)] text-xs truncate'>
                <span className=''>{sortDescription}</span>
            </div>
        </div>
    )
}

export default PlaylistCover
