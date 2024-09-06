import React, { useState, useRef, useEffect } from "react";
import video1 from "/videos/jjk1.mp4";
import video2 from "/videos/jjk2.mp4";
import defaultProfile from "/images/default_profile.png";
import { ImLoop } from "react-icons/im";
import { FaVolumeMute } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FaPause, FaPlay } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function SIGNUP() {
  // all for userinterface starts here
  const [currentVideo, setCurrentVideo] = useState(video1);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);

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
  // all for userinterface ends here







  const [image, setImage] = useState(defaultProfile); // Default profile image
  const [isloading, setisloading] = useState(false);
  // Image file loader

  
  const loadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Temporarily display the image
      setFormData({ ...formData, profilePic: file }); // Update formData with the file
    }
  };

 
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    password: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setisloading(true); // Show loading spinner
    const data = new FormData();
    data.append("name", formData.name);
    data.append("userName", formData.userName);
    data.append("gender", formData.gender);
    data.append("dateOfBirth", formData.dateOfBirth);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("profilePic", formData.profilePic);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        data,
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          credentials: "include", // Include credentials (cookies)
        }
      );
      toast.success("Signup successful:", response.data);
      setisloading(false);
    } catch (error) {
      toast.error(error.response.data.message);

      console.error("Error signing up:", error);
      setisloading(false);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center video-background">
      {/* <video
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
      </video> */}

      <div className="relative w-[60%] h-[73%] flex items-center contentx bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100">
        <div className="w-[40%] h-[100%] bg-transparent opacity-80 flex flex-col ">
          <div className=" w-[100%] h-[50%] flex justify-center items-end">
            <div className="websitename  animate-pulse ">Weshare</div>
          </div>
          <div className=" w-[100%] h-[47%] flex items-end">
            <div className="flex  justify-start w-[100%]">
              <button
                className="btn btn-outline rounded-lg ml-2 mr-2 text-white "
                onClick={toggleVideo}
              >
                <ImLoop className="w-6 h-6" />
              </button>
              <button
                className="btn btn-outline text-white"
                onClick={toggleMute}
              >
                {isMuted ? (
                  <FaVolumeMute className="w-6 h-6" />
                ) : (
                  <GoUnmute className="w-6 h-6" />
                )}
              </button>
              <button
                className="btn btn-outline text-white ml-2"
                onClick={togglePlayPause}
              >
                {isPaused ? (
                  <FaPlay className="w-6 h-6" />
                ) : (
                  <FaPause className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-[60%] h-[95%] bg-white mr-6 flex items-center flex-col shadow-2xl rounded-lg justify-around"
        >
          <div className="flex items-center w-[100%] justify-around">
            <h1 className="font-semibold text-red-500 websitename">Signup</h1>
            <div className="profile-pic  relative flex items-center justify-center w-24 h-24">
              <input
                id="file"
                type="file"
                name="profilePic"
                onChange={loadFile}
                className="hidden"
              />

              <img
                src={image}
                id="output"
                alt="Profile"
                className="w-24 h-24 object-cover shadow-lg rounded-full"
                onClick={() => document.getElementById("file").click()}
              />
              <label
                htmlFor="file"
                className="absolute inset-0 flex items-center justify-center w-24 h-24 rounded-full bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <span>
                  <MdOutlinePersonAddAlt className="w-10 h-10" />
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-wrap w-[100%]">
            <div className="w-full md:w-1/2 px-5">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="Name"
                  className="peer h-full w-full text-black border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-mono text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  name="name"
                  onChange={handleChange}
                />
                <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:content-[''] after:absolute after:-bottom-1.5 after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-5">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="User_name"
                  className="peer h-full w-full text-black border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-mono text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  name="userName"
                  onChange={handleChange}
                />
                <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:content-[''] after:absolute after:-bottom-1.5 after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  User_name
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-[100%]">
            <div className="w-full md:w-1/2 px-5">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="Email"
                  className="peer h-full text-black w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-mono text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  name="email"
                  onChange={handleChange}
                />
                <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:content-[''] after:absolute after:-bottom-1.5 after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-5">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  placeholder="Password"
                  type="password"
                  className="peer h-full w-full border-b text-black border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-mono text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  name="password"
                  onChange={handleChange}
                />
                <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:content-[''] after:absolute after:-bottom-1.5 after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  password
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-around w-[100%]">
            <div className="w-full md:w-1/2 px-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                DOB
              </label>
              <input
                className="appearance-none block w-full font-mono bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-city"
                type="date"
                placeholder="Albuquerque"
                name="dateOfBirth"
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-5">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Gender
              </label>

              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white font-mono"
                  id="grid-state"
                  name="gender"
                  onChange={handleChange}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-around w-[100%]">
            <div className="w-full md:w-1/2 px-5">
              <button className="btn btn-outline text-red-500 w-[100%]">
                {isloading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                ) : (
                  <h2 className="customfont">Signup</h2>
                )}
              </button>
            </div>
            <div className="w-full md:w-1/2 px-3 flex font-mono text-black items-center justify-center">
              <h3>
                Have an account?
                <Link to={"/login"} className="text-blue-800">
                  Login
                </Link>
              </h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SIGNUP;
