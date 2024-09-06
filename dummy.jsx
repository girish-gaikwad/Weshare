// import React, { useState, useRef, useEffect } from "react";
// import video1 from "/videos/jjk1.mp4";
// import video2 from "/videos/jjk2.mp4";
// import defaultProfile from "/images/image.png";
// import { ImLoop } from "react-icons/im";
// import { FaVolumeMute } from "react-icons/fa";
// import { GoUnmute } from "react-icons/go";
// import { MdOutlinePersonAddAlt } from "react-icons/md";
// import { FaPause, FaPlay } from "react-icons/fa6";

// function SIGNUP() {
//   // Video and Mute/Pause states
//   const [currentVideo, setCurrentVideo] = useState(video1);
//   const [isMuted, setIsMuted] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const videoRef = useRef(null);

//   // Toggle video between video1 and video2
//   const toggleVideo = () => {
//     setCurrentVideo((prevVideo) => (prevVideo === video1 ? video2 : video1));
//     if (videoRef.current) {
//       videoRef.current.load();
//     }
//   };

//   // Mute and Unmute video
//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//   };

//   // Play and Pause video
//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPaused) {
//         videoRef.current.play().catch((error) => {
//           console.error("Error attempting to play video:", error);
//         });
//       } else {
//         videoRef.current.pause();
//       }
//       setIsPaused(!isPaused);
//     }
//   };

//   // Video effects for current state changes
//   useEffect(() => {
//     if (videoRef.current) {
//       if (!isPaused) {
//         videoRef.current.play().catch((error) => {
//           console.error("Error attempting to play video:", error);
//         });
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [currentVideo, isMuted, isPaused]);

//   // Form data and image file states
//   const [formData, setFormData] = useState({
//     name: "",
//     userName: "",
//     email: "",
//     password: "",
//     dateOfBirth: "",
//     gender: "",
//   });

//   const [image, setImage] = useState(defaultProfile); // Default profile image

//   // Form input handler
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Image file loader
//   const loadFile = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file)); // Temporarily display the image
//     }
//   };

//   // Form submission handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("profilePic", image);
//     data.append("name", formData.name);
//     data.append("userName", formData.userName);
//     data.append("email", formData.email);
//     data.append("password", formData.password);
//     data.append("dateOfBirth", formData.dateOfBirth);
//     data.append("gender", formData.gender);

//     console.log("Form data before submit:", formData);
//     console.log("Selected image:", image);

//     // Uncomment to make the actual API call
//     // try {
//     //   const response = await fetch("/upload", {
//     //     method: "POST",
//     //     body: data,
//     //   });

//     //   const result = await response.json();
//     //   console.log("Server response:", result);
//     // } catch (error) {
//     //   console.error("Error:", error);
//     // }
//   };

//   return (
//     <div className="w-[100vw] h-[100vh] flex items-center justify-center video-background">
//       <video
//         ref={videoRef}
//         autoPlay
//         muted={isMuted}
//         loop
//         playsInline
//         id="background-video"
//         className="absolute w-full h-full object-cover"
//       >
//         <source src={currentVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="relative w-[60%] h-[73%] flex items-center bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100">
//         <div className="w-[40%] h-[100%] flex flex-col">
//           <div className="w-full h-[50%] flex justify-center items-end">
//             <div className="websitename animate-pulse">Weshare</div>
//           </div>
//           <div className="w-full h-[47%] flex items-end">
//             <div className="flex justify-start w-full">
//               <button className="btn btn-outline rounded-lg ml-2 text-white" onClick={toggleVideo}>
//                 <ImLoop className="w-6 h-6" />
//               </button>
//               <button className="btn btn-outline text-white ml-2" onClick={toggleMute}>
//                 {isMuted ? <FaVolumeMute className="w-6 h-6" /> : <GoUnmute className="w-6 h-6" />}
//               </button>
//               <button className="btn btn-outline text-white ml-2" onClick={togglePlayPause}>
//                 {isPaused ? <FaPlay className="w-6 h-6" /> : <FaPause className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="w-[60%] h-[95%] bg-white flex items-center flex-col shadow-2xl rounded-lg justify-around">
//           <div className="flex items-center w-full justify-around">
//             <h1 className="font-semibold text-red-500 websitename">Signup</h1>
//             <div className="profile-pic relative flex items-center justify-center w-24 h-24">
//               <input id="file" type="file" onChange={loadFile} className="hidden" />
//               <img
//                 src={image}
//                 alt="Profile"
//                 className="w-24 h-24 object-cover shadow-lg rounded-full"
//                 onClick={() => document.getElementById("file").click()}
//               />
//               <label
//                 htmlFor="file"
//                 className="absolute inset-0 flex items-center justify-center w-24 h-24 rounded-full bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
//               >
//                 <MdOutlinePersonAddAlt className="w-10 h-10" />
//               </label>
//             </div>
//           </div>

