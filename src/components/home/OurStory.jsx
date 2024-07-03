import React from 'react'
import { Link } from 'react-router-dom'

function OurStory() {
    return (
        <>
            <div className='w-full bg-primary-default font-[Poppins] flex items-center justify-center my-24'>
                <div className='max-w-screen-xl flex flex-col gap-12 items-center justify-center px-10'>
                    <div>
                        <h1 className='text-2xl md:text-3xl lg:text-6xl text-secondary-default'>Our Story</h1>
                    </div>
                    <div>
                        <p className='text-sm md:text-base text-[#808080]'>
                            Founded in 2005 by a group of passionate environmentalists and engineers, our company set out with a mission to create sanitary products that are both effective and eco-friendly. From our humble beginnings in a small workshop, we've grown into a trusted name in the industry, known for our commitment to quality and sustainability.
                            <br /><br />
                            Our innovative products, from biodegradable sanitary napkins to advanced water purification systems, reflect our dedication to improving hygiene and protecting the environment. We believe everyone deserves access to safe and sustainable sanitary solutions, and we work tirelessly to make this a reality.
                        </p>
                    </div>
                    <div className='w-full flex justify-end items-end'>
                        <Link to="/aboutus" onClick={() => window.scrollTo(0, 0)}>
                            <button className='px-6 py-3 bg-[#FFE1B6] text-primary-default rounded-lg font-bold'>About Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStory