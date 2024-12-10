import Navbar from "../components/navigation/Navbar";
import Banner from "../components/homepage/Banner";
import Title from "../components/genre/title";
import GenreInfo from "../components/genre/genreInfo";
import Footer from "../components/homepage/Footer";
import ExploreBooks from "../components/genre/ExploreBooks";

export default function GenrePage() {
    return (
        <div className="flex flex-col items-center">
            <Banner source="/assets/coverBanners/fantasy.jpg"/>
            <Navbar className="flex absolute"/>
            <Title titleName="THE FANTASY GENRE" className="absolute top-1/3 fadeIn"/>
            <GenreInfo 
            info="The fantasy genre, a cornerstone of imaginative storytelling, invites readers into worlds teeming 
            with magic, mythical creatures, and epic quests. It often explores themes of good versus evil, heroism, 
            and the triumph of the human spirit, offering a rich tapestry of characters and settings that transcend 
            the mundane. 
            
            Originating in folklore and mythology, fantasy has evolved to include diverse subgenres, from high fantasy 
            like J.R.R. Tolkien's The Lord of the Rings, where intricate world-building and moral complexities abound, 
            to urban fantasy that blends magical elements into modern settings, such as Neil Gaiman's Neverwhere.

            Central to fantasy is the suspension of disbelief, achieved through meticulously crafted rules of magic and 
            lore that make the extraordinary feel real. Whether delving into the intricate politics of George R.R. Martin's 
            A Song of Ice and Fire or the whimsical adventures in J.K. Rowling's Harry Potter, the genre provides an escape 
            from reality while often mirroring societal issues in nuanced ways."
            className="absolute top-1/2 text-justify"
            />
            <div className="relative group inline-block mt-[400px]">
                {/* <h2 className="prata text-3xl text-white">
                    EXPLORE BOOKS
                </h2>
                <div className="absolute left-0 bottom-0 h-0.5 w-full bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div> */}
            </div>
            <ExploreBooks />
            <Footer />
        </div>
    )
}