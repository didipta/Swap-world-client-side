import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import {faCamera} from '@fortawesome/free-solid-svg-icons'
import Category from '../../Hook/Category';
import useTitle from '../../Hook/Titlehook';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Addproduct = () => {
    useTitle("Add product")
    const catagory=Category();
    // const [startDate, setStartDate] = useState(new Date());
    const [imgdata,setImgdata]=useState(' ');
    const heandleimg=(e)=>{
        setImgdata(e.target.files[0].name);
      
      }
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Add Product </h1>
            <div className="w-96 max-w-xs m-auto">
                <form className="flex flex-col gap-5 w-full justify-center items-center">
                <input type="text" placeholder="Enter the product name" className="input input-bordered input-accent w-full max-w-xs" required />
                <input type="text" placeholder="Enter your mobile number" className="input input-bordered input-accent w-full max-w-xs" required />
                <input type="text" placeholder="Enter your location" className="input input-bordered input-accent w-full max-w-xs" required />
                <input type="file" id="img"  className="absolute overflow-hidden h-0 "accept="image/*"
                  onChange={heandleimg} required
                  />

                <label for="img" className="input input-bordered input-accent w-full max-w-xs pt-3 overflow-hidden" ><FontAwesomeIcon icon={faCamera}>
                    </FontAwesomeIcon><span className="ml-3 font-normal text-slate-400 w-[200px]">{imgdata!==' '?imgdata:"please select your profile image"}</span></label>
                <div className="flex justify-around items-center gap-4 w-full">
                <input type="text" placeholder="resale price" className="input input-bordered input-accent w-full max-w-xs" required />
                <input type="text" placeholder="original price" className="input input-bordered input-accent w-full max-w-xs" required />
                
                </div>
                <div className="flex justify-around items-center gap-4 w-full">
                <select className="input input-bordered input-accent w-full max-w-xs" required>
                    <option value="fair">Catagory select</option>
                    {
                        catagory.map(c=>
                            <option value={c._id}>{c.name}</option>
                            )
                    }
                </select>
                <select className="input input-bordered input-accent w-full max-w-xs" required>
                    <option value="fair">Conditon select</option>
                    <option value="fair">Fair</option>
                    <option value="Good">Good</option>
                    <option value="excellent">Excellent</option>
                </select>
                </div>
                <div className="flex justify-around items-center gap-4 w-full">
                <input type="text" placeholder="Purchase year" className="input input-bordered input-accent w-full max-w-xs" required />
                <input type="text" placeholder="Years of use" className="input input-bordered input-accent w-full max-w-xs" required />
                
                </div>
                {/* <DatePicker selected={new Date()} onChange={(date) => setStartDate(date)} className="input input-bordered input-accent w-full max-w-xs" required/> */}
                <textarea type="text" placeholder="Enter the product Details" className="input input-bordered input-accent w-full max-w-xs" required />
                <button className="btn">Submit</button>


                </form>
            </div>
        </div>
    );
};

export default Addproduct;