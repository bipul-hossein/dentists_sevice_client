import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import '../Blogs/blogs.css'

const HomeServiceCon = () => {
    const data = useLoaderData()
    return (
                <div className='grid lg:grid-cols-3 gap-4 pt-5 ml-5'>
                    {data.map(service =>
                        <Card key={service._id} imgSrc={service.img} className="w-auto">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {service.header}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {service.description ? service.description.slice(0, 100) : service.description}...
                            </p>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                $ {service.price}
                            </h5>
                            <Link to={`/services/${service._id}`} ><Button className='w-full'>Details</Button></Link>
                        </Card>
                    )}
                </div>
    );
};

export default HomeServiceCon;