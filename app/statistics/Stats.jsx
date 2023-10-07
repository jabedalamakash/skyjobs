

const Stats = () => {
    return (
        <section className='flex flex-col sm:justify-between gap-5  sm:flex-row'>

            <div className='w-full sm:w-1/3 text-white bg-slate-800 rounded shadow-lg px-14 py-8'>
                <p className='mb-5'>Total Likes</p>
                <h1 className='font-bold text-5xl text-purple-700 mb-5'>25.6K</h1>
                <p className='mb-5'>21% more than last month</p>
                <progress className=' w-56' value={21} max={100}/>
            </div>


            <div className='w-full sm:w-1/3 text-white bg-slate-800 rounded shadow-lg px-14 py-5'>
                <p className='mb-5'>Page Views</p>
                <p  className='font-bold text-5xl mb-5 text-pink-700'>2.6M</p>
                <p  className='mb-5'>43% more than last month</p>
                <progress className='  w-56' value={43} max={100}/>
            </div>
            <div className='w-full sm:w-1/3 text-white bg-slate-800 rounded shadow-lg px-14 py-5'>
            <div className="radial-progress bg-purple-800 text-white mb-2 " style={{"--value": "86"}}>86%</div>
            <p className='mb-5'>Tasks done</p>
            <p className='mb-5'>31 tasks remaining</p>
            <progress className='  w-56' value={31} max={100}/>
            
            </div>

            
            
        </section>
    );
};

export default Stats;


{/* <progress className="progress w-56" value={0} max="100"></progress>
<progress className="progress w-56" value="10" max="100"></progress>
<progress className="progress w-56" value="40" max="100"></progress>
<progress className="progress w-56" value="70" max="100"></progress>
<progress className="progress w-56" value="100" max="100"></progress> */}


{/* <progress className="progress progress-error w-56" value={0} max="100"></progress>
<progress className="progress progress-error w-56" value="10" max="100"></progress>
<progress className="progress progress-error w-56" value="40" max="100"></progress>
<progress className="progress progress-error w-56" value="70" max="100"></progress> */}
