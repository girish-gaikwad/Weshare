import React from 'react'
import { FaShare } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import {  MdGroupAdd } from 'react-icons/md'


function VCHANNELHELPER() {
  return (
<>



    <div className={`comments p-3 gap-3 bg-green-400 flex flex-col rounded-lg transition-all duration-500 h-[100%]`}>
        <div className="w-[100%] flex justify-between">
          <h2 className="font-medium text-xl">People You May Know</h2>
          <button className="btn btn-sm btn-ghost">
            <MdGroupAdd  className="w-5 h-5" />
          </button>
        </div>
        <div className='frndz w-[100%] h-[100%] bg-pink-800 overflow-y-scroll'>


        <div className="flex justify-around items-center border mb-2">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="text-left border  w-[56%]">
            <h2 className="font-bold font-mono text-xl">Alex</h2>
            <h4 className="font-thin font-mono text-sm">@alex_69</h4>
          </div>
          <button className="btn btn-sm btn-ghost">
            {" "}
            
            Follow
          </button>
          
        </div>
        <div className="flex justify-around items-center border mb-2">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="text-left border  w-[56%]">
            <h2 className="font-bold font-mono text-xl">Alex</h2>
            <h4 className="font-thin font-mono text-sm">@alex_69</h4>
          </div>
          <button className="btn btn-sm btn-ghost">
            {" "}
            
            Follow
          </button>
          
        </div>


follow us to get more update every this is licienced
</div>


      </div>
</>
  )
}

export default VCHANNELHELPER