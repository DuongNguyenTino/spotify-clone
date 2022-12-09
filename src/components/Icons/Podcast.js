import React from "react"

const Play = ({ setColor, setWidth, setHeight, ...orthers }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      width={ setWidth }
      height={ setHeight }
      { ...orthers }
    >
      <path
        d="M12 3a9 9 0 00-7.046 14.6L3.42 18.886A10.954 10.954 0 011 12C1 5.925 5.925 1 12 1s11 4.925 11 11a10.96 10.96 0 01-2.421 6.886L19.046 17.6A9 9 0 0012 3z"
        fill={ setColor }
      />
      <path
        d="M12 7a4 4 0 00-4 4v3a4.002 4.002 0 003 3.874v1.965l-2.715 2.278a.5.5 0 00.322.883h6.786a.5.5 0 00.322-.883L13 19.839v-1.965c1.725-.444 3-2.01 3-3.874v-3a4 4 0 00-4-4zm2 7a2 2 0 01-4 0v-3a2 2 0 114 0v3z"
        fill={ setColor }
      />
    </svg>
  )
}

export default Play