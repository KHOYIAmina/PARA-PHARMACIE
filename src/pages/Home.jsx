import React from 'react';
import Header from '../components/Home/Header';
import PageProduits from '../components/Home/Card/CardProduit';
import Tendance from '../components/Home/Tendance/Tendance';
import Blog from '../components/Home/Blog/Blog';
import Categorie from '../components/Home/Categorie/Categorie';
import FinPage from '../components/Home/FinPage';

const Home = () => {
  return (
    <div>
      <Header />
      <PageProduits />
      <Tendance />  
      <Categorie />
      <Blog />
      <FinPage />
    </div>
  );
}

export default Home;
