import { Button, Card, Carousel } from 'flowbite-react';
import React from 'react';

const Banner = () => {
    return (
        <div className="mb-16 h-56 sm:h-64 xl:h-80 2xl:h-96">
            <div className='flex mx-40 my-32'>
                <div className='my-5'>
                    <div>
                        <h2 className='text-6xl font-extrabold leading-none'>Welcome to my world of dental care services</h2>
                        <p className='text-base my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo .</p>
                        <Button className=''>Go service</Button>
                    </div>
                </div>
                <div>
                    <img src="https://demo.eightheme.com/writeup/wp-content/uploads/sites/29/2022/09/16.jpg" alt=''></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;