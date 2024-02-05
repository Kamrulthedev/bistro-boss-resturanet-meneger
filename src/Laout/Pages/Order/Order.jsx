import { useState } from "react";
import Cover from "../Home/Saherd/Cover/Cover";
import img3 from './../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "./OrderTab";



const Order = () => {
    const [tabIndex, setTebIndex] = useState();
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Cover img={img3} title='OUR SHOP' ></Cover>

            <Tabs className='text-center mt-14 mb-8' defaultIndex={tabIndex} onSelect={(index) => setTebIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSETS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                <OrderTab item={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order; 