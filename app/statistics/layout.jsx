import React from 'react';
import SideBar from './SideBar';

const layout = ({children}) => {
    return (
        <div className='sm:flex'>
            <SideBar/>
            <main className='w-full'>
            {children}  
            </main>

           
            
        </div>
    );
};

export default layout;