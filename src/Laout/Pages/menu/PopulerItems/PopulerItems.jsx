
const PopulerItems = ({title}) => {
    return (
        <div>
             <div className='h-[572px] items-center mt-12 mb-32'>
           <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/3sPntbh/chef-service.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=' text-center mb-12 h-[200px] text-white  p-52'>
                    <div>
                        <h1 className='text-4xl -mt-14 uppercase'>{title}</h1>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum<br /> deserunt  ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at <br /> nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
                </div>
           </div>
        </div>
    );
};

export default PopulerItems;