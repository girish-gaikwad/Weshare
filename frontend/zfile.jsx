<div className="protection w-[40%] h-[100%] bg-cyan-400 flex-col overflow-y-scroll snap-y snap-mandatory">

  
      <div className="reelcontainer h-[99%] w-[100%] bg-violet-600 rounded-lg mb-2 snap-start relative flex justify-between items-end p-4">
        <div className="flex flex-col bg-yellow-400 w-60 h-[20%] justify-end gap-2 rounded-lg p-2">
          <div>
            <p className="text-xs font-semibold">
              Here is the reel's description. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="avatar"
                />
              </div>
            </div>
            <div>
              <h2 className="font-bold">Alex</h2>
            </div>
            <button className="btn btn-sm btn-primary">Follow</button>
          </div>
        </div>

        <div className="flex flex-col bg-lime-400 w-22 h-[30%] items-center gap-2 rounded-lg p-2">
          <button className="btn btn-sm btn-ghost flex flex-col items-center">
            <IoMdHeartEmpty className="h-6 w-6" />
            <p className="text-xs">100k</p>
          </button>
          <button className="btn btn-sm btn-ghost flex flex-col items-center">
            <BiCommentEdit className="h-6 w-6" />
            <p className="text-xs">100k</p>
          </button>
          <button
            className="btn btn-sm btn-ghost flex flex-col items-center"
            onClick={handleShareClick}
          >
            <FaShare className="h-6 w-6" />
            <p className="text-xs">100k</p>
          </button>
          <button className="btn btn-sm btn-ghost flex flex-col items-center">
            <IoMdMore className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="reelcontainer h-[99%] w-[100%] bg-violet-600 rounded-lg mb-2 snap-start relative flex justify-between items-end p-4">
        <div className="flex flex-col bg-yellow-400 w-60 h-[20%] justify-end gap-2 rounded-lg p-2">
          <div>
            <p className="text-xs font-semibold">
              Here is the reel's description. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="avatar"
                />
              </div>
            </div>
            <div>
              <h2 className="font-bold">Alex</h2>
            </div>
            <button className="btn btn-sm btn-primary">Follow</button>
          </div>
        </div>

        <div className="flex flex-col bg-lime-400 w-22 h-[30%] items-center gap-2 rounded-lg p-2">
          <button className="btn btn-sm btn-ghost flex flex-col items-center">
            <IoMdHeartEmpty className="h-6 w-6" />
            <p className="text-xs">100k</p>
          </button>
          <button className="btn btn-sm btn-ghost flex flex-col items-center">
            <BiCommentEdit className="h-6 w-6" />
            <p className="text-xs">100k</p>
          </button>
          <button
            className="btn btn-sm btn-ghost flex flex-col items-center"
            onClick={handleShareClick}
          >
            <FaShare className="h-6 w-6" />
            <p className="text-xs">100k</p>
          </button>
          <button className="btn btn-sm btn-ghost flex flex-col items-center">
            <IoMdMore className="h-6 w-6" />
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-bold">Share this Reel</h2>
        <p className="mt-2">Share this reel with your friends and followers!</p>
        {/* Add share options here */}
      </Modal>
    </div>







import React, { useState } from 'react'

function SIGNUP() {

    const [image, setImage] = useState('https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg');

    const loadFile = (event) => {
      const output = document.getElementById('output');
      output.src = URL.createObjectURL(event.target.files[0]);
      setImage(output.src);
    };
  

  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
        <div className='bg-primary w-[60%] h-[70%] flex items-center'>


<div className='w-[40%] h-[100%] bg-transparent opacity-80'></div>
<div className='w-[60%] h-[90%] bg-secondary  mr-6 flex items-center flex-col gap-3'>

<div className="profile-pic relative flex items-center justify-center transition-all duration-300">
      <label className="-label cursor-pointer w-32 h-32 flex items-center justify-center" htmlFor="file">
        <span className="glyphicon glyphicon-camera"></span>
        <span>Change Image</span>
      </label>
      <input id="file" type="file" onChange={loadFile} className="hidden" />
      <img src={image} id="output" alt="Profile" className="absolute w-32 h-32 object-cover shadow-lg rounded-full" onClick={() => document.getElementById('file').click()} />
    </div>



  <div class="flex items-center border w-[90%]">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
     Name
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"/>
    </div>
  </div>
  <div class="flex items-center border w-[90%]">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        email
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"/>
    </div>
  </div>
  <div class="flex items-center border w-[90%]">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Password
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************"/>
    </div>
  </div>


 
    <div class="w-[50%] border">
      <button class=" w-[100%] border shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Sign Up
      </button>
    </div>
  

</div>
        </div>



    </div>
  )
}

export default SIGNUP