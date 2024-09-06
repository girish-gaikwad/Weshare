import React from 'react'
import { BiCommentEdit } from 'react-icons/bi'
import { FaShare } from 'react-icons/fa'
import { IoMdHeartEmpty, IoMdMore } from 'react-icons/io'
import { IoBookmarkOutline } from 'react-icons/io5'

function VIDEOS() {
  return (
    <>
    <div className="feed  w-[100%] h-[65%] bg-primary flex flex-col p-2 gap-2 rounded-lg mb-2">
    <div className="flex items-center   gap-9 pl-2">
      <div className="avatar online ">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="text-left   w-[40%] mr-[40%]">
        <h2 className="font-bold font-mono text-xl">Alex</h2>
        <h4 className="font-thin font-mono text-sm">time_stand</h4>
      </div>
      <button className="btn btn-sm btn-ghost">Follow</button>
      <button className="btn btn-sm btn-ghost">
        <IoMdMore className="h-6 w-6" />
      </button>
    </div>

    <div className="imagecontainer w-[100%] h-[70%] bg-blue-500 rounded-lg">
      conatains videos logic is needed to think
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
    <div className="feed  w-[100%] h-[65%] bg-primary flex flex-col p-2 gap-2 rounded-lg mb-2">
    <div className="flex items-center   gap-9 pl-2">
      <div className="avatar online ">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="text-left   w-[40%] mr-[40%]">
        <h2 className="font-bold font-mono text-xl">Alex</h2>
        <h4 className="font-thin font-mono text-sm">time_stand</h4>
      </div>
      <button className="btn btn-sm btn-ghost">Follow</button>
      <button className="btn btn-sm btn-ghost">
        <IoMdMore className="h-6 w-6" />
      </button>
    </div>

    <div className="imagecontainer w-[100%] h-[70%] bg-blue-500 rounded-lg">
      conatains videos logic is needed to think
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
  )
}

export default VIDEOS