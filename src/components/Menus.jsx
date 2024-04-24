import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu }) => {
  return (
    <Col md={3} sm={6} className="mb-4">
      <Card className="border-warning border-2 shadow text-center">
        <Card.Img variant="top" src={"assets/images/" + menu.category.nama.toLowerCase() + "/" + menu.gambar} style={{ objectFit: "cover", height: "200px" }} />
        <Card.Body>
          <Card.Title className="fs-6">{menu.nama}</Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
