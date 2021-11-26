import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://tour-guide-serve.herokuapp.com/services',data)
    .then(res=>{
        console.log(res.data);
        if (res.data.insertedId){
            alert("data adeded")
            reset()
        }
        console.log(res);
    });
  }
    return (
        <div>
            <h1 className='d-flex justify-content-center'>Add service</h1>
            <form className='d-flex ms-5 my-5' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;