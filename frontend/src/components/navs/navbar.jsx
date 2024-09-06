import React, { useState, useEffect } from "react";
import {
  FaSun,
  FaMoon,
  FaRegGrinBeam,
  FaLeaf,
  FaBuilding,
  FaLaptopCode,
  FaHeartbeat,
  FaGhost,
  FaTree,
  FaWater,
  FaPencilRuler,
  FaFantasyFlightGames,
  FaVectorSquare,
  FaChessKnight,
  FaCrown,
  FaPalette,
  FaRegBookmark,
  FaRegBell,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const themes = [
  { name: "light", icon: <FaSun /> },
  { name: "dark", icon: <FaMoon /> },
  { name: "cupcake", icon: <FaRegGrinBeam /> },
  { name: "emerald", icon: <FaLeaf /> },
  { name: "corporate", icon: <FaBuilding /> },
  { name: "synthwave", icon: <FaLaptopCode /> },
  { name: "retro", icon: <FaHeartbeat /> },
  { name: "cyberpunk", icon: <FaLaptopCode /> },
  { name: "valentine", icon: <FaHeartbeat /> },
  { name: "halloween", icon: <FaGhost /> },
  { name: "garden", icon: <FaTree /> },
  { name: "forest", icon: <FaTree /> },
  { name: "aqua", icon: <FaWater /> },
  { name: "lofi", icon: <FaPencilRuler /> },
  { name: "pastel", icon: <FaPalette /> },
  { name: "fantasy", icon: <FaFantasyFlightGames /> },
  { name: "wireframe", icon: <FaVectorSquare /> },
  { name: "black", icon: <FaChessKnight /> },
  { name: "luxury", icon: <FaCrown /> },
  { name: "dracula", icon: <FaGhost /> },
];

function NAVBAR({ theme, setTheme ,toggleSidebar}) {
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") || "cupcake"
  // );

  const handleChangeTheme = (themeName) => {
    setTheme(themeName);
    localStorage.setItem("theme", themeName);
  };

  const currentTheme = themes.find((t) => t.name === theme);

  return (
    <>
      <div className="navbar  h-[5%]">
        <div className="flex items-center w-full justify-between">
          {/* Left section with logo */}
          <div className="flex  items-center gap-2">
            {/* Logo Image */}
            <a className="btn btn-ghost text-xl">daisyUI</a>

            {/* Search Bar, hidden on mobile */}
            <div className="form-control hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
              />
            </div>
          </div>

          {/* Right section with icons and user info */}
          <div className="flex gap-2 items-center">
            {/* Sidebar Button for mobile screens */}
            <div className="lg:hidden">
              <button
                className="btn btn-ghost p-1 sm:p-2"
                onClick={toggleSidebar} // Function to toggle the sidebar visibility
              >
                <FaBars className="h-5 w-5" /> {/* Sidebar icon */}
              </button>
            </div>

            {/* Theme button */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 flex items-center theme-button text-sm sm:text-base"
              >
                {currentTheme?.icon}
                <span className="ml-2 hidden sm:block">
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 sm:w-52 p-2 shadow-lg"
              >
                {themes.map(({ name, icon }) => (
                  <li key={name}>
                    <a
                      onClick={() => handleChangeTheme(name)}
                      className="flex items-center text-sm sm:text-base"
                    >
                      {icon}
                      <span className="ml-2">
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notifications */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost theme-button p-1 sm:p-2"
              >
                <div className="indicator relative">
                  <FaRegBell className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-white"></span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-40 sm:w-52 shadow-lg"
              >
                <div className="card-body">
                  <span className="text-md font-bold">8 Notifications</span>
                  <span className="text-info">New notifications</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block text-sm">
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bookmarks */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost theme-button p-1 sm:p-2"
              >
                <div className="indicator relative">
                  <FaRegBookmark className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-white"></span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-40 sm:w-52 shadow-lg"
              >
                <div className="card-body">
                  <span className="text-md font-bold">5 Bookmarks</span>
                  <span className="text-info">Saved items</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block text-sm">
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* User Avatar */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-8 sm:w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 sm:w-52 p-2 shadow-lg"
              >
                <div className="flex justify-center content-center mb-2 font-mono text-md">
                  <h1>Welcome Girish</h1>
                </div>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NAVBAR;
