import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

function Games() {
    return (
        <div className="Games">
            <Container className="GamesContent">
                <Row>
                    <Col>
                        <h1 className="pageTitle">
                          My favorite games
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="pageIntro">These games are my favorite to play on the Nintendo switch</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="gameCard">
                            <Row>
                                <Col sm={3} className="cardColumn">
                                    <Image className="cardImage" src="https://res.cloudinary.com/musicandcolour/image/upload/c_fill,h_300,w_300/v1602868018/Minecraft-xbox-one_qthvzg.jpg" fluid />
                                </Col>
                                <Col>
                                    <Card.Body className="cardText">
                                        <Card.Title>
                                            <h4>MINECRAFT</h4>
                                        </Card.Title>
                                        <Card.Text className="gameDescription minecraft">
                                          <p>
                                            My favorite game to play is Minecraft. The aim of the game is to build as many buildings as you can. Watch out for zombies, they can kill you!
                                          </p>
                                          <p>
                                            Click this button for more information
                                          </p>
                                        </Card.Text>

                                        <Button target="_blank" href="https://www.minecraft.net/en-us">minecraft.net</Button>
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
                                            <h4>Lego Harry Potter</h4>
                                        </Card.Title>
                                        <Card.Text className="gameDescription">
                                          <p>
                                           Another of my favorite games to play is Lego Harry Potter. The aim of the game is to defeat Voldemort.
                                          </p>
                                          <p>
                                            Click this button for more information
                                          </p>
                                        </Card.Text>

                                        <Button target="_blank" href="https://www.nintendo.com/games/detail/lego-harry-potter-collection-switch/">Nintendo.com</Button>
                                    </Card.Body>
                                </Col>
                                <Col sm={3} className="cardColumn">
                                    <Image className="cardImage" src="https://res.cloudinary.com/musicandcolour/image/upload/c_scale,h_300,w_300/v1602869211/lego-harry-potter-years-1-4-cover_rdlzxm.jpg" fluid />
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
                                    <Image className="cardImage" src="https://res.cloudinary.com/musicandcolour/image/upload/c_scale,w_300/v1603207885/mario_adjgze.jpg" fluid />
                                </Col>
                                <Col>
                                    <Card.Body className="cardText">
                                        <Card.Title>
                                            <h4>Mario kart 8 deluxe</h4>
                                        </Card.Title>
                                        <Card.Text className="gameDescription">
                                          <p>
                                            My final favorite game to play is Mario kart 8. Enjoy racing online with your friends.
                                          </p>
                                          <p>
                                            Click this button for more information
                                          </p>
                                        </Card.Text>

                                        <Button target="_blank" href="https://www.nintendo.com/games/detail/mario-kart-8-deluxe-switch/">Nintendo.com</Button>
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

export default Games;
