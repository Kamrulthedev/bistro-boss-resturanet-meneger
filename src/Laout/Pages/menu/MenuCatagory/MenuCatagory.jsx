import useMenu from "../../../../Hooks/useMenu";


const MenuCatagory = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')


    return (
        <div>
            
        </div>
    );
};

export default MenuCatagory;