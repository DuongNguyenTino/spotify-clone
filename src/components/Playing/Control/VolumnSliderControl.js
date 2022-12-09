import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setVolumn } from '../../../store/audioSlice'

const SongSliderControl = ({ audioRef }) => {
    const dispatch = useDispatch()
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
        <div className="my-[-6px] w-24">
            <div
                className="py-[6px] px-0"
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
                            localStorage.setItem(
                                'volumn',
                                String(percentSliderWidth / 100)
                            )
                            dispatch(setVolumn(percentSliderWidth / 100))
                            audioRef.volume = percentSliderWidth / 100
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
                                localStorage.setItem(
                                    'volumn',
                                    String(percentSliderWidth / 100)
                                )
                                dispatch(setVolumn(percentSliderWidth / 100))
                                audioRef.volume = percentSliderWidth / 100
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
                            width: `${localStorage.getItem('volumn') * 100}%`,
                        }}
                    ></div>

                    <div
                        className="absolute z-[5] w-3 h-3 top-[50%] translate-x-[-50%] translate-y-[-50%] transition-[left]"
                        style={{
                            left: `${localStorage.getItem('volumn') * 100}%`,
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
                                <span>{`${Math.floor(
                                    localStorage.getItem('volumn') * 100
                                )}%`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SongSliderControl
