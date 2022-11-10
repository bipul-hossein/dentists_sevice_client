import { Carousel } from 'flowbite-react';
import React from 'react';

const Carosel = () => {
    return (
        <div className='w-11/12 m-auto'>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel >
                       
                        <img
                            src="https://www.clearlakesdental.com/wp-content/uploads/2018/11/banner3-01-2-1024x394.jpg"
                            alt="..."
                        />
                        <img
                            src="https://www.clearlakesdental.com/wp-content/uploads/2018/11/banner4-01-2-1024x394.jpg"
                            alt="..."
                        />
                        <img
                            src="https://www.clearlakesdental.com/wp-content/uploads/2018/11/banner8-01-1-1024x394.jpg"
                            alt="..."
                        />
                    </Carousel>
                </div>
            </div>

        </div>
    );
};

export default Carosel;