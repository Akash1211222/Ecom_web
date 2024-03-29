import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';

const items = MainCaroselData.map((item) => <img className=' cursor-pointer -z-10' src={item.image} alt="" onClick={() => {
    alert()
}}/>)


const MainCarosel = () => (
    <div className=' -z-10'>
         <AliceCarousel
        autoPlay
        // autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={2000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
   </div>
);
export default MainCarosel;