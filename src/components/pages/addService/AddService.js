import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';

const AddService = () => {


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
        <div>
            <h1>add a service</h1>
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
                        />
                    </div>
                    <Button type="submit" className='bg-blue-500 w-4/12'>Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default AddService;