import img1 from'./../assets/Error/404.gif';

const ErrorPages = () => {
    return (
        <div>
         
        <div className=" items-center text-center text-4xl font-bold">
            <div >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <img className="border-2 border-blue-300 rounded-lg absolute  w-[1100px] h-[500px]" src={img1} alt="" />
                </div>
                <h1 className='relative -mt-16 text-sm'>kamrulthedev@gmail.com</h1>
            </div>

        </div>
    </div>
    );
};

export default ErrorPages;