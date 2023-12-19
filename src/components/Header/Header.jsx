import { useEffect, useState } from "react";
import "../../App.css";
import "./Header.css";
const Header = () => {
  // state variable to store the navbar background color
  const [navBackground, setNavBackground] = useState("transparent");

  // function to change the navbar background color based on the scroll position
  const changeBackground = () => {
    if (window.scrollY >= 120) {
      // If the user has scrolled more than 80px from the top, set the background color to black
      setNavBackground("black");
    } else {
      // Otherwise, set the background color to transparent
      setNavBackground("transparent");
    }
  };

  // Use the useEffect hook to add and remove the event listener
  useEffect(() => {
    // Add the event listener when the component mounts
    window.addEventListener("scroll", changeBackground);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <main className="font-mono w-full intro" id="page-top">
      <div className="h-screen overflow-hidden">
        <header
          className="flex items-center w-full h-24 sm:h-16 fixed top-0 z-[9999]"
          style={{ backgroundColor: navBackground }}
        >
          <div className="container flex items-center justify-between px-6 mx-auto">
            <div className="flex items-center ">
              <div className="flex wr-[20%] items-center text-3xl font-black text-gray-800 uppercase dark:text-white">
                
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 1792 1792"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"></path>
                </svg>
                <span className="mt-1 ml-3 text-xs">
                  RAJU - oooye.raju@gmail.COM
                </span>
              </div>

              <nav className="items-center ml-[73%] text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex float-right ">
                <a href="#about" className="flex px-6 py-2 hover:text-black">
                  About
                </a>
                <a href="#passion" className="flex px-6 py-2 hover:text-black">
                  Passion
                </a>
                <a href="#experience" className="flex px-6 py-2 hover:text-black">
                  EXPERIENCE
                </a>

                <a href="#work" className="flex px-6 py-2 hover:text-black">
                  works
                </a>

                <a href="#contact" className="flex px-6 py-2 hover:text-black">
                  Contact
                </a>
              </nav>
              <button className="flex flex-col ml-4 lg:hidden">
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
                <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
              </button>
            </div>
          </div>
        </header>
        <div className="relative z-20 flex items-center">
          <div className="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto my-5">
            <div className="flex flex-col">
              <div className="flex justify-center items-center mt-[150px] pt-[100px]">
                <h1 className=" text-6xl text-center dark:text-white">
                  Hi, I&#x27;m Raju
                </h1>
              </div>

              <h3 className="text-white text-center mt-5 text-xl">
                Web Developer & React Enthusiast
              </h3>

              <div className="flex items-center justify-center">
                <a
                  href="#"
                  className="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-700 dark:text-black hover:bg-gray-800 hover:text-white text-md"
                >
                  CONNECT WITH ME
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
