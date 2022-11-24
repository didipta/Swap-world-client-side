import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Category = () => {
    const [category,setCategory]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/Category")
        .then(resp=>{
            setCategory(resp.data);
           
        }).catch(err=>{
                  
        });
    },[]);

   return category;
};

export default Category;