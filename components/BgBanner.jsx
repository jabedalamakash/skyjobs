import Image from 'next/image';
import React from 'react';

const BgBanner = ({title}) => {
    return (
        <section>
                <div className='bg-[#F9F9FF] relative  py-32'>
                <Image
                src={"/images/vector.png"}
                height={100}
                width={100}
                alt="bg image"
                priority
                className='w-fit absolute object-cover bottom-0 left-0'/>
                <Image
                src={"/images/vector1.png"}
                height={100}
                width={100}
                alt="bg image"
                priority
                className='w-fit absolute object-cover top-0 right-0'/>

                <h1 className='text-center relative text-3xl font-bold z-10 mx-auto'>{title}</h1>
            </div>
            
        </section>
    );
};

export default BgBanner;