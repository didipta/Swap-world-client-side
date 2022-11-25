import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Commonpage/Loading/Loading';
import useTitle from '../Hook/Titlehook';

const Productshow = (params) => {
   
    const product = useLoaderData();
    useTitle(product.Category.name+"Category")
    const showproduct=product.Product.filter(p=> p?.states!=="sold out");
    const navigation = useNavigation();
    console.log(product);
    return (
        <div className="p-10 pt-20">
            {
                navigation.state === "loading"&&<Loading></Loading>
            }
            {
                product.Product.length===0?<h1 className="text-xl text-center font-semibold">Product Comeing Soon</h1>:<>
                <div className="flex justify-center items-center m-auto gap-3">
                <img src={product.Category.img} alt="" className="w-8"></img>
                <h1 className="text-xl font-semibold">{product.Category.name} Category</h1>
               </div>
               <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-5 justify-center items-center lg:pt-20 md:pt-15 pt-10">
                {
                     showproduct.map(product=>
                        <div key={product._id} className="p-6 shadow-lg bg-white shadow-slate-300 flex flex-col justify-center gap-2 text-slate-800 font-medium rounded-sm">
                            <img src={product.image} alt="" className="w-56 h-60 m-auto"></img>
                            <h1 className="font-semibold">{product.p_name}</h1>
                            <small>{product.location}</small>
                            <h1 className="text-sm font-medium">orginal price: <span className="text-slate-400">{product.original_p}-৳</span></h1>
                            <h1 >resale price: <span className="text-green-400">{product.resela_p}-৳</span></h1>
                            <h1>year of use: <span className="text-red-400">{product.year_use} year</span></h1>
                            <h1>post date: <span className="text-slate-700 font-semibold text-sm" >{((product.postDate).split(" "))[0] +" "+((product.postDate).split(" "))[1]+" "+((product.postDate).split(" "))[2]+" "+((product.postDate).split(" "))[3]}</span></h1>
                            
                            <div className="flex items-center gap-1">
                            <h1>seller: <span className="text-slate-700 font-semibold text-sm" >{product.sellername} </span></h1>
                            {
                                product.sellerstates==="verified"?<input type="checkbox" checked="checked" class="checkbox checkbox-xs checkbox-info" title='Seller is verified'/>: <input type="checkbox" checked="checked" class="checkbox checkbox-xs" title='Seller is not verified' />
                            }
                           
                            </div>
                            <div className="flex gap-2 pt-4">
                                <button className="btn btn-sm bg-teal-500 text-white border-none">Book noe</button>
                                <button className="btn btn-sm bg-red-400 text-white border-none">Report</button>
                            </div>
                        </div>
                        )
                }
               </div>
                
                </>
            }
            
        </div>
    );
};

export default Productshow;