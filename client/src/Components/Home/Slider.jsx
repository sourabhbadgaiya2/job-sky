import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const desktopImages = [
    "https://images.unsplash.com/photo-1742535033622-1df5103bf62d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1659353741155-e988422cf9ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1725026455189-7e98b43d3dfa?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const mobileImages = [
  "https://images.unsplash.com/photo-1742535033622-1df5103bf62d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1659353741155-e988422cf9ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1725026455189-7e98b43d3dfa?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const nextSlide = () => {
    const maxLength = window.innerWidth >= 1024 ? desktopImages.length : mobileImages.length;
    setCurrentSlide((prev) => (prev === maxLength - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxLength = window.innerWidth >= 1024 ? desktopImages.length : mobileImages.length;
    setCurrentSlide((prev) => (prev === 0 ? maxLength - 1 : prev - 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Desktop Slider */}
      <div className="hidden lg:block w-full relative">
        <div
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {desktopImages.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img src={img} alt={`Desktop Slide ${index}`} className="w-full h-screen object-cover" />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow"
        >
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
          {desktopImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#009688]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="lg:hidden w-full relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {mobileImages.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img src={img} alt={`Mobile Slide ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
          {mobileImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#009688]' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
