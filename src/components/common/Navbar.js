import { Navbar } from 'flowbite-react';
import React from 'react';


const Nav = () => {
    return (

        <div className='lg:px-28'>
            <Navbar
                fluid={true}
                rounded={true}
            >
              <div className="flex gap-28 justify-between items-center">
              <Navbar.Brand to="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
                    </span>
                </Navbar.Brand>
                <Navbar.Collapse>


                    <Navbar.Link className='lg:text-lg' to="/navbars">
                        +2308420894
                    </Navbar.Link>

                    <Navbar.Link className='lg:text-lg' to="/navbars">
                        +2308420894
                    </Navbar.Link>

                </Navbar.Collapse>
              </div>
                <div className="flex md:order-2">
                    <Navbar.Collapse >
                        <Navbar.Link className='lg:text-lg'
                            to="/navbars"
                        >
                            HOME
                        </Navbar.Link>
                        <Navbar.Link className='lg:text-lg' to="/navbars">
                            About
                        </Navbar.Link>
                        <Navbar.Link className='lg:text-lg' to="/navbars">
                            Services
                        </Navbar.Link>

                    </Navbar.Collapse>

                    <Navbar.Toggle />
                </div>


            </Navbar>
        </div>
    );
};

export default Nav;