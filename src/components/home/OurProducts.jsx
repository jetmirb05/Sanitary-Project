import React from 'react'
import { Link } from 'react-router-dom';
import seemore from "../../../public/ourproducts/seemore.webp";

function OurProducts() {

    const productsData = [
        {
            title: "Sink",
            bgClass: "bg-sinkImg",
            path: "/",
        },
        {
            title: "Panels",
            bgClass: "bg-panelsImg",
            path: "/",
        },
    ];

    const productsData2 = [
        {
            title: "Urinal",
            bgClass: "bg-urinalImg",
            path: "/",
        },
        {
            title: "Mirror",
            bgClass: "bg-mirrorImg",
            path: "/",
        },
    ];

    return (
        <>
            <div className="w-full flex items-center justify-center mt-[100px]">
                {/* Title and introduction */}
                <div className="max-w-screen-xl">
                    <div className="flex flex-col justify-center items-center text-center mb-[100px] gap-[30px]">
                        <h1 className="text-2xl md:text-3xl lg:text-6xl text-secondary-default font-[Poppins]">
                            Our Products
                        </h1>
                    </div>

                    {/* First row of cards map */}
                    <div className="flex flex-col gap-[20px] justify-center items-center mb-[100px]">
                        <div className="bg-primary-default w-[300px] h-[300px] sm:w-[550px] md:h-[550px] rounded-full absolute blur-2xl bg-opacity-10"></div>
                        <div className="flex flex-col gap-[20px] sm:flex sm:flex-col sm:gap-[20px] lg:flex lg:flex-row lg:gap-[20px]">
                            {productsData.map((card, index) => (
                                <div
                                    key={index}
                                    className={`min-[425px]:w-[400px] w-[350px] lg:w-[400px] xl:w-[550px] h-[200px] lg:h-[300px] xl:h-[350px] rounded-[13px] flex flex-col justify-between hover:transition-all hover:duration-500 z-10 bg-no-repeat ${card.bgClass} bg-cover bg-center relative border-secondary-default border-2 hover: cursor-pointer hover:scale-105 transition-all duration-500`}
                                >
                                    <div className="bg-secondary-default bg-opacity-60 absolute inset-0 backdrop-filter backdrop-blur-sm flex flex-col justify-between rounded-[13px]  hover:backdrop-blur-none transition-all duration-500 hover:transition-all hover:duration-500">
                                        <div className="text-primary-default flex flex-col pl-[20px] pt-[20px] z-50">
                                            <h1 className="text-2xl font-[Poppins]">{card.title}</h1>
                                        </div>
                                        <div className="flex justify-end pr-5 pb-5">
                                            <Link to={`/departments/${card.path}`}>
                                                <div className="flex flex-row gap-1 bg-primary-default w-fit p-2 rounded-xl">
                                                    <img src={seemore} alt="Book Icon" />
                                                    <p className="text-base text-secondary-default font-[Poppins]">See more</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Second row of cards map */}
                        <div className="flex flex-col gap-[20px] sm:flex sm:flex-col sm:gap-[20px] lg:flex lg:flex-row lg:gap-[20px]">
                            {productsData2.map((card, index) => (
                                <div
                                    key={index}
                                    className={`min-[425px]:w-[400px] w-[350px] lg:w-[400px] xl:w-[550px] h-[200px] lg:h-[300px] xl:h-[350px] rounded-[13px] flex flex-col justify-between hover:transition-all hover:duration-500 z-10 bg-no-repeat ${card.bgClass} bg-cover bg-center relative border-secondary-default border-2 hover: cursor-pointer hover:scale-105 transition-all duration-500`}
                                >
                                    <div className="bg-secondary-default bg-opacity-60 absolute inset-0 backdrop-filter backdrop-blur-sm flex flex-col justify-between rounded-[13px]  hover:backdrop-blur-none transition-all duration-500 hover:transition-all hover:duration-500">
                                        <div className="text-white flex flex-col pl-[20px] pt-[20px] z-50">
                                            <h1 className="text-2xl font-[Poppins]">{card.title}</h1>
                                            <p className="text-base font-[Poppins]">
                                                {card.description}
                                            </p>
                                        </div>
                                        <div className="flex justify-end pr-5 pb-5">
                                            <Link to={`/departments`}>
                                                <div className="flex flex-row gap-1 bg-primary-default w-fit p-2 rounded-xl">
                                                    <img src={seemore} alt="Book Icon" />
                                                    <p className="text-base text-secondary-default font-[Poppins]">See more</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurProducts