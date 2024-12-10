import {Category} from "./Category"
// import {categorylist} from '../../assets/categories.ts'
import artimage from "../../../public/assets/categoryPics/art.jpg"
import bioimage from "../../../public/assets/categoryPics/biography.jpg"
import childimage from "../../../public/assets/categoryPics/childrens.jpg"
import classimage from "../../../public/assets/categoryPics/classics.jpg"
import fantimage from "../../../public/assets/categoryPics/fantasy.jpg"
import histimage from "../../../public/assets/categoryPics/history.jpg"
import horrorimage from "../../../public/assets/categoryPics/horror.jpg"
import mystimage from "../../../public/assets/categoryPics/mystery.jpg"
import nfimage from "../../../public/assets/categoryPics/nonfiction.jpg"
import poetryimage from "../../../public/assets/categoryPics/poetry.jpg"
import sfimage from "../../../public/assets/categoryPics/scifi.jpg"
import shimage from "../../../public/assets/categoryPics/selfhelp.jpg"


export default function Genres () {
    return (
            <div className="flex flex-col items-center">
                <div className="group relative inline-block mb-10">
                    <h2 className="prata text-3xl text-white mt-32 mb-2">
                        EXPLORE GENRES
                    </h2>
                <div className="absolute left-0 bottom-0 h-0.5 w-full bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </div>
                <div className="flex">
                    <a href="/genre"><Category image={artimage} title="ART"/></a>
                    <a href="/genre"><Category image={bioimage} title="BIOGRAPHY"/></a>
                    <a href="/genre"><Category image={childimage} title="CHILDREN'S"/></a>
                    <a href="/genre"><Category image={classimage} title="CLASSICS"/></a>
                </div>
                <div className="flex">
                    <a href="/genre"><Category image={fantimage} title="FANTASY"/></a>
                    <a href="/genre"><Category image={histimage} title="HISTORY"/></a>
                    <a href="/genre"><Category image={horrorimage} title="HORROR"/></a>
                    <a href="/genre"><Category image={mystimage} title="MYSTERY"/></a>
                </div>
                <div className="flex">
                    <a href="/genre"><Category image={nfimage} title="NON-FICTION"/></a>
                    <a href="/genre"><Category image={poetryimage} title="POETRY"/></a>
                    <a href="/genre"><Category image={sfimage} title="SCIENCE-FICTION"/></a>
                    <a href="/genre"><Category image={shimage} title="SELF-HELP"/></a>
                </div>
        </div>
    )
}