

const Recomments = () => {
    return (
        <div className="mb-20">
            <div className='text-center space-y-6 mb-8' >
                <h1 className='text-[#D99904] text-lg '>---Should Try---</h1>
                <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[430px]'></p>
                <h3 className='text-4xl'>CHEF RECOMMENDS</h3>
                <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[430px] '></p>
            </div>
            <div className="grid grid-cols-3">
                {/* card 1 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="">
                        <img src="https://i.ibb.co/TrhpXnr/image.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center bg-slate-200">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="">
                            <button className="btn  border-b-4 border-black uppercase text-lime-500  w-80">Add to cart</button>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="">
                        <img src="https://i.ibb.co/TrhpXnr/image.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center bg-slate-200">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="">
                            <button className="btn  border-b-4 border-black uppercase text-lime-500  w-80">Add to cart</button>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="">
                        <img src="https://i.ibb.co/TrhpXnr/image.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center bg-slate-200">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="">
                            <button className="btn  border-b-4 border-black uppercase text-lime-500   w-80">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recomments;