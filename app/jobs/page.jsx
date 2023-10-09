import BgBanner from '@/components/BgBanner';
import Jobs from '@/components/Jobs';
import React from 'react';

const page = () => {
    return (
        <div>
            <BgBanner title="All Jobs"/>
            <Jobs/>
        </div>
    );
};

export default page;