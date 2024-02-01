import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { MdMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "80px" }}>
        <Row>
          <Col md={6}>
            <h1 class="mb-4 ">Pizza Delicious</h1>
            <h3 class="mb-3">Notre adresse : </h3>
            <p> 103, Rue des Olives noires</p>
            <p class="mb-4">75021 Paris</p>
            <p class="fs-5 mb-5 mt-2">
              
              POUR VOTRE INFORMATION ! Nous offrons un service traiteur complet
              pour tout événement, grand ou petit. Nous comprenons vos besoins
              et nous préparerons nos plats pour satisfaire les critères les
              plus importants, à la fois esthétiques et gustatifs..
            </p>

            <Table striped bordered hover >
              <thead >
                <tr>
                  <th class="bg-warning text-center fs-5" colSpan={4}>-- Nos Coordonnées --</th>
                </tr>
              </thead>
              
              <tbody class="text-center">
                <tr>
                  <td><FiPhoneCall /></td>
                  <td>Téléphone</td>
                  <td>01 23 45 67 89</td>
                  
                </tr>
                <tr>
                  <td><ImMobile /></td>
                  <td>Portable</td>
                  <td>01 98 76 54 32</td>
                  
                </tr>
                <tr>
                  <td><MdMailOutline /></td>
                  <td>Email</td>
                  <td>contact@pizza-delicious.com</td>
                  
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col md={6}>
            <img src="/images/pizza3.jpg" class="w-75 h-100 ms-5" alt="image d'une pizza" fluid />
          
          </Col>  


        </Row>
      </Container>
    </>
  );
};

export default Contact;
