import React from 'react'
import aboutusbanner from "../../../public/aboutus/aboutusbanner.webp"

function AboutUsContent() {
    return (
        <>
            <div className='w-full flex flex-col gap-8 font-primary mt-28 mb-28'>
                <div>
                    <img src={aboutusbanner} alt="aboutusbanner" className='h-[200px] object-cover md:h-[300px] md:object-contain lg:h-full' />
                </div>
                <div className='w-full flex flex-col gap-4 pl-6 pr-8 md:pl-8 md:pr-16 lg:pl-12 lg:pr-24 xl:pl-20 xl:pr-32'>
                    <h1 className='font-primary text-2xl md:text-3xl lg:text-5xl text-secondary-default'>About us</h1>
                    <p className='font-primary text-sm md:text-base text-[#808080]'>
                        In 2005, a small team of passionate environmentalists and engineers came together with a shared vision: to create sanitary products that are not only effective and reliable but also environmentally friendly. Driven by a commitment to sustainability and innovation, our founders started from a modest workshop, meticulously designing and testing products that would make a real difference in people's lives.<br></br><br></br>

                        Over the years, our dedication to quality and the environment has remained unwavering. We've grown from a local startup into a trusted name in the sanitary industry, known for our cutting-edge solutions and eco-friendly practices. Our products, ranging from biodegradable sanitary napkins to advanced water purification systems, are designed to meet the highest standards of hygiene and sustainability.
                        <br></br><br></br>
                        At the heart of our success is our belief that everyone deserves access to safe and sustainable sanitary products. We continuously strive to improve our offerings and expand our reach, working closely with communities and organizations to promote better hygiene practices and environmental stewardship.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutUsContent