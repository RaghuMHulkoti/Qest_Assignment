const BlogSection = () => {
    return (
      <section className="py-12 relative w-full h-[380px] z-10 mx-auto">
        {/* Arrows at start and end */}
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2 z-20">
          <i className="ri-arrow-left-circle-fill text-[#1F1F1F] hover:text-blue-500 text-3xl cursor-pointer"></i>
        </div>
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2 z-20">
          <i className="ri-arrow-right-circle-fill text-[#1F1F1F] hover:text-blue-500 text-3xl cursor-pointer"></i>
        </div>
  
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-0"> 
            {/* Sports Card */}
            <div className="ml-40 p-1 rounded-md w-[302px] h-[467px]">
              <img
                src="https://s3-alpha-sig.figma.com/img/0504/7078/30da040456770fb3f2ffd46adc51f7a7?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMCGSNDsX51gf6imeqrZb3Irg0uq2eIYXMvrD5OZx-ZFmHtdvmD-~neS9rINr5xhmkyOYHxGJAceo1~RRXYmhjXyZAT7Qx8mTZPMbZVI2yEVzWKwpvrU4h93YUJIC9Y0zgWv6MLW8FbP16qwMP3W6ME~1Cmfw0pwT~aPgY-Rc7kEpREg0kX03M9QOe6fX6lDyYSiAPUztji9w~xuCVt1sqk78ktbWmK-Og1wrlawoMpKOVeQV1GnabbgBeyB4VUZpBqq-qCQX6-lOvOLN4a0QvEjNQK1GvlDrZV~6evSiABDd1WUIuPC4rfaogvMXfFv396Vx33bBsF6Ph1VgU8uEA__"
                alt="Sports"
                className="w-[302px] h-[358px] object-cover rounded-t-lg"
              />
              <h2 className="text-[25px] font-bold mt-2 ">Sports</h2>
              <p className="text-gray-700 mt-2 text-center">
                From fitness studios to sports academies, Rmax empowers sports businesses.{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Know more...
                </a>
              </p>
            </div>
  
            {/* Healthcare & Wellness Card */}
            <div className="p-1 rounded-tl-[8px] rounded-md w-[302px] h-[467px]">
              <img
                src="https://s3-alpha-sig.figma.com/img/7a4f/7c58/ae1d0dda0c303d60bf404efbc2966468?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jLts9AgTzFV390HmAUrXDwKDUd1DV77dBANQcLGVN5fqUZgNNgWL4u~dRrD85GfzpyePPVZnFjoAXLFzDHwiEBZjP0fjQlBFJ5LnuQIRXFpfaekzune15zr3mL9tw-g1XNmEm~jCf1DigXBuntMlLJdPuC5G7RJPEsdbvewjtV3Yy00pLgH0AEPU-E-kNtiPRhH-kxsOqjA87D4KpqhMJHwxeuxx5xzrn8w0PrT7cANOSCyHwVmjSmkleTlY5Gc6AQLsNUPFSjwofOliaT1FLb9RqNEsqEdIeYP85~9IlozFIFLlgh0TYBeE6Q9xUnr~0Cw9upKGbd~9Ol4D2IdrjA__"
                alt="Healthcare & Wellness"
                className="w-[302px] h-[358px] object-cover rounded-t-lg"
              />
              <h2 className="text-[25px] font-bold mt-2 ">Healthcare & Wellness</h2>
              <p className="text-gray-700 mt-2 text-center">
                Health and wellness service providers - from yoga instructors to gyms.{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Know more...
                </a>
              </p>
            </div>
  
            {/* Learning Activities Card */}
            <div className="p-1 mr-40 rounded-md w-[302px] h-[467px]">
              <img
                src="https://s3-alpha-sig.figma.com/img/c292/0c11/2e263161ef4a45f12493203574a95e19?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KlweUKYQI4XzsBNEAbCXAaiRifcNEwXugER9IP9XSDJHDZ~8iJkYOlTu5LlssVDWuZgBFJxHGwxJ1DUBMbRDnylc8PGvFYshFa5UWmX0DxfexpMULV5ejwtHamqMplry5M0~1Ki4N-yme7bJdFBAuouu6z1WVZnIiwiPQHfBfX9fPcaXnSPwzsOUZ5eK~2QmC26idq6HOqxxjGXv5GlWHSvjpyzid880FfDjD2xnxxIzTaoMKIuEI~hZgy2VJ7Av6PdnkTBM~6nrOk2QgkZMS9kZfPIkGmJh50MYKJ-oe3CxZJ-1cm-emVIID7emDaDcuK9L4c97y4QlP~i39lf3AQ__"
                alt="Learning Activities"
                className="w-[302px] h-[358px] object-cover rounded-t-lg"
              />
              <h2 className="text-[25px] font-bold mt-2 ">Learning Activities</h2>
              <p className="text-gray-700 mt-2 text-center">
                Tutors, educators, and learning centers - from music schools to art studios.{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Know more...
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogSection;