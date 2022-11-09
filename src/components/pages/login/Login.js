import { Button, Card,Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaGoogle } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { logIn, googleLogin,user } = useContext(AuthContext);
   const navigate =useNavigate();
   const location = useLocation();
   const from =location.state?.from?.pathname || "/"

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        logIn(email, password)
            .then(result => {
                const user = result.user;
                if(user){
                    toast.info("Successfully Login", { position: "top-right", theme: "dark" })
                }

                navigate(from, {replace: true})
                form.reset();


            })
            .catch(error => console.error(error))

    }

    const handleGoogleSign = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }




    return (
        <div className="max-w-sm mx-auto my-12">
            <Card >
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
                    <Button type="submit">
                        Login
                    </Button>

                    <h3>Don't have an Account! Please <Link className="text-blue-600 hover:underline dark:text-blue-500" to="/signup">Register</Link></h3>
                    <h1 className='mb-2 text-center'>OR,</h1>
                   
                    <div className='mx-auto'>
                        <Button onClick={handleGoogleSign} className="btn btn-submit mb-2" color="gray"><FaGoogle className='mr-1' /> Login with Google</Button>
                    </div>

                </form>
            </Card>
            <ToastContainer />
        </div>
    );
};

export default Login;