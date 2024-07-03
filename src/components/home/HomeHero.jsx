import React from 'react'
import { HeroCarousel } from './HeroCarousel'
import HorizontalCarousel from "./HorizontalCarousel"
import { Link } from 'react-router-dom';

function HomeHero() {
    return (
        <>
            {/* Desktop Version */}
            <div className='hidden lg:flex w-[100%] lg:flex-row md:w-[100%]  pt-[100px] bg-thorblack pb-[100px] h-[100vh] md:h-screen lg:h-[100vh]  items-center justify-center'>
                <div className='flex flex-col gap-[20px] pl-[50px] md:pl-0 lg:pl-[50px] xl:pl-[80px]  w-[100%] md:h-[50%]'>
                    <div className='flex flex-col md:flex-row lg:flex-col md:gap-[10px] lg:gap-[20px]'>
                        <h1 className='text-secondary-default font-[Poppins] text-6xl md:text-3xl xl:text-5xl 2xl:text-6xl font-black'>Turning Ideas into Reality Where Innovation Takes Shape.</h1>
                        <p className='text-[#808080] font-[Poppins] text-base font-medium w-[750px] md:w-[450px] xl:w-[750px]'>Embark on a transformative journey with Thor Industries, where ingenuity meets impact. As pioneers in Mining, Renewable Energy, Applied Science, and Construction, we redefine possibilities. Our commitment to excellence echoes through every venture, shaping a future that transcends boundaries.</p>
                    </div>
                    <div className='flex gap-[10px] items-center w-full'>
                        <button className='w-fit py-3.5 px-8 font-[Poppins] bg-white rounded-xl border-[1px] border-white font-medium text-base'>Contact</button>
                        <Link to="/aboutus">
                            <button className='w-fit py-3.5 px-8 font-[Poppins] bg-[#FFE1B6] rounded-xl border-[1px] text-primary-default border-[#FFE1B6] font-medium text-base'>About Us</button>
                        </Link>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full lg:mr-24 h-[50%]'>
                    <HeroCarousel items={[{ quote: "test", name: 'test', title: 'test', img: 'bg-sinkImg' }, { quote: "test", name: 'test', title: 'test', img: 'bg-panelsImg' }, { quote: "test", name: 'test', title: 'test', img: 'bg-urinalImg' }, { quote: "test", name: 'test', title: 'test', img: 'bg-mirrorImg' }]} className="w-full" />
                </div>

            </div>

            {/* Tablet Version */}
            <div className='hidden md:flex  flex-col items-center justify-center  lg:hidden w-screen h-screen  overflow:hidden'>
                <div className='flex  h-full  justify-evenly w-full overflow:auto'>
                    <div className='flex flex-col w-full  lg:h-full justify-center items-start p-8 gap-[30px]'>
                        <h1 className='text-secondary-default font-[Poppins] text-xl md:text-xl lg:text-3xl font-black'>Turning Ideas into Reality Where Innovation Takes Shape.</h1>
                        <div className='flex flex-col md:flex-row gap-2 items-center mt-2'>
                            <button className='py-2.5 px-5 font-[Poppins] bg-white rounded-xl border border-white font-medium text-sm'>Contact</button>
                            <button className='py-2.5 px-5 font-[Poppins] bg-[#FFE1B6] rounded-xl border text-primary-default border-[#FFE1B6] font-medium text-sm'>About Us</button>
                        </div>
                    </div>
                    <div className='w-full  lg:h-full flex justify-center items-center p-8'>
                        <p className='text-[#808080] font-[Poppins] text-sm  font-medium '>Embark on a transformative journey with Thor Industries, where ingenuity meets impact. As pioneers in Mining, Renewable Energy, Applied Science, and Construction, we redefine possibilities. Our commitment to excellence echoes through every venture, shaping a future that transcends boundaries.</p>
                    </div>
                </div>
                <div className='w-full px-8'>
                    <HorizontalCarousel />
                </div>
            </div>

            {/* Mobile Version */}
            <div className='flex sm:flex md:hidden flex-col items-center justify-center  lg:hidden w-[100%] h-screen  overflow:hidden mt-[100px]'>
                <div className='flex  flex-col h-full  justify-center w-full overflow:auto px-4'>
                    <div className='flex flex-col w-full  lg:h-full justify-center items-start p-4 '>
                        <h1 className='text-secondary-default font-[Poppins] text-2xl lg:text-3xl font-black'>Turning Ideas into Reality Where Innovation Takes Shape.</h1>

                    </div>
                    <div className='w-full  lg:h-full flex flex-col justify-center items-start p-4 gap-2'>
                        <p className='text-[#808080] font-[Poppins] text-xs  font-medium '>Embark on a transformative journey with Thor Industries, where ingenuity meets impact. As pioneers in Mining, Renewable Energy, Applied Science, and Construction, we redefine possibilities. Our commitment to excellence echoes through every venture, shaping a future that transcends boundaries.</p>
                        <div className='flex  md:flex-row gap-2 items-start mt-2'>
                            <button className='py-2.5 px-5 font-[Poppins] bg-white rounded-xl border border-white font-medium text-sm'>Contact</button>
                            <button className='py-2.5 px-5 font-[Poppins] bg-[#FFE1B6] rounded-xl border text-primary-default border-[#FFE1B6] font-medium text-sm'>About Us</button>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 pb-16'>
                    <HorizontalCarousel />
                </div>
            </div>

        </>
    )
}

export default HomeHero