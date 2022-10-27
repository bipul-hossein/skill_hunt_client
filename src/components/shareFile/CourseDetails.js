import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaDownload } from "react-icons/fa"
import ReactToPdf from "react-to-pdf";
import "../shareFile/style.css"


const ref = React.createRef();


const CourseDetails = ({ info }) => {
    const data = useLoaderData()
    console.log(info)
    const navigate = useNavigate()
    const handleContentDetails = (props) => {
        console.log(props)
        navigate(`/course/${props}/details`)
    }
    return (
        <div id="backgrond" className='flex justify-center my-5'>
            <div className='w-3/5'>
                <div className='flex justify-end items-center text-2xl'>
                    <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                        {({ toPdf }) => (
                            <button onClick={toPdf}><FaDownload className='bg-slate-200 my-4 text-3xl ml-2' /></button>
                        )}
                    </ReactToPdf>
                </div>
                <div ref={ref}>
                    <figure ><img src={data.image} alt="Shoes" /></figure>
                    <h2 className="card-title my-3">{data.title}</h2>
                    <p><span className='text-xl'>Detail: </span>{data.description}</p>
                    <p className='mt-4'><span className='text-xl'>What will you learn from this course?</span><br />{data.details}</p>
                    <p className='mt-2'><span className='text-xl'>Category:</span>{data.category}</p>
                    <div className='flex justify-end pb-5'>
                    <button onClick={() => handleContentDetails(data.id)} className='btn btn-active  btn-primary mt-3'>Get premium access</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;



