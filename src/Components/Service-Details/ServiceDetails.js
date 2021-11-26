import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';


const ServiceDetails = () => {
  const {user}=useAuth()
  console.log(user);
  const [details,setDetails]=useState({});
  const {id} = useParams();
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{ 
    data.amount= details.price;
    data.placeName= details.name
    data.uid=user.uid;
    data.serviceId=id;
    data.userEmail=user.email;
    console.log(data)

    axios.post('https://tour-guide-serve.herokuapp.com/bookingorder',data)
    .then(res=>{
        if (res.data.insertedId){
            alert("data adeded")
            reset()
        }
        console.log(res);
    });

  };
    
    


    // const sid = parseInt(id);
 
    useEffect(()=>{
        fetch('https://tour-guide-serve.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>{
            const info=data.find(dt=>dt._id===id)
            console.log(info);
            console.log(id);
            setDetails(info)
          })
    },[])
   
   
    return (
        <div className='d-flex justify-content-center '>
            
            <Card className='border-0 shadow-xl' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={details.img} />
  <Card.Body>
    <Card.Title>{details.name}</Card.Title>
    <Card.Text>
      {details.description}
     
    </Card.Text>
    <Card.Text>
     <h3>price:  {details.price} </h3>
     
    </Card.Text>
    
  </Card.Body>
</Card>


           
<form className ='ms-5' onSubmit={handleSubmit(onSubmit)}>
      <input className='px-5' {...register("name")} placeholder='enter your name'/>
      <br />
      <input className='px-5'  {...register("phone")} placeholder='phone' />
      <br />
      <input className='px-5'  {...register("from")} placeholder='your address'/>
      <br />
      
      
      <input className ='bg-primary border-0 rounded shadow p-2 w-100 mt-2' type="submit" />
    </form>    
          
          
           
        </div>
    );
};

export default ServiceDetails;