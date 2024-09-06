import React from 'react'
import { CiChat2 } from 'react-icons/ci'
import { FaShare } from 'react-icons/fa'

import { IoSend } from 'react-icons/io5'



function VCHANNEL() {
  return (
<>

    <div className={`comments p-3 gap-3 bg-green-400 flex flex-col rounded-lg transition-all duration-500 h-[100%]`}>
        <div className="w-[100%] flex justify-between">
          <h2 className="font-medium text-xl"><h3 className='text-2xl font-semibold'>V-Chat</h3></h2>
          <button className="btn btn-sm btn-ghost">
            <CiChat2 className="w-7 h-7" />
          </button>
        </div>
        
<div className='w-[100%] h-[100%] bg-black'>

</div>

        
                <div className="contentofcomments flex flex-col items-center">
        
          <div className="w-full flex  items-center">
            <input type="text" placeholder="Search" className="input w-[95%] outline-dashed" />
            <button className="btn btn-sm btn-ghost  "><IoSend className='w-6 h-8' /></button>
          </div>
        </div>
      </div>
</>
  )
}

export default VCHANNEL