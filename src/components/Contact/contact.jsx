import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

const contact = () => {
  return (
    <>
      <div className="bg-gray-300 h-auto" id="contact">
        <div className="text-center w-1/2 mx-auto content-center pb-9">
          <div className=" text-center text-6xl pt-20 pb-6 flex justify-center cursor-pointer">
            <Icon icon="wpf:paperplane" />
          </div>
          <div className="pb-6 text-3xl font-thin text-gray-900 flex justify-center">
            <h1>GET IN TOUCH!</h1>
          </div>
          <div className=" text-gray-900 flex justify-center pb-6 mx-auto items-center w-1/2 tracking-4">
            <p>
              Whether you have an idea for a project or just want to chat, feel
              free to shoot me an email!
            </p>
          </div>

          <motion.div
            className="border-2 border-black p-4 w-1/6 flex justify-center items-center mx-auto hover:bg-blue-800 cursor-pointer transition duration-700 ease-in-out"
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <motion.a
              href="mailto:oooye.raju@gmail.com?subject=Say Hello">
              Say Hello
            </motion.a>
          </motion.div>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default contact;
