import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleCard from './SingleCard';



const Courses = () => {


    const [signData, setSignData] = useState([]);

    useEffect( () =>{
        fetch('https://assignment10-server-bipul-hossein.vercel.app/courses')
        .then( res => res.json())
        .then(data => setSignData(data));
    }, [])

    const navigate = useNavigate()
    const handleToId=(props)=>{
        navigate(`/course/${props}`)
    }

    return (
        <div className='grid grid-cols-3 gap-4'>
        {
            signData.map(everyData=><SingleCard key={everyData.id}
                 info={everyData}
                 handleData={handleToId}></SingleCard>)
        }

    </div>
    );
};

export default Courses;