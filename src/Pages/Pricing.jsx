import React from "react";
import FAQ from "../components/FAQS";

const Pricing = () => {
  return (
    <div>
      <div className="text-center mt-20">
        <p
          className="text-5xl font-bold"
          style={{ fontFamily: "Urbanist, sans-serif" }}
        >
          Flexible Plans,
          <br /> Transparent Pricing
        </p>
      </div>
      <div className="text-center mt-5">
        <p className="text-[#475467]">
          Find the Perfect Fit for You <br />
          <span className="text-[#F54F35]">
            30-day free trial with money-back guarantee.
          </span>
        </p>
      </div>

      {/* Table Title */}
      <div className="text-center mt-10">
        <h2 className="text-[28px] font-bold text-[#1F1F1F]">Compare Our Plans</h2>
      </div>

      <section className="dark:text-gray-800 mb-3 p-8">
        <div className="container mx-auto p-6 overflow-x-auto">
          <table className="w-full bg-[#FAF6F6]">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th>
                  {" "}
                  <th scope="row" className="text-left" colSpan="3">
                    <h3 className="py-3 text-lg font-bold">Features</h3>
                  </th>
                </th>
                <th scope="col">
                  <h2 className="px-2 text-[18px] font-bold">Starter</h2>
                  <p className="mb-3">
                    <span className="text-sm text-[#475467] sm:text-sm">
                      $17/month, billed <br />
                      monthly
                    </span>
                  </p>
                </th>
                <th scope="col">
                  <h2 className="px-2 text-[18px] font-bold">Premium</h2>
                  <p className="mb-3">
                    <span className="text-sm text-[#475467] sm:text-sm">
                      $88/month, billed <br />
                      monthly
                    </span>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody className="space-y-6 text-center divide-y dark:divide-gray-300">
              {/* Add basic requirement text */}
              <tr>
                <th scope="row" className="text-left" colSpan="3">
                  <h3 className="py-3 text-lg font-bold">Basic Requirements</h3>
                </th>
              </tr>

              {/* Users and Features Rows */}
              <tr className="text-[#475467]">
                <th scope="row" className="text-left">
                  <h3 className="py-3 ">Users</h3>
                </th>
                <td>
                  <span className="block text-sm">1</span>
                </td>
                <td>
                  <span className="block text-sm">15</span>
                </td>
              </tr>
              <tr className="text-[#475467]">
                <th scope="row" className="text-left">
                  <h3 className="py-3">Branches</h3>
                </th>
                <td>
                  <span className="block text-sm">1</span>
                </td>
                <td>
                  <span className="block text-sm">10</span>
                </td>
              </tr>
              <tr className="text-[#475467]">
                <th scope="row" className="text-left">
                  <h3 className="py-3">Courses</h3>
                </th>
                <td>
                  <span className="block text-sm">3</span>
                </td>
                <td>
                  <span className="block text-sm">15/branch</span>
                </td>
              </tr>
              <tr className="text-[#475467]">
                <th scope="row" className="text-left">
                  <h3 className="py-3">Max. Students Allowed</h3>
                </th>
                <td>
                  <span className="block text-sm">25</span>
                </td>
                <td>
                  <span className="block text-sm">500</span>
                </td>
              </tr>
              <tr className="text-[#475467]">
                <th scope="row" className="text-left">
                  <h3 className="py-3">Communication</h3>
                </th>
                <td>
                  <span className="block text-sm">25</span>
                </td>
                <td>
                  <span className="block text-sm">Yes</span>
                </td>
              </tr>
              <tr className="text-[#475467]">
                <th scope="row" className="text-left">
                  <h3 className="py-3">Bulk Updates</h3>
                </th>
                <td>
                  <span className="block text-sm">25</span>
                </td>
                <td>
                  <span className="block text-sm">Yes</span>
                </td>
              </tr>
              <tr className="text-[#475467]">
                <th scope="row" className="text-left">
                  <h3 className="py-3">User Roles</h3>
                </th>
                <td>
                  <span className="block text-sm">25</span>
                </td>
                <td>
                  <span className="block text-sm">Yes</span>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button className="mt-8 w-[126px] h-[49px] py-2 px-3 text-sm font-semibold text-white rounded-md bg-[#FEF0EE] focus:outline-none focus:ring-2">
                    <p className="text-[#F54F35]">
                      Get Started
                      <i className="text-[#F54F35] ri-arrow-right-line"></i>
                    </p>
                  </button>
                  <p className="text-[#475467] text-[12px]">
                    No credit card required
                  </p>
                </td>
                <td>
                  <button className="mt-8 w-[126px] h-[49px] py-2 px-3 text-sm font-semibold text-white rounded-md bg-[#FEF0EE] focus:outline-none focus:ring-2">
                    <p className="text-[#F54F35]">
                      Get Started
                      <i className="text-[#F54F35] ri-arrow-right-line"></i>
                    </p>
                  </button>
                  <p className="text-[#475467] text-[12px]">
                    No credit card required
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div>
        <FAQ/>
      </div>
    </div>
  );
};

export default Pricing;
