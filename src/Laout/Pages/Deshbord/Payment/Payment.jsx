import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


//TODO: add publihsed key

const stripePromise = loadStripe('');


const Payment = () => {
    return (
        <div className="bg-slate-100 h-screen flex justify-center items-center text-5xl text-black font-semibold">
            <h1>PAYMENT</h1>
            <Elements stripe={stripePromise}>

            </Elements>
        </div>
    );
};

export default Payment;
