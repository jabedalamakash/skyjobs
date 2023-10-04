'use client'
import { ApplyContext } from '@/context/ApplyContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext} from 'react';
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
const page = () => {
    const{applied}=useContext(ApplyContext);

    // const data=applied;



    return (
        <>
         <main className='w-full sm:w-[80%] py-32 mx-auto px-5 sm:px-5'>
         { applied && (applied.map((data)=>{
            return <>
            
        <section key={data[0]}>
            
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



{/* <div className='border-2  border-gray-300 p-5'>
<Image
src={data.img}
height={400}
width={400}
alt={data.jobtitle}
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





</div> */}