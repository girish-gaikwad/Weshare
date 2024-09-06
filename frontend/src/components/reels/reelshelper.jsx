import React from 'react'
import { FaShare } from 'react-icons/fa6';
import { FcLike } from 'react-icons/fc';
import { MdEmojiEvents } from 'react-icons/md'

function REELSHELPER() {
  return (
    <>
      <div className={`comments p-3 gap-3 bg-primary flex flex-col rounded-lg transition-all duration-500 h-[65%]`}>
        <div className="w-[100%] flex justify-between">
          <h2 className="font-medium text-xl">Comments</h2>
          <button className="btn btn-sm btn-ghost">
            <MdEmojiEvents className="w-5 h-5" />
          </button>
        </div>
        <div className="contentofcomments flex flex-col items-center">
          <p>Click on comments to view</p>
          <div className="w-full relative top-64">
            <input type="text" placeholder="Search" className="input w-[100%] outline-dashed" />
            <button className="btn btn-sm btn-ghost absolute bottom-2 right-2">More</button>
          </div>
        </div>
      </div>


      <div className='w-[100%] h-[35%] bg-primary flex flex-col justify-between rounded-lg p-3 gap-3'>

        <div className="w-[100%] flex justify-between">
          <h2 className="font-medium text-xl">Share your reels</h2>
          <button className="btn btn-sm btn-ghost">
            <FcLike className="w-5 h-5" />
          </button>
        </div>


        <input
          type="file"
          className="file-input file-input-bordered file-input-secondary w-full max-w-xs h-[100%] "  />

        <input type="text" placeholder="Caption ? " className="input w-full max-w-xs input-sm h-[100%]" />

        <button className="btn btn-accent  ">SHARE <FaShare /> </button>
      </div>
    </>
  );
}
export default REELSHELPER