import { Icon } from "@iconify/react";

const experience = () => {
  return (
    <>
      <div className="text-center pt-24 pb-16" id="experience">
        <div className="text-center w-1/2 mx-auto content-center">
          <div className="text-6xl text-gray-700 pb-10 font-light flex justify-center">
            <h1>EXPERIENCE</h1>
          </div>
          <div className=" flex justify-center font-light">
            <p>
              I&#x27;ve been doing web development for about 3 years now, and
              I&#x27;m always eager to learn more in this fast paced industry.
            </p>
          </div>
        </div>
      </div>
      <div className="flex pb-20">
        <div className="mx-auto">
          <div className="flex justify-end pb-16 text-2xl text-gray-700">
            <h3>SOME TECHNOLOGIES I&#x27;VE WORKED WITH:</h3>
          </div>

          <div className="text-8xl grid grid-cols-3 gap-4">
            <div>
              <Icon
                icon="akar-icons:html-fill"
                className="text-gray-700 hover:text-orange-600"
              />
            </div>

            <div>
              <Icon
                icon="akar-icons:css-fill"
                className="text-gray-700 hover:text-blue-600"
              />
            </div>
            <div>
              <Icon
                icon="tabler:brand-javascript"
                className="text-gray-700 hover:text-yellow-600"
              />
            </div>
            <div>
              <Icon
                icon="grommet-icons:reactjs"
                className="text-gray-700 hover:text-blue-600"
              />
            </div>
            <div className="text-gray-700 hover:text-blue-600">
              <Icon icon="devicon-plain:java" />
            </div>
            <div>
              <Icon
                icon="bxl:spring-boot"
                className="text-gray-700 hover:text-green-600"
              />
            </div>
            <div>
              <Icon
                icon="simple-icons:springboot"
                className="text-gray-700 hover:text-green-600"
              />
            </div>
            <div>
              <Icon
                icon="devicon-plain:hibernate-wordmark"
                className="text-gray-700 hover:text-[#ad746c]"
              />
            </div>

            <div>
              <Icon
                icon="cib:mysql"
                className="text-gray-700 hover:text-blue-600"
              />
            </div>

            <div>
              <Icon
                icon="devicon-plain:mongodb-wordmark"
                className="text-gray-700 hover:text-green-600"
              />
            </div>

            <div>
              <Icon
                icon="devicon-plain:tailwindcss-wordmark"
                className="text-gray-700 hover:text-blue-600 text-9xl"
              />
            </div>

            <div>
              <Icon
                icon="raphael:github"
                className="text-gray-700 hover:text-blue-600"
              />
            </div>
          </div>
        </div>
        <div className=" mx-auto ">
          <div className="flex justify-end text-gray-700 text-2xl">
            <h3>WHERE I&#x27;VE WORKED:</h3>
          </div>
          <div className="w-[170px] pt-16 ">
            <a target="_blank" rel="noreferrer" href="https://octanet.in/">
              <img src="../images/octanet.png" alt="Octanet Service pvt ltd" />
            </a>
          </div>
          <div className="w-[170px] pt-16">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://internship.codeclause.com/"
            >
              <img src="../images/codeClause.jpeg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-transparent h-64 grid place-items-center p-[60px] text-white text-center introExpImg">
        <div className=" text-2xl">
          <p>CHECK OUT MY RÉSUMÉ!</p>
        </div>
        <div className="">
          <button className="hover:bg-gradient-to-r from-gray-50 to-transparent border border-white p-[10px] transition duration-300">
            Grab A Copy
          </button>
        </div>
      </div>
    </>
  );
};
export default experience;
