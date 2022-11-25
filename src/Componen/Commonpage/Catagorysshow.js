import React from 'react';
import Category from '../Hook/Category';

const Catagorysshow = () => {
    const categorys=Category();
    return (
        <div className="p-10">
          <div className="lg:w-7/12 sm:w-full lg:m-auto">
            <h1 className="text-3xl font-bold text-center p-8 space-x-2">ALL Category</h1>
            <div className="grid grid-cols-4 justify-center items-center">
                {
                    categorys.map(c=>
                        <a key={c._id}>
                            <div className="flex flex-col justify-center items-center gap-2 border border-spacing-3 h-28">
                            <img src={c.img} alt="" className="w-10"></img>
                            <h1 className="font-medium uppercase">{c.name}</h1>
                            </div>
                        </a>
                        )
                }
            </div>
        </div>
        </div>
        
    );
};

export default Catagorysshow;