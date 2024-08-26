import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {FiUser} from 'react-icons/fi';
import axios from 'axios';
import "../assets/css/dropdown.css"

const Navbar = (isLoggedIn =false) => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [isLogged, setIslogged] = useState(false)

  // useEffect(()=>{
  //       const verifyAuthentification = async () =>{
  //           const token = localStorage.getItem('authToken');
  //           try{
  //               const response = await axios.get('http://localhost:5000/protected',{
  //                   headers:{
  //                       Authorization:`${token}`
  //                   }
  //               });
  //               console.log(response.data)
  //               setIslogged(true)
                
  //           } catch(error){
  //               console.log("Error Authentification !",error)
  //           }
  //       }
  //       verifyAuthentification()
  //   })

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
            className='px-4 hover:bg-[#00df9a] hover:text-black rounded md:text-sm m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link to="/Pergola-shelter-safe-web-app" className={`text-white py-2 hover:text-black inline-block h-full ${(window.location.pathname !== "/Pergola-shelter-safe-web-app/volets" && window.location.pathname !== "/Pergola-shelter-safe-web-app/weather") && (window.location.pathname.indexOf("command") === -1) ? "underline" : ""}`}>Accueil</Link>
          </li>
          <li
            className={`px-4 hover:bg-[#00df9a] hover:text-black rounded md:text-sm m-2 cursor-pointer duration-300 hover:text-black`}
          >
            <div class={`dropdown`}>
              <span className={`flex py-2 text-white hover:text-black ${window.location.pathname.indexOf("command") !== -1 ? "underline" : ""}`}>
                Commandes
                <svg class="-mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </span>
              <div class="dropdown-content py-1">
                <Link to="/Pergola-shelter-safe-web-app/command/voice" className="py-2 px-3 block text-black hover:bg-slate-200 hover:text-black">Vocal</Link>
                <Link to="/Pergola-shelter-safe-web-app/command/manual" className="py-2 px-3 block text-black hover:bg-slate-200 hover:text-black">Manuelle</Link>
                <Link to="/Pergola-shelter-safe-web-app/command/time" className="py-2 px-3 block text-black hover:bg-slate-200 hover:text-black">Par temps</Link>
              </div>
            </div>
          </li>
          <li
            className='px-4 flex items-center hover:bg-[#00df9a] rounded md:text-sm m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link to="/Pergola-shelter-safe-web-app/volets" className={`text-white hover:text-black ${(window.location.pathname === "/Pergola-shelter-safe-web-app/volets") ? "underline" : ""}`}>Volets</Link>
          </li>
          <li
            className='px-4 flex items-center hover:bg-[#00df9a] rounded md:text-sm m-2 cursor-pointer duration-300 hover:text-black'
          >
            <Link to="/Pergola-shelter-safe-web-app/weather" className={`text-white py-2 hover:text-black ${(window.location.pathname === "/Pergola-shelter-safe-web-app/weather") ? "underline" : ""}`}>Temps</Link>
          </li>
      </ul>        
      {isLogged? <Link to="/Pergola-shelter-safe-web-app/profile" className='hidden rounded md:flex gap-3 md:items-center text-white hover:text-black hover:bg-white text-sm border py-2 px-5 mr-16 xl:mr-24'>
      <FiUser className="mr-2 align-middle"/>
        Se déconnecter
           
           </Link>:
           <Link to="/Pergola-shelter-safe-web-app/login" className='hidden rounded md:flex gap-3 md:items-center text-white hover:text-black hover:bg-white text-sm border py-2 px-5 mr-2 xl:mr-24'>
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
            <Link to="/Pergola-shelter-safe-web-app" className={`text-white ${(window.location.pathname !== "/Pergola-shelter-safe-web-app/voice-recognition" && window.location.pathname !== "/Pergola-shelter-safe-web-app/volets" && window.location.pathname !== "/Pergola-shelter-safe-web-app/weather") ? "underline" : ""}`}>Accueil</Link>
          </li>
          <li
            className='p-4 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <div class={`dropdown`}>
              <span className={`flex items-center py-2 text-white hover:text-black ${window.location.pathname.indexOf("command") !== -1 ? "underline" : ""}`}>
                Commandes
                <svg class="-mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </span>
              <div class="dropdown-content w-full py-1">
                <Link to="/Pergola-shelter-safe-web-app/command/voice" className="py-2 px-3 block text-black hover:bg-slate-200 hover:text-black">Vocal</Link>
                <Link to="/Pergola-shelter-safe-web-app/command/manual" className="py-2 px-3 block text-black hover:bg-slate-200 hover:text-black">Manuelle</Link>
                <Link to="/Pergola-shelter-safe-web-app/command/time" className="py-2 px-3 block text-black hover:bg-slate-200 hover:text-black">Par temps</Link>
              </div>
            </div>
          </li>
          <li
            className='p-4 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to="/Pergola-shelter-safe-web-app/volets" className={`text-white ${(window.location.pathname === "/Pergola-shelter-safe-web-app/volets") ? "underline" : ""}`}>Volets</Link>
          </li>
          <li
            className='p-4 mb-8 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to="/Pergola-shelter-safe-web-app/weather" className={`text-white ${(window.location.pathname === "/Pergola-shelter-safe-web-app/weather") ? "underline" : ""}`}>Temps</Link>
          </li>
          <li>
            {isLogged ?
              <Link to="/Pergola-shelter-safe-web-app/profile" className='rounded text-black bg-white text-sm border mt-10 py-2 px-5'>Se déconnecter</Link>
            :
              <Link to="/Pergola-shelter-safe-web-app/login" className='rounded text-black bg-white text-sm border mt-20 py-2 px-5'>Connexion</Link>
            }
          </li>
      </ul>
    </div>
  );
};

export default Navbar;