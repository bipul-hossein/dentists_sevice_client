import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiStar } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import { AuthContext } from '../../../contexts/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';

const ServiceDetails = () => {
    const { _id, header, serviceName, img, description, price, ratings, benefitName, benefitDetails, reviews } = useLoaderData()
    const { user } = useContext(AuthContext);
    const [refresh, setRefresh] = useState(false)
    const [review, setReview] = useState([])

    //get code client site
    useEffect(() => {
        fetch(`https://assignment11-server-two.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [_id, refresh])


    
    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewField = form.review.value;
        const rating = form.rating.value;
        const name = user?.displayName;
        const email = user?.email;


        if (!user?.uid) {
            toast.info("please Login and Review", { position: "top-right", theme: "dark" })
            alert ("please Login first")
            return  
        }

        const review = {
            service: _id,
            serviceName: header,
            serviceImg: img,
            price,
            customer: name,
            email,
            reviewField,
            rating,

        }

        fetch('https://assignment11-server-two.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRefresh(!refresh)
                if (data.acknowledged) {
                    toast.success('Register Successfully!!',{position: "top-center", theme: "colored" })
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="mb-16 bg-fuchsia-50">

            {/* service details sections */}
            <div className='flex flex-col mx-40 my-3 w-auto' >
                <h2 className='text-center mb-3 text-4xl font-bold'>SERVICE DETAILS</h2>
                <div className='flex flex-col my-3 w-auto'>

                    <div className='w-full'>
                        <img src={img} alt=""></img>
                    </div>
                    <div className='my-5'>
                        <div>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceName || header}</h5>
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
                        <div>

                            <form onSubmit={handleReview} className="flex flex-col gap-4">
                                <Button type="submit" className='bg-blue-500'>Write review </Button>

                                <div id="textarea">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="comment"
                                            value="review"
                                        />
                                    </div>
                                    <Textarea
                                        id="comment"
                                        type="text"
                                        placeholder="Leave a comment..."
                                        required={true}
                                        rows={4}
                                        name="review"
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="rating"
                                            value="rating"
                                        />
                                    </div>
                                    <TextInput
                                        id="rating1"
                                        placeholder="provide a number"
                                        type="number"
                                        name="rating"
                                    />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col my-4 w-auto'>
                    <p className=' text-2xl font-bold flex items-center gap-2'>Ratings and reviews<BsArrowRightShort className='text-2xl font-bold'></BsArrowRightShort></p>
                    <div className='mb-2 bg-slate-100 flex flex-row sm:flex-wrap gap-4'>


                        {
                            review.map(re => <div className='bg-slate-200 w-full'><p>“{re.reviewField}”</p>
                                <p>- {re.email}</p>
                                <p>rates: {re.rating
                                }</p>
                            </div>)

                        }
                        {reviews.map(re => <div className='bg-slate-200 w-full'><p>{re.review}</p>
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