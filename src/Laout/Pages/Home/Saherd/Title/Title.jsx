
const Title = ({subcontitle, subconLocation}) => {
    return (
        <div>
              <div className='flex flex-col items-center space-y-6 mb-8 pt-8 justify-center'>
                <h1 className='text-[#D99904] text-lg'>{subcontitle}</h1>
                <p className='border w-[424px] h-[4px] text-center flex-shrink-0'></p>
                <h3 className='text-4xl'>{subconLocation}</h3>
                <p className='border w-[424px] h-[4px] text-center flex-shrink-0'></p>
            </div>
        </div>
    );
};

export default Title;