"use client"
import Btn from '@/uicomponents/Btn';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Job = ({data}) => {
    // console.log(data);
    const [value,setValue]=useState(4);
    return (
        <>
    
        {data && data.slice(0,value).map((data)=>{

            return <main key={data.id}>
            <section className='border-2  border-gray-300 p-5'>
            <Image
            src={data.img}
            height={400}
            width={400}
            alt={data.jobtitle}
            priority
            className='w-48 mb-10'/>

            <h2 className='text-xl font-bold mb-5'>{data.jobtitle}</h2>
            <p className='mb-5'> {data.companyname}</p>
            <div className='flex gap-10 mb-5'>
                <p className='border-2  border-indigo-400 rounded-md p-3'>{data.remoteoronsite}</p>
                <p className='border-2  border-indigo-400 rounded-md p-3'>{data.fullorparttime}</p>
            </div>
            <div className='flex gap-10 mb-5'>
                <p> {data.location}</p>
                <p>{data.salary}</p>
            </div>

            
                <Link href={`/details/${data.id}`}
                className='px-4 py-3 rounded-xl text-white font-bold bg-gradient-to-r from-indigo-400 to-purple-400'>
                View Details</Link>

                </section>
                </main> 
        })
       }

     
            <div className={value === data.length ? 'hidden' : ''}>
                <button
                    onClick={() => setValue(data.length)}
                    className="px-4 py-3 mx-auto rounded-xl  text-center text-white font-bold bg-gradient-to-r from-indigo-400 to-purple-400">
                    Show All Jobs</button>
 
            </div>
        </>
       
    );
};

export default Job;


                   {/* <Btn
                    onClick={() => setValue(data.length)}
                     name="Show All Jobs"/> */}