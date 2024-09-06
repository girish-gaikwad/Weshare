import React from 'react'
import { FaShare } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { MdEmojiEvents } from 'react-icons/md'


function VIDEOSHELPER() {
  return (
<>
<div className='w-[100%] h-[35%] bg-primary flex flex-col rounded-lg p-3 gap-3'>


     <div className="w-[100%] flex justify-between">
          <button className="btn btn-sm btn-ghost">
            <FcLike  className="w-5 h-5" />
          </button>
          <h2 className="font-medium text-xl">😅 A 3D Modal maybe </h2>
          
        </div>


   

     </div>


    <div className={`comments p-3 gap-3 bg-primary flex flex-col rounded-lg transition-all duration-500 h-[65%]`}>
        <div className="w-[100%] flex justify-between">
          <h2 className="font-medium text-xl">Comments</h2>
          <button className="btn btn-sm btn-ghost">
            <MdEmojiEvents className="w-5 h-5" />
          </button>
        </div>
        <div className="contentofcomments w-[100%] h-[100%]">


          <p>Click on comments to view and chat</p>
          
          <div className="w-full relative top-64">
            <input type="text" placeholder="Search" className="input w-[100%] outline-dashed" />
            <button className="btn btn-sm btn-ghost absolute bottom-2 right-2">More</button>
          </div>
        </div>
      </div>
</>
  )
}

export default VIDEOSHELPER