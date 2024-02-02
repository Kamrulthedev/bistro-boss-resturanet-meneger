import { Helmet } from 'react-helmet-async';
import Cover from '../../Home/Saherd/Cover/Cover';
import imges from './../../../../assets/menu/banner3.jpg'
import useMenu from '../../../../Hooks/useMenu';
import MenuCatagory from '../MenuCatagory/MenuCatagory';


const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    console.log(dessert)
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offer = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <div>
                <Cover img={imges}
                    title={'OUR MENU'}
                ></Cover>
                <div className='text-center space-y-6 mb-8 mt-16' >
                    <h1 className='text-[#D99904] text-lg '>---Don't miss---</h1>
                    <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[430px]'></p>
                    <h3 className='text-4xl'>TODAY'S OFFER</h3>
                    <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[430px] '></p>
                </div>
                <MenuCatagory items={offer}></MenuCatagory>
                <div className="text-center mt-6">
                    <button className="uppercase btn border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>
        </div>
    );
};

export default Menu;