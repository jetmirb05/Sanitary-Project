import React from 'react'

function GetinTouch() {
    return (
        <>
            <div className='w-full flex  items-center justify-center mt-28 mb-28'>
                <div className='w-[1280px] flex flex-col gap-8 '>
                    <div>
                        <h1 className='font-primary text-2xl md:text-3xl lg:text-5xl text-secondary-default'>Get in touch!</h1>
                    </div>
                    <div className='w-full h-[700px] '>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.006174646395!2d21.695781576588313!3d42.128751049682855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13544fc77a4ff3c7%3A0xc9a290fc410c5a55!2zUmVzdGF1cmFudCDigJ5BcmN1c-KAnA!5e0!3m2!1sen!2smk!4v1719528693334!5m2!1sen!2smk" style={{ border: 0, width: "100%", height: "100%", filter: 'invert(1) hue-rotate(180deg)', }} allowFullScreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetinTouch