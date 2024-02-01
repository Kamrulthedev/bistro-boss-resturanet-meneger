import img1 from './../../../../assets/home/featured.jpg';

const Fesard = () => {
    return (
        <div className="hero min-h-screen mb-20 bg-fixed" style={{backgroundImage: 'url(https://i.ibb.co/PFyQrDp/banner.jpg)'}}>
        <div className="hero-overlay bg-opacity-60">
            <div className='text-center space-y-6 mb-8 text-white mt-20'>
                <h1 className='text-[#D99904] text-lg '>---Check it out---</h1>
                <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[430px]'></p>
                <h3 className='text-4xl'>FROM OUR MENU</h3>
                <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[430px] '></p>
            </div>
            <div className='flex justify-center gap-8 text-white'>
                <div>
                    <img className='w-[400px] h-[240px]' src={img1} alt=""/>
                </div>
                <div>
                    <h1>March 20, 2023</h1>
                    <h1>WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error <br /> voluptate facere, deserunt dolores maiores quod nobis quas <br /> quasi. Eaque repellat recusandae ad laudantium tempore <br /> consequatur consequuntur omnis ullam maxime tenetur.</p>
                     <button className="btn border-b-4 border-black uppercase mt-6">Read more</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Fesard;