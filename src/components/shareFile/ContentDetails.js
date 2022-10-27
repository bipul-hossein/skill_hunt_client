import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ContentDetails = () => {
    const data= useLoaderData()
console.log(data)


    return (
        <div className='flex justify-center my-5'>
        <div className='w-3/5'>
    
            <div>
                <figure><img src={data.image} alt="Shoes" /></figure>
                <h2 className="card-title my-3">{data.title}</h2>
                <p><span className='text-xl'>Detail: </span>{data.description}</p>
                <p><span className='text-xl'>Price:</span>{data.price}</p>
                <button className='btn btn-active btn-ghost mt-3'>Buy Course</button>
            </div>
        </div>
    </div>
    );
};

export default ContentDetails;