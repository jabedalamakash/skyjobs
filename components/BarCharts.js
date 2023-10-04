"use client"
import React from 'react';
import
{ResponsiveContainer,Bar,BarChart,Legend,CartesianGrid,XAxis,YAxis,Tooltip,LineChart,Line,PieChart,Pie,AreaChart,Area}
from 'recharts' ;

const BarCharts= () => {

const runPerOver=[
    {"over":1,"Ban":13,"Eng":9},
    {"over":2,"Ban":18,"Eng":22},
    {"over":3,"Ban":23,"Eng":36},
    {"over":4,"Ban":26,"Eng":51},
    {"over":5,"Ban":26,"Eng":55},
    {"over":6,"Ban":32,"Eng":58},
    {"over":7,"Ban":36,"Eng":66},
    {"over":8,"Ban":45,"Eng":74},
    {"over":9,"Ban":45,"Eng":90},
    {"over":10,"Ban":47,"Eng":100}
]


const run=[
    {"player":"Tamim","score":45},
    {"player":"Miraz","score":74},
    {"player":"Mahmudullah","score":18},
    {"player":"Taskin","score":12}
]





    return (
        <>
            <main className='bg-slate-950 p-10'>
            <h1 className='text-center text-white font-bold my-10 text-3xl'>Bangladesh Vs England Statistics</h1>

            <section className='flex gap-5  mb-20'>
            {/* items-center */}

            <div className=' w-[70%] bg-slate-400 mx-auto p-10'>
            <h1 className='text-center text-slate-900  font-bold mb-10 text-xl'>RUNS PER OVER</h1>
            <ResponsiveContainer width="100%" height="100%" aspect={2}>
            <BarChart width={730} height={250} data={runPerOver}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="over" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Ban" fill="#269373" />
            <Bar dataKey="Eng" fill="#2B4674" />
            </BarChart>
            </ResponsiveContainer>
            </div>

            <div className='w-[30%]  mx-auto p-10 bg-slate-400'>
            <h1 className='text-center text-slate-900 mb-20 font-bold  text-xl'>Team Contributon</h1>

            <div className=''>

            <ResponsiveContainer aspect={1}>
            <PieChart width={500} height={500}>
            <Pie data={run} dataKey="score" nameKey="player" cx="50%" cy="50%" outerRadius={85} innerRadius={60} fill="#269373" label/>
            <Tooltip />
            </PieChart>
            </ResponsiveContainer>
            </div>
            </div>

            </section>



        <section className='flex gap-5  mb-20'>


        <div  className='w-1/2 bg-slate-400' >
            <h1 className='text-center font-bold my-10 text-slate-900 text-xl'>RUN RATE GRAPH</h1>
            <ResponsiveContainer width="100%" height="100%" aspect={2}>
            <LineChart width={730} height={250} data={runPerOver}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Ban" stroke="#269373" />
            <Line type="monotone" dataKey="Eng" stroke="#2B4674" />
            </LineChart>
            </ResponsiveContainer>
            </div>

            <div className='w-1/2 bg-slate-400'>
            <h1 className='text-center font-bold text-slate-900 text-xl my-10'>RUNS</h1>
            <ResponsiveContainer width="100%" height="100%" aspect={2}>
            <AreaChart
            width={730}
            height={250}
            data={runPerOver}
            margin={{
                top: 20, right: 20, bottom: 20, left: 20,
            }}
            >
            <XAxis dataKey="day" />
            <YAxis />
            <Area dataKey="Ban" stroke="#269373" fill="#008000" />
            <Area dataKey="Eng" stroke="#2B4674" fill="#0F52BA" />
            <Tooltip />
            </AreaChart>
            </ResponsiveContainer>

            </div>

        </section>

        </main>






        </>
    );
};

export default BarCharts;