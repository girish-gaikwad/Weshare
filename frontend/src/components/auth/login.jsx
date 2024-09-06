// import React, { useState } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { handlerror, handlesuccess } from "./toast";
// import { useNavigate } from 'react-router-dom';

// function LOGIN() {
//   const [logininfo, setlogininfo] = useState({
//     email: "",
//     password: ""
//   });
//   const navigate = useNavigate();  // using useNavigate hook

//   const handlechange = (e) => {
//     const { name, value } = e.target;
//     setlogininfo(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const loginx  = async (e) => {
//     e.preventDefault();

//     const {email, password } = logininfo;
//     if (!email || !password) {
//       return handlerror(" email, or password field is empty");
//     }
//     try {
//       const url = "http://localhost:8080/api/login";
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email, password })  // send the signup data
//       });

//       const result = await response.json();
//       const { success,jwtToken,name, message,error } = result;
//       if (success) {
//         handlesuccess(message);

//         localStorage.setItem("token",jwtToken)
//         localStorage.setItem("user",name)
//         setTimeout(() => {
//           navigate("/Weshare");
//         }, 1000);
//       } 
//       else if(error ){
// const details = error?.details[0].message
//           handlerror(details);  // handle error message from server
//       }
//       else if(!success){
// handlerror(message)
//       }
//       else {
//         handlerror(message);  // handle error message from server
//       }

//     } catch (error) {
//       handlerror("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div>
//       LOGIN
//       <form onSubmit={loginx}>
       
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handlechange}
//           value={logininfo.email}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handlechange}
//           value={logininfo.password}
//         />
//         <button type='submit'>Submit</button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// }

// export default LOGIN;




import React, { useState, useRef, useEffect } from "react";
import video1 from "/videos/jjk1.mp4";
import video2 from "/videos/jjk2.mp4";
import defaultprofile from "/images/default_profile.png"
import { ImLoop } from "react-icons/im";
import { FaVolumeMute } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FaPause, FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

function LOGIN() {
  const [image, setImage] = useState(
    defaultprofile
  );
  const [currentVideo, setCurrentVideo] = useState(video1);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);

  const loadFile = (event) => {
    const output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    setImage(output.src);
  };

  const toggleVideo = () => {
    setCurrentVideo((prevVideo) => (prevVideo === video1 ? video2 : video1));
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play().catch((error) => {
          console.error("Error attempting to play video:", error);
        });
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };
  useEffect(() => {
    if (videoRef.current) {
      if (!isPaused) {
        videoRef.current.play().catch((error) => {
          console.error("Error attempting to play video:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentVideo, isMuted, isPaused]);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center video-background">
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        id="background-video"
        className="absolute w-full h-full object-cover"
      >
        <source src={currentVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative w-[55%] h-[73%] flex items-center contentx bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40  border-gray-100">



        
        

        <div className="w-[50%] h-[95%] bg-white ml-5 flex items-center flex-col shadow-2xl rounded-lg gap-12">
          <div className=" flex items-center w-[100%] justify-around">
            <h1 className="font-semibold text-red-500 websitename">
              Log in
            </h1>  
          </div>

          
          <div className="flex flex-wrap w-[70%] "> 
           
              <div className="relative h-14 w-full min-w-[200px]">
                <input
                  placeholder="Email" type="email"
                  className="peer h-full w-full border-b text-black border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-mono text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:content-[''] after:absolute after:-bottom-1.5 after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              
            </div>
          </div>

          <div className="flex flex-wrap w-[70%] "> 
           
           <div className="relative h-14 w-full min-w-[200px]">
             <input
               placeholder="Password" type="password"
               className="peer h-full w-full border-b text-black border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-mono text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
             />
             <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:content-[''] after:absolute after:-bottom-1.5 after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
               password
             </label>
           
         </div>
       </div>

          <div className="flex  w-[70%] flex-wrap justify-around ">
        
              <button className="btn btn-outline text-red-500 w-[100%]">
                <h2 className="customfont">Login </h2>
              </button>
            
            
          </div>


          <div className="w-full   flex font-mono text-black items-center justify-center">
              <h3>don't have an account? {"  "}
                
                <Link to={"/signup"} className="text-blue-800">
                 Signup
                </Link>
                 
                 </h3>
            </div>
          
          
        </div>

        <div className="w-[50%]  h-[100%] bg-transparent opacity-80 flex flex-col ">
          <div className=" w-[100%] h-[50%] flex justify-center items-end">

          
          <div className="websitename   animate-pulse ">Weshare</div>
          </div>
          <div className=" w-[100%] h-[47%] flex items-end ">
          <div className="flex  justify-end w-[100%]">
            <button
              className="btn btn-outline rounded-lg  mr-2 text-white "
              onClick={toggleVideo}
            >
              <ImLoop className="w-6 h-6" />
            </button>
            <button
              className="btn btn-outline text-white"
              onClick={toggleMute}
            >
              {isMuted ?<FaVolumeMute className="w-6 h-6" /> :<GoUnmute className="w-6 h-6" />  }
            </button>
            <button
                className="btn btn-outline mr-2 text-white ml-2"
                onClick={togglePlayPause}
              >
                {isPaused ? <FaPlay className="w-6 h-6" /> : <FaPause className="w-6 h-6" />}
              </button>
          </div>
          </div>



        </div>

      </div>
    </div>
  );
}

export default LOGIN;