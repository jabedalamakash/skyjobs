import Btn from '@/ui components/Btn';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className='bg-[#F9F9FF] w-full mx-auto px-5 sm:px-0'>
            <main className='flex flex-col-reverse sm:items-center justify-center text-center sm:text-left sm:flex-row w-full sm:w-[80%] mx-auto p-10 sm:p-0'>
            <div  className='w-full mx-auto  sm:w-1/2 mt-5 sm:mt-0 '>
                <h1 className='text-5xl sm:text-7xl sm:leading-snug font-bold mb-5 '>One Step <br/>Closer To Your <br/> <span className='text-[#808FFF]'>Dream Job</span></h1>
                <p className='sm:w-[75%] mb-5 '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <Btn name="Get Started"/>
               
            

            </div>
            <div className='w-full sm:w-1/2'>
                <Image
                src={"/images/banner.png"}
                height={500}
                width={500}
                alt="banner"
                priority
                className='w-full h-full'/>
            </div>
            </main>

            
        </section>
    );
};

export default Banner;