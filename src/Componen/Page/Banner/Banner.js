import React from 'react';
import banner from "../../img/bannerimg.png"
import round from "../../img/round.png"
const Banner = () => {
    return (
        <div className="md:flex lg:flex justify-around items-center h-screen p-3">
            <div className="pt-20">
             <img src={banner} alt="" className="w-[700px]"></img>
            </div>
            <div className="flex flex-col gap-4 justify-center p-5">
                <h1 className="text-2xl text-teal-400 font-semibold">Get the best value for</h1>
                <h1 className="text-4xl text-teal-600 font-semibold">Your old mobile phone</h1>
                <p className="w-96">Swap-world is the right classified ads platform for second hand and new mobile phones. Buy and sell your used and brand new mobile phones online on Swap-world .</p>
                <button className="btn w-40 mt-3">See More</button>
            </div>
        </div>
    );
};

export default Banner;