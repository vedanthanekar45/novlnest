// {categories.map((category, index) => (
//     <Category key={index} image={category.image} title={category.title} link={category.link}/>
// ))}

import {Category} from "./Category"

export default function Genres () {
    return (
            <div className="flex flex-col items-center">
                <div className="group relative inline-block mb-10">
                    <h2 className="prata text-3xl text-white mt-32 mb-2">
                        EXPLORE GENRES
                    </h2>
                <div className="absolute left-0 bottom-0 h-0.5 w-full bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
                <div className="flex">
                    <a href="#"><Category image="/assets/categoryPics/art.jpg" title="ART"/></a>
                    <a href="#"><Category image="/assets/categoryPics/biography.jpg" title="BIOGRAPHY"/></a>
                    <a href="#"><Category image="/assets/categoryPics/childrens.jpg" title="CHILDREN'S"/></a>
                    <a href="#"><Category image="/assets/categoryPics/classics.jpg" title="CLASSICS"/></a>
                </div>
                <div className="flex">
                    <a href="#"><Category image="/assets/categoryPics/fantasy.jpg" title="FANTASY"/></a>
                    <a href="#"><Category image="/assets/categoryPics/history.jpg" title="HISTORY"/></a>
                    <a href="#"><Category image="/assets/categoryPics/horror.jpg" title="HORROR"/></a>
                    <a href="#"><Category image="/assets/categoryPics/mystery.jpg" title="MYSTERY"/></a>
                </div>
                <div className="flex">
                    <a href="#"><Category image="/assets/categoryPics/nonfiction.jpg" title="NON-FICTION"/></a>
                    <a href="#"><Category image="/assets/categoryPics/poetry.jpg" title="POETRY"/></a>
                    <a href="#"><Category image="/assets/categoryPics/scifi.jpg" title="SCIENCE-FICTION"/></a>
                    <a href="#"><Category image="/assets/categoryPics/selfhelp.jpg" title="SELF-HELP"/></a>
                </div>
        </div>
    )
}