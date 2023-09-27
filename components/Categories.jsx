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

    console.log(data);
    return (
        <div>
            {/* {data.categoryname} */}
            {data && data.map((item)=>{
                return <Category key={item.id} data={item}/>
            })}
            
        </div>
    );
};

export default Categories;