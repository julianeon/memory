import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Pica = styled.div`
background-color: gray;
text-align: center;
margin-top: 1vh;
margin-bottom: 1vh;
`

const Ccard = (props) => {
    return (
        <Pica style={{backgroundColor: props.color}}>{props.text}</Pica>
    )
}

function App() {
  return (
      <div className="App">
        <Container>
          <Row>
            <Col><Ccard text={"pig"} color={"pink"}/></Col>
            <Col><Ccard text={"dog"} color={"brown"}/></Col>
            <Col><Ccard text={"frog"} color={"chartreuse"}/></Col>          
          </Row>
          <Row>
            <Col><Ccard text={"frog"} color={"chartreuse"}/></Col>                      
            <Col><Ccard text={"cat"} color={"orange"}/></Col>
            <Col><Ccard text={"dog"} color={"brown"}/></Col>            
        </Row>
          <Row>
            <Col><Ccard text={"free"} color={"yellow"}/></Col>
            <Col><Ccard text={"pig"} color={"pink"}/></Col>
            <Col><Ccard text={"cat"} color={"orange"}/></Col>            
        </Row>
      </Container>
      </div>
  );
}

export default App;





















