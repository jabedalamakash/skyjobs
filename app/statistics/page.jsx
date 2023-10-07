 "use client"
import BarCharts from '@/components/BarCharts';
import Stats from './Stats';

const page = () => {
    return (
        <section className='bg-slate-950 p-5 sm:p-10 '>
            <Stats/>
            <BarCharts/>
        </section>
    );
};

export default page;