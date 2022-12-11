import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { formatTime } from '../../../utils/formatTime'

const SongSliderControl = ({ audioRef }) => {
    const currentTime = useSelector((state) => state.audio.currentTime)
    const duration = useSelector((state) => state.audio.duration)
    const sliderRef = useRef(null)
    const [isActiveSliderDotHover, setActiveSliderDotHover] = useState(false)
    const [isActiveSliderTooltipHover, setActiveSliderTooltipHover] =
        useState(false)
    const handleActiveSliderDotHover = (handle) => {
        setActiveSliderDotHover(handle)
    }
    const handleActiveSliderTooltipHover = (handle) => {
        setActiveSliderTooltipHover(handle)
    }

    return (
        <div className="md:mb-[6px] mb-0 w-full flex items-center">
            <div className="md:flex hidden text-xs font-bold text-[color:var(--text-base)] mx-2">
                {formatTime(currentTime)}
            </div>
            <div
                className="md:py-[6px] py-0 px-0 flex-1"
                onMouseOver={() => handleActiveSliderDotHover(true)}
                onMouseOut={() => handleActiveSliderDotHover(false)}
                ref={sliderRef}
                onMouseDown={(e) => {
                    /*
                    |-------------------|------|----------------|------|
                    ^                   ^      ^                ^
                    |<--Bounding Left-->|      |                |
                    |<-----------clientX------>|                |
                    |<-------------Slider Offset Width--------->|
                */
                    if (sliderRef.current) {
                        let percentSliderWidth =
                            ((e.clientX -
                                sliderRef.current.getBoundingClientRect()
                                    .left) /
                                sliderRef.current.offsetWidth) *
                            100

                        percentSliderWidth =
                            percentSliderWidth < 0
                                ? 0
                                : percentSliderWidth > 100
                                ? 100
                                : percentSliderWidth

                        if (audioRef) {
                            audioRef.currentTime =
                                (percentSliderWidth / 100) * audioRef.duration
                        }
                    }

                    const handleMouseMove = (e) => {
                        if (sliderRef.current) {
                            let percentSliderWidth =
                                ((e.clientX -
                                    sliderRef.current.getBoundingClientRect()
                                        .left) /
                                    sliderRef.current.offsetWidth) *
                                100

                            percentSliderWidth =
                                percentSliderWidth < 0
                                    ? 0
                                    : percentSliderWidth > 100
                                    ? 100
                                    : percentSliderWidth

                            if (audioRef) {
                                audioRef.currentTime =
                                    (percentSliderWidth / 100) *
                                    audioRef.duration
                            }
                        }
                    }

                    window.addEventListener('mousemove', handleMouseMove)

                    window.addEventListener('mouseup', () => {
                        window.removeEventListener('mousemove', handleMouseMove)
                    })
                }}
            >
                <div className="relative w-full transition-[width,left] duration-300 bg-[hsla(0,0%,50.2%,.18)] rounded-[15px] h-1">
                    <div
                        className="top-0 left-[0%] absolute z-[1] bg-[color:var(--color-primary)] rounded-[15px] h-1"
                        style={{
                            width: `${(currentTime / duration) * 100}%`,
                        }}
                    ></div>
                    <div
                        className="absolute z-[5] w-3 h-3 top-[50%] translate-x-[-50%] translate-y-[-50%] transition-[left]"
                        style={{
                            left: `${(currentTime / duration) * 100}%`,
                        }}
                    >
                        <div
                            className={
                                'w-full h-full rounded-full bg-[#fff] box-border ' +
                                (isActiveSliderDotHover
                                    ? 'visible'
                                    : 'invisible')
                            }
                            onMouseOver={() =>
                                handleActiveSliderTooltipHover(true)
                            }
                            onMouseOut={() =>
                                handleActiveSliderTooltipHover(false)
                            }
                        ></div>
                        <div
                            className={
                                'top-[-10px] left-1/2 -translate-x-1/2 -translate-y-full absolute ' +
                                (isActiveSliderTooltipHover
                                    ? 'visible'
                                    : 'invisible')
                            }
                        >
                            <div className="text-xs font-medium whitespace-nowrap px-[6px] py-[2px] min-w-[20px] text-center text-[color:var(--color-primary)] rounded-[5px] bg-[color:var(--background-cardhover)] box-content">
                                <span>{formatTime(currentTime || 0)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex hidden text-xs font-bold text-[color:var(--text-base)] mx-2">
                {formatTime(duration)}
            </div>
        </div>
    )
}

export default SongSliderControl
