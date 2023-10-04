"use client"
import Btn from '@/uicomponents/Btn';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'

const Job = ({data}) => {
    // console.log(data);
    const [value,setValue]=useState(4);
    return (
        <>
        <section>
        {/* className='grid grid-cols-1 gap-10 mx-auto content-center place-content-center sm:grid-cols-2 ' */}

        
    
        {data && data.slice(0,value).map((data)=>{

            return <main key={data.id}>
            <section className='border-2 grid  grid-cols-2 border-gray-300 p-5'>
            <Image
            src={data.img}
            height={400}
            width={400}
            alt={data.jobtitle}
            priority
            className='w-48 mb-5 p-5'/>

            <h2 className='text-xl font-bold mb-5'>{data.jobtitle}</h2>
            <p className='mb-5'> {data.companyname}</p>
            <div className='flex gap-10 mb-5'>
                <p className='border-2  border-indigo-400 rounded-md p-3'>{data.remoteoronsite}</p>
                <p className='border-2  border-indigo-400 rounded-md p-3'>{data.fullorparttime}</p>
            </div>
            <div className='flex gap-10 mb-10'>

                    <div className='flex items-center gap-2 '>
                    <GoLocation size={20} color="#8687FE"/>
                    <p> {data.location}</p>
                    </div>

                    
                    <div className='flex items-center gap-2 '>
                    <AiOutlineDollarCircle size={20} color="#8687FE"/>
                    <p>{data.salary}</p>
                    </div>

            </div>

            
                <Link href={`/details/${data.id}`}
                className='px-4 py-3 rounded-xl text-white mb-10 font-bold bg-gradient-to-r from-indigo-400 to-purple-400'>
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
            </section>
        </>
       
    );
};

export default Job;