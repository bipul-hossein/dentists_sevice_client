import { Button, Card } from 'flowbite-react';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';  
import useTitle from '../../../hooks/useTitle';


const Services = () => {
    const data = useLoaderData()
    useTitle('Services')
    return (
        <div className='w-11/12 m-auto mt-12'>
            <div className='grid lg:grid-cols-3 gap-4 pt-5 ml-5 '>

                {data.map(service =>
                    <div key={service._id} className="w-auto">
                        <Card >
                            <PhotoProvider>
                                <PhotoView src={service.img}>
                                    <img src={service.img} alt="" />
                                </PhotoView>
                            </PhotoProvider>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {service.header}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {service.description ? service.description.slice(0, 100) : service.description}...
                            </p>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                $ {service.price}
                            </h5>
                            <Link to={`/services/${service._id}`}><Button className='w-full'>Details</Button></Link>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;