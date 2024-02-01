import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { CiPizza } from "react-icons/ci";


const Pizza = (props) => {
  return (


    <Card style={{ width: '18rem', marginTop: '50px'}} className='shadow p-1 bg-body-tertiary rounded'>
    <Card.Img variant="top" src="/images/pizza.jpg" />
    <Card.Body className='d-flex flex-column align-items-center'>
      <Card.Title> {props.lapizza.name}  </Card.Title>
      
      <Button variant="dark" className='d-flex flex-row pe-3'> <CiPizza className='me-2 mt-1' /> Commander </Button>
    </Card.Body>
  </Card>

  );
};

export default Pizza;