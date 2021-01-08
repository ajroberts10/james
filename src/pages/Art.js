import React from "react";
import Gallery from "react-photo-gallery";
import { Container, Row, Col } from "react-bootstrap";
import { useFetch } from "../hooks";

function Photos() {
    const [data, loading] = useFetch(
        "https://res.cloudinary.com/musicandcolour/image/list/drawings.json"
    );

    return (
        <div className="Art">
            <Container className="ArtContent">
                <Row>
                    <Col>
                        <h1 className="pageTitle">Drawings I have done at home.</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="pageIntro">
                            I like drawing because I get to colour it in. I like to draw Star Wars pictures.
                        </p>
                        <p>
                          Take a look at some of my drawings!
                        </p>
                    </Col>
                </Row>
                {loading ? (
                    "Loading..."
                ) : (
                    <Gallery photos={data} direction={"column"} margin={8} />
                )}
            </Container>
        </div>
    );
}
export default Photos;
