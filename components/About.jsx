import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container w-full mx-auto pt-16 pb-16">
      <h1 className="text-center font-poppins font-black text-5xl">
        About Yahia
      </h1>
      <div className="flex justify-center gap-7 pt-16 md:flex-wrap">
        <div
          className="md:w-full md:mx-auto px-4"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          <Image
            src="/images/myImg.jpg"
            alt="Picture of the author"
            width={650}
            height={650}
            className="rounded"
          />
        </div>
        <div
          className="w-2/4 md:w-full md:mx-auto px-4"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2 className="font-poppins font-semibold text-3xl pb-5">About Me</h2>
          <p className="font-poppins font-light leading-8 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining
          </p>
          <div className="flex">
            <div>
              <p className="pt-[1rem] font-poppins font-[500] text-base">
                Full Name
              </p>
              <p className="pt-[1rem] font-poppins font-[500] text-base">Age</p>
              <p className="pt-[1rem] font-poppins font-[500] text-base">
                Nationality
              </p>
              <p className="pt-[1rem] font-poppins font-[500] text-base">
                Languages
              </p>
              <p className="pt-[1rem] font-poppins font-[500] text-base">
                Address
              </p>
              <p className="pt-[1rem] font-poppins font-[500] text-base">
                Countries
              </p>
            </div>
            <div className="ml-10">
              <p className="pt-[1rem] font-poppins font-[300] text-base">
                : Sadekuzzaman Yahia
              </p>
              <p className="pt-[1rem] font-poppins font-[300] text-base">
                : 22
              </p>
              <p className="pt-[1rem] font-poppins font-[300] text-base">
                : Bangladeshi
              </p>
              <p className="pt-[1rem] font-poppins font-[300] text-base">
                : Bangla, English
              </p>
              <p className="pt-[1rem] font-poppins font-[300] text-base">
                : Dhaka, Bangladesh
              </p>
              <p className="pt-[1rem] font-poppins font-[300] text-base">
                : Bangladesh
              </p>
            </div>
          </div>
          <button className="px-9 py-5 outline-0 border- font-poppins font-inherit bg-black text-white  cursor-pointer tracking-[2px] mt-8 rounded-md after:absolute after:content-['_↗'] after:w-0 after:h-[.2rem] after:left-0 after:bottom-0 after:bg-orange-600 after:transition-all ease-in-out relative hover:after:w-full">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
