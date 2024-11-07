import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import defaultProfileImage from "../assets/profile-Image.jpeg";

const Navbar = ({ toggledarkmode, darkmode, toggleSidebar }) => {
  const [profileImage, setProfileImage] = useState(defaultProfileImage);
  const [username, setUsername] = useState(""); // Default username
  const [isProfileSettingsOpen, setIsProfileSettingsOpen] = useState(false);

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
      <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-blue-900 to-blue-300 border-b border-gray-200 dark:bg-blue-500">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <a href="#" className="flex ms-2 md:me-24">
                <MdSpaceDashboard className="h-8 me-3 text-xl text-violet-500" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Hexo
                </span>
              </a>
              <button
                className="inline-flex ml-4 items-center p-1 text-white rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-white-200"
                onClick={toggleSidebar}
              >
                <HiOutlineMenuAlt2 className="text-2xl" />
              </button>
            </div>

            {/* Profile and Dark Mode Toggle */}
            <div className="flex items-center ml-4 relative">
              <label htmlFor="profile-image-upload">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-picture cursor-pointer w-10 h-10 rounded-full"
                  onClick={() => setIsProfileSettingsOpen(!isProfileSettingsOpen)}
                />
              </label>

              {/* Profile Settings Container */}
              {isProfileSettingsOpen && (
                <div
                  className={`absolute top-12 right-0 mt-2 w-64 p-4 rounded-lg shadow-lg ${
                    darkmode ? "bg-gray-800 text-white" : "bg-white"
                  }`}
                >
                  <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>

                  {/* Profile Image Upload */}
                  <div className="mb-4">
                    <label className="block text-sm mb-1">Upload Image:</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full border border-gray-300 rounded-md p-1 cursor-pointer"
                    />
                  </div>

                  {/* Username Input */}
                  <div className="mb-4">
                    <label className="block text-sm mb-1">Username:</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className={`w-full border border-gray-300 rounded-md p-2 ${
                        darkmode ? "bg-gray-700 text-white" : ""
                      }`}
                    />
                  </div>

                  {/* Dark Mode Toggle */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="mr-2">Dark Mode:</span>
                    <button
                      onClick={toggledarkmode}
                      className="p-2 border rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                      {darkmode ? <FaSun /> : <FaMoon />}
                    </button>
                  </div>

                  {/* Logout and Save Buttons */}
                  <div className="flex justify-between">
                    <button
                      onClick={() => alert("Logged out")}
                      className="bg-red-500 text-white p-2 rounded-md"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() => setIsProfileSettingsOpen(false)}
                      className="bg-blue-500 text-white p-2 rounded-md"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
              
              {/* Dark Mode Toggle Button */}
              <button
                className="text-slate-700 rounded-full p-2 ml-4"
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
