import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome3Line } from "react-icons/ri";
import { GoVideo } from "react-icons/go";
import { IoMdPhotos } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { PiGlobeStandFill } from "react-icons/pi";
function SIDEBAR() {
  return (
    <div className="h-[100%] flex flex-col gap-2 w-[100%] ">
      <div className="profilecontext bg-primary w-[100%]  rounded-xl flex justify-around flex-col ">
        <div className="flex justify-around items-center m-2">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>

          <div className="text-left  w-[56%]  ">
            <h2 className="font-bold font-mono text-lg md:text-xl lg:text-2xl">
              Alex
            </h2>
            <h4 className="font-thin font-mono text-xs md:text-sm lg:text-base">
              @alex_69
            </h4>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-around m-2   items-center">
          <div className="flex flex-row lg:flex-col w-[100%]  justify-around  items-center">

            <h3 className="font-thin text-xs md:text-sm lg:text-base">
              followers
            </h3>
            <h4 className="font-thin font-mono text-sm md:text-base lg:text-lg">
              218
            </h4>
          </div>

          <div className="flex flex-row lg:flex-col w-[100%]  justify-around items-center">
            <h3 className="font-thin text-xs md:text-sm lg:text-base">
              following
            </h3>
            <h4 className="font-thin font-mono text-sm md:text-base lg:text-lg">
              18
            </h4>
          </div>

          <div className="flex flex-row lg:flex-col justify-around w-[100%]  items-center">
            <h3 className="font-thin text-xs md:text-sm lg:text-base">posts</h3>
            <h4 className="font-thin font-mono text-sm md:text-base lg:text-lg">
              4
            </h4>
          </div>
        </div>
      </div>

      <div className="realsidebar gap-2 bg-primary w-full  rounded-xl flex flex-col items-center overflow-y-auto pt-4 pb-4">
        
        <NavLink
          to="feed"
          className={({ isActive }) =>
            `w-[85%] sidechild h-16 rounded-md flex items-center justify-center gap-5 font-semibold text-l p-2 ${
              isActive ? "bg-secondary" : "bg-white"
            }`
          }
        >

          <RiHome3Line className="h-6 w-6 mr-2" />
          <span >Feed</span>
        </NavLink>

        <NavLink
          to="reels"
          className={({ isActive }) =>
            `w-[85%] sidechild h-16 rounded-md flex items-center justify-center gap-5 font-semibold text-x p-2 ${
              isActive ? "bg-secondary" : "bg-white"
            }`
          }
        >
          <SiYoutubeshorts className="h-6 w-6 mr-2" />
          <span >Reels</span>
        </NavLink>

        <NavLink
          to="photos"
          className={({ isActive }) =>
            `w-[85%] sidechild h-16 rounded-md flex items-center justify-center gap-5 font-semibold text-x p-2 ${
              isActive ? "bg-secondary" : "bg-white"
            }`
          }
        >
          <IoMdPhotos className="h-6 w-6" />
          <span >Photos</span>
        </NavLink>

        <NavLink
          to="videos"
          className={({ isActive }) =>
            `w-[85%] sidechild h-16 rounded-md flex items-center justify-center gap-5 font-semibold text-x p-2 ${
              isActive ? "bg-secondary" : "bg-white"
            }`
          }
        >
          <GoVideo className="h-6 w-6" />
          <span >Videos</span>
        </NavLink>

        <div className="divider divider-secondary">Suggested</div>

        <NavLink
          to="channel"
          className={({ isActive }) =>
            `w-[85%] sidechild h-16 rounded-md flex items-center justify-center gap-5 font-semibold text-x p-2 ${
              isActive ? "bg-secondary" : "bg-white"
            }`
          }
        >
          <PiGlobeStandFill className="h-6 w-6" />
          <span >Vchannel</span>
        </NavLink>

        <div className="w-[85%] sidechild h-16 bg-white rounded-md hover:bg-secondary active:bg-blue-600 flex items-center justify-center">
          <span >More</span>
          {/* <span className="lg:hidden">...</span>{" "} */}
        </div>
      </div>

      <div className="my-socials bg-primary w-full rounded-xl flex flex-col items-center p-4">
        <h3 className="text-white font-bold text-lg mb-2">Follow Us</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 md:w-11 transition-transform transform hover:scale-110 hover:opacity-80"
              src="/images/insta.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 md:w-11 transition-transform transform hover:scale-110 hover:opacity-80"
              src="/images/x.png"
              alt="Twitter"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 md:w-11 transition-transform transform hover:scale-110 hover:opacity-80"
              src="/images/linkedin.png"
              alt="LinkedIn"
            />
          </a>
        </div>


      <div className="stats mt-2 ">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Users</div>
          <div className="">4,200</div>
        </div>
      </div>
      </div>



      


    </div>
  );
}

export default SIDEBAR;
