"use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Btn from '@/uicomponents/Btn';

const Nav = () => {
    const pathname = usePathname();

    return (
        <section className='bg-[#F9F9FF] '>
        <div className="navbar  p-10 w-full sm:w-[80%] mx-auto px-5 sm:px-0">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-30 p-2 shadow-2xl bg-violet-400 text-white  rounded-box w-52">
        <li><Link 
        className={`link ${pathname === '/' ? ' text-[#808EFE] bg-white ' : 'text-white'} no-underline `} href="/">Home</Link></li>
        <li><Link
        className={`link ${pathname === '/jobs' ? ' text-[#808EFE] bg-white ' : 'text-white'} no-underline `} href="/jobs">Jobs</Link></li>
        <li><Link
        className={`link ${pathname === '/applied' ? ' text-[#808EFE] bg-white ' :'text-white'} no-underline `} href="/applied">Applied Jobs</Link></li>
         <li> <Link
        className={`link ${pathname === '/statistics' ? ' text-[#808EFE] bg-white ' : 'text-white'} no-underline `} href="/statistics">Statistics</Link></li>

        <li><Link
        className={`link ${pathname === '/blogs' ? ' text-[#808EFE] bg-white ' : 'text-white'} no-underline `} href="/blogs">Blogs</Link></li>


      </ul>
    </div>
    <Link  href="/" className="btn btn-ghost normal-case text-3xl text-black font-bold">SkyJobs</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-1">
    <li><Link 
        className={`  link ${pathname === '/' ? 'active text-[#808EFE] font-bold ' : ''} no-underline text-gray-600`} href="/">Home</Link></li>
        <li><Link
        className={`  link ${pathname === '/jobs' ? 'active text-[#808EFE] font-bold ' : ''} no-underline text-gray-600`} href="/jobs">Jobs</Link></li>
        <li><Link
        className={` link ${pathname === '/applied' ? 'active text-[#808EFE] font-bold ' :''} no-underline text-gray-600`} href="/applied">Applied Jobs</Link></li>
         <li> <Link
        className={` link ${pathname === '/statistics' ? 'active text-[#808EFE] font-bold ' : ''} no-underline text-gray-600`} href="/statistics">Statistics</Link></li>
        <li>        <Link
        className={` link ${pathname === '/blogs' ? 'active text-[#808EFE] font-bold ' : ''} no-underline text-gray-600`} href="/blogs">Blogs</Link></li>


    </ul>
  </div>
  <div className="navbar-end">
   
      
      <Btn name="Start Applying"/>
    
    
    {/* <a className="btn">Button</a> */}
  </div>
</div>

            
        </section>
    );
};

export default Nav;








{/* <nav>
            
<Link 
className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
<Link
className={`link ${pathname === '/about' ? 'active' : ''}`} href="/jobs">Jobs</Link>

<Link
className={`link ${pathname === '/about' ? 'active' :''}`} href="/applied">Applied Jobs</Link>
<Link
className={`link ${pathname === '/about' ? 'active' : ''}`} href="/statistics">Statistics</Link>
<Link
className={`link ${pathname === '/about' ? 'active' : ''}`} href="/blogs">Blogs</Link>

</nav> */}