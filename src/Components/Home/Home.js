import React from 'react';

import Navigation from '../Navigation/Navigation';
import Table from '../Table/Table';

const Home = () => {
   


    return (
        <div className=' bg-slate-600 py-10 h-screen overflow-y-auto  '>
            <div className=' container mx-auto'>
                <Navigation />
              
                    <Table />

            </div>
        </div>
    );
};

export default Home;