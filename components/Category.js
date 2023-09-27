import Image from 'next/image';
import React from 'react';

const Category = ({data}) => {
    return (
        <>
        <div className='bg-[#F9F9FF] p-10'>
            <Image
            src={data.categorylogo}
            height={100}
            width={100}
            alt={data.categoryname}
            className='w-20 h-20 p-5 bg-[#EFECFF] my-5'/>
            <h3 className='font-bold text-xl my-3'>{data.categoryname}</h3>
            <p>{data.jobs}</p>

        </div>
            
        </>
    );
};

export default Category;