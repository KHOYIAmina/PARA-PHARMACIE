import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Produit } from '../../../Data/dataProduits';
import Image1 from '../../../assets/Produits/Produit1.jpg';
import bg from '../../../assets/Navigation/bg.jpg'; // Importez votre image
import { Button } from "@material-tailwind/react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarteProduit = ({ produit }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const [isZoomed, setIsZoomed] = useState(false);
  
  const handleZoomClick = () => {
    setIsZoomed(!isZoomed);
  };


  const truncateTitle = (title, wordCount) => {
    const words = title.split(' ');
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(' ') + '...';
    }
    return title;
  };



  return (
    <motion.div
      className={`relative w-120 p-4 ${isZoomed ? 'hover:scale-150' : ''} ${produit.reduction === null ? 'card-without-reduction' : ''}`}
      whileHover={{ scale: 1.05 }}
      onClick={handleZoomClick}
    >
      <div className={`bg-white p-6 rounded-lg shadow-md ${isZoomed ? 'transform scale-105' : ''}`}>
        <img src={Image1} alt={produit.nomProduit} className="mb-4 w-full h-45 object-cover rounded" />
        <h2 className="text-xl font-semibold mb-2 overflow-hidden flex items-center justify-center" style={{ fontFamily: "'Single Day', 'Ubuntu', sans-serif", fontSize: '14px' }}>
          {truncateTitle(produit.nomProduit, 3)}
        </h2>
  
        <div>
          {produit.reduction !== null && (
            // Afficher le prix avec réduction
            <div className='pb-2'>
              <p className="text-gray-800 font-bold mt-2">{(produit.prixBase * (produit.reduction / 100)).toFixed(2)} DHs</p>
              <div className='flex pb-2'>
                <p className="text-gray-800 mt-2 ml-2">
                  <span className="line-through">{produit.prixBase} DHs</span>
                </p>
                <div className="flex w-max gap-4 ml-auto">
                  <Button color="red" className="p-2 text-sm">-{produit.reduction} %</Button>
                </div>
              </div>
            </div>
          )}
  
          {produit.reduction === null && (
            // Afficher le prix de base si pas de réduction
            <p className="text-gray-800 font-bold mt-14 text-center">{produit.prixBase} DHs</p>
          )}

        </div>
        

        <div className={`absolute top-10 right-10 ${isLiked ? 'absolute top-7 right-7' : ''}`}>
          <button
            onClick={handleLikeClick}
            className={`relative text-white focus:outline-none transition-transform transform hover:scale-110 ${isLiked ? 'text-gray-500 border-gray-500' : 'text-red-500 border-red-500'}`}
          >
            <div className={`border p-2 rounded-full ${isLiked ? 'bg-red-200' : 'bg-gray-200'}`}>
              <FaHeart size={20} />
            </div>
          </button>
        </div>
      </div>
      {/* Apply background color to the bottom part of the card in green */}
      <div className="bg-green-700 rounded-b-lg w-full h-10 top-10 flex items-center justify-center text-white">
      J'achète <FaShoppingCart size={20} />
    </div>
    </motion.div>
  );
};

const ListeCartesProduits = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <Slider {...settings}>
      {Produit.map((produit, index) => (
        <CarteProduit key={index} produit={produit} />
      ))}
    </Slider>
  );
};
const sectionVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};
const PageProduits = () => {
  return (
    <div className='p-4'>
         <motion.div
      className="mx-auto mt-8 px-14 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className='text-center '>
        <h2 className='font-bold font-title text-3xl text-lime-900 md:italic'>Profitez Bien</h2>
        <h3 className='font-singleDay text-xl mb-4  text-lime-700'>LES MEILLEURS PRODUITS POUR VOUS</h3>
      </div>

      <ListeCartesProduits />
    </motion.div>
    </div>
   
  );
};

export default PageProduits;
