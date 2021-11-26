import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Servicee/Service';

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const Services = () => {
    const [services,setServices]=useState([])
    const [loading,setLoading]=useState(true)
    let [color, ] = useState("#ffffff");
    useEffect(()=>{
        fetch('https://tour-guide-serve.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
            setLoading(false)
        })
    },[]);

    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

    return (
        
      
        <div id='services'>
             <h1  className='d-flex justify-content-center text-primary my-3'>Services</h1>
{  loading ? <div className='d-flex justify-content-center my-5'>

<ClipLoader color={color} loading={loading} css={override} size={150} />

</div>    
 :<Row xs={1} md={2} className="g-4">  

     {
        services.map(service=> <Service service={service}></Service>)
    }
   
</Row>}

        </div>
    );
};

export default Services;