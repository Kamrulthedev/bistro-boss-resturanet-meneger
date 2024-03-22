
import MenuItem from "../Saherd/Menuitem/MenuItem";
import useMenu from "../../../../Hooks/useMenu";
import Title from "../Saherd/Title/Title";

const PopulerMeno = () => {
    const [menu] = useMenu();
    const populer = menu.filter(item => item.category === 'popular')

    
    return (
        <div className="mt-56">
            <Title subcontitle={'---Check it out---'} subconLocation={'FROM OUR MENU'}></Title>
            
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