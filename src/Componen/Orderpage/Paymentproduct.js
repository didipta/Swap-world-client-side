import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';
import { Link } from 'react-router-dom';
const Payment = ({orderdetails}) => {
    const [thankshow, setthankshow] = useState(false);
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    return (
        <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Payment your Booking Product!</h3>
            <p className="py-4">Please give me your card imformation for buy this product!</p>
            <div className="p-3">
            <Elements stripe={stripePromise}>
                    <Checkout orderdetails={orderdetails} setthankshow={setthankshow}
                    />
                </Elements>
            </div>
            <div className="modal-action">
           {thankshow&& <a href="/Myorder"><label className="btn bg-green-500 border-none text-white">Tnank you!</label></a>}
            <label htmlFor="my-modal" className="btn">Cancel</label>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Payment;