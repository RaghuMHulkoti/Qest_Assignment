import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [featuresMenuOpen, setFeaturesMenuOpen] = useState(false);
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <nav className="bg-white shadow-md flex justify-between items-center rounded-lg w-full px-4 md:w-[1054px] md:h-[54px]">
        {/* Logo Section */}
        <div className="text-xl font-bold">R<span className="text-[#a00e0f]">Max</span></div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 absolute md:static left-0 right-0 top-12 bg-white shadow-md md:shadow-none rounded-lg md:rounded-none px-4 py-2 md:px-0 md:py-0`}
        >
          <li>
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-500 md:inline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Pricing"
              className="block text-gray-700 hover:text-blue-500 md:inline"
            >
              Pricing
            </Link>
          </li>

          {/* Features Dropdown */}
          <li className="relative">
            <button
              onClick={() => setFeaturesMenuOpen(!featuresMenuOpen)}
              className="text-gray-700 hover:text-blue-500 flex items-center"
            >
              Features
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {featuresMenuOpen && (
              <ul className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md flex flex-col max-h-48 overflow-y-auto">
                {/* Discover Section */}
                <li>
                  <div className="font-bold text-gray-700 px-4 py-2">
                    Discover
                  </div>
                  <ul className="pl-4">
                    <li>
                      <Link
                        to="#customWebsite"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <i className="text-[#F54F35] ri-pages-line"></i>
                        <span className="ml-2">Custom Branded Website</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#userApp"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-smartphone-line"></i>
                        <span className="ml-2">User Mobile App</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#businessPage"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class=" text-[#F54F35] ri-pages-fill"></i>
                        <span className="ml-2">Business Webpage</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Manage Section */}
                <li>
                  <div className="font-bold text-gray-700 px-4 py-2">
                    Manage
                  </div>
                  <ul className="pl-4">
                    <li>
                      <Link
                        to="#courses"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-book-open-line"></i>
                        <span className="ml-2">Courses</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#classes"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class=" text-[#F54F35]  ri-school-line"></i>
                        <span className="ml-2">Classes</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#appointments"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-pantone-line"></i>
                        <span className="ml-2">Appointments</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#services"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-customer-service-2-line"></i>
                        <span className="ml-2">Services</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#retreats"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-magic-line"></i>
                        <span className="ml-2">Retreats</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#payments"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-bank-card-line"></i>
                        <span className="ml-2">Payments</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#designTools"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-pencil-ruler-2-line"></i>
                        <span className="ml-2">Design Tools</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#communicationTrail"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-mail-line"></i>
                        <span className="ml-2">
                          Communication Trail Session
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#staffRoles"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-pantone-fill"></i>
                        <span className="ml-2">Staff Roles</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#workshops"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-home-gear-line"></i>
                        <span className="ml-2">Workshops</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#reportingTools"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-tools-fill"></i>
                        <span className="ml-2">Reporting Tools</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#multiLocation"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class=" text-[#F54F35] ri-map-2-line"></i>
                        <span className="ml-2">Multi Location</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#events"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-calendar-event-fill"></i>
                        <span className="ml-2">Events</span>
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Grow Section */}
                <li>
                  <div className="font-bold text-gray-700 px-4 py-2">Grow</div>
                  <ul className="pl-4">
                    <li>
                      <Link
                        to="#aiMarketing"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-magic-line"></i>
                        <span className="ml-2">AI Marketing Tools</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#socialMedia"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-mail-unread-line"></i>
                        <span className="ml-2">Social Media Integration</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#crm"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <i class="text-[#F54F35] ri-sticky-note-line"></i>
                        <span className="ml-2">CRM</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </li>

          {/* Solutions Dropdown */}
          <li className="relative">
            <button
              onClick={() => setSolutionsMenuOpen(!solutionsMenuOpen)}
              className="text-gray-700 hover:text-blue-500 flex items-center"
            >
              Solutions
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {solutionsMenuOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md flex flex-col">
                <li>
                  <Link
                    to="#solution1"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Solution 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="#solution2"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Solution 2
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Login and Try for Free Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="bg-white border text-black px-4 py-2 rounded-md font-bold"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[#F54F35] text-white px-4 py-2 rounded-md"
          >
            Try for Free
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
