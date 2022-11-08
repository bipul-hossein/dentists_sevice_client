import { Button } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ServiceDetails = () => {
    const { serviceName, img, description, price, ratings, benefitName, benefitDetails } = useLoaderData()

    return (
        <div className="mb-16 h-56 sm:h-64 xl:h-80 2xl:h-96">
            <div className='flex flex-col mx-40 my-32 w-auto'>
                <div className='w-full'>
                    <img src={img} alt=""></img>
                </div>
                <div className='my-5'>
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>

                    </div>
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{benefitName}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{benefitDetails}</p>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            $ {price}
                        </h5>
                        <Button className=''>Go service</Button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ServiceDetails;