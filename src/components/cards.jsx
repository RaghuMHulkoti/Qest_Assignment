import React from "react";

export default function Cards() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F9FAFB] py-4 sm:py-8">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{ width: "100%", maxWidth: "1200px", height: "auto" }}
      >
        {/* Scheduling Card */}
        <div
          className="p-6 bg-[#FAFAFA] border border-gray-200 rounded-md shadow flex flex-col items-center justify-between"
          style={{ width: "100%", height: "244px" }}
        >
          <i className="ri-calendar-2-line text-3xl text-[#F54F35]"></i>
          <h5 className="text-center text-[20px] font-bold text-[#1F1F1F]">
            Scheduling
          </h5>
          <p className="text-center text-[#475467]">
            Manage appointments, classes, events, and workshops with ease.
          </p>
          <p className="text-[#0000EE] text-center mt-2">
            View details <i className="ri-arrow-right-line"></i>
          </p>
        </div>

        {/* Client Management & CRM Card */}
        <div
          className="p-6 bg-[#FAFAFA] border border-gray-200 rounded-md shadow flex flex-col justify-between"
          style={{ width: "100%", height: "244px" }}
        >
          <h5 className="text-center text-[20px] font-bold text-[#1F1F1F]">
            Client Management & CRM
          </h5>
          <p className="text-center text-[#475467]">
            Keep track of customer data, preferences, and interactions to
            enhance relationships.
          </p>
          <p className="text-[#0000EE] text-center mt-4">
            View details <i className="ri-arrow-right-line"></i>
          </p>
        </div>

        {/* AI Powered Insights Card */}
        <div
          className="p-6 bg-[#FAFAFA] border border-gray-200 rounded-md shadow flex flex-col items-center justify-between"
          style={{ width: "100%", height: "244px" }}
        >
          <i className="ri-magic-line text-3xl text-[#F54F35]"></i>
          <h5 className="text-center text-[20px] font-bold text-[#1F1F1F]">
            AI Powered Insights
          </h5>
          <p className="text-center text-[#475467]">
            Gain actionable insights and track what's happening in your
            business.
          </p>
          <p className="text-[#0000EE] text-center mt-2">
            View details <i className="ri-arrow-right-line"></i>
          </p>
        </div>

        {/* Billing & Payments Card */}
        <div
          className="p-6 bg-[#FAFAFA] border border-gray-200 rounded-md shadow flex flex-col"
          style={{ width: "100%", height: "476px" }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/6fa6/e295/4d0e99797aa4929a2f6f84115cd97695?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTqduAo3aczm93MFXqJXDhdiQJDF1V25HznBP7eOjkYZKItbz5JIlMaAafO36imUkx5NiG9A0MieppP4tYrEJa0iydJnDfaNih0PIJW5jFGZgz5OcadRnNPN2O3lHHGuiMBkHRNwZlEaZHbwBuuIY94G5jkNgtrLUum~Z-ef690sq~g-pX4gLnR6~APpGOENvVCNQPaWdunxBPlEiU0vS6BZpZbwwTdQqdLezUXxlUEIZ7g4jDtIlAHXZiUrjccRhkOmSiyhGiTcTsUlsNMNPxaDkHfe2PsTwYIhWEE70GKJqFFBy8NuG~9-AL1uZDOeQYGTzFoMOAF6HbgQSKH~Fg__"
            alt="Billing and Payments"
            className="mb-4"
          />
          <h5 className="text-center text-[20px] font-bold text-[#1F1F1F]">
            Billing & Payments
          </h5>
          <p className="text-center text-[#475467]">
            Streamline invoicing and payments with automated workflows, reducing
            ...
          </p>
          <p className="text-[#0000EE] text-center mt-8">
            View details <i className="ri-arrow-right-line"></i>
          </p>
        </div>

        {/* Marketing and Multi-Location Cards Group */}
        <div className="flex flex-col gap-6" style={{ height: "476px" }}>
          {/* Marketing & Engagement Tools Card */}
          <div
            className="p-6 bg-[#FAFAFA] border border-gray-200 rounded-md shadow flex flex-col items-center justify-between"
            style={{ width: "100%", height: "238px" }}
          >
            <i className="ri-briefcase-line text-3xl text-[#F54F35]"></i>
            <h5 className="text-center text-[20px] font-bold text-[#1F1F1F]">
              Marketing & Engagement Tools
            </h5>
            <p className="text-center text-[#475467]">
              Boost client retention and grow your business with integrated...
            </p>
            <p className="text-[#0000EE] text-center mt-2">
              View details <i className="ri-arrow-right-line"></i>
            </p>
          </div>

          {/* Multi-Location Management Card */}
          <div
            className="p-3 bg-[#FAFAFA] border border-gray-200 rounded-md shadow flex flex-col items-center justify-between"
            style={{ width: "100%", height: "238px" }}
          >
            <i className="ri-map-pin-line text-3xl text-[#F54F35]"></i>
            <h5 className="text-center text-[20px] font-bold text-[#1F1F1F]">
              Multi-Location Management
            </h5>
            <p className="text-center text-[#475467]">
              Manage multiple locations with ease, assigning roles and
              permissions.
            </p>
            <p className="text-[#0000EE] text-center mt-2">
              View details <i className="ri-arrow-right-line"></i>
            </p>
          </div>
        </div>

        {/* Custom Brand Website */}
        <div
          className="p-6 bg-[#FAFAFA] border border-gray-200 rounded-md shadow flex flex-col items-center"
          style={{ width: "100%", height: "476px" }}
        >
          <h5 className="text-center text-[20px] font-bold text-[#1F1F1F]">
            Custom Branded Website
          </h5>
          <p className="text-center text-[#475467]">
            Quest's custom Branded Website Builder allows you to create a fully
            personalized...
          </p>
          <p className="text-[#0000EE] text-center mt-8">
            View details <i className="ri-arrow-right-line"></i>
          </p>
          <img
            src="/pictures/custom_brand.jpg"
            alt="Custom Brand Website"
            className="w-full h-auto mt-4 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
