import React,{useState} from "react";
import { TbMessage2Plus } from "react-icons/tb";
import { MdEmojiEvents } from "react-icons/md";
import MESSAGES from "./messages";
function FEEDHELPER() {

    const [activeTab, setActiveTab] = useState('Tab 1');

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };

  return (
    <>
      <div className=" p-3 gap-3 bg-primary flex flex-col h-[65%] rounded-lg">
        <div className="w-[100%] flex justify-between">
          {" "}
          <h2 className="font-medium  text-xl">Messages</h2>{" "}
          <button className="btn btn-sm btn-ghost">
            <TbMessage2Plus className="w-5 h-5" />
          </button>
        </div>
        <input type="text" placeholder="Search" className="input w-[100%] outline-dashed    " />
 
        <div className="bg-secondary h-[75%] overflow-hidden rounded-lg">
      <div role="tablist" className="tabs tabs-bordered ">
        <a
          role="tab"
          className={`tab ${activeTab === 'Tab 1' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('Tab 1')}
        >
            <p className="text-xs">

        messages
            </p>
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 'Tab 2' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('Tab 2')}
          >
            <p className="text-xs">

            Channel
            </p>
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 'Tab 3' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('Tab 3')}
        >
            <p className="text-xs">

          Requests
            </p>
        </a>
      </div>
      <div className=" messages p-4 W-[100%] h-[100%] flex flex-col overflow-y-scroll items-center ">
        {activeTab === 'Tab 1' && <MESSAGES/>}
        {activeTab === 'Tab 2' && <div>Content for Tab 2</div>}
        {activeTab === 'Tab 3' && <div>Content for Tab 3</div>}
      </div>
    </div>
      </div>

<div className="events p-3 gap-3 bg-primary flex flex-col h-[34%] rounded-lg">

<div className="w-[100%] flex justify-between">
          {" "}
          <h2 className="font-medium  text-xl">Events</h2>{" "}
          <button className="btn btn-sm btn-ghost">
            <MdEmojiEvents  className="w-5 h-5" />
          </button>
        </div>

<div className="contnetofevents flex flex-col items-center overflow-y-scroll">
<h3>evnts</h3>
<h3>evnts</h3>
<h3>evnts</h3>
<h3>evnts</h3>
<h3>evnts</h3>
<h3>evnts</h3>
<h3>evnts</h3>
<h3>evnts</h3>
<h3>evnts</h3>
<h3>evnts   </h3>
<h3>evnts   </h3>
<h3>evnts   </h3>
<button className="btn btn-sm btn-ghost">More</button>
</div>

</div>





    </>
  );
}

export default FEEDHELPER;
