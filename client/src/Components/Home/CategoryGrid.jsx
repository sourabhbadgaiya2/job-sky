import React from "react";
import {
  FaFemale,
  FaShoppingBasket,
  FaHeart,
  FaFootballBall,
  FaTv,
  FaPlane,
  FaBaby,
  FaTags,
} from "react-icons/fa";

const categories = [
  {
    name: "Women's Fashion",
    icon: <FaFemale size={28} />,
    active: true,
  },
  {
    name: "Groceries & Pets",
    icon: <FaShoppingBasket size={28} />,
  },
  {
    name: "Health & Beauty",
    icon: <FaHeart size={28} />,
  },
  {
    name: "Sports & Outdoors",
    icon: <FaFootballBall size={28} />,
  },
  {
    name: "Home Appliance",
    icon: <FaTv size={28} />,
  },
  {
    name: "Tour & Travels",
    icon: <FaPlane size={28} />,
  },
  {
    name: "Mother & Baby",
    icon: <FaBaby size={28} />,
  },
  {
    name: "Clearance Sale",
    icon: <FaTags size={28} />,
    active: true,
  },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#f6f7fb] rounded-lg max-w-5xl mx-auto">
      {categories.map((cat, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center gap-2 text-center px-4 py-5 rounded-lg shadow-sm transition-all duration-200 cursor-pointer
            ${
              cat.active
                ? "bg-blue-100 text-black"
                : "bg-white hover:bg-blue-50"
            }`}
        >
          <div className="text-blue-600">{cat.icon}</div>
          <div className="text-sm font-semibold">{cat.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
