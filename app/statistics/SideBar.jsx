import Link from 'next/link';
import React from 'react';

const SideBar = () => {
    return (
        <div>
            <aside className='flex h-[100%] w-60 bg-slate-900 text-white flex-col '>
                <div className='px-10  py-5  my-10  '>
                    <Link className=' text-purple-400 text-2xl font-bold ' href="/">Dashboard</Link>
                </div>
                <div className='flex-1  px-10 space-y-2   flex flex-col'>
                <Link href="/">Home</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Information</Link>
                <Link href="/">Guide</Link>

                </div>

                <div className='px-10  my-5 '>
                <h1 className=' border-t  '></h1>
                </div>

               
                
                <div className='flex flex-col px-10 py-5 mb-10 space-y-2 '>
                
                <Link href="/">Setting</Link>
                <Link href="/">Logout</Link>

                </div>




            </aside>
            
        </div>
    );
};

export default SideBar;