import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiStar } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { Button } from 'flowbite-react';


const ServiceDetails = () => {
    const { serviceName, img, description, price, ratings, benefitName, benefitDetails,reviews } = useLoaderData()

    return (
        <div className="mb-16 h-56 sm:h-64 xl:h-80 2xl:h-96">

            {/* service details sections */}
            <div>
                <h2 className='text-center mb-3 text-4xl font-bold'>SERVICE DETAILS</h2>
                <div className='flex flex-col mx-40 my-3 w-auto'>

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

                        </div>
                        <div className='flex justify-between'>
                            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                $ {price}
                            </h5>
                            <p className='text-2xl font-semibold text-orange-300'>Ratings:{ratings}/5</p>

                        </div>
                    </div>
                </div>

            </div>

            {/* review section */}

            <div className='flex flex-col mx-40 my-3 w-auto'>
                <div>
                    <h2 className=' text-2xl font-bold'>Rate this service</h2>
                    <p className=''>Tell us what you think.</p>
                    <div className='flex justify-between'>
                        <div className='flex my-4 gap-2'>
                            <BiStar className='text-4xl hover:text-blue-600 '></BiStar>
                            <BiStar className='text-4xl hover:text-blue-600 '></BiStar>
                            <BiStar className='text-4xl hover:text-blue-600 '></BiStar>
                            <BiStar className='text-4xl hover:text-blue-600 '></BiStar>
                            <BiStar className='text-4xl hover:text-blue-600 '></BiStar>
                        </div>
                        <Button className='bg-blue-500'>Write review </Button>
                    </div>
                </div>
                <div className='flex flex-col my-4 w-auto'>
                    <p className=' text-2xl font-bold flex items-center gap-2'>Ratings and reviews<BsArrowRightShort className='text-2xl font-bold'></BsArrowRightShort></p>
                    <div className='mb-2 bg-slate-100 flex flex-row sm:flex-wrap gap-4'>
                        {reviews.map(re=><div className='bg-slate-200 w-full'><p>{re.review}</p>
                        <p>-{re.name} ({re.email})</p>
                        <p>rates: {re.rates}</p>
                        </div>)

                        }
                    </div>



                </div>
            </div>
        </div>

    );
};

export default ServiceDetails;