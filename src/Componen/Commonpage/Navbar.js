import React from 'react';
import {HiMenuAlt2} from "react-icons/hi"
const Navbar = () => {

    return (
        <div className="bg-[#27313a] min-h-screen w-72 text-gray-100 p-2">
        <div className="py-3 flex justify-end">
            <HiMenuAlt2 size={26} className="cursor-pointer"></HiMenuAlt2>
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
                
            </div>
        </div>
    );
};

export default Navbar;