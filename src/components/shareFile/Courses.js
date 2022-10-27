import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleCard from './SingleCard';
import "./style.css"


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
        <div id="backgrond" className='grid md:grid-cols-3 gap-4 pt-8'>
        {
            signData.map(everyData=><SingleCard key={everyData.id}
                 info={everyData}
                 handleData={handleToId}></SingleCard>)
        }

    </div>
    );
};

export default Courses;