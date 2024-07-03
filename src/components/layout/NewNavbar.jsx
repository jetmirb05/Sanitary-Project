import React, { useState } from 'react';
import navlogo from "/navbar/navlogo.png";
import { Link, useLocation } from 'react-router-dom';
import wave5 from "/navbar/wave11.png";
import close from "/navbar/close.png";
import menu from "/navbar/menu.png";

function NewNavbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            {/* Desktop Version */}
            <div className='w-full font-primary text-primary-default sticky top-0 z-50 hidden lg:block'>
                <div className='flex items-center justify-around bg-secondary-default pt-10'>
                    <div className='w-[200px] h-[200px] bg-[#FFE1B6] flex items-center justify-center'>
                        <img src={navlogo} alt="navlogo" className='w-[100px] h-[100px]' />
                    </div>
                    <div className='flex items-center justify-center space-x-8'>
                        <div>
                            <Link to="/home" className={`text-primary-default border-b-2 border-transparent hover:border-primary-default transition duration-300 py-1 
                                ${currentPath.startsWith('/home') ? 'border-white' : ''}`} onClick={() => window.scrollTo(0, 0)}>Home</Link>
                        </div>
                        <div>
                            <Link to="/aboutus" className={`text-primary-default border-b-2 border-transparent hover:border-primary-default transition duration-300 py-1 
                                ${currentPath.startsWith('/aboutus') ? 'border-white' : ''}`} onClick={() => window.scrollTo(0, 0)}>About</Link>
                        </div>
                        <div>
                            <Link to="/gallery" className={`text-primary-default border-b-2 border-transparent hover:border-primary-default transition duration-300 py-1 
                                ${currentPath.startsWith('/gallery') ? 'border-white' : ''}`} onClick={() => window.scrollTo(0, 0)}>Gallery</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={wave5} alt="wave5" />
                </div>
            </div>

            {/* Tablet & Mobile Version */}
            <div className='w-full font-primary text-primary-default sticky top-0 z-50 lg:hidden'>
                <div className='w-full flex flex-col'>
                    <div className='flex items-center justify-between bg-secondary-default p-4'>
                        <div className='w-fit h-fit'>
                            <img src={navlogo} alt="navlogo" className='w-[50px] h-[50px]' />
                        </div>
                        <div className='w-fit h-fit' onClick={toggleSidebar}>
                            <img src={sidebarOpen ? close : menu} alt="menu" className='w-[30px] h-[30px]' />
                        </div>
                    </div>
                    <div className='w-full'>
                        <img src={wave5} alt="wave5" />
                    </div>
                </div>
                {sidebarOpen && (
                    <div className='fixed top-0 left-0 w-full h-full bg-secondary-default z-50'>
                        <div className='flex items-center justify-between bg-secondary-default p-4'>
                            <div className='w-fit h-fit'>
                                <img src={navlogo} alt="navlogo" className='w-[50px] h-[50px]' />
                            </div>
                            <div className='w-fit h-fit' onClick={toggleSidebar}>
                                <img src={close} alt="close" className='w-[30px] h-[30px]' />
                            </div>
                        </div>
                        <div className='flex flex-col items-center space-y-6 mt-6'>
                            <div>
                                <Link to="/home" className={`text-primary-default border-b-2 border-transparent hover:border-primary-default transition duration-300 py-1 
                                    ${currentPath.startsWith('/home') ? 'border-white' : ''}`} onClick={() => { toggleSidebar(); window.scrollTo(0, 0); }}>Home</Link>
                            </div>
                            <div>
                                <Link to="/aboutus" className={`text-primary-default border-b-2 border-transparent hover:border-primary-default transition duration-300 py-1 
                                    ${currentPath.startsWith('/aboutus') ? 'border-white' : ''}`} onClick={() => { toggleSidebar(); window.scrollTo(0, 0); }}>About</Link>
                            </div>
                            <div>
                                <Link to="/gallery" className={`text-primary-default border-b-2 border-transparent hover:border-primary-default transition duration-300 py-1 
                                    ${currentPath.startsWith('/gallery') ? 'border-white' : ''}`} onClick={() => { toggleSidebar(); window.scrollTo(0, 0); }}>Gallery</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default NewNavbar;
