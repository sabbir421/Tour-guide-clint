import axios from 'axios';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
const confirm = Modal.confirm;
const SingleOrder = ({booking,bookingLength}) => {

    console.log("Booking Length",bookingLength);

    function showDeleteConfirm(id) {
        confirm({
          title: 'Are you sure delete Booking Order?',
          content: 'Please Booking Another Tour',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            deletePost(id)
            
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }

  
      const deletePost=(id)=> {
        axios.delete(`https://tour-guide-serve.herokuapp.com/bookingorder/delete/${id}/`)  
          .then(res => {  
            console.log(res);  
            console.log(res.data);  
        
          
          })  
        }
    return (
        <div className='col-md-4 p-2 shadow-2'>
          
            <Card style={{ width: '18rem' }}>
                   
                   <Card.Body>
                       <Card.Title>Tour Place{booking.placeName} </Card.Title>
                       <Card.Text>
                       <p>Tourist Name: {booking.name}</p>
                       <p>Tour Amount:{booking.amount}</p>
                       <p>Tourist Email :{booking.userEmail}</p>
                       <p>From {booking.from} to {booking.placeName}</p>
                       </Card.Text>
                       <Button onClick={()=>showDeleteConfirm(booking._id)} type="dashed">
      Delete Booking
    </Button>
                       {/* <Button variant="primary" onClick={()=>showDeleteConfirm(booking._id)}>Remove Booking</Button> */}
                   </Card.Body>
                   </Card>
        </div>
    );
};

export default SingleOrder;