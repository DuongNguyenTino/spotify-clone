import React from 'react'

const Model = () => {
    return (
        <div className="absolute right-0 top-12 z-[500]">
            <ul className="text-[#e8e8e8] text-sm font-bold bg-[color:var(--background-model)] w-46 rounded-md truncate p-1">
                <li className="hover:bg-[color:var(--background-model-hover-items)] p-2 cursor-default">
                    <span className="">Tài khoản</span>
                </li>
                <li className="hover:bg-[color:var(--background-model-hover-items)] p-2 cursor-default">
                    <span>Hồ sơ</span>
                </li>
                <li className="hover:bg-[color:var(--background-model-hover-items)] p-2 cursor-default">
                    <span>Nâng cấp lên Preminum</span>
                </li>
                <li className="hover:bg-[color:var(--background-model-hover-items)] p-2 cursor-default">
                    <span>Tải xuống</span>
                </li>
                <li className="hover:bg-[color:var(--background-model-hover-items)] p-2 cursor-default">
                    <span>Cài đặt</span>
                </li>
                <li
                    className="hover:bg-[color:var(--background-model-hover-items)] p-2 cursor-default border-t
                border-[color:var(--background-model-hover-items)]
                "
                >
                    <span>Đăng xuất</span>
                </li>
            </ul>
        </div>
    )
}

export default Model
