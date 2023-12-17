import { Icon } from "@iconify/react";
const footer = () => {
  return (
    <>
      <div className="h-auto bg-[#222222] text-white text-center font-thin pb-16">
        <div className="  flex justify-center pt-14 pb-6">
          <div className="text-4xl text-center">
            <a href="#">
              <Icon icon="circum:linkedin" />
            </a>
          </div>
          <div className="text-4xl ml-2">
            <a href="#">
              <Icon icon="pajamas:twitter" />
            </a>
          </div>
          <div className="text-4xl ml-2">
            <a href="#">
              <Icon icon="lets-icons:insta-light" />
            </a>
          </div>
          <div className="text-4xl ml-2">
            <a href="#">
              <Icon icon="codicon:github" />
            </a>
          </div>
        </div>
        <div className="text-4xl flex justify-center ">
          <div>
            <a href="#">
              <Icon icon="iconoir:rocket" />
            </a>
          </div>
        </div>
        <div className=" text-center flex justify-center pt-6">
          <Icon icon="ph:copyright-fill" className=" text-2xl space-x-1"/><p>Raju Kumar 2023</p>
        </div>
      </div>

      <div></div>
    </>
  );
};
export default footer;
