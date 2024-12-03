// This where we'll start, where the magic will begin

import Save from "../body/Save";
import Navbar from "../navigation/Navbar";
import Banner from "./Banner";
import Welcome from "./Welcome";
import Genres from "./Genres"
import Footer from "./Footer"
import Journals from "./Journals";
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
                <Genres />
                <div className="group relative inline-block mb-10">
                    <a href="#"><h2 className="prata text-3xl text-white mt-32 mb-2">
                        LATEST JOURNALS
                    </h2></a>
                <div className="absolute left-0 bottom-0 h-0.5 w-full bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
                <Journals />
                <Footer />
            </div>
            
    )
}