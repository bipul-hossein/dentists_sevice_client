import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const {createUser}=useContext(AuthContext);
    console.log(createUser)

    const [err, setErr] = useState(null)

    const handleSignUp = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.conformPass.value;
 

        if (password.length < 6) {
            setErr('Password should be 6 characters or more.');
            return;
        }

        if (password !== confirm) {
            setErr('Your Password did not match');
            return;
        }

    createUser(email, password)
    .then(result => {
        const user = result.user;
        if(user){
            toast.success('Register Successfully!!',{position: "top-center", theme: "colored" })
        }
        console.log(user)
        form.reset()
       
    })
    .catch(error => console.error(error))

      
    }
    

    return (
        <div className="max-w-sm mx-auto my-12">
            <Card >
                <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email2"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email2"
                            type="email"
                            placeholder="name@flowbite.com"
                            required={true}
                            shadow={true}
                            name="email"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password2"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password2"
                            type="password"
                            required={true}
                            shadow={true}
                            name="password"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="repeat-password"
                                value="Repeat password"
                            />
                        </div>
                        <TextInput
                            id="repeat-password"
                            type="password"
                            required={true}
                            shadow={true}
                            name="conformPass"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" />
                        <Label htmlFor="agree">
                            I agree with the{' '}
                            <Link
                                to="/forms"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    <p>{err}</p>
                    <Button type="submit">
                        Register new account
                    </Button>
                    <h3>Already have an Account! Please <Link className="text-blue-600 hover:underline dark:text-blue-500" to="/login">Login</Link></h3>
                    
                </form>
            </Card>
            <ToastContainer />
        </div>
    );
};

export default Signup;