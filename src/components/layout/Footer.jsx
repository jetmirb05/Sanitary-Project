import React from 'react'
import { Link } from 'react-router-dom'
import wave5 from "/navbar/wave12.png";
import navlogo from "/navbar/navlogo.png";

function Footer() {
    return (
        <>
            <div className='flex flex-col'>
                <div>
                    <img src={wave5} alt="wave5" />
                </div>
                <footer className="bg-muted py-6 md:py-12 bg-secondary-default text-primary-default">
                    <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-start">
                        <div className="flex flex-col items-start  gap-4">
                            <Link to="/" className="flex items-center gap-2" prefetch={false}>
                                {/* <LeafIcon className="h-6 w-6 text-primary" />
                                <span className="font-bold text-primary">Sanitary Co.</span> */}
                                <img src={navlogo} alt="navlogo" className='w-[50px] h-[50px]' />
                            </Link>
                            <div className="flex flex-col gap-1 text-muted-foreground">
                                <div>Kumanovo, North Macedonia</div>
                                <div>info@sanitarycompany.com</div>
                                <div>+389 ?? ??? ???</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-1">
                                <h3 className="font-semibold">Quick Links</h3>
                                <Link to="/" className="hover:underline" prefetch={false}>
                                    Home
                                </Link>
                                <Link to="/about" className="hover:underline" prefetch={false}>
                                    About Us
                                </Link>
                                <Link to="/gallery" className="hover:underline" prefetch={false}>
                                    Gallery
                                </Link>
                            </div>
                            <div className="grid gap-1">
                                <h3 className="font-semibold">Resources</h3>
                                <Link to="/blog" className="hover:underline" prefetch={false}>
                                    Blog
                                </Link>
                                <Link to="/faqs" className="hover:underline" prefetch={false}>
                                    FAQs
                                </Link>
                                <Link to="/contact" className="hover:underline" prefetch={false}>
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <h3 className="font-semibold">Follow Us</h3>
                            <div className="flex gap-4">
                                <Link to="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                                    <TwitterIcon className="h-6 w-6" />
                                </Link>
                                <Link to="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                                    <FacebookIcon className="h-6 w-6" />
                                </Link>
                                <Link to="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                                    <InstagramIcon className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto max-w-7xl mt-8 text-center text-sm text-muted-foreground">
                        &copy; 2024 Sanitary Co. All rights reserved.
                    </div>
                </footer>
            </div>

        </>
    )
}

export default Footer

function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}

function InstagramIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}

function LeafIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    )
}

function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}
