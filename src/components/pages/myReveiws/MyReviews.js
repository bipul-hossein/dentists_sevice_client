import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    console.log(reviews)
    return (
        <div>
            <p className='text-7xl mb-20 mt-8'>my review length:{reviews.length}</p>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell>
                        <span className="sr-only">
                            service image
                        </span>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Service name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Review
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Rating
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Delete
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                {
                    reviews.map(review => <ReviewRow key={review._id}
                        review={review}
                    ></ReviewRow>)
                }

            </Table>
        </div>
    );
};

export default MyReviews;