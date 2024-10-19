import { categoryProp, Category } from "./Category";
import { useState } from "react";

interface SliderProps {
    categories: categoryProp[];
}
  
  export default function Slider({ categories }: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4; // Number of items to show at once
  
    const handlePrev = () => {
    //   if (currentIndex > 0) {
    //     setCurrentIndex(currentIndex - 1);
    //   }
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };
  
    const handleNext = () => {
    //   if (currentIndex < categories.length - itemsPerPage) {
    //     setCurrentIndex(currentIndex + 1);
    //   }
    setCurrentIndex((prev) => Math.min(prev + 1, categories.length - itemsPerPage));
    };
  
    return (
      <div className="relative w-full overflow-hidden">
        {/* Arrow buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          disabled={currentIndex === 0}
        >
          &#9664;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          disabled={currentIndex >= categories.length - itemsPerPage}
        >
          &#9654;
        </button>
  
        {/* Slider container */}
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
            width: `${(categories.length / itemsPerPage) * 100}%`, // Adjust width based on number of items
          }}
        >
          {categories.map((category, index) => (
                <Category key={index} image={category.image} title={category.title} link={category.link}/>
          ))}
        </div>
      </div>
    );
  }