//           <div className="flex flex-wrap w-full">
//             <div className="w-full md:w-1/2 px-5">
//               <div className="relative h-11 w-full min-w-[200px]">
//                 <input
//                   placeholder="Name"
//                   className="peer h-full w-full text-black border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm outline-none focus:border-gray-500 placeholder:opacity-0"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//                 <label className="pointer-events-none absolute left-0 top-0 text-sm text-gray-500 transition-all peer-placeholder-shown:leading-tight peer-focus:text-[11px]">
//                   Name
//                 </label>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 px-5">
//               <div className="relative h-11 w-full min-w-[200px]">
//                 <input
//                   placeholder="Username"
//                   className="peer h-full w-full text-black border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm outline-none focus:border-gray-500 placeholder:opacity-0"
//                   name="userName"
//                   value={formData.userName}
//                   onChange={handleChange}
//                 />
//                 <label className="pointer-events-none absolute left-0 top-0 text-sm text-gray-500 transition-all peer-placeholder-shown:leading-tight peer-focus:text-[11px]">
//                   Username
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-wrap w-full">
//             <div className="w-full md:w-1/2 px-5">
//               <div className="relative h-11 w-full min-w-[200px]">
//                 <input
//                   placeholder="Email"
//                   className="peer h-full text-black w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm outline-none focus:border-gray-500 placeholder:opacity-0"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 <label className="pointer-events-none absolute left-0 top-0 text-sm text-gray-500 transition-all peer-placeholder-shown:leading-tight peer-focus:text-[11px]">
//                   Email
//                 </label>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 px-5">
//               <div className="relative h-11 w-full min-w-[200px]">
//                 <input
//                   placeholder="Password"
//                   className="peer h-full w-full text-black border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm outline-none focus:border-gray-500 placeholder:opacity-0"
//                   name="password"
//                   type="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <label className="pointer-events-none absolute left-0 top-0 text-sm text-gray-500 transition-all peer-placeholder-shown:leading-tight peer-focus:text-[11px]">
//                   Password
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-wrap w-full">
//             <div className="w-full md:w-1/2 px-5">
//               <div className="relative h-11 w-full min-w-[200px]">
//                 <input
//                   placeholder="Date of Birth"
//                   className="peer h-full text-black w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm outline-none focus:border-gray-500 placeholder:opacity-0"
//                   name="dateOfBirth"
//                   type="date"
//                   value={formData.dateOfBirth}
//                   onChange={handleChange}
//                 />
//                 <label className="pointer-events-none absolute left-0 top-0 text-sm text-gray-500 transition-all peer-placeholder-shown:leading-tight peer-focus:text-[11px]">
//                   Date of Birth
//                 </label>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 px-5">
//               <div className="relative h-11 w-full min-w-[200px]">
//                 <select
//                   className="peer h-full w-full text-black border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm outline-none focus:border-gray-500"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                 >
//                   <option value="" disabled selected>
//                     Gender
//                   </option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SIGNUP;



import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import "@fortawesome/fontawesome-free/css/all.min.css";
import defaultProfile from "/images/image.png";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignUpPage = () => {
  const [isloading, setisloading] = useState(false);
  const [image, setImage] = useState(defaultProfile); // Default profile image
  const [isChecked, setIsChecked] = useState(false); // State for the checkbox
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle profile pic upload and display preview
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

  // Validation functions
  const isFullNameValid = formData.name.length > 0;
  const isUserNameValid = formData.userName.length > 0;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isPasswordValid = formData.password.length > 6;

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
      
      // Navigate to /verify-email after successful signup
      navigate("/verify-email");
      
    } catch (error) {
      toast.error(error.response.data.message);

      console.error("Error signing up:", error);
      setisloading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side with Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img
            src="/images/tanjiro.png"
            alt="Artwork"
            className="h-full object-cover hidden md:block"
          />
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Welcome to Weshare
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Profile Picture Upload */}
            <div className="mb-6 flex justify-center">
              <label htmlFor="profilePic" className="cursor-pointer">
                <div className="relative">
                  {formData.profilePic ? (
                    <img
                      src={image}
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover border border-gray-300"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Upload</span>
                    </div>
                  )}
                  <input
                    type="file"
                    id="profilePic"
                    accept="image/*"
                    className="hidden"
                    onChange={loadFile}
                  />
                </div>
              </label>
            </div>

            {/* Full Name */}
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Full name"
                name="name"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isFullNameValid && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Username */}
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Username"
                name="userName"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isUserNameValid && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Email */}
            <div className="mb-4 relative">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isEmailValid && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <input
                type="password"
                placeholder="Password (min. 6 characters)"
                name="password"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isPasswordValid && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )}
            </div>

            {/* Gender */}
            <div className="mb-4 relative flex">
              <div className="mb-4 relative flex w-[100%]">
                <select
                  name="gender"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Gender ⚥</option>
                  <option value="Male">Male ♂️</option>
                  <option value="Female">Female ♀️</option>
                  <option value="Other">Other</option>
                </select>
                {formData.gender && (
                  <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
                )}
              </div>
              <div className="mb-4 relative flex w-[100%]">
                <input
                  type="date"
                  placeholder="Date of Birth"
                  name="dateOfBirth"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formData.dateOfBirth && (
                  <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
                )}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-4 relative">
              {/* <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {isConfirmPasswordValid && (
                <CheckCircleIcon className="w-6 h-6 text-green-500 absolute top-3 right-3" />
              )} */}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFullNameValid || !isUserNameValid || !isEmailValid || !isPasswordValid}
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isloading ? (
                <div className="flex justify-center items-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 0 1 8-8v8H4z"
                    ></path>
                  </svg>
                </div>
              ) : (
                "Sign Up"
              )}
            </button>

            {/* Checkbox */}
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-gray-700">
                I agree to the <a href="#" className="text-blue-500">Terms and Conditions</a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
