import { Button } from 'flowbite-react';
import React from 'react';

const Banner = () => {
    return (
        <div className="flex justify-center items-center mb-16 w-full">
            <div className='grid md:grid-cols-2 gap-4 pt-8 ml-5 w-4/5 '>
                <div className='my-5'>
                    <div>
                        <h2 className='text-xl md:text-2xl lg:text-4xl font-extrabold leading-none'>Welcome to my world of dental care services</h2>
                        <p className='text-base my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo .</p>
                        <Button className=''>Go service</Button>
                    </div>
                </div>
                <div>
                    <img src="https://st4.depositphotos.com/1017986/27037/i/600/depositphotos_270373222-stock-photo-indian-dentist-with-clipboard-over.jpg" alt=''></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;