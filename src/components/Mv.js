import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Mv = ({ search, e, i }) => {
    const [isCoverHover, setIsCoverHover] = useState(false)

    return (
        search && (
            <div key={i}>
                <div className="relative">
                    <Link to={`/mv/${e.encodeId}`}>
                        <img
                            className="rounded-xl w-full cursor-pointer"
                            src={e.thumbnail}
                            alt=""
                            onMouseOver={() => {
                                setIsCoverHover(true)
                            }}
                            onMouseOut={() => {
                                setIsCoverHover(false)
                            }}
                        />
                    </Link>
                    <div
                        className={`absolute top-3 w-full h-full z-[-1] bg-cover rounded-xl blur-lg scale-95 transition-opacity duration-300
                          ${
                              isCoverHover === false
                                  ? 'opacity-0'
                                  : 'opacity-100'
                          }
                        `}
                        style={{
                            backgroundImage: `url(${e.thumbnail})`,
                        }}
                    ></div>
                </div>
                <div className="mt-2">
                    <div className="text-base font-semibold text-[color:var(--text-highlight)] truncate hover:underline">
                        <Link to={`/mv/${e.encodeId}`}>{e.title}</Link>
                    </div>
                    <div className="text-sm opacity-60 text-[color:var(--text-base)] truncate">
                        {e.artists &&
                            e.artists.map((e, i) => {
                                return (
                                    <span key={i}>
                                        {i > 0 ? <span>, </span> : ''}
                                        <Link
                                            className="hover:underline opacity-100 font-medium"
                                            to={`/artist/${e.alias}`}
                                        >
                                            {e.name}
                                        </Link>
                                    </span>
                                )
                            })}
                    </div>
                </div>
            </div>
        )
    )
}

export default Mv
