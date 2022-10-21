import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

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
          navbar ? `bg-[#000] fixed top-0 left-0 right-0 py-5 z-[999]` : "py-5"
        }
      >
        <div className="container mx-auto flex justify-between items-center ">
          <div className="">
            <a className="btn btn-ghost normal-case text-4xl font-dancing text-[#FAFAFA]">
              Yahia
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0 uppercase text-[#FAFAFA] text-[12px] font-[400]">
              <li>
                <a>home</a>
              </li>
              <li>
                <a>about</a>
              </li>
              <li>
                <a>service</a>
              </li>
              <li>
                <a>work</a>
              </li>
              <li>
                <a>testimonial</a>
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
                <ul className="p-2 bg-[#232323]">
                  <li>
                    <a>blog page</a>
                  </li>
                  <li>
                    <a>single blog</a>
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
