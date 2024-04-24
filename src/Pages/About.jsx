import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";
import { Navbar, Hasil, ListMenu, Menus } from "../components";
import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import { API_URL } from "../utils/constants";
import axios from "axios";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("error ya", error);
        this.setState({ error: "SERVER DOWN" });
      });
  }

  render() {
    const { menus, error } = this.state;

    return (
      <>
        <Navbar />
        <DownloadApp />
        <div className="mt-2">
          <Container fluid>
            <Row className="mt-5">
              <Col className="mt-2 mb-5">
                <h4 className="text-center mt-4 fw-bold">Menu Kopili</h4>
                <hr />
                <Row className="justify-content-center">
                  <div className="text-center text-danger fw-bold">{error && <h1>{error}</h1>}</div>
                  {menus &&
                    menus.map((menu) => (
                      <>
                        <Menus key={menu.id} menu={menu} />
                        <br />
                      </>
                    ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer className="footer" />
      </>
    );
  }
}
