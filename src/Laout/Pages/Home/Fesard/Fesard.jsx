import Title from '../Saherd/Title/Title';
import img1 from './../../../../assets/home/Pizz.jpg';

const Fesard = () => {
    return (
        <div className="hero min-h-screen mb-20 bg-fixed" style={{ backgroundImage: `url(${img1})` }}>
            <div className="hero-overlay bg-opacity-60">
                <Title subcontitle={'---Check it out---'} subconLocation={'FROM OUR MENU'}></Title>
               
                <div className='flex justify-center gap-8 text-white'>
                    <div>
                        <img className='w-[400px] h-[240px]' src={img1} alt="" />
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