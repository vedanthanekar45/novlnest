// The Navigation bar, short, simple and sweet

import Logo from "./Logo";
import NavButtons from "./NavButton";
import { ClassNameProp } from "../props/ClassNameProp.ts";
import SearchBar from "./SearchBar.tsx";
import { useState } from "react";
import SignInModal from '../authentication/signin.tsx';

export default function Navbar({className}: ClassNameProp) {
    const [opa, setOpa] = useState(65)
    const handleFocus = () => {
        setOpa(0);
    }
    const handleBlur = () => {
        setOpa(65);
    };

    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <>
            <div className={className}>
                <a href="/"><Logo /></a>
                <a href="#" onClick={toggleModal}><NavButtons className="text-white hover:text-[#24cf1e] prata font-medium 
                ml-[200px] mt-[30px] text-[17px] trans" text="Sign In" /></a>
                <a href="#"><NavButtons className="text-white hover:text-[#24cf1e] prata font-medium 
                ml-16 mt-[30px] text-[17px] trans" text="Library" /></a>
                <a href="#"><NavButtons className="text-white hover:text-[#24cf1e] prata font-medium 
                ml-16 mt-[30px] text-[17px] trans" text="Lists" /></a>
                <a href="#"><NavButtons className="text-white hover:text-[#24cf1e] prata font-medium 
                ml-16 mt-[30px] text-[17px] trans" text="Journal" /></a>
                <SearchBar className={`rounded-full text-[15px] ml-14 relative 
                mt-[20px] h-[35px] pl-4 w-[230px] opacity-${opa} focus:outline-none `} 
                onBlur={handleBlur} onFocus={handleFocus}/>
            </div>
            <SignInModal isOpen={isModalOpen} onClose={toggleModal} />
        </>
    )
}