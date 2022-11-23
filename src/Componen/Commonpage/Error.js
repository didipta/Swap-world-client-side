import React from 'react';
import { Link } from 'react-router-dom';
import error from "../../Componen/img/Error.gif"
const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen flex-col gap-5">
            <img src={error} alt="" className="mb-3"></img>
            <h1 className="text-xl text-red-500 font-bold">Something Wrong 404</h1>
            <p className="text-sm text-slate-400 font-bold">Sorry, we couldn't find this page.</p>
            <Link to="/"><button className="btn bg-slate-600">Back To home</button></Link>
        </div>
    );
};

export default Error;