import React from "react";
import addfrd from "/images/default_profile.png";
import { AiTwotonePicture } from "react-icons/ai";
import { FaHashtag, FaShare } from "react-icons/fa6";
import { VscMention } from "react-icons/vsc";
import { TfiWrite } from "react-icons/tfi";
import { FaBookmark } from "react-icons/fa";
import { IoMdMore, IoMdHeartEmpty } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { BiCommentEdit } from "react-icons/bi";
function FEED() {
  return (
    <>
      {/* story section */}
      <div className="stories w-[100%] h-[16%] bg-primary flex items-center px-4 pt-2 gap-9 rounded-xl border mb-2">
        <div className="avatar main profile flex flex-col items-center justify-around gap-1">
          <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>

          <span className="badge w-0 badge-secondary badge-lg absolute top-8 left-12 text-lg rounded-full">
            +
          </span>
          <p>your story</p>
        </div>


        <div className="avatar main profile flex flex-col items-center justify-around gap-1">
          <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>

          
          <p>girish</p>
        </div>
        
        <div className="avatar main profile flex flex-col items-center justify-around gap-1">
          <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>

          
          <p>Ratan</p>
        </div>
        <div className="avatar main profile flex flex-col items-center justify-around gap-1">
          <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>

          
          <p>linda</p>
        </div>
        <div className="avatar main profile flex flex-col items-center justify-around gap-1">
          <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>

         
          <p>Gaikwad</p>
        </div>
        <div className="avatar main profile flex flex-col items-center justify-around gap-1">
          <div className="ring-gray-500 ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
            <img src={addfrd} />
          </div>
          <span className="badge w-0 badge-secondary badge-lg absolute top-8 left-14 text-lg rounded-full">
            +
          </span>
          <p>Add Friends</p>
        </div>
      </div>

      {/* post section */}

      <div className="post w-[100%]  bg-primary flex flex-col p-2 gap-2 rounded-lg mb-2 ">
        <div className="flex items-center pl-6 gap-5">
          <div className="avatar main profile flex flex-col items-center justify-around gap-1">
            <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>

          <input
            type="text"
            className="w-[100%] input-md border rounded-lg"
            placeholder="Write a Post ?"
          />

          <button className="btn btn-secondary">
            {" "}
            <TfiWrite />
            Post{" "}
          </button>
        </div>

        {/* <div className="divider"></div> */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <button className="btn btn-sm btn-ghost">
              {" "}
              <AiTwotonePicture className="h-5 w-5" />
              Photo/videos
            </button>
            <button className="btn btn-sm btn-ghost">
              {" "}
              <FaHashtag />
              hashtags
            </button>
            <button className="btn btn-sm btn-ghost ">
              <VscMention className="h-5 w-5" />
              Mention
            </button>
          </div>

          <button className="btn btn-sm btn-ghost ">
            <FaHashtag className="h-4 w-4" /> something
          </button>

          {/* <div className="w-[15%] sidechild h-[70%] rounded-md flex items-center justify-center gap-2 font-semibold text-l p-2 bg-secondary">
            <AiTwotonePicture />
            Feed
          </div>
          <div className="w-[15%] sidechild h-[70%] rounded-md flex items-center justify-center gap-2 font-semibold text-l p-2 bg-secondary">
            <FaHashtag />
            Feed
          </div>
          <div className="w-[15%] h-[70%] sidechild  rounded-md flex items-center justify-center gap-2 font-semibold text-l p-2 bg-secondary mr-[46%]">
            <VscMention />
            Feed
          </div> */}

          {/* <div className="w-[3%] h-[3%] sidechild    rounded-md flex items-center justify-center gap-2 font-semibold text-l p-2 bg-secondary ">
            <FaHashtag />
          </div> */}
        </div>
      </div>

      {/* posts */}

      <div className="feed  w-[100%] h-[70%] bg-primary flex flex-col p-2 gap-2 rounded-lg mb-2">
        <div className="flex items-center  gap-9 pl-2">
          <div className="avatar online ">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="text-left w-[40%] mr-[40%]">
            <h2 className="font-bold font-mono text-xl">Alex</h2>
            <h4 className="font-thin font-mono text-sm">time_stand</h4>
          </div>
          <button className="btn btn-sm btn-ghost">Follow</button>
          <button className="btn btn-sm btn-ghost">
            <IoMdMore className="h-6 w-6" />
          </button>
        </div>

        <div className="imagecontainer w-[100%] h-[70%] bg-blue-500 rounded-lg">
          conatains imgages logic is needed to think
        </div>
        <div className="divider m-0 p-0"></div>

        <div className="w-[100%]  flex justify-between">
          <button className="btn btn-sm btn-ghost">
            {" "}
            <IoMdHeartEmpty />
            Like
          </button>
          {/* <FcLike />need to use after */}
          <button className="btn btn-sm btn-ghost">
            {" "}
            <BiCommentEdit />
            Comment
          </button>
          <button className="btn btn-sm btn-ghost ">
            <FaShare />
            Share
          </button>
          <button className="btn btn-sm btn-ghost ">
            <IoBookmarkOutline />
          </button>
          {/* <FaBookmark />need to use later */}
        </div>
      </div>
      <div className="feed  w-[100%] h-[70%] bg-primary flex flex-col p-2 gap-2 rounded-lg mb-2">
        <div className="flex items-center  gap-9 pl-2">
          <div className="avatar online ">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="text-left w-[40%] mr-[40%]">
            <h2 className="font-bold font-mono text-xl">Alex</h2>
            <h4 className="font-thin font-mono text-sm">time_stand</h4>
          </div>
          <button className="btn btn-sm btn-ghost">Follow</button>
          <button className="btn btn-sm btn-ghost">
            <IoMdMore className="h-6 w-6" />
          </button>
        </div>

        <div className="imagecontainer w-[100%] h-[70%] bg-blue-500 rounded-lg">
          conatains imgages logic is needed to think
        </div>
        <div className="divider m-0 p-0"></div>

        <div className="w-[100%]  flex justify-between">
          <button className="btn btn-sm btn-ghost">
            {" "}
            <IoMdHeartEmpty />
            Like
          </button>
          {/* <FcLike />need to use after */}
          <button className="btn btn-sm btn-ghost">
            {" "}
            <BiCommentEdit />
            Comment
          </button>
          <button className="btn btn-sm btn-ghost ">
            <FaShare />
            Share
          </button>
          <button className="btn btn-sm btn-ghost ">
            <IoBookmarkOutline />
          </button>
          {/* <FaBookmark />need to use later */}
        </div>
      </div>
      


    


      
    </>
  );
}

export default FEED;
