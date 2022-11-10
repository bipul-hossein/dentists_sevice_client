
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const EditReviews = () => {
    const [review, setReview] = useState([])

    const router = useParams()
    const { id } = router;
 

    useEffect(() => {
        fetch(`https://assignment11-server-two.vercel.app/review/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReview(data)
            })
            .catch((err) => toast.error(err.message));
    }, [id])


    const navigate = useNavigate();

    const handleEdit = (event) => {
        event.preventDefault()
        const form = event.target;
        const reviewField = form.review.value;
        const rating = form.rating.value;

        const editReview = {
            reviewField,
            rating,
        }

        fetch(`https://assignment11-server-two.vercel.app/review/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(editReview)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    navigate("/myreviews")
                } else {
                    toast.err(data.error)
                }
            })
            .catch(err => toast.error(err.message))


    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-4/5'>
                <h4 className='text-3xl mb-12 mt-8'>Edit Your {review?.serviceName} service</h4>
                <form onSubmit={handleEdit} className="flex flex-col gap-4">


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
                            defaultValue={review?.reviewField}
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
                            defaultValue={review?.rating}
                        />
                    </div>
                    <Button type="submit" className='bg-blue-500 w-4/12'>Write review </Button>

                </form>
            </div>
        </div>
    );
};

export default EditReviews;