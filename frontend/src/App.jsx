import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SIDEBAR from "./components/navs/sidebar";
import NAVBAR from "./components/navs/navbar";
import "./App.css";
import FEED from "./components/feed/feed";
import FEEDHELPER from "./components/feed/feedhelper";
import REELS from "./components/reels/reels";
import REELSHELPER from "./components/reels/reelshelper";
import PHOTOS from "./components/photo/photos";
import PHOTOSHELPER from "./components/photo/photoshelper";
import VIDEOS from "./components/video/videos";
import VIDEOSHELPER from "./components/video/videoshelper";
import VCHANNEL from "./components/vchat/vchannel";
import VCHANNELHELPER from "./components/vchat/vchannelhelper";
import LOGIN from "./components/auth/login";
import SIGNUP from "./components/auth/signup";

import img1 from "/images/default_profile.png";
import img2 from "/images/WeShare-.png";
import img3 from "/images/1.png";
import EmailVerification from "./components/auth/emailverification";
import LoginScreen from "./components/auth/dummylogin";
import SignScreen from "./components/auth/dummysignin";

function App() {
  const photoData = [
    { src: img1, alt: "Photo 1" },
    { src: img1, alt: "Photo 1" },
    { src: img1, alt: "Photo 1" },
    { src: img2, alt: "Photo 2" },
    { src: img3, alt: "Photo 2" },
    { src: img3, alt: "Photo 2" },
    { src: img3, alt: "Photo 2" },
    { src: img1, alt: "Photo 1" },
    { src: img3, alt: "Photo 2" },
    { src: img2, alt: "Photo 2" },
    { src: img2, alt: "Photo 2" },
    { src: img2, alt: "Photo 2" },
    { src: img2, alt: "Photo 2" },
    { src: img2, alt: "Photo 2" },
    { src: img2, alt: "Photo 2" },
    { src: img3, alt: "Photo 2" },
  ];

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "cupcake"
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar visibility state

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle between true and false
  };

  const divRef = useRef(null);
  const [divHeight, setDivHeight] = useState(0);
  // After component renders, access the div's height
  useEffect(() => {
    if (divRef.current) {
      setDivHeight(divRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LOGIN />} />
          <Route path="/signup" element={<SIGNUP />} />

          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/link" element={<LoginScreen />} />
          <Route path="/link2" element={<SignScreen />} />

          <Route
            path="/Weshare/*"
            element={
              <div className="w-screen h-screen flex-col">
                <NAVBAR
                  theme={theme}
                  setTheme={setTheme}
                  toggleSidebar={toggleSidebar}
                />

                <div className="yo flex mt-3  gap-2 pl-3 pr-3 ">
                  <div
                    // ref={sidebarRef}
                    className={`sidebar lg:w-[15%]  lg:flex flex-col z-30 lg:relative absolute ${
                      sidebarOpen ? "left-0" : "left-[-100%]"
                    } lg:left-0 gap-2 items-center transition-all duration-300`}
                    style={{ height: divHeight }}
                  >
                    <SIDEBAR />
                  </div>

                  <div
                    ref={divRef}
                    className="content w-[100%]   rounded-xl gap-2 flex"
                  >
                    <div className="main w-[100%]  rounded-xl overflow-y-scroll ">
                      {/* <p>The height of the div is: {divHeight}px</p> */}
                      <Routes>
                        <Route path="feed" element={<FEED />} />
                        <Route path="reels" element={<REELS />} />
                        <Route
                          path="photos"
                          element={<PHOTOS photos={photoData} />}
                        />
                        <Route path="videos" element={<VIDEOS />} />
                        <Route path="channel" element={<VCHANNEL />} />
                        {/* Add a default route if needed */}
                        {/* <Route path="/" element={<Home />} /> */}
                      </Routes>
                    </div>
                    <div className="helperside w-[23%]   rounded-xl flex flex-col gap-2 p-0 m-0 ">
                      <Routes>
                        <Route path="feed" element={<FEEDHELPER />} />
                        <Route path="reels" element={<REELSHELPER />} />
                        <Route path="photos" element={<PHOTOSHELPER />} />
                        <Route path="videos" element={<VIDEOSHELPER />} />
                        <Route path="channel" element={<VCHANNELHELPER />} />
                        {/* Add a default route if needed */}
                        {/* <Route path="/" element={<Home />} /> */}
                      </Routes>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
