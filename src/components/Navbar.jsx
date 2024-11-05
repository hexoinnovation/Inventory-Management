import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import { useState } from "react";
import defaultProfileImage from "../assets/profile-Image.jpeg";

const Navbar = ({ toggledarkmode, darkmode, toggleSidebar }) => {
  const [profileImage, setProfileImage] = useState(defaultProfileImage);
  const [username, setUsername] = useState(""); // Default username
  const [isProfileSettingsOpen, setIsProfileSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-blue-900 to-blue-300  border-b border-gray-200 dark:bg-blue-500">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex itexs-center justify-start rtl:justify-end">
              <a href="#" className="flex ms-2 md:me-24">
                <MdSpaceDashboard className="h-8 me-3 text-xl text-violet-500 " />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Hexo
                </span>
              </a>
              <button
                className="inline-flex ml-4 items-center p-1  text-white rounded-lg  hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-white-200"
                onClick={toggleSidebar}
              >
                <HiOutlineMenuAlt2 className="text-2xl" />
              </button>
            </div>

            {/* Profile Menu  */}
            
<div className="flex ">
<div className="profile-container flex items-center">
              <label htmlFor="profile-image-upload">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-picture cursor-pointer w-10 h-10 rounded-full"
                  onClick={() =>
                    setIsProfileSettingsOpen(!isProfileSettingsOpen)
                  } // Toggle Profile Settings
                />
              </label>
              <span
                className={`text-gray-800 font-semibold ml-2 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {username}
              </span>
            </div>
<button
              className="text-slate-700 rounded-full p-2"
              onClick={toggledarkmode}
            >
              {darkmode ? <FaSun /> : <FaMoon />}
            </button>

</div>
          
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
