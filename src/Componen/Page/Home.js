import React from 'react';
import Catagorysshow from '../Commonpage/Catagorysshow';
import useTitle from '../Hook/Titlehook';
import Advertiesproduct from '../Product/Advertiesproduct';
import Banner from './Banner/Banner';
import Whyswap from './Whyswap';

const Home = () => {
    useTitle("Home page")
    return (
        <div>
           <Banner></Banner>
           <Advertiesproduct></Advertiesproduct>
           <Catagorysshow></Catagorysshow>
           <Whyswap></Whyswap>
           
        </div>
    );
};

export default Home;