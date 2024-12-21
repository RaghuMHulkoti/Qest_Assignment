import React, { useState } from "react";
import Cards from "../components/cards"; 
import BlogSection from "../components/BlogSection";
import Pricing from "../components/Price";
import AppDownloadCard from "../components/AppDownloadCard";
import FAQ from "../components/FAQS";

const Home = () => {
  const [name, setName] = useState("");

  return (
    <div className="container mx-auto px-4">
      {/* Input Section */}
      <div className="flex justify-center mt-20">
  <form className="bg-white p-4 md:p-6 rounded flex items-center w-full md:w-[600px] shadow-md border border-gray-300">
  
    <label className="text-lg font-bold mr-4">
      AI<span className="text-red-500">MAX</span>:
    </label>
    
    <input
      className="bg-[#eeeeee] rounded text-base md:text-lg placeholder:text-gray-500 p-2 flex-1 outline-none w-full"
      type="text"
      placeholder="Curious? Let AI Uncover the Answers!"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </form>
</div>



      {/* Heading Section */}
      <div className="flex flex-col items-center text-center mt-20">
        <h3 className="text-3xl md:text-5xl font-bold text-black">
          Maximize Your <span className="text-black">Impact</span>
        </h3>
        <h3 className="text-3xl md:text-5xl font-bold text-[#f44f34]">
          Business with <span className="text-black">R</span>
          <span className="text-[#a00e0f]">Max</span>
        </h3>
      </div>

      {/* Description Section */}
      <div className="flex flex-col items-center text-center mt-4">
        <p className="text-sm md:text-lg text-[#475467] leading-6 md:leading-8 tracking-tight">
          Enhance your business with Rmax's all-in-one platform—streamlining
          client <br /> engagement, automating workflows, and fueling growth.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center mt-10 space-x-4">
        <button className="bg-[#F54F35] text-sm md:text-base text-white font-bold rounded-lg w-[110px] md:w-[126px] h-[40px] md:h-[49px]">
          Get Started<i className="text-white ri-arrow-right-line"></i>
        </button>
        <button className="bg-white text-sm md:text-base text-black font-medium rounded-lg w-[110px] md:w-[120px] h-[40px] md:h-[49px]">
          Book A Demo
        </button>
      </div>

      {/* Additional Features */}
      <div className="flex flex-wrap justify-center mt-10 gap-4 md:gap-8">
        {[
          "Seamless Onboarding",
          "Client Engagement",
          "Generate Report",
          "Revenue Growth",
        ].map((feature, index) => (
          <button
            key={index}
            className="bg-white text-black font-medium border-none rounded-lg w-[160px] md:w-[200px] h-[40px] md:h-[46px]"
            style={{
              fontFamily: "Urbanist",
              fontSize: "14px",
              lineHeight: "20px",
              textAlign: "center",
            }}
          >
            {feature}
          </button>
        ))}
      </div>

      {/* Onboard business section */}
      <div className="flex flex-col items-center mt-16 text-center">
        <p className="text-2xl md:text-5xl font-bold">
          Onboard business in 3 simple steps
        </p>
        <p className="text-sm md:text-base text-[#475467] mt-4 md:mt-10">
          Quick assisted onboarding with 30-day free trial. No credit card
          needed.
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10 mt-16">
        {/* Step 1: Claim Profile */}
        <div className="ml-20 flex flex-col items-center max-w-xs relative">
          <div className="absolute top-10 left-10 bg-[#F6F6F7] text-black rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
            1
          </div>
          <img
            src="/pictures/contact.svg"
            alt="Contact"
            className="w-40 h-40 md:w-48 md:h-48 object-contain"
          />
          <p className="mt-2 text-lg font-bold text-gray-800">
            Claim your preset profile
          </p>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Unlock tailored service and seamlessly elevate your experience by
            claiming your preset profile today.
          </p>
        </div>

        {/* Arrow */}
        <div className="flex items-center relative" style={{ top: "-50px" }}>
          <img
            src="/pictures/arrow.svg"
            alt="Arrow"
            className="w-52 h-52 md:w-64 md:h-64 object-contain"
          />
        </div>

        {/* Step 2: Add Services */}
        <div className="flex flex-col items-center max-w-xs relative">
          <div className="absolute top-10 left-10 bg-[#F6F6F7] text-black rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
            2
          </div>
          <img
            src="/pictures/services.svg"
            alt="Services"
            className="w-40 h-40 md:w-48 md:h-48 object-contain"
          />
          <p className="mt-2 text-lg font-bold text-gray-800">Add services</p>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Make use of multiple scheduling, pricing options to add services.
            Choose from pre-created scheduling templates.
          </p>
        </div>

        {/* Arrow */}
        <div className="flex items-center relative" style={{ top: "-50px" }}>
          <img
            src="/pictures/arrow2.svg"
            alt="Arrow2"
            className="w-52 h-52 md:w-64 md:h-64 object-contain"
          />
        </div>

        {/* Step 3: Built Website */}
        <div className="flex mr-20 flex-col items-center max-w-xs relative">
          <div className="absolute top-10 left-10 bg-[#F6F6F7] text-black rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
            3
          </div>
          <img
            src="/pictures/website.svg"
            alt="Website"
            className="w-40 h-40 md:w-48 md:h-48 object-contain"
          />
          <p className="mt-2 text-lg font-bold text-gray-800">Built Website</p>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Build your online storefront your way, seamlessly integrating all
            services for a cohesive and efficient client experience.
          </p>
        </div>
      </div>

      {/* Why Rmax? */}
      <div className="mt-32 flex flex-col justify-center items-center">
        <p className="font-bold text-[50px] text-center">Why Rmax?</p>
        <p className="text-center mt-4 text-[#475467]">
          Rmax is designed to simplify and transform the way service businesses
          operate. From onboarding, scheduling and billing to client <br />{" "}
          management, payments and growth, Rmax integrates everything in one
          easy-to-use platform connecting all the stakeholders.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-10">
        <Cards />
      </div>
      <div className="mt-40">
        <h5
          className="text-center font-bold text-[50px] leading-tight text-[#1F1F1F]"
          style={{ fontFamily: "Urbanist, sans-serif" }}
        >
          Empowering Service <br /> Providers Across Industries
        </h5>
        <p className="mt-3 text-center text-[18px] text-[#475467]">Whether you're in sports, education, wellness, household services, or niche markets, our technology <br /> simplifies your business operations, making it easier for you to focus on what you do best.</p>
      </div>
      <div >
        <BlogSection/>
      </div>
      <div>
        <Pricing/>
      </div>
      <div >
        <AppDownloadCard/>
      </div>
      <div className="mt-10">
        <FAQ/>
      </div>
    </div>
  );
};

export default Home;
