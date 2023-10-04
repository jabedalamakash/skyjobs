
import JobDetails from '@/components/JobDetails';
import Image from 'next/image';
import React from 'react';
const jobsData=async(id)=>{
    const request= await fetch(`https://skyjobs.vercel.app/api/jobs/${id}`,{cache: 'no-store'});
    return request.json();
}
const page =async ({params}) => {
    const {id}=params;
    const resdata= await jobsData(id);
    const data= resdata.jobs;
    // console.log(id);
    
    return (
        <section className='mx-auto'>
            <div className='bg-[#F9F9FF] relative  py-32'>
                <Image
                src={"/images/vector.png"}
                height={100}
                width={100}
                alt="bg image"
                priority
                className='w-fit absolute object-cover'/>

                <h1 className='text-center relative text-3xl font-bold z-10 mx-auto'>Job Details</h1>
            </div>
            <main className='w-full sm:w-[80%] px-5 sm:px-0 mx-auto my-32'>

                <JobDetails data={data}/>
            </main>

            </section>
    );
};

export default page;