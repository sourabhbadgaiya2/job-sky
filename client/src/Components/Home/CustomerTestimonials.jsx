import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      title: "Excellent Platform",
      content: "Thanks to Jabithur, I landed a great job in just a few days. The process was quick and smooth. Highly recommended!",
      author: "Rahul Sharma",
      role: "Software Developer, Pune",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 2,
      title: "Very Helpful Service",
      content: "I was shocked by the speed of response and quality of support I received. The team truly cares about helping people!",
      author: "Priya Verma",
      role: "Graphic Designer, Mumbai",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 3,
      title: "Smooth & Reliable",
      content: "My experience with Jabithur was amazing. They guided me step-by-step and helped me get placed in a top firm.",
      author: "Amit Patel",
      role: "Business Analyst, Ahmedabad",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      id: 4,
      title: "Life-changing Service",
      content: "I can't thank Jabithur enough. From job listing to final joining, their team was always supportive and responsive.",
      author: "Sneha Iyer",
      role: "HR Executive, Bangalore",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Handle auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // Detect screen size and adjust slide count
  useEffect(() => {
    const updateSlides = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Get visible testimonials based on slidesToShow
  const visibleTestimonials = [];
  for (let i = 0; i < slidesToShow; i++) {
    visibleTestimonials.push(testimonials[(currentIndex + i) % testimonials.length]);
  }

  return (
    <div style={{ backgroundColor: "#F5F5F5" }} className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold text-[#1F2937] mb-2 drop-shadow-md">
            <span className="text-[#0077B6]">What Our </span>Happy Customers Say
          </h2>
          <p className="text-gray-600 text-sm">
            Discover how people are shocked and satisfied with our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-transform duration-500 ease-in-out">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 relative group hover:shadow-2xl transition-all duration-300"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <FaQuoteLeft className="text-[#0077B6] text-3xl absolute -top-5 left-5 bg-white p-1 rounded-full shadow" />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-6 border-t pt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#0077B6]"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-[#0077B6]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
