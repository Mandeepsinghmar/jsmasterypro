import React from 'react';

const Profile = () => (
  <div className=" bg-pro-black-1 text-white ">
    <img className="h-[100px] xl:h-[240px] w-full" src="/assets/bg.png" />
    <div className="px-8">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col md:flex-row gap-6 mt-6 ">
          <div className="flex justify-between">
            <div className="relative -mt-16">
              <img className=" rounded-full h-24 w-24 lg:h-40 lg:w-40 border-4 border-white" src="/assets/demo-user.png" />
              <img src="/assets/verifiedtick.svg" className=" absolute bottom-4 w-6 h-6 md:w-8 rounded-full md:h-8 text-blue-600 -right-1 md:right-0" />

            </div>
            <div className=" gap-4 flex flex-col sm:hidden -mt-16 -mr-4">
              <img className="h-8 w-8 cursor-pointer self-end" src="/assets/dot.png" />
              <button type="button" className="rounded-lg bg-white  text-pro-black-1 px-3 py-2 font-semibold">view portfolio</button>
            </div>
          </div>

          <div className="-mt-4 md:-mt-0">
            <p className="font-semibold text-xl xl:text-[32px]">Santiago Laight</p>
            <p className="text-pro-white-800 mt-1">I'm a Full-Stack Developer based in Warsaw, Poland.</p>
          </div>
        </div>
        <div className=" gap-3 hidden sm:flex">
          <img className="h-10 w-10 cursor-pointer" src="/assets/dot.png" />
          <button type="button" className="rounded-lg bg-white lg:h-10 text-pro-black-1 px-4 py-2 font-semibold">view portfolio</button>
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-24 mt-10 border-b-[1px] border-pro-black-400 pb-8">
        <div className=" space-y-5">
          <div className="flex flex-col gap-2">
            <p className="text-pro-white-400 text-sm">Location</p>
            <div className="flex items-center gap-2">
              <img className="w-5 h-5 rounded-full cursor-pointer" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/125px-Flag_of_Poland.svg.png" />
              <p className="font-semibold">
                Warsaw, Poland

              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-pro-white-400 text-sm">Website</p>
            <div className="flex items-center gap-3">
              <p className="font-semibold">
                candicewu.com
              </p>
              <img className=" cursor-pointer" src="/assets/arrow-up.png" />

            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-pro-white-400 text-sm">Portfolio</p>
            <div className="flex items-center gap-3">
              <p className="font-semibold">
                santilaight.io
              </p>
              <img className=" cursor-pointer" src="/assets/arrow-up.png" />

            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-pro-white-400 text-sm">Email</p>
            <div className="flex items-center gap-3">
              <p className="font-semibold">
                snlaight10@gmail.com
              </p>
              <img className=" cursor-pointer" src="/assets/arrow-up.png" />

            </div>
          </div>
        </div>
        <div>
          <p>
            I have lived & worked in over 12 countries. I consider myself to be honest and an extrovert, someone capable of adapting to any situation. I am an organized & energetic individual who aims to go above & beyond when meeting expectations.
            <br />
            <br />

            My unquenchable thirst for knowledge and self-improvement, make me an intrinsically communicative, inspirational team member. My motivation for self-improvement has led me to complete a full-stack engineer certification, being fully proficient in: MERN Stack, NextJS, JavaScript, Bootstrap, TailwindCSS, Sequelize. Proficient in building databases using MongoDB , MySQL, PostgreSQL.

          </p>
          <button type="button" className="text-blue-500 text-sm font-semibold mt-5">Read more</button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center w-full gap-10 py-8">
        <p className="font-semibold text-xl">Some of my recent work.</p>
        <div className="flex flex-wrap gap-6">
          <img className="h-[256px] w-[400px]" src="/assets/project1.png" />
          <img className="h-[256px] w-[400px]" src="/assets/project2.png" />

        </div>
      </div>

    </div>

  </div>
);

export default Profile;
