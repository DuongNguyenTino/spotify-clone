import React, { useRef, useState } from 'react'
import SearchIcon from '../../components/Icons/Search'
import CloseIcon from '../../components/Icons/Close'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [valueSearch, setValueSearch] = useState('')
    const refSearch = useRef(null)
    const navigate = useNavigate()

    return (
        <div
            className="sm:ml-12 ml-0 relative flex items-center bg-white 
                    rounded-full"
        >
            <label className="sm:ml-2 ml-0 sm:px-2 pl-2 mt-0.5">
                <SearchIcon
                    setColor="var(--background-cardhover)"
                    setHeight="24"
                    setWidth="24"
                />
            </label>
            <input
                ref={refSearch}
                type="text"
                name="Search"
                placeholder="Bạn muốn nghe gì?"
                className="sm:ml-2 ml-0 text-sm text-[color:var(--background-cardhover)] focus:border-0 border-none outline-none"
                value={valueSearch}
                onChange={(e) => {
                    setValueSearch(e.target.value)
                    e.target.value.trim() !== '' ? navigate(`/search/${e.target.value}`) : navigate('/search')
                }}
            />
            <span className="sm:mr-2 mr-0 sm:px-2 pl-2 mt-0.5 ">
                <CloseIcon
                    setColor="#000"
                    setHeight="28"
                    setWidth="28"
                    onClick={() => {
                        setValueSearch('')
                        navigate('/search')
                        refSearch.current.focus()
                    }}
                />
            </span>
        </div>
    )
}

export default Search
