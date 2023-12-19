import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKeyboard,
  faPencilAlt,
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";

const about = () => {
  return (
    <>
  
      <div className="text-center w-1/2 mx-auto content-center my-20" id="about">
        <h1 className="text-gray-700 p-10 mb-5 text-center text-4xl font-light ">
          A LITTLE BIT ABOUT ME
        </h1>

        <div className="flex justify-center">
          <img
            src="../images/raju.jpeg"
            className="mx-auto rounded-full w-28"
          />
        </div>

        <div className="flex justify-center">
          <p className="p-10 mb-5 text-center text-black leading-7 tracking-widest">
            Heey! My name is Raju and I&#x27;m a web developer with a passion for
            backnd development and design. I&#x27;m currently a third year
            student at IGNOU University pursuing a degree in Computer
            Application. I aspire toward a career that will allow me to channel
            my creativity through crafting beautiful software and engaging
            experiences.
            <br />
            <br />
            When I&#x27;m not on the computer, I enjoy Reading, Cycling, and
            petting dogs.
          </p>
        </div>

        <div className="bg-gray-300 py-8">
          <div className=" pt-[20px] pb-[20px] text-[25px] text-gray-700 font-light">
            <h3>SELF PROCLAMATIONS:</h3>
          </div>

          <div className="flex justify-between">
            <div className="w-[25%]">
              <div className="flex justify-center">
                <div className="flex justify-center">
                  <FontAwesomeIcon
                    icon={faKeyboard}
                    className="w-20 h-[50px] text-gray-600"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <p className=" text-gray-600 ">Web Developer</p>
              </div>
            </div>

            <div className="w-[25%]">
              <div className="flex justify-center">
                <div className="flex justify-center">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="w-20 h-[50px] text-gray-600"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <p className=" text-gray-600 ">Web Developer</p>
              </div>
            </div>

            <div className="w-[25%]">
              <div className="flex justify-center">
                <div className="flex justify-center">
                  <FontAwesomeIcon
                    icon={faBicycle}
                    className="w-20 h-[50px] text-gray-600"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <p className=" text-gray-600 ">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default about;
