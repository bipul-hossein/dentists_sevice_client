import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const HomeServiceCon = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='mx-40'>
              <div className='flex flex-row justify-between'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SERVICES</h5>
                   <Link to="/services"> <Button>SEE ALL</Button></Link>
                </div>
            <div className='flex flex-row sm:flex-wrap gap-4 '>
              
                {data.map(service =>
                    <div key={service._id} className="max-w-sm">
                        <Card imgSrc={service.img}>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {service.header}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                               {service.description? service.description.slice(0,100):service.description}...
                            </p>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                               $ {service.price}
                            </h5>
                            <Link to={`/services/${service._id}`}><Button>Details</Button></Link>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeServiceCon;