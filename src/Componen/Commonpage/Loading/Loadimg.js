import React from 'react';
import img from "../../img/Loading.gif"
const Loadimg = () => {
    return (
        <div className="mt-16 flex justify-center items-center">
            <img src={img} alt="" className="w-10"></img>
        </div>
    );
};

export default Loadimg;