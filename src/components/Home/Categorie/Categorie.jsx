import React, { useState } from 'react';
import { FaUser, FaChild, FaFemale, FaMale, FaBaby } from 'react-icons/fa';
import visage from '../../../assets/Categorie/visage.jpg';
import corps from '../../../assets/Categorie/corps.jpg';
import hair from '../../../assets/Categorie/hair.jpg';
import Maman from '../../../assets/Categorie/Maman_bébé.jpg';
import man from '../../../assets/Categorie/man.jpg';

const Categorie = () => {
  const images = [visage, corps, hair, Maman, man];
  const icons = [FaUser, FaFemale, FaChild, FaBaby, FaMale];
  const categories = ['Visage', 'Corps', 'Cheveux', 'Enfant', 'Homme'];

  const [hoveredIconIndex, setHoveredIconIndex] = useState(null);

  return (
    <div>
      <div className="flex items-center justify-center my-8">
        <div className="border-t border-gray-600 flex-grow"></div>
        <div className="mx-4 font-bold font-title text-3xl text-lime-900 md:italic">CATEGORIE</div>
        <div className="border-t border-gray-600 flex-grow"></div>
      </div>
      <div className="flex justify-center items-center">
        {images.map((image, index) => (
          <div key={index} className="m-10 relative">
            <div
              className={`w-40 h-40 rounded-full overflow-hidden cursor-pointer relative ${
                hoveredIconIndex === index ? '' : 'hovered'
              }`}
              onMouseEnter={() => setHoveredIconIndex(index)}
              onMouseLeave={() => setHoveredIconIndex(null)}
            >
              <div
                className="absolute inset-0 bg-gray-800 transition-opacity duration-500 ease-in-out"
                style={{ opacity: hoveredIconIndex === index ? 0 : 0.75 }}
              ></div>
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                {React.createElement(icons[index], {
                  className: `w-16 h-16 ${
                    hoveredIconIndex === index
                      ? 'transform scale-150 transition-transform duration-500 ease-in-out'
                      : ''
                  }`,
                })}
              </div>
            </div>
            <div className="text-gray-800 font-bold text-center mt-2">{categories[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorie;
