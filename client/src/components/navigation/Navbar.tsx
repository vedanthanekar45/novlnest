// The Navigation bar, short, simple and sweet

import Logo from "./Logo";
import NavButtons from "./NavButton";
import { ClassNameProp } from "../props/ClassNameProp.ts";
import SearchBar from "./SearchBar.tsx";
import { useState } from "react";
import { useAuth } from "../../auth/authContext.tsx";

export default function Navbar({className}: ClassNameProp) {

    const { notLoggedIn, logout } = useAuth();
    const [opa, setOpa] = useState(65)
    const handleFocus = () => {
        setOpa(100);
    }
    const handleBlur = () => {
        setOpa(65);
    };

    return (
        <>
            <div className={className}>
                <a href="/"><Logo /></a>
                {
                    notLoggedIn ? (<a href="/signin"><NavButtons className="text-white hover:text-[#24cf1e] prata font-medium 
                    ml-[200px] mt-[30px] text-[17px] trans" text="Sign In" /></a>) : (
                        <a href="/signin"><NavButtons className="text-white hover:text-[#24cf1e] prata font-medium 
                        ml-[200px] mt-[30px] text-[17px] trans" text="Account" /></a>)
                }
                <a href="#"><NavButtons className="text-white hover:text-[#24cf1e] prata font-medium 
                ml-16 mt-[30px] text-[17px] trans" text="Library" /></a>
                <a href="#"><NavButtons className="text-white hover:text-[#24cf1e] prata font-medium 
                ml-16 mt-[30px] text-[17px] trans" text="Lists" /></a>
                <a href="#"><NavButtons className="text-white hover:text-[#24cf1e] prata font-medium 
                ml-16 mt-[30px] text-[17px] trans" text="Journal" /></a>
                {
                    notLoggedIn ? (<a></a>) : (<a href='#' onClick={logout}><NavButtons className="text-white hover:text-[#24cf1e] prata font-medium 
                        ml-16 mt-[30px] text-[17px] trans" text="Logout"/></a>)
                }
                <SearchBar className={`rounded-full text-[15px] ml-14 relative 
                mt-[20px] h-[35px] pl-4 w-[230px] opacity-${opa} `} 
                onBlur={handleBlur} onFocus={handleFocus}/>
            </div>
        </>
    )
}