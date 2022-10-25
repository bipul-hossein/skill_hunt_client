import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from './SingleCard';


const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                data.map(everyData=><SingleCard key={everyData.id} info={everyData}></SingleCard>)
            }

        </div>
    );
};

export default Home;