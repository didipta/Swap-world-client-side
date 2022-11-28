import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
const Checkout = ({orderdetails,setthankshow}) => {
    const stripe = useStripe();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
   
    const elements = useElements();
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const { _id,p_price,user,email,p_id} = orderdetails;
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://swap-world-server-site.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('swapworldToken')}`
            },
            body: JSON.stringify({ p_price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [p_price]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            // store payment info in the database
            const payment = {
                transactionId: paymentIntent.id,
               
                productid:p_id
            }
            fetch(`https://swap-world-server-site.vercel.app/paymant?id=${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('swapworldToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                        setthankshow(true);
                })
        }

    }
    return (
        <div>
 
        <form onSubmit={handleSubmit}>
        <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <p className="text-red-500 text-xs pt-3">{cardError}</p>
                {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
                

      <button type="submit" disabled={!stripe || !clientSecret || processing} className="btn btn-sm mt-3 bg-green-700 text-slate-50 border-none">
        Pay
      </button>
    </form>
        </div>
    );
};

export default Checkout;