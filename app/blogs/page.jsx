import Articles from '@/components/Articles';
import BgBanner from '@/components/BgBanner';
import React from 'react';

const page = () => {
    return (
        <section>
            <BgBanner title="Blogs"/>
            
         <main className='w-full sm:w-[80%] mx-auto px-5 my-20 sm:px-5'>

            <Articles/>
            </main>
        </section>
    );
};

export default page;