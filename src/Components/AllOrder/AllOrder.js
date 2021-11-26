import React, { useEffect, useState } from 'react';
import SingleOrder from '../MyOrder/SingleOrder';


const AllOrder = () => {
    const [allOrder,setAllOrder]=useState([])
    
    useEffect(()=>{
        fetch('https://tour-guide-serve.herokuapp.com/bookingorder')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
           
             setAllOrder(data)
            //  console.log(myOrder);
        })
    },[]);
    return (
        <div className='container'>
            <h1 className='text-center'>All Booking</h1>
          <div className="row">
          {
               allOrder.map(booking=><SingleOrder  booking={booking} key={booking._id}></SingleOrder>)
            }
          </div>
        </div>
    );
};

export default AllOrder;