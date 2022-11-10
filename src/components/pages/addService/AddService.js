import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
useTitle('Add Service')

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const header = form.header.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;
        console.log(header,
            img,
            price,
            description,)





        const addservice = {
            header,
            img,
            price,
            reviews: [
                {
                    name: "Siobhan P",
                    email: "siobhan@gamil.com",
                    rates: 5,
                    review: "“After a bad experience at a different dental office, Clear Lakes Dental fixed it all painlessly, and provided a great experience!”"
                }

            ],
            description,

        }

        fetch('https://assignment11-server-two.vercel.app/add_service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addservice)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review placed successfully');
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }


    return (
        <div className='flex justify-center items-center bg-fuchsia-50 pb-12'>
            <div className='w-4/5'>
                <h1 className='text-3xl mb-5 mt-8'>add a service</h1>
                <form onSubmit={handleReview}>

                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="small"
                                    value="Image URL"
                                />
                            </div>
                            <TextInput
                                id="small"
                                type="text"
                                sizing="sm"
                                name="img"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="small"
                                    value="Header"
                                />
                            </div>
                            <TextInput
                                id="small"
                                type="text"
                                sizing="sm"
                                name="header"
                                required={true}



                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="small"
                                    value="Price input"
                                />
                            </div>
                            <TextInput
                                id="small"
                                type="text"
                                sizing="sm"
                                name="price"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="large"
                                    value="Description Field"
                                />
                            </div>
                            <TextInput
                                id="large"
                                type="text"
                                sizing="lg"
                                name="description"
                                required={true}
                            />
                        </div>
                        <Button type="submit" className='bg-blue-500 w-2/12'>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;