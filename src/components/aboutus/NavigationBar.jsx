import React, { useState } from 'react';
import company1 from '/aboutus/company1.png';
import company2 from '/aboutus/company2.png';
import company3 from '/aboutus/company3.png';
import { Link } from 'react-router-dom';

function NavigationBar() {
    const companyData = [
        {
            image: company1,
            title: "Title1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum suscipit nunc, non posuere elit dictum eget. Nam fermentum sed ex a placerat. Proin vel mi erat. Aliquam a dui.",
            link: "link1",
        },
        {
            image: company2,
            title: "Title2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum suscipit nunc, non posuere elit dictum eget. Nam fermentum sed ex a placerat. Proin vel mi erat. Aliquam a dui.",
            link: "link2",
        },
        {
            image: company3,
            title: "Title3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum suscipit nunc, non posuere elit dictum eget. Nam fermentum sed ex a placerat. Proin vel mi erat. Aliquam a dui.",
            link: "link3",
        },
    ];

    const [selectedCompany, setSelectedCompany] = useState(0);

    return (
        <>
            <div className='w-full font-primary flex items-center justify-center mt-28 mb-28'>
                <div className='w-[1280px] font-primary flex flex-col gap-16'>
                    <div className='w-full flex flex-col gap-16 items-center justify-center'>
                        <div>
                            <h1 className='text-2xl md:text-3xl lg:text-6xl text-secondary-default'>Our Brands</h1>
                        </div>
                        <div className='w-full flex items-center justify-center gap-6 md:gap-16'>
                            {companyData.map((company, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedCompany(index)}
                                    className={`font-semibold pb-2 lg:text-xl border-b-2 ${selectedCompany === index
                                        ? 'text-[#FFE1B6] border-[#FFE1B6]'
                                        : 'text-secondary-default border-primary-default hover:text-[#FFE1B6] hover:border-[#FFE1B6]'
                                        }`}
                                >
                                    Company{index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='w-full flex flex-col-reverse lg:flex-row gap-4 items-center justify-evenly'>
                        <div className='flex flex-col gap-8 w-fit'>
                            <h1 className='text-2xl lg:text-3xl text-secondary-default'>{companyData[selectedCompany].title}</h1>
                            <p className='text-sm md:text-base text-[#808080] w-[300px] sm:w-[400px]'>{companyData[selectedCompany].description}</p>
                            <div>
                                <Link to={companyData[selectedCompany].link} className='bg-[#FFE1B6] px-6 py-3 text-primary-default rounded-lg font-bold'>
                                    Explore {companyData[selectedCompany].title}
                                </Link>
                            </div>
                        </div>
                        <div className='w-fit'>
                            <img
                                src={companyData[selectedCompany].image}
                                alt={companyData[selectedCompany].title}
                                className='w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;
