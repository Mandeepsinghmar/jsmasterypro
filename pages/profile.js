import React from 'react';

const profile = () => (
  <div className="w-full ml-[240px] h-full bg-pro-black-1 text-white ">
    <img className="h-[240px] w-full" src="/assets/bg.png" />
    <div className="px-8">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-6 mt-6 ">
          <div className="relative -mt-16">
            <img className=" rounded-full border-4 border-white" src="/assets/demo-user.png" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute bottom-4 w-8 rounded-full bg-transparent h-8 text-blue-600 right-0">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          </div>

          <div>
            <p className="font-semibold text-[32px]">Santiago Laight</p>
            <p className="text-pro-white-800">I'm a Full-Stack Developer based in Warsaw, Poland.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <img className="h-10 w-10 cursor-pointer" src="/assets/dot.png" />
          <button type="button" className="rounded-lg bg-white h-10 text-pro-black-1 px-4 py-2 font-semibold">view portfolio</button>
        </div>
      </div>
      <div className="flex gap-24 mt-10 border-b-[1px] border-pro-black-400 pb-8">
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
      <div className="flex gap-10 py-8">
        <p className="font-semibold text-xl">Some of my recent work.</p>
        <div className="flex gap-6">
          <img className="h-[256px] w-[400px]" src="/assets/project1.png" />
          <img className="h-[256px] w-[400px]" src="/assets/project2.png" />

        </div>
      </div>

    </div>

  </div>
);

export default profile;
