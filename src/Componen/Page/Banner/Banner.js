import React from 'react';
import banner from "../../img/bannerimg.png"
import round from "../../img/round.png"
const Banner = () => {
    return (
        <div className="md:flex lg:flex justify-center items-center gap-5 h-12/12 p-3 pt-32 mb-4">
            <div className="w-full lg:p-10">
             <img src={banner} alt="" className="w-[750px]"></img>
            </div>
            <div className="flex flex-col gap-4 justify-center p-10 w-full">
                <h1 className="lg:text-2xl text-xl text-teal-400 font-semibold">Get the best value for</h1>
                <h1 className="lg:text-4xl text-3xl text-teal-600 font-semibold">Your old mobile phone</h1>
                <p className="lg:w-7/12">Swap-world is the right classified ads platform for second hand and new mobile phones. Buy and sell your used and brand new mobile phones online on Swap-world .</p>
                <button className="btn w-40 mt-3">See More</button>
            </div>
        </div>
    );
};

export default Banner;