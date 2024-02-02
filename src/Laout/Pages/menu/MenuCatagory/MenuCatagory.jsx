import MenuItem from "../../Home/Saherd/Menuitem/MenuItem";



const MenuCatagory = ({items}) => {

    return (
        <div>
          <div className=" grid grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem
                         key={item._id}
                        item={item}>
                    </MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCatagory;