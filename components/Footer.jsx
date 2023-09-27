import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <section className='w-full bg-[#191919]'>

            <main className='w-full sm:w-[80%] py-32 mx-auto px-5 sm:px-5'>

                <footer className='flex flex-col sm:flex-row justify-between gap-10 text-white '>


                <div className='sm:w-1/4'>
                <h1  className='mb-5 font-bold text-3xl'>SkyJobs</h1>
                <p className='mb-5' >There are many variations of passages of Lorem Ipsum ,but the majority have suffered alteration in some form.</p>
                <div>
                <Link href="https://www.linkedin.com/in/jabedalamakash/">
                    <Image
                    src={"/social/socialsite.png"}
                    height={100}
                    width={100}
                    alt='socail'
                    className='w-32'/>
                </Link>
                </div>

                    

                </div>

                <div className=''>
                    <h6 className='mb-5 font-bold'>Company</h6>
                    <p> <Link href="/" className='mb-2'>About Us</Link></p>
                    <p><Link href="/" className='mb-2'>Work</Link></p>
                    <p><Link href="/" className='mb-2'>Latest News</Link></p>
                    <p> <Link href="/" className=''>Careers</Link></p>
                   

                </div>
                <div className=''>
                    <h6 className='mb-5 font-bold'>Product</h6>
                    <p><Link href="/" className='mb-2'>Prototype</Link></p>
                    <p><Link href="/" className='mb-2'>Plans & Pricing</Link></p>
                    <p> <Link href="/" className='mb-2'>Customers</Link></p>
                    <p><Link href="/" className=''>Integrations</Link></p>                
                </div>

                <div className=''>
                <h6 className='mb-5 font-bold'>Support</h6>
                <p> <Link href="/" className='mb-2'>Help Desk</Link></p>
                <p> <Link href="/" className='mb-2'>Sales</Link></p>
                <p> <Link href="/" className='mb-2'>Become a partner</Link></p>
                <p><Link href="/" className=''>Developers</Link></p>
                </div>

                <div className=''>
                    <h6 className='mb-5 font-bold '>Contact</h6>
                    <p>  <Link href="/" className='mb-2'>524 Broadway , NYC</Link></p>
                    <p><Link href="/" className='mb-2'>+1 777 - 978 - 5570</Link></p>
                    <p> <Link href="mailto:someone@example.com" className=''>theskycompany00@gmail.com</Link></p>
                    
                   


                </div>

                </footer>
                
                <hr className='my-10'/>
                <div className='flex justify-between text-white'>
                    <p>@2023 SkyJobs. All Rights Reserved</p>
                    <p className=''>Powered By <Link href="https://www.linkedin.com/in/jabedalamakash/" className='font-bold text-xl text-blue-600'>The Sky Company</Link></p>
                </div>

            </main>
            
        </section>
    );
};

export default  Footer;