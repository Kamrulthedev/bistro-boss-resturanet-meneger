import { Link } from "react-router-dom";
import useCarts from "../../../../Hooks/useCarts";

const Cart = () => {
    const [cart] = useCarts();

    return (
        <div>
            <div className='text-center space-y-6 mb-8 mt-10' >
                <h1 className='text-[#D99904] text-lg '>---My Cart---</h1>
                <p className='border  text-center flex-shrink-0 ml-60 mr-60'></p>
                <h3 className='text-3xl '>WANNA ADD MORE?</h3>
                <p className='border    text-center flex-shrink-0 ml-60 mr-60'></p>
            </div>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold p-8 uppercase">Total orders : {cart.length}</h1>
                <h1 className="text-2xl font-bold p-8 uppercase">total price : {cart.length}</h1>
                <Link >
                    <button className="btn btn-sm bg-amber-500 text-black hover:text-white mt-9 mr-6 ">PAY</button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;