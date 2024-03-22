import Title from "../Laout/Pages/Home/Saherd/Title/Title";
import slide from "./../assets/home/slide1.jpg";

const Recomments = () => {
    return (
        <div className="mb-20">
            <Title subcontitle={'---Should Try---'} subconLocation={'CHEF RECOMMENDS'}></Title>
            
            <div className="grid grid-cols-3">
                {/* card 1 */}
                <div className="card h-[500px]  w-96 bg-base-100 shadow-xl">
                    <figure className="">
                    <img src={slide} alt="Shoes" className="rounded-xl w-full" />
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
                <div className="card h-[500px]  w-96 bg-base-100 shadow-xl">
                    <figure className="">
                    <img src={slide} alt="Shoes" className="rounded-xl w-full" />
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
                <div className="card h-[500px]  w-96 bg-base-100 shadow-xl">
                    <figure className="">
                    <img src={slide} alt="Shoes" className="rounded-xl w-full" />
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