import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { CiPizza } from "react-icons/ci";

const Pizza = (props) => {
  const [taille, setTaille] = useState("small");
  const [quantite, setQuantite] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-center">
      <Card
        style={{ width: "18rem", marginTop: "50px" }}
        className="shadow p-1 bg-body-tertiary rounded"
      >
        <Card.Img variant="top" className="rounded" src={props.lapizza.image} />
        <Card.Body className="d-flex flex-column align-items-center mb-2">
          <Card.Title className="mt-2 "> {props.lapizza.name} </Card.Title>
          <Card.Text className="mt-3">
            <Row>
              <Col md={6} className="d-flex flex-row">
                <h6>
                  Taille :
                  <select
                    name=""
                    id=""
                    className="form-select mt-2"
                    value={taille}
                    onChange={(e) => setTaille(e.target.value)}
                  >
                    {props.lapizza.varients.map((taille) => (
                      <option value={taille}>{taille}</option>
                    ))}
                  </select>
                </h6>
              </Col>
              <Col md={6} className="d-flex flex-row">
                <h6>
                  Quantité :
                  <select
                    name=""
                    id=""
                    className="form-select mt-2"
                    value={quantite}
                    onChange={(e) => setQuantite(e.target.value)}
                  >
                    {[...Array(10).keys()].map((v, i) => (
                      <option value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </h6>
              </Col>
            </Row>
          </Card.Text>

          <Button
            variant="dark"
            className="d-flex flex-row pe-3 mt-2"
            onClick={handleShow}
          >
            {" "}
            <CiPizza className="me-2 mt-1 shadow" /> Ajouter{" "}
            <span className="ms-4">
              {props.lapizza.prices[0][taille] * quantite} €
            </span>{" "}
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="d-flex text-center" closeButton>
              <Modal.Title >
                {" "}
                Notre pizza {props.lapizza.name} !
              </Modal.Title>
            </Modal.Header>

            <img
              variant="top"
              className="w-100 "
              src={props.lapizza.image}
              fluid
            />

            <Modal.Body className="fs-5">
              {" "}
              {props.lapizza.description}
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fermer
              </Button>

              <Button variant="dark" onClick={handleClose}>
                Confirmer la commande
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Pizza;
