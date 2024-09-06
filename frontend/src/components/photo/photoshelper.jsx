import React from 'react'
import { MdEmojiEvents } from 'react-icons/md'

function PHOTOSHELPER() {
  return (
    <div className={`comments p-3 gap-3 bg-primary  flex-col rounded-lg transition-all duration-500 h-[100%] over`}>
        <div className="w-[100%] flex justify-between mb-2">
          <h2 className="font-medium text-xl">
            <h3 className='typo'>

            Top Liked Photos

            </h3>

          </h2>
          <button className="btn btn-sm btn-ghost">
            <MdEmojiEvents className="w-5 h-5" />
          </button>
        </div>

<div className='mostLcontainer w-[100%] h-[90%] overflow-y-scroll'>


        <div className="mostliked flex flex-col items-center bg-secondary  h-[25%] mb-2"></div>
        <div className="mostliked flex flex-col items-center bg-secondary  h-[25%] mb-2"></div>
        <div className="mostliked flex flex-col items-center bg-secondary  h-[25%] mb-2"></div>
        <div className="mostliked flex flex-col items-center bg-secondary  h-[25%] mb-2"></div>
        <div className="mostliked flex flex-col items-center bg-secondary  h-[25%] mb-2"></div>
        <div className="mostliked flex flex-col items-center bg-secondary  h-[25%] mb-2"></div>
        <div className="mostliked flex flex-col items-center bg-secondary  h-[25%] mb-2"></div>
        <div className="mostliked flex flex-col items-center bg-secondary  h-[25%] mb-2"></div>
        <div className="mostliked flex flex-col items-center bg-secondary   h-[25%] mb-2"></div>
  
        
</div>
     



      </div>
  )
}

export default PHOTOSHELPER