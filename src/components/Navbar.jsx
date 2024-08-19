import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {FiUser} from 'react-icons/fi'

const Navbar = (isLoggedIn =false) => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-[#060606] fixed z-50 w-full flex justify-between items-center h-24 mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='w-full xl:w-3/12 text-3xl font-bold text-[#00df9a]'>Pergola.</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex xl:pr-24 gap-6'>
          <li
            className='px-4 hover:bg-[#00df9a] hover:text-black rounded-xl md:text-sm m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link to="/Pergola-shelter-safe-web-app" className={`text-white hover:text-black inline-block h-full ${(window.location.pathname !== "/Pergola-shelter-safe-web-app/voice-recognition" && window.location.pathname !== "/Pergola-shelter-safe-web-app/volets") ? "underline" : ""}`}>Accueil</Link>
          </li>
          <li
            className='px-4 hover:bg-[#00df9a] hover:text-black rounded-xl md:text-sm m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link to="/Pergola-shelter-safe-web-app/voice-recognition" className={`text-white hover:text-black ${(window.location.pathname === "/Pergola-shelter-safe-web-app/voice-recognition") ? "underline" : ""}`}>Commandes</Link>
          </li>
          <li
            className='px-4 hover:bg-[#00df9a] rounded-xl md:text-sm m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link to="/Pergola-shelter-safe-web-app/volets" className={`text-white hover:text-black ${(window.location.pathname === "/Pergola-shelter-safe-web-app/volets") ? "underline" : ""}`}>Volets</Link>
          </li>
          <li
            className='px-4 hover:bg-[#00df9a] rounded-xl md:text-sm m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link to="/Pergola-shelter-safe-web-app/weather" className={`text-white hover:text-black ${(window.location.pathname === "/Pergola-shelter-safe-web-app/weather") ? "underline" : ""}`}>Temps</Link>
          </li>
      </ul>     
      {isLoggedIn? <Link to="/Pergola-shelter-safe-web-app/profile" className='hidden rounded md:flex gap-3 md:items-center text-white hover:text-black hover:bg-white text-sm border py-2 px-5 mr-24'>
      <FiUser className="mr-2 align-middle"/>
        Déconnection
           
           </Link>:
           <Link to="/Pergola-shelter-safe-web-app/login" className='hidden rounded md:flex gap-3 md:items-center text-white hover:text-black hover:bg-white text-sm border py-2 px-5 mr-24'>
            <FiUser className="mr-2 align-middle"/>
            Connexion 
            </Link>}

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='text-xl font-bold text-[#00df9a] m-4'>Pergola.</h1>

        {/* Mobile Navigation Items */}
          <li
            className='p-4 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to="/Pergola-shelter-safe-web-app" className={`text-white ${(window.location.pathname !== "/Pergola-shelter-safe-web-app/voice-recognition" && window.location.pathname !== "/Pergola-shelter-safe-web-app/volets") ? "underline" : ""}`}>Accueil</Link>
          </li>
          <li
            className='p-4 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to="/Pergola-shelter-safe-web-app/voice-recognition" className={`text-white ${(window.location.pathname === "/Pergola-shelter-safe-web-app/voice-recognition") ? "underline" : ""}`}>Commandes</Link>
          </li>
          <li
            className='p-4 mb-10 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to="/Pergola-shelter-safe-web-app/volets" className={`text-white ${(window.location.pathname === "/Pergola-shelter-safe-web-app/volets") ? "underline" : ""}`}>Volets</Link>
          </li>
          <li
            className='p-4 mb-10 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to="/Pergola-shelter-safe-web-app/weather" className={`text-white ${(window.location.pathname === "/Pergola-shelter-safe-web-app/weather") ? "underline" : ""}`}>Temps</Link>
          </li>
          <li>
            <Link to="#" className='rounded text-black bg-white text-sm border mt-10 py-2 px-5'>Se déconnecter</Link>
          </li>
      </ul>
    </div>
  );
};

export default Navbar;