import React from 'react';
import ImageTend from '../../../assets/Produits/pt8.jpg'
const Tendance = () => {
    return (
      <div>
        <div className="flex items-center justify-center my-8 max-w-screen-lg mx-auto">
          <div className="border-t border-gray-600 flex-grow"></div>
          <div className="mx-4 font-bold font-title text-3xl text-lime-900 md:italic">TENDANCE</div>
          <div className="border-t border-gray-600 flex-grow"></div>
        </div>
        <div>
        <img
          src={ImageTend}
          alt="Tendance"
          style={{ width: '90%', height: '80vh' }}
          className="shadow-2xl my-8 mx-auto drop-shadow-2xl"
        />
      </div>
      </div>
      );
};

export default Tendance;
