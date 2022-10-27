import React from 'react';

const SingleCard = ({ info, handleData }) => {


    return (
        <div onClick={() => handleData(info.id)} className="card card-compact w-auto bg-base-100 shadow-xl cursor-pointer">
            <figure><img src={info.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{info.title}</h2>
                <p>{info.description ? info.description.slice(0, 79) : info.description}...More Details</p>
            </div>
        </div>
    );
};

export default SingleCard;