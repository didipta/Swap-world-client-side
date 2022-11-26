import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faHandshake,faShield,faListCheck} from '@fortawesome/free-solid-svg-icons'
const Whyswap = () => {
    return (
        <div className="p-10 mt-5 mb-5">
            <h1 className="text-2xl font-bold text-center">Why Swap-world?</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 p-10 gap-6 ">
                <div className="flex flex-col justify-center items-center gap-3 lg:p-6 w-full">
                    <FontAwesomeIcon icon={faHandshake} className="text-3xl font-bold text-cyan-700"></FontAwesomeIcon>
                    <h1 className="text-xl font-bold text-zinc-600">People Powered</h1>
                    <p className="w-full text-center font-medium">On Swap-world, you buy and sell directly with other users. No middleman means you get the best price and most value.</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 lg:p-6 w-full">
                    <FontAwesomeIcon icon={faShield} className="text-3xl font-bold text-pink-700"></FontAwesomeIcon>
                    <h1 className="text-xl font-bold text-zinc-600">No Junk</h1>
                    <p className="w-full text-center font-medium">Swap-world does not allow broken items. Every product has listing requirements and an approval process.</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 lg:p-6 w-full">
                    <FontAwesomeIcon icon={faListCheck} className="text-3xl font-bold text-cyan-700"></FontAwesomeIcon>
                    <h1 className="text-xl font-bold text-zinc-600">Verified Listings</h1>
                    <p className="w-full text-center font-medium">Every listing on Swap-world is verified by our expert staff to ensure our strict listings requirements are followed. Buy with confidence.</p>
                </div>
                
                
            </div>
        </div>
    );
};

export default Whyswap;