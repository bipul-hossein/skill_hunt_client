import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
      
            <figure><img src={data.image} alt="Shoes" /></figure>
            <h1>header{data.category}</h1>
            <p>{data.description}</p>
            <p>{data.price}</p>
        </div>
    );
};

export default CourseDetails;