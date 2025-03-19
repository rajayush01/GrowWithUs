import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$19/month",
    features: ["1 Project", "Basic Support"],
    bg: "bg-gradient-to-br from-blue-100 to-blue-200",
    border: "border-blue-300",
  },
  {
    name: "Pro",
    price: "$49/month",
    features: ["5 Projects", "Priority Support"],
    bg: "bg-gradient-to-br from-green-100 to-green-200",
    border: "border-green-300",
  },
  {
    name: "Enterprise",
    price: "$99/month",
    features: ["Unlimited Projects", "Dedicated Support"],
    bg: "bg-gradient-to-br from-yellow-100 to-yellow-200",
    border: "border-yellow-300",
  },
];

const PricingTable = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 py-16">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
        💡 Pricing Plans
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 duration-300 p-8 w-80 text-center border-2 ${plan.border} ${plan.bg}`}
          >
            <h3 className="text-3xl font-bold text-gray-800">{plan.name}</h3>
            <h4 className="text-4xl font-bold text-green-600 my-6">
              {plan.price}
            </h4>
            <ul className="text-gray-600 mb-8 space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center justify-center">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300">
              🚀 Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
