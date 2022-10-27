import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RightSideCom from '../Home/RightSideCom';
import SingleCard from './SingleCard';
import "./style.css"


const Courses = () => {


    const [signData, setSignData] = useState([]);

    useEffect(() => {
        fetch('https://assignment10-server-bipul-hossein.vercel.app/courses')
            .then(res => res.json())
            .then(data => setSignData(data));
    }, [])

    const navigate = useNavigate()
    const handleToId = (props) => {
        navigate(`/course/${props}`)
    }

    return (
        <div id='container' >
            
            <div id="backgrond">
                <div className='grid md:grid-cols-3 gap-4 pt-8'>
                    {
                        signData.map(everyData => <SingleCard key={everyData.id}
                            info={everyData}
                            handleData={handleToId}></SingleCard>)
                    }

                </div>
               

            </div>
            <div id="bgColor">
            <RightSideCom ></RightSideCom>
            </div>
        </div>
    );
};

export default Courses;