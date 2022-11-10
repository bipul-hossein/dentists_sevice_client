import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const MyReviews = () => {
    useTitle('My Reviews')
    const [displayReviews, setDisplayReviews] = useState()
    const [refresh, setRefresh] = useState(false)
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])




    useEffect(() => {
        fetch(`https://assignment11-server-two.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email, refresh])

    const handleDelete = review => {
        const agree = window.confirm(`you want to delete${review.serviceName}`)
        if (agree) {
            console.log(`you want to delete${review.serviceName}`)
            fetch(`https://assignment11-server-two.vercel.app/reviews/${review._id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    setRefresh(!refresh)

                    if (data.deletedCount > 0) {
                        alert('User delete successfully')
                        const remainingUsers = displayReviews.filter(usr => usr._id !== review._id)
                        setDisplayReviews(remainingUsers)
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }
    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/review/edit/${id}`)
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-4/5'>
            <p className='text-3xl mb-12 mt-8'>Review length:{reviews.length}</p>
           
            <Table hoverable={true}>
                <Table.Head>

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
                    reviews.map(review => {
                        return (

                            <Table.Body key={review.id} className="divide-y">
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                        <img src={review.serviceImg} alt="" className=' h-12' />{review.serviceName}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {review.reviewField}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {review.rating}
                                    </Table.Cell>
                                    <Table.Cell>
                                        ${review.price}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <p
                                            onClick={() => handleEdit(review._id)}
                                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            Edit
                                        </p>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <p
                                            onClick={() => handleDelete(review)}
                                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            Delete
                                        </p>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>

                        )
                    })
                }

            </Table>

            {reviews?.length === 0 ? 
                <div className='flex items-center justify-center my-40 text-2xl text-bold'>No reviews were added</div> :
                 <></>}
        </div>
        </div>
    );
};

export default MyReviews;