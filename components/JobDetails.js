"use client"
import { ApplyContext } from '@/context/ApplyContext';
import Btn from '@/uicomponents/Btn';
import Image from 'next/image';
import React, { useContext } from 'react';


const JobDetails = ({data}) => {
   
    const item=data;
    const{handleApply}=useContext(ApplyContext);
    

    return (
        <>

            {
                data && (
                    
                    <section className='flex flex-col gap-10 sm:flex-row'>
                        <div>
                        <Image
                        src={item[0].img}
                        height={100}
                        width={100}
                        alt={item[0].jobtitle}
                        priority
                        className='w-fit mb-10'/>
                        <h1 className=' mb-5' > Job Title: {item[0].jobtitle}</h1>
                            <h1 className=' mb-5' >Job Description: {item[0].jobdescription}</h1>
                            <h1 className=' mb-5' >Job Responsibilities: {item[0].jobres }</h1>
                            <h1 className=' mb-5'>Educational Requirements: {item[0].educationalreq}</h1>
                            <h1 className=' mb-5'>Experience: {item[0].experience} </h1>
                        </div>
                        <div>
                        <div className='bg-[#F9F9FF] p-10 mb-5 rounded-md'>
                            <h1 className='font-bold mb-3'>Job Details</h1>
                            <hr className='mb-4 border-indigo-400'/>
                            <h1 className=' mb-3' >Salary: {item[0].salary} (Per Month)</h1>
                            <h1 className=' mb-3' >Job Title: {item[0].jobtitle}</h1>
                            <h1 className='font-bold mb-3'>Contact Information</h1>
                            <hr className='mb-4 border-indigo-400'/>
                            <h1 className=' mb-3'>Phone: {item[0].contactinfo[0]}</h1>
                            <h1 className=' mb-3'>Email: {item[0].contactinfo[1]} </h1>
                            <h1 className=''>Address: {item[0].location} </h1>

                        </div>
                        <button onClick={()=> {handleApply(data)}}
                        className='px-4 py-3 w-full rounded-xl  text-white font-bold bg-gradient-to-r from-indigo-400 to-purple-400'>
                        Apply Now</button>
                       

                        </div>


                    </section>
                    
                )
            }
           
            
        </>
    );
};

export default JobDetails;
// companyname
// : 
// "Tesla, Inc"
// contactinfo
// : 
// (2) ['017-00000000', 'info@example.com']
// educationalreq
// : 
// "Graduated from any reputed university or equivalent knowledge and skillset"
// experience
// : 
// "At least 5 years"
// fullorparttime
// : 
// "Full Time"
// id
// : 
// 4
// img
// : 
// "/jobsimage/tesla.png"
// jobdescription
// : 
// "You have to perform necessary tasks accourding to your designation."
// jobres
// : 
//  : Graduated from any reputed university or equivalent knowledge and skillset

//  : At least 5 year
// "Must have fast learning mindset"
// jobtitle
// : 
// "Mechanical Engineer"
// location
// : 
// "Texas, United States"
// remoteoronsite
// : 
// "Onsite"
// salary
// : 
// "USD 100K-150K"
// Phone : 017-00000000
// Email : info@example.com
// Address : California, Unit