// AppDownloadCard.js
import React from "react";

const AppDownloadCard = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-4 w-full text-center bg-[#faf6f6] rounded-lg sm:p-8">
        <h3 className="mb-2 text-4xl font-bold text-[#1F1F1F]">
          Manage Your Business On the Go{" "}
        </h3>
        <p className="mt-4 text-base text-gray-500 sm:text-lg">
          With free Business Mobile App, you can manage your entire service
          business from anywhere. Stay connected and stay in control, no matter
          where your day takes you.
        </p>
        <div className="justify-center mt-10 items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a href="https://www.apple.com/app-store/">
            <img src="/pictures/AppStore.svg" alt="" />
          </a>
          <a
            href="https://play.google.com/store/games?hl=en_US&pli=1"
          >
            <img src="/pictures/PlayStore.svg" alt="" />
            <img src="" alt="" />

          </a>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadCard;
