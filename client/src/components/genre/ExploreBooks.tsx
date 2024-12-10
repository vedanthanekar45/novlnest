import { Book } from "./Book"

export default function ExploreBooks () {
    return (
            <div className="flex flex-col items-center">
                <div className="group relative inline-block mb-10">
                    <h2 className="prata text-3xl text-white mt-32 mb-2">
                        EXPLORE POPULAR BOOKS
                    </h2>
                <div className="absolute left-0 bottom-0 h-0.5 w-full bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </div>
                <div className="flex mb-16">
                    <a href="/genre"><Book image="/assets/bookcovers/1.jpg" /></a>
                    <a href="/genre"><Book image="/assets/bookcovers/2.jpg" /></a>
                    <a href="/genre"><Book image="/assets/bookcovers/3.jpg" /></a>
                    <a href="/genre"><Book image="/assets/bookcovers/4.jpg" /></a>
                </div>
                <div className="flex mb-16">
                    <a href="/genre"><Book image="/assets/bookcovers/5.jpg" /></a>
                    <a href="/genre"><Book image="/assets/bookcovers/6.jpg" /></a>
                    <a href="/genre"><Book image="/assets/bookcovers/7.jpg" /></a>
                    <a href="/genre"><Book image="/assets/bookcovers/8.jpg" /></a>
                </div>
                <div className="flex mb-16">
                    <a href="/genre"><Book image="/assets/bookcovers/9.jpg" /></a>
                    <a href="/genre"><Book image="/assets/bookcovers/10.jpg" /></a>
                    <a href="/genre"><Book image="/assets/bookcovers/11.jpg" /></a>
                    <a href="/genre"><Book image="/assets/bookcovers/12.jpg" /></a>
                </div>
        </div>
    )
}