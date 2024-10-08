// This where we'll start, where the magic will begin

import Save from "../body/Save";
import Navbar from "../navigation/Navbar";
import Banner from "./Banner";
import Welcome from "./Welcome";

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
                    title="Browse your favourite literary works"
                    info="Effortlessly log and save every book, article, or paper you read. Whether you’re a 
                    casual reader or a bibliophile, keep track of your literary journey, share your thoughts, 
                    and revisit your favorites anytime."
                    inverted={false}
                />
            </div>
            
    )
}