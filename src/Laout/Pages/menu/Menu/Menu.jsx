import { Helmet } from 'react-helmet-async';
import Cover from '../../Home/Saherd/Cover/Cover';
import imges from './../../../../assets/menu/banner3.jpg'
import PopulerMeno from '../../Home/PoplarMeno/PopulerMeno';


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

                <div className='-mt-16'>
                        <PopulerMeno></PopulerMeno>
                    </div>
                <div className='mt-14'>
                    <Cover img={imges}
                        title={'OUR MENU'}
                    ></Cover>
                    <div className='-mt-16'>
                        <PopulerMeno></PopulerMeno>
                    </div>
                </div>

                <div className='mt-14'>
                    <Cover img={imges}
                        title={'OUR MENU'}
                    ></Cover>
                    <div className='-mt-16'>
                        <PopulerMeno></PopulerMeno>
                    </div>
                </div>
                
                <div className='mt-14'>
                    <Cover img={imges}
                        title={'OUR MENU'}
                    ></Cover>
                    <div className='-mt-16'>
                        <PopulerMeno></PopulerMeno>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;