import { Navbar, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaUser,FaEnvelope,FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';



const Nav = () => {

    const { user, logOut } = useContext(AuthContext)
    //console.log(user, logOut);
    return (

        <div className='lg:px-28'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <div className="flex gap-28 justify-between items-center">
                  <Link to="/">
                  <Navbar.Brand >
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Flowbite
                        </span>
                    </Navbar.Brand>
                  </Link>
                    <Navbar.Collapse>


                        <Link className='flex items-center gap-3 lg:text-lg text-blue-600 hover:underline dark:text-blue-500'>
                       <FaEnvelope/>SEND MESSAGE
                        </Link>

                        <Link className='flex items-center gap-3 lg:text-lgb text-blue-600 hover:underline dark:text-blue-500'>
                            <FaPhone/>+2308420894
                        </Link>

                    </Navbar.Collapse>
                </div>
                <div className="flex md:order-2">
                    <Navbar.Collapse >
                        
                        <Link className='lg:text-lg' to="/services">
                            Services
                        </Link>
                        <Link className='lg:text-lg' to="/blogs">
                            Blogs
                        </Link>
                        {user?.photoURL ?


                            <Tooltip
                                content="Tooltip content"
                                placement="left"
                            >
                                <img src={user?.photoURL} style={{ width: '30px' }} className=" rounded-full" alt="" />
                            </Tooltip>


                            : <FaUser></FaUser>}


                        {
                            user?.uid ?
                                <button onClick={logOut}>Log Out</button>
                                :
                                <Link className='mx-4' to='/login'>Login</Link>

                        }
                    </Navbar.Collapse>

                    <Navbar.Toggle />
                </div>


            </Navbar >
        </div >
    );
};

export default Nav;