import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdMore } from "react-icons/io";
import { BiCommentEdit } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import Modal from "../modal"; // Ensure the path is correct based on your project structure

function REELS() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShareClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[100%] h-[100%] flex justify-center">

    <div className="protec w-[40%] h-[100%] flex-col overflow-y-scroll snap-y snap-mandatory">
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
              </div>
  );
}

export default REELS;
