import React, { useState } from 'react';
import navlogo from '/public/navbar/navlogo.png';
import wave from "/public/navbar/wave5.png";
import menu from "/public/navbar/menu.png";
import close from "/public/navbar/close.png";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const currentPath = location.pathname;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
        toggleSidebar();
    };

    return (
        <>
            {/* Desktop Version */}
            <div className="fixed inset-0 z-50 hidden w-full font-primary lg:flex items-center justify-around h-[300px] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${wave})` }}>
                <div className='w-52 h-52 bg-[#FFE1B6] flex items-center justify-center'>
                    <a href='/home'>
                        <img src={navlogo} alt="navlogo" className="w-[100px] h-[100px]" />
                    </a>
                </div>
                <div className="flex items-center justify-between gap-8">
                    <a href="/home" className={`text-primary-default border-b-2 border-transparent hover:border-primary-default transition duration-300 py-1 
                            ${currentPath.startsWith('/home') ? 'border-white' : ''}`} onClick={() => window.scrollTo(0, 0)}>Home</a>
                    <a href="/aboutus" className={`text-primary-default border-b-2 border-transparent hover:border-primary-default transition duration-300 py-1 
                            ${currentPath.startsWith('/aboutus') ? 'border-white' : ''}`} onClick={() => window.scrollTo(0, 0)}>About Us</a>
                    <a href="/gallery" className={`text-primary-default border-b-2 border-transparent hover:border-primary-default transition duration-300 py-1 
                            ${currentPath.startsWith('/gallery') ? 'border-white' : ''}`} onClick={() => window.scrollTo(0, 0)}>Gallery</a>
                </div>
            </div>

            {/* Tablet & Mobile Version */}
            <div className='w-full flex lg:hidden items-center justify-between px-8 py-4 font-primary h-[200px] bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${wave})` }}>
                <div>
                    <a href="/home">
                        <img src={navlogo} alt="navlogo" className="w-[100px] h-[100px]"></img>
                    </a>
                </div>
                <div>
                    <img src={menu} alt="menu" onClick={toggleSidebar} className="cursor-pointer"></img>
                </div>
                {isSidebarOpen && (
                    <div className='fixed inset-0 z-50 w-full h-screen bg-primary-default flex flex-col pt-8 lg:hidden'>
                        <div className='w-full flex justify-between items-center px-8 py-4'>
                            <img src={navlogo} alt="navlogo" onClick={() => handleNavigation('/')} className="w-[100px] h-[100px] cursor-pointer" />
                            <img src={close} alt="close" onClick={toggleSidebar} className="cursor-pointer" />
                        </div>
                        <div className='w-full h-full flex flex-col items-center justify-center gap-8  bg-primary-default'>
                            <div>
                                <a onClick={() => handleNavigation('/home')} className='text-secondary-default cursor-pointer'>Home</a>
                            </div>
                            <div>
                                <a onClick={() => handleNavigation('/aboutus')} className='text-secondary-default cursor-pointer'>About Us</a>
                            </div>
                            <div>
                                <a onClick={() => handleNavigation('/gallery')} className='text-secondary-default cursor-pointer'>Gallery</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;
