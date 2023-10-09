'use client'
import BgBanner from '@/components/BgBanner';
import { ApplyContext } from '@/context/ApplyContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState} from 'react';
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'


const page = () => {
    const{applied}=useContext(ApplyContext);

    // const [displayJobs, setDisplayJobs] = useState([]);


    // // console.log(applied);
    // const handleJobsFilter = filter =>{
    //     if(filter === 'all'){
    //         setDisplayJobs(applied);
    //     }
    //     else if (filter === 'remote'){
    //         const remoteJobs = applied.filter(job => job.remoteoronsite === 'Remote');
    //         setDisplayJobs(remoteJobs);
    //     }
    //     else if(filter === 'onsite'){
    //         const onsiteJobs = applied.filter(job => job.remoteoronsite === 'Onsite');
    //         setDisplayJobs(onsiteJobs);
    //     }
    // }

    // console.log(displayJobs);



    return (
        <>
        <BgBanner title="Applied Jobs"/>
    
         <main className='w-full sm:w-[80%] py-32 mx-auto px-5 sm:px-5'>

         <h2 className="text-2xl font-bold text-center mb-20">Jobs I applied: {applied.length}</h2>

         

        {/* <div className='end-0'>
        <details className="dropdown mb-32">
                <summary className="m-1 btn">Filter By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
        </div> */}


            
         { applied.length==1 && (applied.map((data)=>{
            return <>
            {/* { displayJobs && (displayJobs.map((data)=>{
            return <> */}
            
            
        <section key={data.id}>
            
            <div className='border-2 flex justify-between mb-20 items-center border-gray-300 p-5'>
                <main>
                <Image
                src={data[0].img}
                height={400}
                width={400}
                alt={data[0].jobtitle}
                priority
                className='w-full h-full bg-[#F4F4F4] p-20 rounder-2xl'/>
                </main>

                <main>
                <h2 className='text-xl font-bold mb-5'>{data[0].jobtitle}</h2>
                <p className='mb-5'> {data[0].companyname}</p>
                <div className='flex gap-10 mb-5'>
                    <p className='border-2  border-indigo-400 rounded-md p-3'>{data[0].remoteoronsite}</p>
                    <p className='border-2  border-indigo-400 rounded-md p-3'>{data[0].fullorparttime}</p>
                </div>
                <div className='flex items-center gap-10 mb-5'>
                    <div className='flex gap-2'>
                    <GoLocation size={20} color="#8687FE"/>
                    <p> {data[0].location}</p>
                    </div>

                    
                    <div className='flex items-center gap-2'>
                    <AiOutlineDollarCircle size={20} color="#8687FE"/>
                    <p>{data[0].salary}</p>
                    </div>
                    
                </div>   
                </main>

                <main>
                <Link href={`/details/${data[0].id}`}
                className='px-4 py-3 rounded-xl text-white font-bold bg-gradient-to-r from-indigo-400 to-purple-400'>
                View Details</Link>
                </main>











        </div> 
            
           

        </section> </>
            



         })) } 


         
        </main>   
        </>
    );
};

export default page;