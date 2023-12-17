import { Icon } from "@iconify/react";

const contact = () => {
  return (
    <>
      <div className="bg-gray-300 h-auto">
        <div className="text-center w-1/2 mx-auto content-center pb-9">
          <div className=" text-center text-6xl pt-20 pb-6 flex justify-center">
            <Icon icon="wpf:paperplane" />
          </div>
            <div className="pb-6 text-3xl font-thin text-gray-900 flex justify-center">
              <h1>GET IN TOUCH!</h1>
            </div>
            <div className=" text-gray-900 flex justify-center pb-6 mx-auto items-center w-1/2 tracking-4">
              <p>
                Whether you have an idea for a project or just want to chat,
                feel free to shoot me an email!
              </p>
            </div>

          <div className="border-2 border-black p-4 w-1/6 flex justify-center items-center mx-auto hover:bg-blue-800 cursor-pointer">
            <button>Say Hello</button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default contact;
