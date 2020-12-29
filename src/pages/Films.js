import React from 'react';
import { Container, Row, Col, Card, Image } from "react-bootstrap";

function Films() {
  return (
    <div className="Films">
            <Container className="FilmsContent">
                <Row>
                    <Col>
                        <h1 className="pageTitle">
                          My favorite films
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="pageIntro">These are my favorite films to watch on the tv. You should watch them too!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="gameCard">
                            <Row>
                                <Col sm={3} className="cardColumn">
                                    <Image className="cardImage" src="https://res.cloudinary.com/musicandcolour/image/upload/c_scale,w_254/v1608742303/ab_lrac0f.jpg" fluid />
                                </Col>
                                <Col>
                                    <Card.Body className="cardText">
                                        <Card.Title>
                                            <h4>Angry birds</h4>
                                        </Card.Title>
                                        <Card.Text className="gameDescription">
                                          <p>
                                            I like to watch this film because the birds are very funny. My favorite character is Chuck.
                                          </p>
                                          <p>
                                            In the film, the birds have to rescue the eggs that the pigs have stolen.
                                          </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="gameCard">
                            <Row>
                                <Col>
                                    <Card.Body className="cardText">
                                        <Card.Title>
                                            <h4>Harry Potter and the Goblet of Fire.</h4>
                                        </Card.Title>
                                        <Card.Text className="gameDescription">
                                          <p>
                                           I like this film because it's magic. My favorite character is Headwig.
                                          </p>
                                          <p>
                                            In this film, Harry competes in the triwizards cup, but the obsticles are very tricky.
                                          </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col sm={3} className="cardColumn">
                                    <Image className="cardImage" src="https://res.cloudinary.com/musicandcolour/image/upload/c_scale,w_254/v1608742515/hp_hn0sld.jpg" fluid />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="gameCard">
                            <Row>
                                <Col sm={3} className="cardColumn">
                                    <Image className="cardImage" src="https://res.cloudinary.com/musicandcolour/image/upload/c_scale,w_254/v1608742617/jaws_aasmx2.jpg" fluid />
                                </Col>
                                <Col>
                                    <Card.Body className="cardText">
                                        <Card.Title>
                                            <h4>JAWS</h4>
                                        </Card.Title>
                                        <Card.Text className="gameDescription">
                                          <p>
                                          JAWS is a horror movie about a shark. Its a great white shark and it eats people.
                                          </p>
                                          <p>
                                          I like this film because it's scary and I think the shark robot looks realy realistic.
                                          </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
    </div>
  );
}

export default Films;
