import React, { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-3">
          Find answers to common questions about our services and features. For
          more details, contact our support team.
        </p>
      </div>
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Ask Q! e.g Tell me about key Features."
          className="flex-1 p-2 border border-gray-300 rounded-l"
        />
        <button className="p-2 bg-orange-500 text-white rounded-r">
          <i className="ri-search-line"></i>
        </button>
      </div>
      <div className="border border-[#E5E7EB] rounded-md mb-2">
        <div
          className="p-4 bg-white cursor-pointer flex justify-between items-center"
          onClick={() => toggleFAQ(0)}
        >
          <h2 className="font-bold">What is RMax?</h2>
          <i
            className={`ri-arrow-${
              activeIndex === 0 ? "up-wide" : "right-wide"
            }-line`}
          ></i>
        </div>
        {activeIndex === 0 && (
          <p className="p-4 text-[#475467] bg-white">
            Qest is a SaaS platform/ecosystem that lets any small to medium
            service business setup & manage their business quickly & easily.
          </p>
        )}
      </div>
      <div className="border border-[#E5E7EB] rounded-md mb-2">
        <div
          className="p-4 bg-white cursor-pointer flex justify-between items-center"
          onClick={() => toggleFAQ(1)}
        >
          <h2 className="font-bold">How does it work?</h2>
          <i
            className={`ri-arrow-${
              activeIndex === 1 ? "up-wide" : "right-wide"
            }-line`}
          ></i>
        </div>
        {activeIndex === 1 && (
          <p className="p-4 text-[#475467] bg-white">Answer to how it works.</p>
        )}
      </div>
      <div className="border border-[#E5E7EB] rounded-md mb-2">
        <div
          className="p-4 bg-white cursor-pointer flex justify-between items-center"
          onClick={() => toggleFAQ(2)}
        >
          <h2 className="font-bold">How much does it cost?</h2>
          <i
            className={`ri-arrow-${
              activeIndex === 2 ? "up-wide" : "right-wide"
            }-line`}
          ></i>
        </div>
        {activeIndex === 2 && (
          <p className="p-4 text-[#475467] bg-white">
            Answer to how much it costs.
          </p>
        )}
      </div>
      <div className="text-center mt-6">
        <p>
          Haven’t got your answer?{" "}
          <Link to="/contact" className="text-[#0000EE]">
            Contact our support now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
