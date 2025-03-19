import React from "react";
import { FaCode, FaPencilRuler, FaSearch } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Modern and responsive websites that adapt to all devices.",
    icon: <FaCode className="text-blue-500 text-5xl mb-4 mx-auto" />,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and user-friendly design experiences.",
    icon: <FaPencilRuler className="text-pink-500 text-5xl mb-4 mx-auto" />,
  },
  {
    title: "SEO Optimization",
    description: "Boost your website’s visibility and ranking effectively.",
    icon: <FaSearch className="text-green-500 text-5xl mb-4 mx-auto" />,
  },
];

const ServiceCard = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
        Our Services
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 duration-300 p-8 w-80 text-center border-t-4 border-transparent hover:border-blue-500"
          >
            {service.icon}
            <h3 className="text-2xl font-bold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
