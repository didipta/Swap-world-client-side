import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Verifymodal = ({userid,refetch}) => {
    const handleverified = () => {
        fetch(`http://localhost:5000/usersstate/${userid}`, {
            method: 'PUT', 
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Verified successful.')
                refetch();
            }
        })
    }
    return (
        <div>
<input type="checkbox" id="verify-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Are you sure to make him verified</h3>
    <div className="modal-action">
      <label onClick={handleverified} htmlFor="verify-modal" className="btn bg-green-600">Yes</label>
      <label htmlFor="verify-modal" className="btn">No</label>
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

export default Verifymodal;