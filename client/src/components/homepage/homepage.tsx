// This where we'll start, where the magic will begin

import Save from "../body/Save";
import Navbar from "../navigation/Navbar";
import Banner from "./Banner";
import Welcome from "./Welcome";
import {Category} from "./Category";
// import Slider from "./Slider";
// import { categorylist } from "../../assets/categories";

export default function Homepage() {
    return(
            <div className="flex flex-col items-center">
                <Banner />
                <Navbar className="flex absolute" /> 
                <Welcome />
                <Save 
                    bookcover1="../../../public/assets/tpodg.jpg"
                    bookcover2="../../../public/assets/demons.jpg"
                    title="Browse your favourite literary works"
                    info="Dive into a vast collection of books, from timeless classics to modern masterpieces.
                    Whether you're looking for your next great read or revisiting old favorites, NovlNest makes 
                    it easy to explore, discover, and connect with the literary world that inspires you."
                    inverted={true}
                />
                <Save 
                    bookcover1="../../../public/assets/ttbp.jpg"
                    bookcover2="../../../public/assets/1984.jpg"
                    title="Keep track of what you're reading"
                    info="Effortlessly log and save every book, article, or paper you read. Whether you’re a 
                    casual reader or a bibliophile, keep track of your literary journey, share your thoughts, 
                    and revisit your favorites anytime."
                    inverted={false}
                />
                <h2 className="prata text-3xl text-white mt-32">
                    EXPLORE GENRES
                </h2>
                <div className="flex">
                    <a href="#"><Category image="../../../public/assets/categoryPics/art.jpg" title="ART"/></a>
                    <a href="#"><Category image="../../../public/assets/categoryPics/biography.jpg" title="BIOGRAPHY"/></a>
                    <a href="#"><Category image="../../../public/assets/categoryPics/childrens.jpg" title="CHILDREN'S"/></a>
                    <a href="#"><Category image="../../../public/assets/categoryPics/classics.jpg" title="CLASSICS"/></a>
                </div>
                <div className="flex">
                    <a href="#"><Category image="../../../public/assets/categoryPics/fantasy.jpg" title="FANTASY"/></a>
                    <a href="#"><Category image="../../../public/assets/categoryPics/history.jpg" title="HISTORY"/></a>
                    <a href="#"><Category image="../../../public/assets/categoryPics/horror.jpg" title="HORROR"/></a>
                    <a href="#"><Category image="../../../public/assets/categoryPics/mystery.jpg" title="MYSTERY"/></a>
                </div>
                <div className="flex">
                    <a href="#"><Category image="../../../public/assets/categoryPics/nonfiction.jpg" title="NON-FICTION"/></a>
                    <a href="#"><Category image="../../../public/assets/categoryPics/poetry.jpg" title="POETRY"/></a>
                    <a href="#"><Category image="../../../public/assets/categoryPics/scifi.jpg" title="SCIENCE-FICTION"/></a>
                    <a href="#"><Category image="../../../public/assets/categoryPics/selfhelp.jpg" title="SELF-HELP"/></a>
                </div>
                <footer className="bg-[#0f0f0f] mt-32 text-white py-4 w-full text-center">
                    <p>Cpyright &copy; {new Date().getFullYear()} NovlNest. All rights reserved.</p>
                </footer>
            </div>
            
    )
}