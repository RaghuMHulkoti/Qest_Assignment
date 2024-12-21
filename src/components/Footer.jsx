import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] py-10 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 px-6">
        {/* Company Section */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-400">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Business Size Section */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-400">Business Size</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Entrepreneurs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                SMBs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Growth Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Household Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Enterprise
              </a>
            </li>
          </ul>
        </div>

        {/* Business Type Section */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-400">Business Type</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Health & Wellness
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Sports
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Learning Activities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Household Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Miscellaneous
              </a>
            </li>
          </ul>
        </div>

        {/* Download Section */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-400">Download</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.apple.com/app-store/"
                className="hover:text-gray-400 text-[#FAFAFA]"
              >
                <i className="ri-apple-fill"></i> Business App
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/games?hl=en_US&pli=1"
                className="hover:text-gray-400 text-[#FAFAFA]"
              >
                <i className="ri-google-play-fill"></i> Business App
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/app-store/"
                className="hover:text-gray-400 text-[#FAFAFA]"
              >
                <i className="ri-apple-fill"></i> User App
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/games?hl=en_US&pli=1"
                className="hover:text-gray-400 text-[#FAFAFA]"
              >
                <i className="ri-google-play-fill"></i> User App
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-400">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 text-[#FAFAFA]">
                Return Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-400">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <p className="text-[#FAFAFA]">support@Rmax.com</p>
            </li>
            <li>
              <p className="text-[#FAFAFA]">+91-8459671235</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}

<div className="border-t border-gray-700 mt-8 pt-6">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
    <p className="text-sm text-gray-400">
      © 2024 Copyright, All Rights Reserved@RMax
    </p>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href="https://x.com/" className="hover:text-gray-400 text-white">
        <i className="ri-twitter-fill"></i>
      </a>
      <a
        href="https://www.facebook.com/"
        className="hover:text-gray-400 text-white"
      >
        <i className="ri-facebook-circle-fill"></i>
      </a>
      <a
        href="https://www.instagram.com/"
        className="hover:text-gray-400 text-white"
      >
        <i className="ri-instagram-line"></i>
      </a>
      <a
        href="https://www.linkedin.com/"
        className="hover:text-gray-400 text-white"
      >
        <i className="ri-linkedin-box-fill"></i>
      </a>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
