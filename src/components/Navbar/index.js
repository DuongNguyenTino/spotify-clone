import React, { useState, useEffect, useRef } from 'react'
import ArrowLeft from '../../components/Icons/ArrowLeft'
import ArrowRight from '../../components/Icons/ArrowRight'
import ArrowDown from '../../components/Icons/ArrowDown'
import ArrowUp from '../../components/Icons/ArrowUp'
import { useNavigate } from 'react-router-dom'
import avatar from '../../static/imgs/avatar.jpg'
import Model from './Model'
import { useScroll } from '../../hook/useScroll'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUrl } from '../../store/audioSlice'
import Search from './Search'
import ContactLibrary from './ContactLibrary'

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const activeUrl = useSelector((state) => state.audio.activeUrl)
    const [isOpenModel, setIsOpenModel] = useState(false)
    const [scrollDimensions] = useScroll()
    const { scrollY } = scrollDimensions
    const refButtonModel = useRef()

    const [active, setActive] = useState('')

    useEffect(() => {
        const rl = activeUrl.split('4200')[1].split('/')[1]
        setActive(rl)
    }, [activeUrl])

    useEffect(() => {
        window.onclick = (e) => {
            if (!refButtonModel.current.contains(e.target)) setIsOpenModel(false)
        }
    }, [])

    return (
        <div
            className={`fixed z-20 top-0 lg:left-80 left-64 right-0 border-b h-16 text-white transition duration-400 ${
                scrollY > 64
                    ? 'bg-[color:var(--background-active-scroll)]'
                    : 'bg-[color:var(--background-base)]'
            }
        `}
        >
            <div className="flex items-center justify-between h-full ml-8 mr-8">
                <div className="flex">
                    <button
                        className="bg-[color:var(--background-card)] hover:bg-[color:var(--background-press)] transition duration-300 rounded-full mr-2"
                        onClick={() => {
                            navigate(-1)
                            setTimeout(() => {
                                dispatch(setActiveUrl(window.location.href))
                            }, 100)
                        }}
                    >
                        <ArrowLeft
                            setColor="white"
                            setHeight="35"
                            setWidth="35"
                        />
                    </button>
                    <button
                        className="bg-[color:var(--background-card)] hover:bg-[color:var(--background-press)] transition duration-300 rounded-full"
                        onClick={() => {
                            navigate(+1)
                            setTimeout(() => {
                                dispatch(setActiveUrl(window.location.href))
                            }, 100)
                        }}
                    >
                        <ArrowRight
                            setColor="white"
                            setHeight="35"
                            setWidth="35"
                        />
                    </button>
                    {active === 'search' && <Search />}
                </div>
                {active === 'collection' && <ContactLibrary />}
                <div className="flex relative">
                    {active !== 'search' && <button
                        className="bg-[color:var(--background-card)] hover:bg-[color:var(--background-press)] transition ease-in duration-200 rounded-full
                        border border-[color:var(--text-base)] p-1 pl-4 pr-4 text-sm font-bold
                    "
                    >
                        <a href='https://www.facebook.com/profile.php?id=100033986333586' target='__blank'>
                            Nâng cấp
                        </a>
                    </button>}
                    <button
                        className={`flex items-center
                     ${
                         isOpenModel
                             ? 'bg-[color:var(--background-model)]'
                             : 'bg-[color:var(--background-press)]'
                     }
                      hover:bg-[color:var(--background-cardhover)] transition ease-in duration-200 rounded-full
                     p-1 pr-2 text-sm font-bold ml-4`}
                        ref={refButtonModel}
                        onClick={() => setIsOpenModel(true)}
                    >
                        <img
                            src={avatar}
                            className="rounded-full w-8 h-8"
                            alt="avt"
                            ref={refButtonModel}
                        />
                        <span className="ml-1 mr-1">Duong Nguyen</span>
                        {isOpenModel ? (
                            <ArrowUp
                                setColor="white"
                                setHeight="20"
                                setWidth="20"
                            />
                        ) : (
                            <ArrowDown
                                setColor="white"
                                setHeight="20"
                                setWidth="20"
                            />
                        )}
                    </button>
                    {isOpenModel ? (
                        <div id="model">
                            <Model />
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
