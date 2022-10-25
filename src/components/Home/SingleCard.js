import React from 'react';

const SingleCard = ({ info }) => {
    return (
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure><img src={info.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{info.title}</h2>
                <p>{info.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;