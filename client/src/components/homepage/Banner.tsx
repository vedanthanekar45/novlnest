// The stuff you usually see below the Navbar. Yeah I call it Banner, any problem?
import Bannerimage from "../../../public/assets/gallery10.jpg"

export default function Banner() {
    return (
        <>
            <div className="">
                <img src={Bannerimage} className="w-[1500px]"/>
            </div>
            <div className="top-grad"></div>
        </>
    )
}