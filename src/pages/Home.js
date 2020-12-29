import React from 'react';
import logo from '../logo.svg';
import avatar from '../myAvatar.svg'
import { Container, Row, Col} from 'react-bootstrap';

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);

const age = getAge('2013-06-04');

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Container fluid className="homeContent">
        <Row>
          <Col><h1>hello my name is James</h1></Col>
        </Row>
        <Row>
          <Col><img src={avatar} className="avatar" alt="avatar" /></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <table className="factfile">
              <tr>
                <td>Age:</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td>School:</td>
                <td>Oldfield Brow Primary School</td>
              </tr>
              <tr>
                <td>Favorite Food:</td>
                <td>PIZZA <img src={logo} className="App-logo" alt="avatar" /></td>
              </tr>
              <tr>
                <td>Favorite Football Team:</td>
                <td>Liverpool</td>
              </tr>
              <tr>
                <td>Favorite Band:</td>
                <td>Foals</td>
              </tr>
            </table>
          </Col>
        </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
