import React, { useEffect, useState } from 'react';



const RightSideCom = ({data}) => {


    const [signData, setSignData] = useState([]);

    useEffect( () =>{
        fetch('https://assignment10-server-bipul-hossein.vercel.app/products')
        .then( res => res.json())
        .then(data => setSignData(data));
    }, [])

 

    return (
        <div>
              <h1>right side data{signData.length}</h1>
            {
                signData.map(d=><p key={d.id}>{d.title}
                
                    {/* <Link to={`/category/${signData.id}`}>{signData.title}</Link> */}
                </p>)
            }
          
        </div>
    );
};

export default RightSideCom;