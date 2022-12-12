import React, { useEffect, useState } from 'react'
import Logo from '../../static/Logo'
import LogoIcon from '../../static/LogoIcon'
import { Link, NavLink } from 'react-router-dom'
import { HomeOutline, HomeSolid } from '../../static/HomeIcon'
import { MvOutline, MvSolid } from '../../static/MvIcon'
import { SearchOutline, SearchSolid } from '../../static/SearchIcon'
import { Top100Outline, Top100Solid } from '../../static/Top100Icon'
import { ZingchartOutline, ZingchartSolid } from '../../static/ZingchartIcon'
import { LibraryOutline, LibrarySolid } from '../../static/LibraryIcon'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUrl } from '../../store/audioSlice'

const Sidebar = () => {
    const dispatch = useDispatch()
    const songId = useSelector((state) => state.audio.songId)
    const activeUrl = useSelector((state) => state.audio.activeUrl)
    const [active, setActive] = useState('')
    const [isPhone, setIsPhone] = useState(window.screen.width)
    
    useEffect(() => {
        const rl = activeUrl.split('/')[3]
        setActive(rl)
    }, [activeUrl])

    useEffect(() => {
        const width = window.screen.width
        setIsPhone(width)
    },[])

    const handleClick = () => {
        const url = window.location.href
        dispatch(setActiveUrl(url))

        const rl = url.split('/')[3]
        setActive(rl)
    }

    return (
        <div className={`flex-none lg:w-80 md:w-64 w-16 fixed top-0 left-0 
        ${songId ? 'bottom-20' : 'bottom-0'} z-10 bg-black sm:p-6 p-5 px-1
        `}>
            <div className="flex justify-center items-center" onClick={() => handleClick()}>
                <Link to={'/'} >
                    {isPhone < 767 ? <LogoIcon setColor='white' setHeight='48' setwidth='48' /> : <Logo />}
                </Link>
            </div>
            <div className="border-b md:mt-10 mt-8 pb-4">
                <div
                    className=""
                    onClick={() => handleClick()}
                >
                    <NavLink
                        to={'/'}
                        className="flex md:flex-row flex-col md:justify-start justify-center items-center mb-2 pt-2 pb-2
                        "             
                    >
                        {active === ''? (
                            <HomeSolid setColor="var(--text-highlight)"/>
                        ) : (
                            <HomeOutline setColor="var(--text-base)" />
                        )}
                        <span
                            className={`${
                                active === ''
                                    ? 'text-[color:var(--text-highlight)]'
                                    : 'text-[color:var(--text-base)]'
                            } font-bold lg:text-lg md:text-md text-xs md:ml-4 ml-0 whitespace-nowrap`}
                        >
                            Trang chủ
                        </span>
                    </NavLink>
                </div>
                <div
                    className="text-[color:var(--text-base)] cursor-pointer"
                    onClick={() => handleClick()}
                    // onClick={() => setActive('search')}
                >
                    <NavLink
                        to={'/search'}
                        className="flex md:flex-row flex-col md:justify-start justify-center items-center mb-2 pt-2 pb-2"
                        
                    >
                        {active === 'search' ? (
                            <SearchSolid setColor="white" />
                        ) : (
                            <SearchOutline setColor="var(--text-base)" />
                        )}
                        <span
                            className={`${
                                active === 'search'
                                    ? 'text-[color:var(--text-highlight)]'
                                    : 'text-[color:var(--text-base)]'
                            } font-bold lg:text-lg md:text-md text-xs md:ml-4 ml-0 whitespace-nowrap`}
                        >
                            Tìm kiếm
                        </span>
                    </NavLink>
                </div>
                <div
                    className="text-[color:var(--text-base)]"
                    onClick={() => handleClick()}
                    // onClick={() => setActive('zingchart')}
                >
                    <NavLink
                        to={'/zingchart'}
                        className="flex md:flex-row flex-col md:justify-start justify-center items-center mb-2 pt-2 pb-2"
                        
                    >
                        {active === 'zingchart' ? (
                            <ZingchartSolid setColor="white" />
                        ) : (
                            <ZingchartOutline setColor="var(--text-base)" />
                        )}
                        <span
                            className={`${
                                active === 'zingchart'
                                    ? 'text-[color:var(--text-highlight)]'
                                    : 'text-[color:var(--text-base)]'
                            } font-bold lg:text-lg md:text-md text-xs md:ml-4 ml-0 whitespace-nowrap`}
                        >
                            Zing chart
                        </span>
                    </NavLink>
                </div>
                <div
                    className="text-[color:var(--text-base)]"
                    onClick={() => handleClick()}
                    // onClick={() => setActive('mv')}
                >
                    <NavLink
                        to={'/mv'}
                        className="flex md:flex-row flex-col md:justify-start justify-center items-center mb-2 pt-2 pb-2"
                        
                    >
                        {active === 'mv' ? (
                            <MvSolid setColor="white" />
                        ) : (
                            <MvOutline setColor="var(--text-base)" />
                        )}
                        <span
                            className={`${
                                active === 'mv'
                                    ? 'text-[color:var(--text-highlight)]'
                                    : 'text-[color:var(--text-base)]'
                            } font-bold lg:text-lg md:text-md text-xs md:ml-4 ml-0 whitespace-nowrap`}
                        >
                            MV
                        </span>
                    </NavLink>
                </div>
                <div
                    className="text-[color:var(--text-base)]"
                    onClick={() => handleClick()}
                    // onClick={() => setActive('top100')}
                >
                    <NavLink
                        to={'/top100'}
                        className="flex md:flex-row flex-col md:justify-start justify-center items-center mb-2 pt-2 pb-2"
                        
                    >
                        {active === 'top100' ? (
                            <Top100Solid setColor="white" />
                        ) : (
                            <Top100Outline setColor="var(--text-base)" />
                        )}
                        <span
                            className={`${
                                active === 'top100'
                                    ? 'text-[color:var(--text-highlight)]'
                                    : 'text-[color:var(--text-base)]'
                            } font-bold lg:text-lg md:text-md text-xs md:ml-4 ml-0 whitespace-nowrap`}
                        >
                            Top 100
                        </span>
                    </NavLink>
                </div>
                <div
                    className="text-[color:var(--text-base)]"
                    onClick={() => handleClick()}
                    // onClick={() => setActive('collection')}
                >
                    <NavLink
                        to={'/collection/playlist'}
                        className="flex md:flex-row flex-col md:justify-start justify-center items-center mb-2 pt-2 pb-2"
                        
                    >
                        {active === 'collection' ? (
                            <LibrarySolid setColor="white" />
                        ) : (
                            <LibraryOutline setColor="var(--text-base)" />
                        )}
                        <span
                            className={`${
                                active === 'collection'
                                    ? 'text-[color:var(--text-highlight)]'
                                    : 'text-[color:var(--text-base)]'
                            } font-bold lg:text-lg md:text-md text-xs md:ml-4 ml-0 whitespace-nowrap`}
                        >
                            Thư viện
                        </span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
