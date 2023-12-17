import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faLightbulb
  } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import "../../App.css";

const passion = () => {
  return (
    <>
      <div className="bg-gray-200  text-center px-20 py-20">
        <div className="text-center text-4xl text-gray-800 font-light p-20 ">
          <h1>WHAT I DO</h1>
        </div>

        <div className="flex justify-between">
          <div className="w-[25%] text-center p-10 items-center">
            <div className="flex justify-center">
              <div className="bg-[#0009bd] w-[175px] h-[175px] rounded-full text-center text-white flex justify-center items-center text-6xl">
                <Icon icon="fa:laptop" />
              </div>
            </div>
            <div className="flex justify-center text-black p-6 text-xl">
              <h3>DESIGN</h3>
            </div>

            <div className="flex justify-center text-gray-700">
              <p className="">
                Design isn&#x27;t just what a product looks like and feels like
                on the outside. Design encompasses the internal functionality of
                a product as well as the overall user experience. I strive to
                design interfaces and experiences that people can enjoy on all
                digital mediums.
              </p>
            </div>
          </div>

          <div className="w-[25%] text-center p-10 items-center">
            <div className="flex justify-center">
              <div className="bg-[#0009bd] w-[175px] h-[175px] rounded-full text-center text-white flex justify-center items-center text-6xl">
              <FontAwesomeIcon icon={faCode} className=""/>
              </div>
            </div>
            <div className="flex justify-center text-black p-6 text-xl">
              <h3>DEVELOPMENT</h3>
            </div>

            <div className="flex justify-center text-gray-700">
              <p className="">
              With a strong foundation in computer science, I&#x27;m passionate about web design and development, and interested in mobile app development. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software.
              </p>
            </div>
          </div>

          <div className="w-[25%] text-center p-10 items-center">
            <div className="flex justify-center">
              <div className="bg-[#0009bd] w-[175px] h-[175px] rounded-full text-center text-white flex justify-center items-center text-6xl">
              <FontAwesomeIcon icon={faLightbulb} />
              </div>
            </div>
            <div className="flex justify-center text-black p-6 text-xl">
              <h3>INVOLVEMENT</h3>
            </div>

            <div className="flex justify-center text-gray-700">
              <p className="">
              I am dedicated to mentorship, engaging with aspiring designers and developers, sharing experiences to empower others. Continuous learning is a core value, and I stay updated on the latest trends through workshops, conferences, and online courses, ensuring my skills remain at the forefront of design and development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default passion;
