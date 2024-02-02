
import MenuItem from "../Saherd/Menuitem/MenuItem";
import useMenu from "../../../../Hooks/useMenu";

const PopulerMeno = () => {
    const [menu] = useMenu();
    const populer = menu.filter(item => item.category === 'popular')

    
    return (
        <div className="mt-36 ">
            <div className='text-center space-y-6 mb-8' >
                <h1 className='text-[#D99904] text-lg '>---Don't miss---</h1>
                <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[430px]'></p>
                <h3 className='text-4xl'>TODAY'S OFFER</h3>
                <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[430px] '></p>
            </div>
            <div className=" grid grid-cols-2 gap-10">
                {
                    populer.map(item => <MenuItem key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
            <div className="text-center mt-6">
                <button className="uppercase btn border-b-4 border-black">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopulerMeno;