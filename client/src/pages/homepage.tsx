// This where we'll start, where the magic will begin

import { useEffect, useState } from 'react'
import axios from 'axios'
import Save from "../components/body/Save";
import Navbar from "../components/navigation/Navbar";
import Banner from "../components/homepage/Banner";
import Welcome from "../components/homepage/Welcome";
import Genres from "../components/homepage/Genres"
import Footer from "../components/homepage/Footer"
import Journals from "../components/homepage/Journals";
import bookcover11 from "/assets/tpodg.jpg"
import bookcover12 from "/assets/demons.jpg"
import bookcover21 from "/assets/ttbp.jpg"
import bookcover22 from "/assets/1984.jpg"

interface UserInfo {
    id: number,
    username: string,
    email: string,
    fullName: string,
};

export default function Homepage() {

    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    useEffect(() => {
        const fetchUserInfo = async () => {
            const token = localStorage.getItem('authToken')
            
            if (!token) {
                console.log("No token found, returning to login")
                window.location.href = '/signin';
                return;
            }

            try {
                const response = await axios.get<UserInfo>('http://127.0.0.1:8000/api/user/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });
                setUserInfo(response.data)
            } catch (error: any) {
                console.error('Error fetching data', error.reponse?.data || error.message);
            }
        };

        fetchUserInfo();
        console.log(userInfo);
    })

    return(
            <div className="flex flex-col items-center">
                <Banner source="/assets/gallery10.jpg"/>
                <Navbar className="flex absolute" /> 
                <Welcome />
                <Save 
                    bookcover1={bookcover11}
                    bookcover2={bookcover12}
                    title="Browse your favourite literary works"
                    info="Dive into a vast collection of books, from timeless classics to modern masterpieces.
                    Whether you're looking for your next great read or revisiting old favorites, NovlNest makes 
                    it easy to explore, discover, and connect with the literary world that inspires you."
                    inverted={true}
                />
                <Save 
                    bookcover1={bookcover21}
                    bookcover2={bookcover22}
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
                <div className="absolute left-0 bottom-0 h-0.5 w-full bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </div>
                <Journals />
                <Footer />
            </div>
            
    )
}