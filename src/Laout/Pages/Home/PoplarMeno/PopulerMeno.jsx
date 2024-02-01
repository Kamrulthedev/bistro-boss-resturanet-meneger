import { useEffect, useState } from "react";
import MenuItem from "../Saherd/Menuitem/MenuItem";

const PopulerMeno = () => {
    const [menu, setMenu] = useState([]);
    

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populerItems = data.filter(item => item.category === 'popular')
                setMenu(populerItems)
            })
    }, [])



    return (
        <div className="mt-36 ">
            <div className='text-center space-y-6 mb-8' >
                <h1 className='text-[#D99904] text-lg '>---Check it out---</h1>
                <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[430px]'></p>
                <h3 className='text-4xl'>FROM OUR MENU</h3>
                <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[430px] '></p>
            </div>
            <div className=" grid grid-cols-2 gap-10">
                {
                    menu.map(itme => <MenuItem key={itme._id}
                        item={itme}    
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