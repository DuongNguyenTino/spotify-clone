import React from 'react'

const Music = ({ setColor, setWidth, setHeight, ...orthers }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            width={setWidth}
            height={setHeight}
            {...orthers}
            >
            <path
                fill={setColor}
                d="M6 3h15v15.167a3.5 3.5 0 11-3.5-3.5H19V5H8v13.167a3.5 3.5 0 11-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 101.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 101.5 1.5v-1.5z"
            />
        </svg>
    )
}

export default Music
