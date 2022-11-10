import React from 'react';
import HomeServiceCon from './HomeSer';
import Banner from './Banner';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Feedback from './Feedback';
import Carosel from './Carosel';


const Home = () => {

    return (
        <div className='w-full bg-fuchsia-50'>
            <Carosel></Carosel>


            <div className='w-11/12 m-auto'>
                <div className='mt-10 bg-neutral-200 rounded-lg'>
                    <h4 className='text-3xl font-bold ml-5 '>Services</h4>
                    <HomeServiceCon />
                    <div className='flex justify-end pt-5 pb-3 '>
                        <Link to="/services"><Button className='text-3xl font-bold ml-5 w-40'>SEE ALL</Button></Link>
                    </div>
                </div>
            </div>
            <div className='pt-20'>
            <Banner/>
            </div>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;