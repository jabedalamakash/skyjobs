import React from 'react';

const Btn = ({name}) => {
    return (
        <div className=''>
        <button className='px-4 py-3 rounded-xl text-white font-bold bg-gradient-to-r from-indigo-400 to-purple-400'>{name}</button>
        </div>
    );
};

export default Btn;
// bg-gradient-to-r from-cyan-500 to-blue-500
// bg-gradient-to-r from-indigo-400 to-purple-400