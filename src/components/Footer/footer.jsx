import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const footer = () => {
  const [showText, setShowText] = useState(false);

  const handleHover = () => setShowText(!showText);

  return (
    <>
      <div className="h-auto bg-[#222222] text-white text-center font-thin pb-16">
        <div className="  flex justify-center pt-14 pb-6">

          <motion.div
            className="text-4xl text-center"
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <a href="#">
              <Icon icon="circum:linkedin" />
            </a>
          </motion.div>

          <motion.div className="text-4xl ml-2"
          whileHover={{scale:1.2}}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}>
            <a href="#">
              <Icon icon="pajamas:twitter" />
            </a>
          </motion.div>
          
          <motion.div className="text-4xl ml-2"
          whileHover={{scale:1.2}}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}>
            <a href="#">
              <Icon icon="lets-icons:insta-light" />
            </a>
          </motion.div>

          <motion.div className="text-4xl ml-2"
          whileHover={{scale:1.2}}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}>
            <a href="#">
              <Icon icon="codicon:github" />
            </a>
          </motion.div>
        </div>
        <div className="text-4xl flex justify-center ">
          <div>
            <motion.div className="flex justify-center text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            >
              <a href="#page-top">
                <Icon icon="iconoir:rocket" onMouseOver={handleHover} />
              </a>
            </motion.div>
            <div className=" opacity-0 hover:opacity-100 m-0 p-0 text-[0.8rem] cursor-pointer transition duration-700 ease-in-out">
              <p>Beam me up !! Scotty</p>
            </div>
          </div>
        </div>
        <div className=" text-center flex justify-center">
          <Icon icon="ph:copyright-fill" className=" text-2xl space-x-1" />
          <p>Raju Kumar 2023</p>
        </div>
      </div>

      <div></div>
    </>
  );
};
export default footer;
