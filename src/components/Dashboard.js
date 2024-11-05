// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMagnifyingGlass,
//   faMoon,
//   faSun,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Dashboard.scss"; // Ensure the filename is correct
// import defaultProfileImage from "../assets/profile-Image.jpeg"; // Default profile image

// function Dashboard() {
//   const [profileImage, setProfileImage] = useState(defaultProfileImage);
//   const [username, setUsername] = useState(""); // Default username
//   const [isProfileSettingsOpen, setIsProfileSettingsOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const toggleMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const handleLogout = () => {
//     console.log("Logout");
//   };

//   return (
//     <div
//       className={`flex flex-col items-center min-h-screen p-6 ${
//         isDarkMode ? "bg-gray-800" : "bg-gray-200"
//       }`}
//     >
//       <header
//         className={`header-container w-full bg-white shadow-md p-4 rounded-md flex flex-col md:flex-row items-center justify-between mt-0 ${
//           isDarkMode ? "bg-gray-900" : "bg-white"
//         }`}
//       >
//         <h1
//           className={`header-title text-4xl font-semibold ${
//             isDarkMode ? "text-white" : "text-gray-800"
//           }`}
//         >
//           Header
//         </h1>

//         <div className="search-container relative w-full md:w-1/2 lg:w-1/3">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="border border-gray-300 rounded-md p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
//           />
//           <span className="absolute left-3 text-gray-500 top-1/2 transform -translate-y-1/2">
//             <FontAwesomeIcon
//               icon={faMagnifyingGlass}
//               className="text-gray-500"
//             />
//           </span>
//         </div>

//         <div className="profile-container flex items-center">
//           <label htmlFor="profile-image-upload">
//             <img
//               src={profileImage}
//               alt="Profile"
//               className="profile-picture cursor-pointer w-10 h-10 rounded-full"
//               onClick={() => setIsProfileSettingsOpen(!isProfileSettingsOpen)} // Toggle Profile Settings
//             />
//           </label>
//           <span
//             className={`text-gray-800 font-semibold ml-2 ${
//               isDarkMode ? "text-white" : "text-gray-800"
//             }`}
//           >
//             {username}
//           </span>
//         </div>
//       </header>

//       {/* Profile Settings Container */}
//       {isProfileSettingsOpen && (
//         <div
//           className={`profile-settings-container mt-4 rounded-lg p-6 shadow-lg ${
//             isDarkMode ? "bg-gray-800" : "bg-white"
//           }`}
//         >
//           <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>

//           {/* Profile Image Upload Section */}
//           <div className="flex flex-col mb-4">
//             <label className="mb-2">Upload Image:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="border border-gray-300 rounded-md p-2 mb-4 cursor-pointer"
//             />
//           </div>

//           {/* Username Input Section */}
//           <div className="flex flex-col mb-4">
//             <label className="mb-2">Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className={`border border-gray-300 rounded-md p-2 ${
//                 isDarkMode ? "bg-gray-700 text-white" : ""
//               }`}
//             />
//           </div>

//           {/* Dark Mode Toggle */}
//           <div className="flex items-center mb-4">
//             <span className="mr-2">Toggle Dark Mode:</span>
//             <button
//               onClick={toggleMode}
//               className="p-2 border rounded-md bg-gray-200 hover:bg-gray-300"
//             >
//               {isDarkMode ? (
//                 <FontAwesomeIcon icon={faSun} />
//               ) : (
//                 <FontAwesomeIcon icon={faMoon} />
//               )}
//             </button>
//           </div>

//           {/* Logout and Close Buttons */}
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white p-2 rounded-md"
//           >
//             Logout
//           </button>
//           <button
//             onClick={() => setIsProfileSettingsOpen(false)}
//             className="mt-4 bg-blue-500 text-white p-2 rounded-md"
//           >
//             Save
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;
