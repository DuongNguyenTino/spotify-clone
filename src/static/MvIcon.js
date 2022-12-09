import React from 'react'

const MvOutline = ({ setColor, ...orthers }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...orthers}
        >
            <path
                d="M21 19v-9c0-1.103-.897-2-2-2h-3V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h3v3c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2zM5 14V5h9v3h-4c-1.103 0-2 .897-2 2v4H5zm9.001 0H10v-4h4.001v4zM10 16h4c1.103 0 2-.897 2-2v-4h3l.001 9H10v-3z"
                fill={setColor}
            ></path>
        </svg>
    )
}

const MvSolid = ({ setColor, ...orthers }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill='none'
            {...orthers}
        >
            <path d="M14 3H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" fill={setColor}></path>
            <path d="M21 19v-9a2 2 0 0 0-2-2h-1v8a2 2 0 0 1-2 2H8v1a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2z" fill={setColor}></path>
        </svg>
    )
}

export { MvOutline, MvSolid }
