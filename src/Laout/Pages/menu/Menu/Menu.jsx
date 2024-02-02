import { Helmet } from 'react-helmet-async';
import Cover from '../../Home/Saherd/Cover/Cover';
import imges from './../../../../assets/menu/banner3.jpg'



const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <div>
                <Cover img={imges}
                    title={'OUR MENU'}
                ></Cover>
            </div>
        </div>
    );
};

export default Menu;