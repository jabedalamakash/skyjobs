import React from 'react';
import SideBar from './SideBar';

const layout = ({children}) => {
    return (
        <div className='flex'>
            
            <SideBar/>
            <main className='w-full px-5 sm:px-0'>
            {/* w-full sm:w-[80%]  mx-auto px-5 sm:px-5 */}
            {children}  
            </main>

           
            
        </div>
    );
};

export default layout;