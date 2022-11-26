import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Commonpage/Loading/Loading';

const Advertiesproduct = () => {
    const {data: allproduct = [],refetch,isLoading} = useQuery({
        queryKey: ['productall'],
        queryFn: async() =>{
            const res = await fetch('https://swap-world-server-site.vercel.app/productall?email=');
            const data = await res.json();
            return data;
        }
    });
    const showproduct=allproduct.filter(p=> p?.status==="advertised");
    return (
        <div className="p-10 mb-5 mt-5">
            {
                isLoading&&<Loading></Loading>
            }
            <h1 className='text-xl font-semibold'>Advertise Product</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center p-5">
            {
                showproduct.map(product=>
                    <Link to={`/category/${product.category}`}><div key={product._id} className="p-6 shadow-lg bg-white shadow-slate-300 flex flex-col justify-center gap-2 text-slate-800 font-medium rounded-sm">
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
                    </div></Link>
                    )
            }
            </div>
            
        </div>
    );
};

export default Advertiesproduct;