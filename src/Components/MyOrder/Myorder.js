import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import SingleOrder from './SingleOrder';

const Myorder = () => {
    const [MyBooking,setMyBooking]=useState([])
    console.log(MyBooking.length);
    const {user}=useAuth()
    useEffect(()=>{
        fetch('https://tour-guide-serve.herokuapp.com/bookingorder')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
             const myOrder= data.filter(d=>d.uid===user.uid);
            
             setMyBooking(myOrder)
            //  console.log(myOrder);
        })
    },[]);
    return (
        <div className='container'>
            <h1 className='text-center'>My Booking</h1>
          <div className="row">
              {/* {MyBooking.length ?<></>  :<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">There is no Booking Order</Alert>
     
    </Stack>} */}


          {
               MyBooking.map(booking=><SingleOrder  booking={booking} key={booking._id}></SingleOrder>)
            }
          </div>
        </div>
    );
};

export default Myorder;