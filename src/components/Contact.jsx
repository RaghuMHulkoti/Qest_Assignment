import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    yourName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="isolate bg-[#F6F7F6] px-6 py-24 mt-10 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Get in touch with us. We're here to assist you.
        </h2>
      </div>

      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="businessName"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Business name<span className="text-red-600">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="yourName"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Your name<span className="text-red-600">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="yourName"
                name="yourName"
                value={formData.yourName}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="xyz@gmail.com"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phoneNumber"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Phone number<span className="text-red-600">*</span>
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>+91</option>
                  </select>
                  <svg
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  placeholder=" 1234567890"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Message<span className="text-red-600">*</span>
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#F54F35] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm "
          >
            Leave us a Message<i className="text-white ri-arrow-right-line"></i>
          </button>
        </div>
      </form>
      <div
          className="bg-cover w-screen bg-center bg-no-repeat mt-16"
          style={{
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/3fc9/7f0a/aa7b6b782de34d7a1b1ddadef14335a2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MlUh-8z2r1lj7bFsqdIcKPMBuTCNtNV2WQBpFdF6HQQsquEXKdCxtvkHj351CKBcIUelqaTV3xOYIw-kJDGZpn0XBmZ-BefQNdq9djmhfn-sdYubxu-pmQvo~2tnrxq6iTqkFLhIAThLbFvtIDLGRwGleop3Lwl4RlzJ~E9GeVkMrSz0fiFXP4h-cMME93K6YnHbnOkX-n5hKkx83YtCuEP5bIEcngybJXXc6FILpfUGCEe402vu9SrU2iayqZMdwmYOKAz5l26gCuTwOHqP1TQ5EV7GFSuOKjlTfHSqC05xnaX-HfmnYLUbhJeNoTVxLem3NTza5qegaMxV7pfJKA__)",
          }}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between p-8 gap-8">
            <div className="flex-1">
              <h2 className="text-md text-[#1F1F1F] mb-4">Contact Info</h2>
              <p className="text-black text-4xl font-bold mb-6">
                We are always happy to assist you
              </p>
            </div>
            <div className="flex-1 flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Email Address</h3>
                <p className="text-gray-600">Support@RMax.com</p>
                <p className="text-gray-500">
                  Assistance hours: Monday - Friday 6 am to 8 pm EST
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Contact Number</h3>
                <p className="text-gray-600">+91-8657491236</p>
                <p className="text-gray-500">
                  Assistance hours: Monday - Friday 6 am to 8 pm EST
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
