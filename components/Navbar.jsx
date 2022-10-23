import DehazeIcon from "@mui/icons-material/Dehaze";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [res, setRes] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <div
        className={
          navbar
            ? `bg-black fixed top-0 left-0 right-0 py-5 z-[999]`
            : "fixed top-0 left-0 right-0 py-5"
        }
      >
        <div className="container mx-auto flex justify-between items-center relative">
          <div className="">
            <a className="btn btn-ghost normal-case text-4xl font-dancing text-white">
              Yahia
            </a>
          </div>
          <DehazeIcon
            className="text-white hidden md:block cursor-pointer mr-5 text-3xl"
            onClick={() => setRes(!res)}
          />

          <div
            className={`flex-none md:absolute md:bg-black md:w-full md:top-full md:mt-5 ${
              res ? "-ml-[100%] transition-all" : "ml-0 transition-all"
            }`}
          >
            <ul className="menu menu-horizontal  font-poppins md:menu-vertical p-0 capitalize text-white text-[14px] tracking-wide font-[300] md:p-3">
              <li>
                <a>home</a>
              </li>
              <li>
                <a>about me</a>
              </li>
              <li>
                <a>my service</a>
              </li>
              <li>
                <a>work</a>
              </li>
              <li>
                <a>offered course</a>
              </li>
              <li>
                <a>contact</a>
              </li>
              <li tabIndex={0}>
                <a>
                  blog
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-black">
                  <li>
                    <a>product</a>
                  </li>
                  <li>
                    <a>video</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
