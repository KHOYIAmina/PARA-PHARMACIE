import { Fragment, useState } from 'react';
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FiSearch, FiHeart } from 'react-icons/fi';

import facebook from '../../../assets/Navigation/facebook.png';
import Insta from '../../../assets/Navigation/Insta.png';
import whats from '../../../assets/Navigation/whats.png';
import mail from '../../../assets/Navigation/mail.png';
import logo from '../../../assets/Navigation/Logo.png';

export default function Info() {
  const [searchTerm, setSearchTerm] = useState('');
  const [orderCount, setOrderCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);


  const handleOrderClick = () => {
    // Increment the order count
    setOrderCount(orderCount + 1);
  };

  const handleFavoriteClick = () => {
    // Increment the favorite count
    setFavoriteCount(favoriteCount  + 1);
  };
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="w-40 " src={logo} alt="Logo App" />
          </a>
        </div>


        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-900 hover:text-gray-700">
              <img src={mail} alt="Mail" className="h-8 w-8" />
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700">
              <img src={Insta} alt="Instagram" className="h-8 w-8" />
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700">
              <img src={facebook} alt="Facebook" className="h-8 w-8" />
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700">
              <img src={whats} alt="WhatsApp" className="h-8 w-8" />
            </a>
          </div>

          {/* Vertical Line */}
          <div className="h-8 border-l mx-4 border-gray-300"></div>

          <a href="#" className="text-sm font-semibold leading-6 text-red-900 flex items-center">
            <button className="bg-gradient-to-r hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">     
              <FaUser className="text-xl text-black drop-shadow-sm cursor-pointer" />
            </button>

            <button onClick={handleOrderClick} className="relative bg-gradient-to-r hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center flex-col gap-1">
              <FaCartShopping className="text-xl text-black drop-shadow-sm cursor-pointer" />
              <span className="absolute bottom-3 left-7 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{orderCount}</span>
            </button>
            
            {/* Favorite Button */}
            <button onClick={handleFavoriteClick} className="relative bg-gradient-to-r hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center flex-col gap-1">
            <FiHeart className="text-xl text-black drop-shadow-sm cursor-pointer" />
              <span className="absolute bottom-3 left-7 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{favoriteCount}</span>
            </button>
            
          </a>
        </div>
      </nav>
    </header>
  );
}
