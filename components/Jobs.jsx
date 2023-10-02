import React from 'react';
import Job from './job';
const jobsData=async()=>{
    const request= await fetch('https://skyjobs.vercel.app/api/jobs')
    return request.json();
}

const Jobs =async () => {
    const resdata= await jobsData();
    const data= resdata.data;
    

    return (
        <section className='w-full sm:w-[80%] py-32 mx-auto px-5 sm:px-5'>
            <div className='text-center'>
            <h1 className='font-bold text-3xl mb-10'>Featued Jobs </h1>
            <p className='mb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
   
            <main className='grid grid-cols-1 gap-10 mx-auto sm:grid-cols-2 '>
               <Job data={data}/>
            </main>

            
        </section>
    );
};

export default Jobs;