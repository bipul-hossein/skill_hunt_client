import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../../shareFile/Courses';

const Course = () => {

    const singleCourse = useLoaderData()
    console.log(singleCourse)

  
    return (
        <div>   
            <Courses></Courses>
        </div>
    );
};

export default Course;