import { useState } from "react";
import Cover from "../Home/Saherd/Cover/Cover";
import img3 from './../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const Order = () => {
    const [tabIndex, setTebIndex] = useState();
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
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order; 