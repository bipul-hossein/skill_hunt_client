import "./Home.css"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const RightSideCom = ({data}) => {


    const [signData, setSignData] = useState([]);

    useEffect( () =>{
        fetch('https://assignment10-server-bipul-hossein.vercel.app/courses')
        .then( res => res.json())
        .then(data => setSignData(data));
    }, [])

 

    return (
        <div className='ml-4 pb-4'>
              <h1 className='text-3xl'>Our all Course</h1>
                <div id="sideCourseContainer" className=''>
                {
                signData.map(signData=><Link id="sideCourse" className='block text-xl' key={signData.id} to={`/course/${signData.id}`}>{signData.title}</Link>)
 
            }
                </div>
          
        </div>
    );
};

export default RightSideCom;