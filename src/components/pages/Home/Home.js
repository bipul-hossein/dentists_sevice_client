import React from 'react';
import HomeServiceCon from './HomeSer';
import Banner from './Banner';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
useTitle("Home")
    return (
        <div className='w-full'>
            <Banner />

            <div className='w-11/12 m-auto'>
                <div>
                    <h4 className='text-3xl font-bold ml-5'>Services</h4>
                    <HomeServiceCon />
                    <div className='flex justify-end my-3 '>
                    <Link to={`/services`}><Button className='text-3xl font-bold ml-5'>SEE ALL</Button></Link>             
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;