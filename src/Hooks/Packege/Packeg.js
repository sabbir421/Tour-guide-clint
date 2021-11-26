import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Packeg = ({packeg}) => {
    const{name,img,discription}=packeg;
    return (
        <div>
         <Col>
      <Card>
        <Card.Img variant="top" src={img} height='250px' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {discription}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        
        </div>
    );
};

export default Packeg;