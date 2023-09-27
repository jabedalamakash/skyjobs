import React from 'react';
import Category from './Category';

const resData =async()=>{
    try{
        const res =await fetch('https://skyjobs.vercel.app/api/category');
        return res.json();
    }
    catch(err){

        throw new Error('Failed to fetch data');
    }

   


}

const Categories = async() => {
    const rdata= await resData();
    const data=rdata.categoryData

    
    return (
        <section className='w-full sm:w-[80%] mx-auto px-5 sm:px-0'>
            <div className='text-center'>
            <h1 className='font-bold text-3xl mb-10'>Job Category List</h1>
           <p className='mb-10'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>

           <main className='grid grid-cols-1 sm:grid-cols-4 gap-10'>
            {data && data.map((item)=>{
                return <Category key={item.id} data={item}/>
                     
            })}
            </main>
        </section>
    );
};

export default Categories;