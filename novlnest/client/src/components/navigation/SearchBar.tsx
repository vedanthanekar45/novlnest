import { IoIosSearch } from "react-icons/io";

interface SearchBarProp {
    className: string,
    onFocus: () => void,
    onBlur: () => void
}

export default function SearchBar ({className, onFocus, onBlur}: SearchBarProp) {

    return (
        <>
            <input className={className} onFocus={onFocus} onBlur={onBlur} type="text"></input>
            <button type="submit" className="ml-4 rounded-full h-[42px] bg-[#1d6813] 
            text-white mt-[17px]">
                <IoIosSearch className="w-[42px] h-[20px]"/>
            </button>
        </>
    )
}