import React, { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="relative mt-40 w-full isolate bg-[#FAF6F6] px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Choose Plan <br />
          That’s Right For You
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl">
        Simple and transparent pricing. Start for free, upgrade when you love it.
        <span className="text-[#A10F0F]"> 30 day free trial in a button </span>
      </p>
      <p className="text-center mt-8">
        Running a <span className="font-bold">Growth Business</span> or{" "}
        <span className="font-bold">Enterprise</span>? Let's connect -{" "}
        <button className="bg-[#F54F35] text-white py-2 px-4 rounded-md">
          Talk Sales
        </button>
      </p>
      <div className="flex items-center justify-center mt-4">
        <span className="mr-3 text-sm font-medium text-black">
          Monthly
        </span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isYearly}
            onChange={togglePricing}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-black ">
            Yearly <span><button className="bg-[#FFECEA] text-[#F44F34] font-bold py-2 px-4 rounded-lg"> Save 25% </button></span>
          </span>
          
        </label>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {/* Hobby Plan */}

<div className="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
  <h3 className="text-base font-semibold text-[#F54F35]">STARTER</h3>
  <p className="mt-4 flex items-baseline gap-x-2">
    <span className="text-5xl font-semibold tracking-tight text-gray-900">
      ${isYearly ? 170 : 17}
    </span>
    <span className="text-base text-gray-500">
      /{isYearly ? "year" : "month"}
    </span>
  </p>
  <p className="mt-6 text-base text-gray-600">
    The perfect plan if you're just getting started with our product.
  </p>
  <ul role="list" className="mt-8 space-y-3 text-sm text-gray-600 sm:mt-10">
    <li className="flex gap-x-3">
      <svg
        className="h-6 w-5 flex-none text-indigo-600"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
          clipRule="evenodd"
        />
      </svg>
      Commercial License
    </li>
    <li className="flex gap-x-3">
      <svg
        className="h-6 w-5 flex-none text-indigo-600"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
          clipRule="evenodd"
        />
      </svg>
      100+ HTML UI Elements
    </li>
    <li className="flex gap-x-3">
      <svg
        className="h-6 w-5 flex-none text-indigo-600"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
          clipRule="evenodd"
        />
      </svg>
      Unlimited Domain Support
    </li>
    <li className="flex gap-x-3 opacity-50 ">
    <span className="mr-1">❌</span> 6 Month Premium Support
    </li>
    <li className="flex gap-x-3 opacity-50">
    <span className="mr-1">❌</span> Life Time Updates
    </li>
  </ul>
  <button className="mt-8 w-full py-2 px-3 text-sm font-semibold text-white  rounded-md bg-[#FEF0EE]  focus:outline-none focus:ring-2 ">
    <p className='text-[#F54F35]'>Get Started<i className="text-[#F54F35] ri-arrow-right-line"></i></p>
  </button>
</div>
        <div className="rounded-md   ring-1  sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
          <h3 className="text-base font-semibold text-[#F54F35]">PREMIUM</h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-semibold tracking-tight text-black">
              ${isYearly ? 880 : 88}
            </span>
            <span className="text-base  text-black">
              /{isYearly ? "year" : "month"}
            </span>
          </p>
          <p className="mt-6 text-base  text-black">
            For the companies looking for more advanced tools and support.
          </p>
          <ul role="list" className="mt-8 space-y-3 text-sm  text-black sm:mt-10">
            <li className="flex gap-x-3">
            <svg
                className="h-6 w-5 flex-none  text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              Commercial License
            </li>
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none  text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              100+ HTML UI Elements
            </li>
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none  text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              Unlimited Domain Support            </li>
            <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none  text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              6 Month Premium Support
              </li>
              <li className="flex gap-x-3">
              <svg
                className="h-6 w-5 flex-none  text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              Life Time Updates

              </li>
          </ul>
          <button className="mt-8 w-full py-2 px-3 text-sm font-semibold text-white  rounded-md bg-[#FEF0EE]  focus:outline-none focus:ring-2 ">
            <p className='text-[#F54F35]'>Get Started<i className="text-[#F54F35] ri-arrow-right-line"></i></p>
            
          </button>
        </div>
      </div>
      <div className="text-center mt-9">
        <p className="text-xl text-[#0000EE] underline">Explore In-Depth Differences</p>
      </div>
    </div>
  );
};

export default Pricing;
