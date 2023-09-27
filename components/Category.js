import Image from 'next/image';
import React from 'react';

const Category = ({data}) => {
    return (
        <>
        <div className=''>
            <Image
            src={data.categorylogo}
            height={100}
            width={100}
            alt={data.categoryname}
            className=''/>
            <h3>{data.categoryname}</h3>
            <p>{data.jobs}</p>

        </div>
            
        </>
    );
};

export default Category;