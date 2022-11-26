import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Deletemodal = ({userid,refetch,type}) => {
    const handleverified = () => {
      if(type==="product")
      {
        fetch(`https://swap-world-server-site.vercel.app/productdelete/${userid}`, {
          method:"DELETE", 
          // headers: {
          //     authorization: `bearer ${localStorage.getItem('accessToken')}`
          // }
      })
      .then(res => res.json())
      .then(data => {
              toast.success('Delete successful.')
              refetch();
      })
      }
      else{
        fetch(`https://swap-world-server-site.vercel.app/userdelete/${userid}`, {
          method:"DELETE", 
          // headers: {
          //     authorization: `bearer ${localStorage.getItem('accessToken')}`
          // }
      })
      .then(res => res.json())
      .then(data => {
              toast.success('Delete successful.')
              refetch();
      })
      }
       
    }
    return (
        <div>
           
<input type="checkbox" id="delete-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Are you sure delete this {type==="product"?"Product":"account"}!</h3>
    <div className="modal-action">
      <label htmlFor="delete-modal" onClick={handleverified} className="btn btn-success">Yes!</label>
      <label htmlFor="delete-modal" className="btn">No!</label>
    </div>
  </div>
</div>
<Toaster
        className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
        </div>
    );
};

export default Deletemodal;