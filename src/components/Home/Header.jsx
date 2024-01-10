import React from 'react'
import Navbar from './Navbar/Navbar'
import Info from './Navbar/Info'
import Carousel from './Navbar/Carousel'
import photo1 from '../../assets/Carousel/Image-1.jpg';
import photo2 from '../../assets/Carousel/Image-2.jpg';
import photo3 from '../../assets/Carousel/Image-3.jpg';

const Header = () => {
  let slides = [
    photo1,
    photo2,
    photo3
  ];
  return (
    <div>
        <Info />
        <Navbar />
        <div className='overflow-hidden'>
          <Carousel slides={slides} />
        </div>
          

    </div>
  )
}

export default Header