import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HotDeals from '../HotDeals/HotDeals';
import Navbar from '../Navbar/Navbar';
import NavSearch from '../Navbar/NavSearch';
import ShopTitle from '../Navbar/ShopTitle';
import Furniture from '../Furniture/Furniture';

const Main = () => {
    return (
        <div>
             <ShopTitle></ShopTitle>  
             <NavSearch></NavSearch>
             <Navbar></Navbar> 
             <Banner></Banner> 
             <HotDeals></HotDeals>
             <Furniture></Furniture>
             <Footer></Footer>    
        </div>
    );
};

export default Main;